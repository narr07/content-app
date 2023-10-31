<script setup>
  const route = useRoute();
  const page = await queryContent(route.path).findOne();
  useSeoMeta({
    title: page.title,
    ogTitle: page.title,
    description: page.description,
    ogDescription: page.description,
    twitterDescription: page.description,
    twitterTitle: page.title,
  });
  defineOgImage({
    component: "OgPage",
    title: page.title,
    description: page.description,
  });
</script>
<template>
  <main>
    <ContentDoc path="/blog" />
  </main>
</template>
