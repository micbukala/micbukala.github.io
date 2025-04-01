---
layout: about
# image: /assets/img/blog/MB2.jpg
description: >
  Michał Bukała, PhD
hide_description: true
redirect_from:
  - /download/
---

# About

<img src="/assets/img/blog/MB_new.png" alt="M" style="width: 420px; float: left; margin-right: 45px;"> 

<b> Michał Bukała, PhD</b> <br>

<span style="font-size: smaller;">[ENG: <i>Mee-how Boo-kah-lah</i>]</span> <br>

I really like mountains—they're big and rocky.<br><br>
Also, I am a geologist specializing in fluid-rock interactions and the deformation processes occurring in environments ranging from the deep Earth to the near surface. My approach integrates hands-on fieldwork, laboratory studies, and advanced numerical/thermodynamic modeling to uncover the intricate dynamics of our planet.
<br>


**Fieldwork Experience:** <br>
• 9+ years of experience across diverse terrains of Norway, Sweden, Svalbard, Greenland, Slovakia, Greece, and Spain.

**Research Contributions:** <br>
• Co-applicant and researcher in projects exceeding €2 million in funding.<br>
• Extensive experience as an editor, author, and peer reviewer for academic research papers.

**Technical Proficiency:** <br>
• Python and Matlab for scientific computing and data analysis.
<br><br>

---

<html lang="pl">
<head>
  <meta charset="UTF-8">
  <title>Projekty Naukowe</title>
  <style>
    :root {
      --accent-color: rgb(79,177,186);
    }

    body {
      background-color: #2a2d2f;
      color: #cccccc;
      font-family: Arial, sans-serif;
      font-size: 1rem;
      line-height: 1.75;
      padding: 20px;
    }

    .project {
      margin-bottom: 25px;
    }

    .project-title {
      cursor: pointer;
      color: #cccccc;
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 8px;
      font-weight: 900; /* heading weight */
      font-size: 1rem;
    }

    .project-title:hover {
      text-decoration: underline;
      text-decoration-color: var(--accent-color);
    }

    .icon {
      font-size: 18px;
      transition: transform 0.3s ease;
    }

    .icon.rotate {
      transform: rotate(45deg);
    }

    .project-pis {
      margin: 4px 0 10px 26px;
      font-weight: 400;
      color: #cccccc;
      font-size: 1rem;
    }

    .toggle-content {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.4s ease;
    margin-left: 26px;
    font-weight: 400;
    font-size: 1rem;
    background-color: #393d40; 
    padding: 2px;
    border-radius: 2px;
    }


    .toggle-content.show {
      max-height: 500px;
    }

    a {
      color: var(--accent-color);
      text-decoration: none;
    }

    a:hover {
      text-decoration: underline;
    }
  </style>
</head>
<body>

  <!-- Projekt 1 -->
  <div class="project">
    <div class="project-title" onclick="toggleDetails('p1')">
      <span id="icon-p1" class="icon">+</span>
      <span>
        Higher education
      </span>
    </div>
    <div id="details-p1" class="toggle-content">
      <div>
        <i>2016 – 2021</i><br> 
        <b>PhD studies – Natural Sciences: Earth Sciences</b><br>
        AGH University of Science and Technology, Kraków (Poland)<br>
        Doctoral thesis: <i>“Subduction processes recorded by the Baltica outer margin in the Scandinavian Caledonides”</i><br>
        <a href="https://www.elementsmagazine.org/wp-content/uploads/archives/e18_3/e18_3_soc_PTMIN.pdf">🏅 Award for the best PhD thesis given by the Polish Mineralogical Society</a><br><br>

        <i>2014 – 2016</i><br>
        <b>MSc studies – Geology: Applied Mineralogy and Petrology </b><br>
        University of Wrocław, Wrocław (Poland)<br>
        Master thesis: <i>“Sulfides from mantle xenoliths hosted in basalts of the Lower Silesia, Poland”</i><br><br>

        <i>2011 – 2014</i><br>
        <b>BSc studies – Geology</b><br>  
        University of Wrocław, Wrocław (Poland)<br>
      </div>
    </div>
  </div>

  <script>
    function toggleDetails(id) {
      const details = document.getElementById("details-" + id);
      const icon = document.getElementById("icon-" + id);

      details.classList.toggle("show");
      icon.classList.toggle("rotate");
    }
  </script>

</body>
</html>