<template>
  <div>
    <UButton
      variant="ghost"
      icon="i-ph-magnifying-glass-duotone"
      @click="isOpen = true" />
    <UModal
      :ui="{
        inner: ' fixed z-50 top-0 overflow-y-auto  ',
        container:
          'flex min-h-full top-0  items-end sm:items-center  text-center',
        // wrapper: 'z-20',\
        container: ' items-center  ',
        padding: 'p-2 sm:p-0',
      }"
      v-model="isOpen">
      <UCommandPalette
        ref="commandPaletteRef"
        :groups="groups"
        command-attribute="title"
        @update:model-value="onSelect"
        :fuse="{
          fuseOptions: {
            keys: ['title', 'description', 'content', 'tags', '_path'],
          },
        }"
        placeholder="Cari..." />
    </UModal>
  </div>
</template>
<script setup>
  const router = useRouter();
  const { data: _blog } = await useAsyncData(
    "blog",
    async () => await queryContent("/blog").sort({ date: -1 }).find()
  );
  function extractTextFromChildren(children) {
    const headingTags = ["h1", "h2", "h3", "h4", "h5"]; // Tag heading yang ingin ditangani
    return children
      .map((child) => {
        if (child.type === "element") {
          if (child.tag === "p" || headingTags.includes(child.tag)) {
            return child.children
              .filter((subChild) => subChild.type === "text")
              .map((subChild) => subChild.value)
              .join(" ");
          }
        }
        return "";
      })
      .join(" ");
  }
  const blogs = computed(() => _blog.value || []);
  const groups = computed(() => [
    {
      key: "blog",
      label: "Blogs",
      commands: blogs.value.map((blog) => ({
        id: blog._id,
        icon: "i-ph-article-duotone",
        title: blog.title,
        description: blog.description,
        content: extractTextFromChildren(blog.body.children),
        tags: blog.tags.join(", "),
        to: blog._path,
      })),
    },
  ]);
  function onSelect(option) {
    if (option.to) {
      router.push(option.to).then(() => {
        isOpen.value = false; // Menutup modal setelah navigasi
      });
    }
  }
  const isOpen = ref(false);
</script>
