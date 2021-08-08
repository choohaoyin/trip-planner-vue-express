<template>
  <div>
    <button
      class="
        inline-flex
        place-items-center
        uppercase
        text-sm
        bg-blue-500
        hover:bg-blue-700
        duration-100
        text-white
        space-x-1
        mt-1
        rounded
        align-center
        select-none
      "
      :class="big ? 'py-1 px-3' : 'p-1'"
      @click="$root.detail"
    >
      <span class="material-icons md-sm"> info </span>
      <span v-if="big">Detail</span>
    </button>
  </div>
</template>

<script>
export default {
    name: "DetailButton",
    props: {
        big: Boolean
    }
}
</script>
