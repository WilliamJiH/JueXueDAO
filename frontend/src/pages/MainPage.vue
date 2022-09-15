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
        <!-- redirection button to upload page -->
        <b-button
          variant="primary"
          style="height: 40%; font-size: 2rem; font-weight: 600"
          v-on:click="upload"
          >投稿
        </b-button>
        <b-button
          variant="primary"
          style="height: 30%; font-size: 1.5rem; font-weight: 400"
          v-on:click="reviewerApply"
          >成为审稿人</b-button
        >
      </div>
    </div>
    <div class="row m-3 mt-5">
      <div class="col-md-8"><MainContentTable /></div>
      <div class="col-md-4">
        <div class="table-caption mb-3">吾日三读</div>
        <div class="recommand-card">
          <div class="recommand-card-title">
            搭建全球深度学习模型数据库
          </div>
          <div class="recommand-card-content">
           深度学习是机器学习的一个分支。 许多传统机器学习算法学习能力有限，数据量的增加并不能持续增加学到的知识总量，而深度学习系统可以通过访问更多数据来提升性能。 机器通过深度学习获得足够经验后，即可用于....
          </div>
        </div>
        <div class="recommand-card">
          <div class="recommand-card-title">转基因大猪对自然的侵害</div>
          <div class="recommand-card-content">
            非转基因大猪是通过自然界优胜劣汰选择基因的变化。从而消除了转基因食品对人体可能造成的潜在危害。长期食用。安全可靠。而转基因大猪可以抵抗杀草剂——草甘膦（毒滴混剂）。
          </div>
        </div>

        <div class="recommand-card">
          <div class="recommand-card-title">
            深度学习的人工智能如何通过图灵测试
          </div>
          <div class="recommand-card-content">
            图灵测试(英語:Turing
            test)是英國電腦科學家图灵於1950年提出的思想實驗,
            目的是测试机器能否表现出與人一樣的智能水準。
            测试時測試者通過電腦鍵盤輸入文本並通過屏幕輸出...
          </div>
        </div>
      </div>
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
  methods: {
    upload() {
      this.$router.push('/upload')
    },
    reviewerApply() {
      this.$router.push('/reviewerApplication')
    },
  },
}
</script>

<style scoped>
.main-searchbar {
  margin: 1rem 3rem;
  border-radius: 3rem;
  width: auto;
}
.table-caption {
  margin: 0rem 1rem;
  font-size: 1.5rem;
}

.recommand-card {
  margin: 1rem 1rem;
  border-radius: 1rem;
  background-color: #f5f5f567;
  padding: 1rem;
  font-size: 1.2rem;
  border: 1px solid #10bea9e6;
  max-height: 10rem;
  overflow: hidden;
  padding: 1rem;
}

.recommand-card-title {
  font-weight: 800;
}

.recommand-card-content {
  font-size: 0.8rem;
}
</style>
