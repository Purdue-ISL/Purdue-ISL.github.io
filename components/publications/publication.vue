<template>
  <div class="px-5 pb-3">
    <span class="font-bold">{{ title }}. </span>
    <span> {{ authors }}. </span>
    In <span class="font-light italic">{{ conference }}. </span>
    <span ref="paperTag" class="hidden"
      ><a href="" class="text-sky-900 text-base" target="_blank"
        >[Paper]</a
      ></span
    >
    <span ref="slidesTag" class="hidden"
      ><a class="text-sky-900 text-base" target="_blank">[Slides]</a></span
    >
    <span ref="videoTag" class="hidden"
      ><a class="text-sky-900 text-base" target="_blank">[Video]</a></span
    >
    <span ref="datasetTag" class="hidden"
      ><a class="text-sky-900 text-base" target="_blank">[Dataset]</a></span
    >
    <span ref="githubTag" class="hidden"
      ><a class="text-sky-900 text-base" target="_blank">[Github]</a></span
    >
    <p ref="noteTag" class="hidden font-light">{{ note }}</p>
  </div>
</template>


<script setup>
const props = defineProps([
  "title",
  "authors",
  "conference",
  "paper",
  "slides",
  "video",
  "dataset",
  "github",
  "note",
  "notePDF",
]);
const paperTag = ref(null);
const slidesTag = ref(null);
const videoTag = ref(null);
const datasetTag = ref(null);
const githubTag = ref(null);
const noteTag = ref(null);

onMounted(() => {
  if (props.paper != undefined) {
    paperTag.value.classList.remove("hidden");
    paperTag.value.childNodes[0].href = props.paper;
  }
  if (props.slides != undefined) {
    slidesTag.value.classList.remove("hidden");
    slidesTag.value.childNodes[0].href = props.slides;
  }
  if (props.video != undefined) {
    videoTag.value.classList.remove("hidden");
    videoTag.value.childNodes[0].href = props.video;
  }
  if (props.dataset != undefined) {
    datasetTag.value.classList.remove("hidden");
    datasetTag.value.childNodes[0].href = props.dataset;
  }
  if (props.github != undefined) {
    githubTag.value.classList.remove("hidden");
    githubTag.value.childNodes[0].href = props.github;
  }
  if (props.note != undefined) {
    noteTag.value.classList.remove("hidden");
  }
  if (props.notePDF != undefined) {
  }
});
</script>
