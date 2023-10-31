<template>
  <nav>
    <div
      :class="[
        showHeader ? 'translate-y-0' : '-translate-y-[72px]',
        'transform-gpu transition-transform duration-150 ease-in-out fixed top-1 z-50',
      ]"
      class="fixed w-full top-2 z-50">
      <UContainer>
        <div
          class="dark:bg-permadi-900 bg-permadi-100 ring-1 ring-gray-200 dark:ring-gray-800 rounded-md p-2">
          <div class="flex flex-row justify-between items-center">
            <div class="flex">
              <NuxtLink to="/">
                <Logo class="h-10 w-10" />
              </NuxtLink>
            </div>
            <div class="flex items-center">
              <ContentNavigation class="" v-slot="{ navigation }">
                <div
                  class="md:flex md:flex-row hidden space-x-2 flex-row justify-between">
                  <div v-for="link of navigation" :key="link._path">
                    <UButton
                      :variant="link._path === $route.path ? 'solid' : 'ghost'"
                      :to="link._path">
                      {{ link.title }}
                    </UButton>
                  </div>
                  <div></div>
                </div>
              </ContentNavigation>
              <div class="flex items-center">
                <Search />
                <div class="flex">
                  <DarkMode />
                </div>
                <div class="md:hidden mobiledropdown">
                  <UDropdown
                    :items="items"
                    :ui="{ item: { disabled: 'cursor-text select-text' } }"
                    :popper="{ placement: 'bottom-start' }">
                    <UButton
                      color="permadi"
                      variant="ghost"
                      trailing-icon="
                       i-ph-circles-four-duotone" />
                  </UDropdown>
                </div>
              </div>
            </div>
          </div>
        </div>
      </UContainer>
    </div>
  </nav>
</template>
<script setup>
  const items = [
    [
      {
        label: "Home",
        icon: "i-ph-house-duotone",
        to: "/",
      },
    ],
    [
      {
        label: "Blog",
        icon: "i-ph-note-duotone",
        to: "/blog",
      },
    ],
  ];
  const varButton = ref("solid");
  onMounted(() => {
    window.addEventListener("scroll", onScroll);
  });
  onBeforeUnmount(() => {
    window.removeEventListener("scroll", onScroll);
  });
  const showHeader = ref(true);
  const lastScrollPosition = ref(0);
  const onScroll = () => {
    const currentScrollPosition =
      window.pageYOffset || document.documentElement.scrollTop;
    // Momentum scrolling on iOS can cause the scroll position to be negative
    if (currentScrollPosition < 0) return;
    // add 60px delay
    if (Math.abs(currentScrollPosition - lastScrollPosition.value) < 60) return;
    // show if scrolling up
    showHeader.value = currentScrollPosition < lastScrollPosition.value;
    lastScrollPosition.value = currentScrollPosition;
  };
</script>
