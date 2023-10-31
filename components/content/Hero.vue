<template>
  <UContainer class="my-24 items-center flex justify-center">
    <div class="">
      <!-- Title -->
      <div class="max-w-3xl text-center mx-auto">
        <h1
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          class="md:text-g2 font-body">
          <ContentSlot :use="$slots.default" unwrap="p" /> <br />
          <span
            class="text-permadi-600 font-title text-g2 md:text-g4 dark:text-permadi-400">
            <ContentSlot :use="$slots.warna" unwrap="p" />
          </span>
        </h1>
      </div>
      <!-- End Title -->
      <div class="mt-5 max-w-3xl text-center mx-auto">
        <p data-aos="fade-up" data-aos-anchor-placement="top-bottom">
          <slot name="deskripsi" />
        </p>
      </div>
      <!-- Buttons -->
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        class="mt-8 flex w-full sm:inline-flex justify-center">
        <UButton icon="i-ph-download-duotone" label="Download CV" size="xs" />
      </div>
      <!-- End Buttons -->
    </div>
  </UContainer>
  <!-- End Hero -->
</template>
<script setup>
  const textWrapper = ref(null);
  onMounted(() => {
    if (textWrapper.value) {
      const text = textWrapper.value.textContent;
      const letters = text.split("");
      textWrapper.value.innerHTML = letters
        .map((letter) => `<span class="letter">${letter}</span>`)
        .join("");
    }
    useAnime
      .timeline({
        loop: true,
        duration: 1000,
      })
      .add({
        targets: " .letter",
        translateX: [100, 0],
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 500,
        delay: (el, i) => 70 * i,
      })
      .add({
        targets: " .tes",
        scale: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000,
      });
  });
</script>
