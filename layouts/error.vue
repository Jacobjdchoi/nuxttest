<template>
  <div class="container">
      <h1 v-if="error.statusCode === 404">Page not found</h1>
      <nuxt-link to="/">Go to homepage</nuxt-link>
  </div>
</template>
<script>
    export default {
        props: ['error'],
        layout: 'default'
    }
</script>