<template>
  <div class="main-container">
    <h1 class="main-page-main-headers">What's new?</h1>
    <div id="box3" class="news">
      <div class="timeline pl-6 pt-6">

        
       
        <div class="entry-container">
          <div class="square"></div>
          <p class="entry">
            <span class="date">December 2022</span>
            <span class="paper-title"
              >Flexile: Meeting bandwidth objectives almost always
            </span>
            <span class="paper-conference">ACM CoNEXT 2022</span>
          </p>
        </div>

        <div class="entry-container">
          <div class="square"></div>
          <p class="entry">
            <span class="date">October 2022</span>
            <span class="paper-title"
              >A Microscopic View of Bursts, Buffer Contention, and Loss in Data
              Centers
            </span>
            <span class="paper-conference">ACM IMC 2022</span>
          </p>
        </div>

        <div class="entry-container">
          <div class="square"></div>
          <p class="entry">
            <span class="date">December 2021</span>
            <span> Professor Rao elevated to ACM Distinguished Member.</span>
          </p>
        </div>

        <div class="entry-container">
          <div class="square"></div>
          <p class="entry">
            <span class="date">November 2021</span>
            <span class="paper-title"
              >Xatu: Richer Neural Network Based Prediction for Video Streaming
            </span>
            <span class="paper-conference">ACM SIGMETRICS 2022</span>
          </p>
        </div>

        <div class="entry-container">
          <div class="square"></div>
          <p class="entry">
            <span class="date">August 2021</span>
            <span class="paper-title"
              >Chimera: exploiting UAS flight path information to optimize
              heterogeneous data transmission
            </span>
            <span class="paper-conference">IEEE ICNP 2021</span>
          </p>
        </div>

        <div class="entry-container">
          <div class="square"></div>
          <p class="entry">
            <span class="date">July 2021</span>
            <span
              >Russ Shirey defends his Ph.D thesis, and will be joining a US
              Government Agency.</span
            >
            <span class="congrat-name" @click="celebrate"> Dr. Shirey </span>
            <span class="congrat-icon" @click="celebrate"></span>
          </p>
        </div>

        <div class="entry-container">
          <div class="square"></div>
          <p class="entry">
            <span class="date">April 2021</span>
            <span class="paper-title"
              >Hey Lumi! Using Natural Language for Intent-Based Network
              Management
            </span>
            <span class="paper-conference">Usenix ATC 2021</span>
          </p>
        </div>

        <div class="entry-container">
          <div class="square"></div>
          <p class="entry">
            <span class="date">August 2020</span>
            <span class="paper-title"
              >Pitfalls of data-driven networking: A case study of latent causal
              confounders in video streaming
            </span>
            <span class="paper-conference"
              >ACM SIGCOMM 2020 Workshop on Network Meets AI & ML (NetAI
              2020)</span
            >
          </p>
        </div>

        <div class="entry-container">
          <div class="square"></div>
          <p class="entry">
            <span class="date">August 2020</span>
            <span class="paper-title"
              >PCF: Provably Resilient Flexible Routing
            </span>
            <span class="paper-conference">ACM SIGCOMM 2020</span>
          </p>
        </div>

        <div class="entry-container">
          <div class="square"></div>
          <p class="entry">
            <span class="date">August 2020</span>
            <span>
              NSF grant awarded on Next Generation Multi-Perspective Video
              Delivery at Internet Scale.</span
            >
          </p>
        </div>

        <div class="entry-container">
          <div class="square"></div>
          <p class="entry">
            <span class="date">May 2020</span>
            <span
              >Yun deposits his Ph.D thesis on Characterizing and Optimizing
              Internet Video Streaming, and will be taking up a position at
              Google, Mountain View.</span
            >
            <span class="congrat-name" @click="celebrate"> Dr. Nam </span>
            <span class="congrat-icon" @click="celebrate"></span>
          </p>
        </div>

        <div class="entry-container">
          <div class="square"></div>
          <p class="entry">
            <span class="date">February 2020</span>
            <span class="paper-title"
              >Exploring the interplay between CDN caching and video streaming
              performance
            </span>
            <span class="paper-conference">IEEE INFOCOM 2020</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>



<script type="module">
import confetti from "canvas-confetti";
export default {
  methods: {
    celebrate() {
      confetti({
        particleCount: 450,
        spread: 100,
        shapes: ["square", "circle"],
        gravity: 1.4,
      });
    },
  },
};
</script>
