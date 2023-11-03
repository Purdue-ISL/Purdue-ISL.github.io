<template>
  <div>
    <div class="px-5 pb-3">
      <div class="text-lg">
        <span class="font-mono tracking-tighter font-semibold"
          >{{ name }}
        </span>
        <span class="hidden" ref="gradDateTag">
          ({{ degree }} {{ graduation_year }})
        </span>

        <span class="hidden" ref="positionTag">
          <span> — </span>
          First position: {{ position }}</span
        >

        <span class="hidden" ref="noteTag">
          <span> — </span>
          {{ note }}</span
        >

        <span class="hidden" ref="c_positionTag"> → Now: {{ c_position }}</span>
        <span class="hidden font-light float-right" ref="coAdvisorTag"
          ><sup>*</sup>co-advised with Prof. {{ co_advisor }}</span
        >
        <span class="hidden float-right italic" ref="timeIntervalTag">
          {{ time_interval }}</span
        >
        <p class="hidden" ref="thesisTag">
          <span class="font-light">
            Thesis title:
            <span class="italic">{{ thesis_title }}</span></span
          >
        </p>
      </div>
    </div>
  </div>
</template>
  
<script setup>
const props = defineProps([
  "name",
  "graduation_year",
  "degree",
  "thesis_title",
  "position",
  "c_position",
  "co_advisor",
  "time_interval",
  "note",
]);
const coAdvisorTag = ref(null);
const c_positionTag = ref(null);
const thesisTag = ref(null);
const gradDateTag = ref(null);
const positionTag = ref(null);
const timeIntervalTag = ref(null);
const noteTag = ref(null);

onMounted(() => {
  if (props.co_advisor != undefined) {
    coAdvisorTag.value.classList.remove("hidden");
  }
  if (props.c_position != undefined) {
    c_positionTag.value.classList.remove("hidden");
  }
  if (props.thesis_title != undefined) {
    thesisTag.value.classList.remove("hidden");
  }
  if (props.degree != undefined && props.graduation_year != undefined) {
    gradDateTag.value.classList.remove("hidden");
  }
  if (props.position != undefined) {
    positionTag.value.classList.remove("hidden");
  }
  if (props.time_interval != undefined) {
    timeIntervalTag.value.classList.remove("hidden");
  }
  if (props.note != undefined) {
    noteTag.value.classList.remove("hidden");
  }
});
</script>
  