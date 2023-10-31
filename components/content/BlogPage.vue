<script setup>
  import { withTrailingSlash } from "ufo";
  const props = defineProps({
    path: {
      type: String,
      default: "blog",
    },
  });
  // @ts-ignore
  const { data: _blogs } = await useAsyncData(
    "blog",
    async () =>
      await queryContent(withTrailingSlash(props.path))
        .sort({ date: -1 })
        .find()
  );
  const blogs = computed(() => _blogs.value || []);
  console.log(blogs.value);
</script>
<template>
  <main class="py-10">
    <UContainer class="text-center mb-10 4">
      <h1
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        class="text-2xl md:text-4xl md:leading-tight">
        <ContentSlot :use="$slots.default" unwrap="p" />
      </h1>
      <p data-aos="fade-up" data-aos-anchor-placement="top-bottom" class="mt-1">
        <ContentSlot :use="$slots.deskripsi" unwrap="p" />
      </p>
    </UContainer>
    <UContainer class="grid grid-cols-1 gap-4 md:grid-cols-2">
      <BlogCard
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        v-for="(blog, index) in blogs"
        :key="index"
        :blog="blog" />
    </UContainer>
  </main>
  <!-- End Card Blog -->
</template>
