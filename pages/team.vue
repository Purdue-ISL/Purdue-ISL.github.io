<template>
  <div id="doc" class="bg-[var(--primary-color)] bg-img">
    <div class="limit-width">
      <HeaderNav />
    </div>
    <PageHeader title="ISL Team" />
    <div class="limit-width">
      <div class="w-[96%] mx-auto"></div>

      <div class="team-group-container pt-10">
        <h1 class="team-group-header">Faculty</h1>
        <div class="team-members-container">
          <TeamMember
            img="image8801.jpeg"
            name="Sanjay Rao"
            title="Professor"
            area=""
          />
        </div>
      </div>

      <div class="team-group-container">
        <h1 class="team-group-header">Graduate Students</h1>
        <div class="team-members-container">
          <TeamMember name="Ehab Ghabashneh" title="Ph.D. Candidate" area="" />
          <TeamMember name="Chandan Bothra" title="Ph.D Student" area="" />
          <TeamMember name="Syed Usman Jafri" title="Ph.D. Student" area="" />
          <TeamMember name="Testing" title="Ph.D. Student" area="" />
        </div>
      </div>

      <div class="team-group-container">
        <h1 class="team-group-header">Undergraduate Students</h1>
        <div class="team-members-container">
          <TeamMember
            name="Clayton Walker"
            title="Undergraduate researcher"
            area=""
          />
          <TeamMember
            name="Jagan Krishnasamy"
            title="Undergraduate researcher"
            area=""
          />
        </div>
      </div>

      <div class="team-group-container">
        <h1 class="team-group-header">Alumni</h1>
        <div class="alumni-members-container">
          <TeamAlumni
            name="Chuan Jiang"
            degree="Ph.D."
            graduation_year="2022"
            thesis_title="Resilient Wide Area Network Routing Algorithms For Meeting Service Level Objectives"
            position="Meta Platforms"
          /><TeamSeparator />

          <TeamAlumni
            name="Russ Shirey"
            degree="Ph.D."
            graduation_year="2021"
            thesis_title="Data-Driven and Control Theoretic Approaches for Real-Time Sensor Data Transmission Over Unmanned Aerial Systems Networks"
            position="US Air Force"
            co_advisor="Shreyas Sundaram"
          /><TeamSeparator />

          <TeamAlumni
            name="Yun Seong Nam"
            degree="Ph.D."
            graduation_year="2020"
            thesis_title="Characterizing and Optimizing Internet Video Streaming"
            position="Google"
          /><TeamSeparator />

          <TeamAlumni
            name="Yiyang Chang "
            degree="Ph.D."
            graduation_year="2019"
            thesis_title="Ensuring Network Designs meet Performance Requirements under Failures"
            position="ByteDance"
          /><TeamSeparator />

          <TeamAlumni
            name="Ashiwan Sivakumar "
            degree="Ph.D."
            graduation_year="2017"
            thesis_title="Scalable Redundant Proxy Execution for low-latency Web over Cellular Networks"
            position="Post-doc @ CMU"
            c_position="AT&T Labs Research"
          /><TeamSeparator />

          <TeamAlumni
            name="Shankaranarayanan Narayanan "
            degree="Ph.D."
            graduation_year="2016"
            thesis_title="A Holistic Approach to Lowering Latency in Geo-distributed Web Applications"
            position="AT&T Labs Research"
          /><TeamSeparator />

          <TeamAlumni
            name="Mohammad Hajjat "
            degree="Ph.D."
            graduation_year="2014"
            thesis_title="Architecting Delay Sensitive Applications for the Cloud"
            position="Microsoft Azure"
            c_position="Roblox"
          /><TeamSeparator />

          <TeamAlumni
            name="Srivathsava Rangarajan "
            degree="MSc Thesis"
            graduation_year="2014"
            thesis_title="Paxos based directory updates for geo-replicated cloud storage"
            position="Enova"
          /><TeamSeparator />

          <TeamAlumni
            name="Xin Sun "
            degree="Ph.D."
            graduation_year="2012"
            thesis_title="Towards Systematic Migration of Enterprise Networks"
            position="Assistant Professor @ Florida International University"
            c_position="Assistant Professor @ Ball State (Winner of NSF Career Research Initiation Initiative Award)"
          /><TeamSeparator />
        </div>
      </div>
    </div>
    <div class="pb-[150px]"></div>
  </div>
</template>

<script type="module">
let teams_divs = [];
export default {
  methods: {
    overlap(element) {
      let topOverlap =
        (window.screen.height - element.getBoundingClientRect().top) /
        window.screen.height;
      if (topOverlap > 0.1) {
        element.classList.toggle("show-up");
        return true;
      }
      return false;
    },

    handleScroll() {
      var filtered = [];
      for (var idx in teams_divs) {
        if (this.overlap(teams_divs[idx])) {
          filtered.push(idx);
        }
      }
      for (var idx in filtered) {
        delete teams_divs[filtered[idx]];
      }
      if (Object.keys(teams_divs).length == 0) {
        window.removeEventListener("scroll", this.handleScroll);
      }
    },
  },
  mounted() {
    window.scrollTo(0, 0);
    teams_divs = [];
    let team_div_nodelist = document.querySelectorAll(".team-group-container");
    team_div_nodelist.forEach((team_div) => {
      teams_divs.push(team_div);
      if (team_div.classList.contains("show-up")) {
        team_div.classList.toggle("show-up");
      }
    });
    window.addEventListener("scroll", this.handleScroll);
    // in case height is small.
    this.handleScroll();
  },
};
</script>

