<template>
  <UCard
    class="text-sm"
    :ui="{
      body: {
        padding: 'py-1 p-1 sm:p-1 sm:px-2 -mb-6 sm:-mb-5 sm:py-1 ',
      },
      header: {
        padding: 'py-0 p-1 sm:p-1 sm:py-0',
      },
      footer: {
        padding: 'px-1 py-0 ',
      },
    }">
    <div class="w-full text-sm -mb-6 flex p-1 items-center justify-between">
      <span v-if="!props.filename">Code</span>
      <span v-else>{{ props.filename }}</span>
      <div class="flex w-full justify-end">
        <UButton
          size="xs"
          :icon="copied ? 'i-ph-check-square-duotone' : 'i-ph-copy-duotone'"
          color="gray"
          variant="ghost"
          aria-label="Theme"
          @click="copy(props.code); toast.add({ title: 'Code berhasil di copy', id:'1', timeout: 1500, icon:'i-ph-check-circle-duotone',  })" />
        <!-- Gunakan props.code -->
      </div>
    </div>
    <slot />
  </UCard>
</template>
<script setup lang="ts">
  const toast = useToast();
  const { copy, copied } = useClipboard();
  const props = withDefaults(
    defineProps<{
      code?: string;
      language?: string | null;
      filename?: string | null; // Hanya gunakan tipe string
    }>(),
    { code: "", language: null, filename: null } // Nilai default untuk filename adalah "Code"
  );
</script>
