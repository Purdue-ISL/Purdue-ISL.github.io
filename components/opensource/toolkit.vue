<template>
  <div class="opensource-section-container-div">
    <h1 ref="titleTag" class="font-bold px-6 py-4 text-center">
      {{ title }}
    </h1>
    <p class="px-6 pb-6 text-justify">
      {{ content }}
    </p>
    <span ref="linkTag" class="more hidden"
      ><NuxtLink :to="toPage" target="_blank"> ... more </NuxtLink></span
    >
  </div>
</template>
  
<script setup>
const props = defineProps(["title", "content", "toPage"]);
const linkTag = ref(null);
const titleTag = ref(null);
onMounted(() => {
  if (props.toPage != undefined) {
    linkTag.value.classList.remove("hidden");
  }
  if (props.title != undefined) {
    titleTag.value.classList.remove("opacity-0");
  }
});
</script>

  