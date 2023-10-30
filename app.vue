<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <UNotifications
    :ui="{
      wrapper: 'w-1/2 ',
      title: 'text-xs font-medium',
      padding: 'p-2',
      rounded: 'rounded-md',
    }" />
</template>
<script setup>
  useSchemaOrg([
    defineWebSite({
      name: "Dinar Permadi Yusup",
    }),
    definePerson({
      name: "Dinar Permadi Yusup",
      image: "/me.jpg",
    }),
    defineWebPage(),
  ]);
</script>
