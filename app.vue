<template>
  <div class="h-screen mx-auto max-w-screen-2xl bg-zinc-900">
    <NuxtLayout>
      <NuxtPage></NuxtPage>
    </NuxtLayout>
  </div>
</template>
<script setup>
useHead({
  title: "Rizky Febiginta Saputra Portfolio Website",
  meta: [{ name: "OIKI is Portfolio website of Rizky", content: "My Project" }],
});
</script>
<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.3s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
