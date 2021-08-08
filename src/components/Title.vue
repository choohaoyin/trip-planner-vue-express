<template>
  <h1 class="text-3xl font-medium">{{ title }}</h1>
</template>

<script>
export default {
  name: "Title",
  props: {
    title: String,
  },
};
</script>
