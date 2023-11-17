<template>
  <div class="entry-container">
    <div class="square"></div>
    <p class="entry">
      <span class="date">{{ date }}</span>
      <span ref="paperTag" class="paper-title hidden">{{ paper }} </span>
      <span ref="venueTag" class="paper-conference hidden">{{ venue }}</span>
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
const props = defineProps(["date", "paper", "content", "venue", "congrats"]);
const venueTag = ref(null);
const paperTag = ref(null);
const contentTag = ref(null);
const congratsTag = ref(null);
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
  console.log(props.congrats);
  if (props.congrats != undefined) {
    congratsTag.value.classList.remove("hidden");
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
