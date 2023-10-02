<template>
  <div>
    <div class="header-bg-img flex justify-center items-center mt-[-3.9rem]">
      <div class="header-img-font">
        <div>
          <p>{{ title }}</p>
        </div>
      </div>
    </div>
    <div>
      <img class="seal-img" src="images/purdue-seal.png" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["title"]);
</script>
  