<script setup>
  defineProps(["prev", "next"]);
</script>
<template>
  <ul class="prev-next-cont">
    <li class="link-item prev">
      <UButton v-if="prev" :to="prev._path">
        >
      </UButton>
    </li>
    <li class="link-item next">
      <UButton v-if="next" :to="next._path">
        prev
      </UButton>
    </li>
  </ul>
</template>
