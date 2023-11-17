<template>
  <div class="project-container-div">
    <h1 class="font-bold px-6 py-4 text-center">{{ title }}</h1>
    <p class="project-content">
      {{ content }}
    </p>
    <div ref="linkTag" class="more hidden">
      <NuxtLink :to="toPage"> ... more </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["title", "content", "toPage"]);
const linkTag = ref(null);

onMounted(() => {
  if (props.toPage != undefined) {
    linkTag.value.classList.remove("hidden");
  }
});
</script>

