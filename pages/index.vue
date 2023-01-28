<script setup>
const { data: posts } = await useAsyncData("posts", () =>
  queryContent("/project").find()
);

const intro =
  "I am a front end developer. I use vue as my framework but i also have an experience using laravel as a back end services.";

useHead({
  title: "Rizky Fs Portfolio Website",
  meta: [
    {
      hid: "og:title",
      name: "og:title",
      content: "RizkyFs Portfolio Website",
    },
    {
      hid: "og:description",
      name: "og:description",
      content: intro,
    },
  ],
});
</script>

<template>
  <div class="xxl:mx-auto lg:mx-20 mx-4">
    <div class="relative">
      <img
        src="/img/profil.jpg"
        class="h-40 absolute lg:block hidden rounded-full right-1/2 translate-x-1/2 top-1/2 -translate-y-1/2"
      />
      <div class="relative">
        <div class="mt-10 h-5 bg-gradient"></div>
        <div class="py-10 lg:pb-14 lg:pt-40">
          <p class="text-center bg-white font-DM text-black lg:text-lg">
            {{ intro }}
          </p>
        </div>

        <div class="mb-10 h-5 bg-gradient"></div>
      </div>
    </div>

    <section class="mb-10">
      <div class="mb-10">
        <p class="font-Lexend font-bold text-center text-xl">PROJECT</p>
      </div>
      <Suspense>
        <div class="grid lg:grid-cols-2 gap-4">
          <div v-for="item in posts" :key="item">
            <NuxtLink :to="item._path">
              <div href="#" class="relative block group border-2">
                <img
                  :src="item.image"
                  class="h-[350px] w-full object-cover transition duration-500 group-hover:opacity-50"
                  alt="Project Picture"
                />
                <div
                  class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 text-2xl font-bold text-white group-hover:opacity-100 transition-all group-hover:translate-y-0"
                >
                  <p class="text-center font-lexend">{{ item.title }}</p>
                  <h3 class="text-xl font-medium text-white">
                    {{ item.year }}
                  </h3>
                </div>
                <div
                  class="absolute inset-0 flex flex-col items-start justify-end p-6 opacity-0 translate-y-8 transform transition-all group-hover:translate-y-0 group-hover:opacity-100"
                ></div>
              </div>
            </NuxtLink>
          </div>
        </div>
      </Suspense>
    </section>
  </div>
</template>
