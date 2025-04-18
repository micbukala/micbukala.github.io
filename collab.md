---
layout: about
# image: /assets/img/blog/MB2.jpg
description: >
  Michał Bukała, PhD
hide_description: true
redirect_from:
  - /download/
---
# Collaboration        
<b> Collaborative projects: </b><br>
Ongoing research in which I am currently involved in:<br>


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
      max-height: 600px;
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
        RUSTED: Role of ultramafic rocks in the cycle of volatiles of the deep Earth
      </span>
    </div>
    <div class="project-pis">
      PI's: C.J. Garrido & J.A. Padrón-Navarta (IACT-CSIC, Spain)
    </div>
    <div id="details-p1" class="toggle-content">
      <div>
        The RUSTED project aims to enhance our understanding of the role of ultramafic rocks in the deep cycling of two key volatile elements: sulfur and carbon. <b><i>My work focuses on studying the intrinsic redox conditions and sulfur mobility during high-pressure serpentinite devolatilization</i></b>. In particular, I integrate electron backscatter diffraction (EBSD) with advanced thermodynamic modeling to investigate a novel mechanism of carbon retention during high-pressure deserpentinization and the interaction of serpentinites with reduced COHS fluids.<br><br>

        I presented these results during an invited talk at 
        <a href="https://meetingorganizer.copernicus.org/EGU24/EGU24-12237.html" style="color: rgb(38,139,210); text-decoration: none;"> <b> EGU 2024 </b></a>

        <br><br>
        
        Project nr: PID2022-136471N-B-C21 & C22 Funded by: MICIN/ AEI/10.13039/501100011033 and FEDER program; Spain
      </div>
    </div>
  </div>

  <!-- Projekt 2 -->
  <div class="project">
    <div class="project-title" onclick="toggleDetails('p4')">
      <span id="icon-p4" class="icon">+</span>
      <span>
        GarNeat: Exploring shock metamorphic microstructures in garnets
      </span>
    </div>
    <div class="project-pis">
      PI: K. Gajewska (Lund University, Sweden)
    </div>
    <div id="details-p4" class="toggle-content">
      <div>
      The GarNeat project aim to characterize features observed in naturally and experimentally shocked (subjected to meteoritic impact events) garnets by integrating electron backscatter diffraction (EBSD) data with computational analyses of fracture networks that will allow to re-evaluate shock-induced fracturing that has already been shown in few previous studies.
      <b><i>My work here focuses on developing a python-based tool for qualitative analyses of fracture networks.</i></b><br><br>

      Project motto:<br>
        PL: "Anektuję tego pieruna" <br>
        ENG: "I hereby claim this bolt of fury"
      </div>
    </div>
  </div>

  <!-- Projekt 3 -->
  <div class="project">
    <div class="project-title" onclick="toggleDetails('p2')">
      <span id="icon-p2" class="icon">+</span>
      <span>
        Advancing in-situ white mica <sup>40</sup>Ar/<sup>39</sup>Ar and Rb-Sr geochronology as tools to resolve tectonic processes
      </span>
    </div>
    <div class="project-pis">
      PI: C.J. Barnes (IGS-PAS, Poland)
    </div>
    <div id="details-p2" class="toggle-content">
      <div>
        The project aims to advance white mica geochronology by leveraging recent analytical developments that enable high-spatial resolution dating of individual grains preserved in their structural context. Despite these advancements, white mica has not yet been fully developed as a reliable geochronometer. This research is designed to explore and harness its potential through state-of-the-art in-situ <sup>40</sup>Ar/<sup>39</sup>Ar and Rb-Sr geochronological techniques.<br><br>

        <b><i>My work here focuses on investigating white mica microstructures using electron backscatter diffraction (EBSD) to provide insights into lattice deformation and its potential implications for geochronology.</i></b><br><br>

        Project nr: <a href="https://projekty.ncn.gov.pl/en/index.php?projekt_id=511414">2021/40/C/ST10/00264</a> Funded by: NCN - National Science Centre Poland
      </div>
    </div>
  </div>

  <!-- Projekt 4 -->
  <div class="project">
    <div class="project-title" onclick="toggleDetails('p3')">
      <span id="icon-p3" class="icon">+</span>
      <span>
        Closure of the Alpine Tethys Ocean recorded in the Pieniny Klippen Belt of the Western Carpathians
      </span>
    </div>
    <div class="project-pis">
      PI: J. Majka (AGH University of Krakow, Poland)
    </div>
    <div id="details-p3" class="toggle-content">
      <div>
        The main themes of the research project includes (1) geophysical imaging of the deep crust and shallow mantle within and across the Western Carpathians; (2) documenting remnants of the Alpine Tethys and establishing time constraints for the formation of the suture zone; and (3) formulation of a new evolutionary model of Variscan crystalline basement, disappearance of the Alpine Tethys Ocean and build-up of the Western Carpathians.<br><br>

        <b><i>My work here focuses on understanding the juxtapisition of Variscan crystalline basement and its Alpine reactivation using the integrating electron backscatter diffraction (EBSD), thermodynamic modelling and <sup>40</sup>Ar/<sup>39</sup>Ar and Rb-Sr geochronology.</i></b><br><br>

        Project nr: <a href="https://projekty.ncn.gov.pl/en/index.php?projekt_id=540940">2021/43/B/ST10/02312</a> Funded by: NCN - National Science Centre Poland
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

