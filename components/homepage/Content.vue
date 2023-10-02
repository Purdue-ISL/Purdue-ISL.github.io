<template>
  <div class="pb-5 mt-10">
    <div class="main-container">
      <h1 class="main-page-main-headers pt-8">What we do?</h1>
      <div id="box1" class="main-page-main-divs">
        <p class="pt-6 pl-6">
          We conduct research in two broad areas related to the Internet:
        </p>
        <div class="main-page-projects-container">
          <div class="main-page-project-div">
            <h2 class="main-page-project-header">
              Network verification and synthesis
            </h2>
            <p class="main-page-project-content">
              Managing large networks often involves complex policies (e.g.,
              security, QoS, fault tolerance). On the one hand networks must
              perform acceptably 99.99% of the time or more, yet studies from
              Google and others show failures are the norm, and traffic patterns
              change constantly. Design today is largely ad-hoc. By many
              estimates a large portion of the IT budget of organizations is
              driven by the need to manage networks, with configuration errors
              and design faults often accounting for a large fraction of
              cyber-attacks. We are designing networks that are formally
              verifiable and which provide provable performance guarantees
              despite uncertainty. Our research draws on optimization-theoretic
              techniques and formal methods. We validate our research on real
              Internet topologies, traffic data and network configurations, and
              through large-scale emulation testbeds
            </p>
          </div>
          <div class="main-page-project-div">
            <h2 class="main-page-project-header">
              ML-driven optimizations of Internet video, and network support for
              360 video/AR/VR
            </h2>
            <p class="main-page-project-content">
              Many exciting new applications are emerging on the Internet such
              as 4K video, 360 video, and AR/VR which are both bandwidth
              intensive, and can only tolerate tens of milliseconds of latency
              for good user experience. We are developing novel algorithms and
              building prototye systems for ensuring a high quality of
              experience for these applications despite variable Internet
              environments (e.g., cellular settings). Our algorithms are often
              informed by large-scale real-world data sets (e.g, of video
              streaming sessions) and cutting edge ML techniques
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="main-container">
      <h1 class="main-page-main-headers">More about us?</h1>
      <div id="box2" class="main-page-main-divs">
        <div class="main-page-projects-container">
          <div class="main-page-project-div">
            <h2 class="main-page-project-header">
              The video below, and this slide deck present an overview of recent
              research in our group:
            </h2>
            <div class="main-page-projects-container relative">
              <video class="main-page-video">
                <source src="videos/ISL.mp4" type="video/webm" />
              </video>
              <div id="video-overlay" class="video-overlay">
                <button class="play_button" @click="playVideo">
                  <div class="playshape"></div>
                </button>
              </div>
            </div>
          </div>
          <!-- <div class="lg:border-r-2 border-red-500 lg:my-10"></div> -->
          <div class="main-page-project-div">
            <h2 class="main-page-project-header">
              Background needed to work in Purdue ISL
            </h2>
            <p class="main-page-project-content">
              Prospective students must ideally have a strong background in
              Computer Science or Computer Engineering with extensive
              programming (ideally systems programming) background. However, EE
              students with a willingness/ability to build strong systems
              programming skills are welcome. Since some of our research draws
              on cutting edge techniques in optimization, machine learning, and
              formal methods, students with an aptitude for math/theory with an
              interest in applications to real-world networking problems may
              also be a good fit. Students are not expected to have background
              in all areas at the start of their Ph.D, but successful students
              have an ability and willingness to develop the needed background
              for their research problem as their research evolves.
            </p>
          </div>
          <div class="main-page-project-div">
            <p class="main-page-project-content pt-6">
              Our research has benefited by support from NSF, Cisco, Google,
              Facebook, NetApp, AT&T, and Microsoft , and many of our projects
              have involved collaboration with these organizations. Many of the
              challenges we address are motivated by real-world experience,
              require insights into operations of networks at scale, are great
              fun, and can change theworld! After completing a Ph.D, alumni of
              Purdue ISL are now working on cutting edge network infrastructure
              at places such as Facebook, Google, AT&T,Bytedance, as well as in
              universities and Government Agencies. Purdue ISL has often
              involved undergraduate students, who have continued to pursue
              graduate studies in top universities, or gone on to good industry
              positions.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script >
export default {
  methods: {
    playVideo() {
      let video = document.getElementsByTagName("video")[0];
      let playButton = document.getElementById("video-overlay");
      video.play();
      video.controls = true;
      playButton.classList.add("hidden");
    },
  },
};
</script>
