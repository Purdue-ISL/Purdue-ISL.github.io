<template>
  <div class="entry-container hidden">
    <div class="square"></div>
    <p class="entry">
      <span class="date">{{ date }}</span>

      <span ref="paperTag" class="hidden">
        <span> Our paper, </span>
        <span class="font-bold">{{ paper }}</span>
      </span>

      <span ref="venueTag" class="paper-conference hidden">
        <span ref="acceptTag" class="hidden"> was accepted </span>
        <span ref="presentTag" class="hidden"> was presented </span>
        at {{ venue }}.
      </span>
      <span ref="contentTag" class="hidden">{{ content }} </span>
      <span class="hidden" ref="congratsTag"
        ><span class="congrat-name" @click="celebrate">
          {{ congrats }}
        </span>
        <span class="congrat-icon" @click="celebrate"></span
      ></span>
    </p>
  </div>
</template>
    
<script setup>
const props = defineProps([
  "date",
  "paper",
  "content",
  "venue",
  "congrats",
  "status",
]);
const venueTag = ref(null);
const paperTag = ref(null);
const contentTag = ref(null);
const congratsTag = ref(null);
const acceptTag = ref(null);
const presentTag = ref(null);
let c = 0;
onMounted(() => {
  if (props.venue != undefined) {
    venueTag.value.classList.remove("hidden");
  }
  if (props.paper != undefined) {
    paperTag.value.classList.remove("hidden");
  }
  if (props.content != undefined) {
    contentTag.value.classList.remove("hidden");
  }
  if (props.congrats != undefined) {
    congratsTag.value.classList.remove("hidden");
  }
  if (props.status != undefined && props.venue != undefined) {
    if (props.status == "present") {
      presentTag.value.classList.remove("hidden");
    } else if (props.status == "accept") {
      acceptTag.value.classList.remove("hidden");
    }
  }
});
</script>
    

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
