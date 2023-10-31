<script setup>
  const props = defineProps({
    blog: {
      type: Object,
      required: true,
      validator: (value) => {
        if (value?._path && value.title) {
          return true;
        }
        return false;
      },
    },
    featured: {
      type: Boolean,
      default: false,
    },
  });
  const id = computed(() => {
    // @ts-ignore
    return process.dev || useContentPreview()?.isEnabled()
      ? props.article?._id
      : undefined;
  });
</script>
<template>
  <UCard
    v-if="blog._path && blog.title"
    :data-content-id="id"
    class="hover:ring-1 dark:hover:ring-permadi-500 hover:ring-permadi-500">
    <div class="flex flex-col">
      <div class="aspect-w-16 aspect-h-9">
        <TwicImg
          class="w-full object-cover bg-cover rounded-md"
          :src="blog.img"
          loading="lazy"
          ratio="16/9"
          height="600"
          width="300"
          placeholder="preview"
          :alt="blog.title"
          :title="blog.title" />
        <!-- <NuxtImg
          provider="twicpics"
         fit="cover"
          class="w-full object-cover bg-cover rounded-md"
          :placeholder="preview"
          loading="lazy"
          height="700"
          width="1000"
          :src="blog.img"
          :alt="blog.title"
          :title="blog.title"
          :modifiers="{cover:'16:9', focus:'auto'}" /> -->
      </div>
      <div class="justify-end -mt-4 z-40 flex">
        <UBadge>
          <time>
            {{ formatDate(blog.date) }}
          </time>
        </UBadge>
      </div>
      <div class="mt-2">
        <NuxtLink :to="blog._path">
          <h2 class="text-xl md:text-2xl mb-1 line-clamp-1">
            {{ blog.title }}
          </h2>
          <p class="line-clamp-3">
            {{ blog.description }}
          </p>
        </NuxtLink>
      </div>
    </div>
    <template #footer>
      <div class="flex w-full flex-wrap gap-2  ">
        <UBadge color="gray" v-for="tag in blog.tags" :key="tag">
          <NuxtLink :to="`/blog/tags/${tag}`" class="">
            {{ tag }}
          </NuxtLink>
        </UBadge>
      </div>
    </template>
  </UCard>
</template>
