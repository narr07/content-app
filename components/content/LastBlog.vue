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
  const blogsToShow = computed(() => {
    // Mengambil tiga artikel terbaru
    return blogs.value.slice(0, 3);
  });
</script>
<template>
  <main class="py-10">
    <UContainer>
      <div class="w-full justify-center flex pb-4">
        <h2
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          class="text-2xl md:text-4xl">
          Artikel Terbaru
        </h2>
      </div>
    </UContainer>
    <UContainer class="grid grid-cols-1 gap-4 md:grid-cols-3">
      <BlogCard
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        v-for="(blog, index) in blogsToShow"
        :key="index"
        :blog="blog" />
    </UContainer>
  </main>
  <!-- End Card Blog -->
</template>
