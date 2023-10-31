<script setup>
  // get current route slug
  const {
    params: { slug },
  } = useRoute();
  // get array of filters by generating array from separating slug`,`
  const filter = slug.split(",");
  // helper function to flatten tags array
  const flatten = (tags, key) => {
    let _tags = tags
      .map((tag) => {
        let _tag = tag;
        if (tag[key]) {
          let flattened = flatten(tag[key]);
          _tag = flattened;
        }
        return _tag;
      })
      .flat(1);
    return _tags;
  };
  // function to toggle expanded state
  // get only tags data from `/blog`
  const { data } = await useAsyncData("tags", () =>
    queryContent("blog")
      .where({
        tags: {
          $exists: true, // Hanya ambil artikel dengan properti 'tags' yang ada
        },
      })
      .only(["tags"])
      .find()
  );
  // generate array without duplicates from flattened array
  const articleTags = [...new Set(flatten(data.value, "tags"))];
  // set meta for page
  useHead({
    title: `All articles with ${slug}`,
    meta: [
      {
        name: "description",
        content: "Here's a list of all my great articles",
      },
    ],
  });
</script>
<template>
  <UContainer>
    <header class="page-heading">
      <UCard
        :ui="{
          body: {
            padding: 'p-2 -mb-4',
          },
          footer: {
            padding: 'px-1 py-1 sm:py-2 ',
          },
        }"
        class="py-4">
        <h1 class="text-2xl md:text-4xl font-extrabold">
          Artikel dengan tag "{{ slug }}"
        </h1>
      </UCard>
      <div class="flex flex-wrap gap-2">
        <div v-for="(tag, n) in articleTags" :key="n" class="tag">
          <UBadge size="lg">
            <NuxtLink :to="`/blog/tags/${tag}`" class="">
              {{ tag }}
            </NuxtLink>
          </UBadge>
        </div>
      </div>
    </header>
    <!-- Card Section -->
    <div class="py-10 lg:py-14 mx-auto">
      <ContentList
        path="/blog"
        :query="{
          only: ['title', 'description', 'tags', '_path', 'img'],
          where: {
            tags: {
              $contains: filter,
            },
          },
          $sensitivity: 'base',
        }">
        <template v-slot="{ list }">
          <div>
            <div class="grid sm:grid-cols-2 gap-2 sm:gap-6">
              <UCard
                :ui="{
                  body: {
                    padding: 'p-2 -mb-4',
                  },
                  footer: {
                    padding: 'px-1 py-1 sm:py-2 ',
                  },
                }"
                class="hover:ring-1 dark:hover:ring-permadi-500 hover:ring-permadi-500"
                v-for="article in list"
                :key="article._path">
                <template #footer>
                  <div>
                    <ul
                      class="flex-wrap flex w-full justify-start gap-2 items-center">
                      <li class="tag" v-for="(tag, n) in article.tags" :key="n">
                        <UBadge size="xs">
                          <NuxtLink :to="`/blog/tags/${tag}`" class="">
                            {{ tag }}
                          </NuxtLink>
                        </UBadge>
                      </li>
                    </ul>
                  </div>
                </template>
                <NuxtLink class="" :to="article._path">
                  <div class="">
                    <div class="flex">
                      <div class="">
                        <h2 class="font-medium line-clamp-2">
                          {{ article.title }}
                        </h2>
                      </div>
                    </div>
                  </div>
                </NuxtLink>
                <!-- End Card -->
              </UCard>
            </div>
          </div>
        </template>
        <template #not-found>
          <p>No articles found.</p>
        </template>
      </ContentList>
    </div>
    <!-- End Card Section -->
  </UContainer>
</template>
