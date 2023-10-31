<template>
  <UButton ref="copy" class="copy">
    <UIcon name="i-ph-copy-duotone" v-if="state === 'copied'" class="w-5 h-5" />
    <UIcon name="i-ph-check-square-duotone" v-else class="w-5 h-5" />
  </UButton>
</template>
<script>
export default {
  data () {
    return {
      state: 'init'
    }
  },
  mounted () {
    const copyCode = new Clipboard(this.$refs.copy, {
      target (trigger) {
        return trigger.previousElementSibling
      }
    })
    copyCode.on('success', (event) => {
      event.clearSelection()
      this.state = 'copied'
      window.setTimeout(() => {
        this.state = 'init'
      }, 2000)
    })
  }
}
</script>
