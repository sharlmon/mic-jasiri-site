<script setup lang="ts">
const props = defineProps<{ error: { statusCode?: number } }>()
useHead({ title: 'Page not found | Mic-Jasiri Productions', meta: [{ name: 'robots', content: 'noindex' }] })
const is404 = computed(() => (props.error?.statusCode ?? 404) === 404)
</script>

<template>
  <NuxtLayout>
    <main id="main" class="not-found">
      <section class="section">
        <div class="kicker">{{ is404 ? '404' : 'Error' }}</div>
        <h1>{{ is404 ? 'This scene was cut.' : 'Something went wrong.' }}</h1>
        <p>{{ is404 ? 'The page you are looking for does not exist or has moved.' : 'Please try again in a moment.' }}</p>
        <NuxtLink class="button" to="/">Back to the home page</NuxtLink>
      </section>
    </main>
  </NuxtLayout>
</template>
