<template>
  <div class="project-container-div">
    <h1 class="font-bold px-6 py-4 text-center">{{ title }}</h1>
    <p class="px-6 pb-6 text-justify">
      {{ content }}
      <span class="project-more"> ... more</span>
    </p>
  </div>
</template>

<script setup>
const props = defineProps(["title", "content"]);

onMounted(() => {});
</script>

