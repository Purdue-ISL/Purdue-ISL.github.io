<template>
  <div>
    <div class="px-5 pb-3">
      <div class="text-lg">
        <span class="font-mono tracking-tighter font-semibold"
          >{{ name }}
        </span>
        <span> ({{ degree }} {{ graduation_year }}) </span>
        <span> — </span>
        <span> First position: {{ position }}</span>
        <span class="hidden" ref="c_positionTag"> → Now: {{ c_position }}</span>
        <span class="hidden font-light float-right" ref="coAdvisorTag"
          ><sup>*</sup>co-advised with Prof. {{ co_advisor }}</span
        >
        <p>
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
]);
const coAdvisorTag = ref(null);
const c_positionTag = ref(null);
onMounted(() => {
  if (props.co_advisor != undefined) {
    coAdvisorTag.value.classList.remove("hidden");
  }
  if (props.c_position != undefined) {
    c_positionTag.value.classList.remove("hidden");
  }
});
</script>
  