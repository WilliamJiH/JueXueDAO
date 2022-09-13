<template>
  <div>
    <div class="main-searchbar input-group">
      <input
        type="search"
        class="form-control"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="search-addon"
        v-model="searchText"
        style="border-radius: 1rem"
      />
    </div>
    <!-- category selector -->
    <div class="category-selector text-center">
      <b-form-radio-group
        v-model="selected"
        :options="options"
        name="radio-inline"
      ></b-form-radio-group>
    </div>

    <div class="row m-3">
      <div class="col-md-8 pr-2">
        <MainPageCarousel />
      </div>
      <div
        class="col-md-4 pl-2"
        style="
          display: flex;
          flex-direction: column;
          justify-content: space-around;
        "
      >
        <b-button
          variant="primary"
          style="height: 40%; font-size: 2rem; font-weight: 600"
          >投稿</b-button
        >
        <b-button
          variant="primary"
          style="height: 30%; font-size: 1.5rem; font-weight: 400"
          >成为审稿人</b-button
        >
      </div>
    </div>
    <div class="row m-3 mt-5">
      <div class="col-md-8"><MainContentTable /></div>
      <div class="col-md-4"></div>
    </div>
  </div>
</template>

<script>
import MainPageCarousel from '../components/MainPageCompo/MainPageCarousel.vue'
import MainContentTable from '../components/MainPageCompo/MainContentTable.vue'
export default {
  name: 'MainPage',
  components: { MainPageCarousel, MainContentTable },
  data() {
    return {
      searchText: '',
      selected: 'lunwen',
      options: [
        { text: '学术论文', value: 'lunwen' },
        { text: '期刊', value: 'qikan' },
        { text: '专利', value: 'zhuanli' },
        { text: '文件', value: 'wenjian' },
        { text: '图书', value: 'tushu' },
      ],
    }
  },
}
</script>

<style scoped>
.main-searchbar {
  margin: 1rem 3rem;
  border-radius: 3rem;
  width: auto;
}
</style>
