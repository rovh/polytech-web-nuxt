<template>
  <ul v-if="articles" class="articles__list">
    <li
      v-for="article in articles"
      :key="article.id"
      class="articles__item article"
    >
      <article>
        <h2>{{ article.name }}</h2>
        <p>{{ article.shortDesc }}</p>
        <img
          :src="'images/' + article.preview_image"
          :alt="article.name + 'card image'"
        />
        <router-link :to="'/articles/' + article.id"> Подробнее...</router-link>
      </article>
    </li>
  </ul>
  <div v-else>Loading data</div>
</template>
<script>
import { apiCall } from '../../services/api'

export default {
  name: 'ArticlePage',
  layout: 'default',
  data() {
    return { articles: null }
  },
  async mounted() {
    await apiCall('get', 'articles').then((response) => {
      this.articles = response
    })
  },
}
</script>

<style>
.articles__item {
  background: #272727;
  margin: 5px 0;
  padding: 8px;
  color: white;
  break-inside: avoid;
}
.articles__list {
  list-style-type: none;
  padding: 24px;
  columns: 4;
}
.article img {
  width: 100%;
}
.article a {
  color: white;
}
@media screen and (max-width: 1010px) {
  .articles__list {
    columns: 2;
  }
}
@media screen and (max-width: 768px) {
  .articles__list {
    columns: 1;
  }
}
</style>
