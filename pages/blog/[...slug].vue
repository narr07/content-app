<template>
  <UContainer>
    <div class="max-w-3xl flex flex-col my-4 mx-auto">
      <TwicImg
        class="w-full md:h-72 object-cover bg-cover rounded-md"
        :src="article.img"
        mode="cover"
        loading="lazy"
        ratio="16/9"
        height="600"
        width="300"
        placeholder="preview"
        :alt="article.title"
        :title="article.title" />
    </div>
    <div class="max-w-3xl my-4 mx-auto">
      <UBadge>
        <time>
          {{ formatDate(article.date) }}
        </time>
      </UBadge>
    </div>
    <UCard class="max-w-3xl mx-auto">
      <template #footer>
        <div>
          <ul class="flex-wrap flex w-full justify-start gap-2 items-center">
            <li class="tag" v-for="(tag, n) in article.tags" :key="n">
              <UBadge>
                <NuxtLink :to="`/blog/tags/${tag}`" class="">
                  {{ tag }}
                </NuxtLink>
              </UBadge>
            </li>
          </ul>
        </div>
      </template>
      <h1 class="text-2xl md:text-4xl md:leading-tight">
        {{ article.title }}
      </h1>
      <p>
        {{ article.description }}
      </p>
    </UCard>
    <article
      class="overflow-hidden prose py-10 prose-gray dark:prose-strong:font-bold dark:prose-p:text-permadi-500 dark:prose-strong:text-permadi-300 prose-a:text-biru-700 prose-a:no-underline prose-img:mx-auto dark:prose-invert max-w-3xl m-auto">
      <ContentDoc />
    </article>
    <div class="sticky bottom-0 inset-x-0 text-center">
      <UCard
        :ui="{
          body: {
            padding: 'py-2 p-1 px-2 sm:p-1 sm:py-1 sm:px-2 ',
          },
        }"
        class="inline-block">
        <div class="flex items-center gap-x-1">
          <div>
            <UDropdown
              :ui="{
                width: 'w-56',
                height: 'max-h-72',
                base: 'inset-x-0  mx-auto relative focus:outline-none overflow-y-auto scroll-py-1',
              }"
              :items="items"
              :popper="{ placement: 'bottom-end' }">
              <UButton
                size="xs"
                variant="ghost"
                trailing-icon="i-ph-list-dashes-duotone" />
            </UDropdown>
          </div>
          <div
            class="block h-3 border-r border-gray-300 mx-1 dark:border-gray-600"></div>
          <div class="hs-tooltip inline-block">
            <div>
              <UDropdown
                :ui="{
                  width: '',
                  base: 'translate-x-[27%]',
                }"
                :items="bagikan"
                :popper="{ placement: 'bottom-end' }">
                <template #tes>
                  <div class="flex flex-row gap-1">
                    <UButton size="md" square padded>
                      <ShareNetwork
                        class="p-0 flex items-center justify-center"
                        network="twitter"
                        :url="`https://dev-permadi.vercel.app${path}`"
                        :title="article.title"
                        :description="article.description"
                        :hashtags="article.tags"
                        twitterUser="narr07">
                        <UIcon size="2xl" name="i-ph-twitter-logo-duotone" />
                      </ShareNetwork>
                    </UButton>
                    <UButton size="md" square padded>
                      <ShareNetwork
                        class="p-0 flex items-center justify-center"
                        network="whatsapp"
                        :url="`https://dev-permadi.vercel.app${path}`"
                        :title="article.title"
                        :description="article.description"
                        :hashtags="article.tags"
                        twitterUser="narr07">
                        <UIcon name="i-ph-whatsapp-logo-duotone" />
                      </ShareNetwork>
                    </UButton>
                    <UButton size="md" square padded>
                      <ShareNetwork
                        class="p-0 flex items-center justify-center"
                        network="facebook"
                        :url="`https://dev-permadi.vercel.app${path}`"
                        :title="article.title"
                        :description="article.description"
                        :hashtags="article.tags"
                        twitterUser="narr07">
                        <UIcon name="i-ph-facebook-logo-duotone" />
                      </ShareNetwork>
                    </UButton>
                    <UButton size="md" square padded>
                      <ShareNetwork
                        class="p-0 flex items-center justify-center"
                        network="linkedin"
                        :url="`https://dev-permadi.vercel.app${path}`"
                        :title="article.title"
                        :description="article.description"
                        :hashtags="article.tags"
                        twitterUser="narr07">
                        <UIcon name="i-ph-linkedin-logo-duotone" />
                      </ShareNetwork>
                    </UButton>
                    <UButton size="md" square padded>
                      <ShareNetwork
                        class="p-0 flex items-center justify-center"
                        network="telegram"
                        :url="`https://dev-permadi.vercel.app${path}`"
                        :title="article.title"
                        :description="article.description"
                        :hashtags="article.tags"
                        twitterUser="narr07">
                        <UIcon name="i-ph-telegram-logo-duotone" />
                      </ShareNetwork>
                    </UButton>
                  </div>
                </template>
                <UButton
                  size="xs"
                  variant="ghost"
                  trailing-icon="i-ph-share-fat-duotone" />
              </UDropdown>
            </div>
          </div>
        </div>
      </UCard>
    </div>
    <div class="py-16 w-full justify-center">
      <PrevNext :prev="prev" :next="next" />
    </div>
  </UContainer>
</template>
<script setup>
  const { path } = useRoute();
  const { data } = await useAsyncData(`content-${path}`, async () => {
    let article = queryContent().where({ _path: path }).findOne();
    let surround = queryContent()
      .only(["_path", "title", "description"])
      .sort({ date: 1 })
      .findSurround(path);
    return {
      article: await article,
      surround: await surround,
    };
  });
  const [prev, next] = data.value.surround;
  const links = data?.value?.article?.body?.toc?.links || [];
  const items = links.map((link) => [
    {
      label: link.text,
      to: `#${link.id}`,
    },
  ]);
  const article = ref(data.value.article);
  // console.log(article.value);
  const bagikan = [
    [
      {
        label: "ben@example.com",
        slot: "tes",
      },
    ],
  ];
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
