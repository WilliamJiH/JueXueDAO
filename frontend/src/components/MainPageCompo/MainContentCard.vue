<template>
  <div class="content-card-container mt-3">
    <b-link :to="'/article'">
      <img
        class="card-img"
        v-if="imgSrc !== ''"
        :src="require(`@/assets/${imgSrc}`)"
        alt=""
      />

      <img
        class="card-img"
        v-else
        src="https://www.lighthouselabs.ca/uploads/post/open_graph_image/459/Coding-vs-programming.jpg"
        alt=""
      />
    </b-link>
    <div class="text-content px-4">
      <div class="content-card-category">{{ category }}</div>
      <b-link :to="'/article'">
        <div class="content-card-title">{{ title }}</div></b-link
      >

      <div class="content-card-authors">
        <ul style="padding-left: 0px; margin-bottom: 0.3rem">
          <li
            style="
              display: inline;
              padding-right: 5px;
              font-size: 0.9rem;
              color: #616161;
            "
            v-for="(author, index) in authors"
            :key="index"
          >
            {{ author }}
          </li>
        </ul>
      </div>
      <div class="content-card-description">{{ desc }}</div>
      <div class="content-card-date my-3">{{ date }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainContentCard',
  props: {
    title: String,
    authors: Array,
    date: String,
    category: String,
    desc: String,
    imgSrc: String,
    address: String,
  },
}
</script>
<style scoped>
.card-img {
  width: 100%;
  height: 10rem;
  object-fit: cover;
}

.content-card-container {
  width: 100%;
  border: 1px solid #e0e0e0;
  box-shadow: 0px 10px 20px 0px #0000001a;
  border-radius: 1rem;
  overflow: hidden;
}

.content-card-category {
  font-size: 0.7rem;
  color: #10bea9;
  margin-top: 0.7rem;
}

.content-card-title {
  font-weight: 900;
  color: #191919;
  font-size: 1.2rem;
}

.content-card-description {
  height: 9rem;
  overflow-x: auto;
  overflow-y: auto;
  font-size: 0.9rem;
}

.content-card-date {
  font-size: 1rem;
  color: #616161;
}
</style>
