<template>
  <div>
    <h1 class="main_heading">
      Приветствуем на новостном блоге московского политеха
    </h1>
    <div class="carousel__wrapper">
      <h2 class="carousel__title">Последние новости:</h2>
      <Carousel />
    </div>
  </div>
</template>

<script>
import Carousel from '@/components/CarouselComponent.vue'

export default {
  name: 'IndexPage',
  components: {
    Carousel,
  },
  layout: 'DefaultLayout',
}
</script>

<style>
.main_heading {
  margin: 200px 0;
  text-align: center;
  font-size: 42px;
}
.carousel__wrapper {
  height: 100vh;
  max-width: 80%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
