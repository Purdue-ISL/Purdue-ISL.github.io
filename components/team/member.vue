<template>
  <div>
    <div class="flex flex-col text-center items-center m-6">
      <img class="team-member-img" ref="imgTag" src="" />
      <p class="team-member-name">
        {{ name }}
      </p>
      <p class="team-member-title">
        {{ title }}
      </p>
      <p class="text-xl font-light hidden" ref="areaTag">{{ area }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["img", "name", "title", "area"]);
const areaTag = ref(null);
const imgTag = ref(null);
onMounted(() => {
  if (props.area != undefined) {
    areaTag.value.classList.remove("hidden");
  }
  if (props.img != undefined) {
    imgTag.value.src = props.img;
  } else {
    imgTag.value.src = "/images/team-images/placeholder-image.png";
  }
});
</script>
