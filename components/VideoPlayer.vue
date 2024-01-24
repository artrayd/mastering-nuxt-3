<template>
  <div>
    <iframe
      :src="`https://player.vimeo.com/video/${props.videoId}`"
      width="560"
      height="315"
      frameborder="0"
      allow="autoplay; fullscreen; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script setup>
const props = defineProps({
  videoId: {
    type: Number,
    required: true,
  },
});
</script>
