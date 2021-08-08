<template>
  <div id="list-button">
    <div
      class="
        w-38
        cursor-pointer
        rounded
        border
        bg-gray-100
        text-gray-500
        hover:bg-gray-300
        hover:text-black
        duration-100
        p-1
        text-sm
        flex
        select-none
      "
      :class="position"
      @click="$root.list = !$root.list"
    >
      <img class="w-6 h-6" src="../assets/list.svg" alt="" />
      <p class="self-center px-2">List of locations</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListButton",
  props: {
    position: String,
  },
};
</script>
