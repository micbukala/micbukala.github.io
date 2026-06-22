"""
Fetches citation count and h-index for the author from the Scopus Author
Retrieval API and patches src/data/publications.json in-place.

Requires the SCOPUS_API_KEY environment variable to be set.

Exit codes:
  0  — updated successfully (or no change needed)
  1  — API error / unexpected response structure
"""

import json
import os
import sys
from pathlib import Path

import urllib.request
import urllib.error

SCOPUS_AUTHOR_ID = "57189596785"
SCOPUS_API_URL = (
    f"https://api.elsevier.com/content/author/author_id/{SCOPUS_AUTHOR_ID}"
    "?field=citation-count,h-index"
)

JSON_PATH = Path(__file__).parent.parent / "src" / "data" / "publications.json"


def fetch_scopus_stats(api_key: str) -> tuple[int, int]:
    """Return (citation_count, h_index) from the Scopus API."""
    request = urllib.request.Request(
        SCOPUS_API_URL,
        headers={
            "X-ELS-APIKey": api_key,
            "Accept": "application/json",
        },
    )
    try:
        with urllib.request.urlopen(request, timeout=30) as response:
            raw = response.read().decode()
            data = json.loads(raw)
    except urllib.error.HTTPError as exc:
        body = exc.read().decode(errors="replace")
        print(f"ERROR: Scopus API returned HTTP {exc.code}: {exc.reason}", file=sys.stderr)
        print(f"Response body: {body}", file=sys.stderr)
        sys.exit(1)
    except urllib.error.URLError as exc:
        print(f"ERROR: Network error contacting Scopus API: {exc.reason}", file=sys.stderr)
        sys.exit(1)

    print(f"Raw API response: {json.dumps(data, indent=2)}")

    try:
        author = data["author-retrieval-response"][0]
        citations = int(author["coredata"]["citation-count"])
        h_index = int(author["h-index"])
    except (KeyError, IndexError, ValueError, TypeError) as exc:
        print(f"ERROR: Unexpected Scopus API response structure: {exc}", file=sys.stderr)
        sys.exit(1)

    return citations, h_index


def main() -> None:
    api_key = os.environ.get("SCOPUS_API_KEY", "").strip()
    if not api_key:
        print("ERROR: SCOPUS_API_KEY environment variable is not set.", file=sys.stderr)
        sys.exit(1)

    citations, h_index = fetch_scopus_stats(api_key)
    print(f"Scopus API response: citations={citations}, h-index={h_index}")

    with open(JSON_PATH, encoding="utf-8") as fh:
        data = json.load(fh)

    current_citations = data["stats"]["citations"]["scopus"]
    current_h_index = data["stats"]["h_index"]["scopus"]

    if citations == current_citations and h_index == current_h_index:
        print("No change — publications.json is already up to date.")
        return

    data["stats"]["citations"]["scopus"] = citations
    data["stats"]["h_index"]["scopus"] = h_index

    with open(JSON_PATH, "w", encoding="utf-8") as fh:
        json.dump(data, fh, ensure_ascii=False, indent=2)
        fh.write("\n")

    print(
        f"Updated publications.json: "
        f"citations {current_citations} → {citations}, "
        f"h-index {current_h_index} → {h_index}"
    )


if __name__ == "__main__":
    main()
