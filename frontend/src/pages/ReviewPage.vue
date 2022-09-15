<template>
  <div class="container">
    <div class="row mt-3">
      <div class="col-md-3">
        待审文章
        <div
          class="row review-block"
          v-for="(review, index) in reviewArticles"
          :key="index"
        >
          <div class="col-4 p-0">
            <img
              :src="require(`@/assets/${review.image}`)"
              alt="Responsive image"
              style="width: 100%; height: 100%; object-fit: cover"
            />
          </div>
          <div class="col-7">
            <div
              class="title"
              style="font-size: 0.9rem; font-weight: 900; letter-spacing: 1px"
              v-on:click="switchPdf(review.pdfPath, review.title, index)"
            >
              {{ review.title }}
            </div>
            <div class="d-flex mt-1" style="justify-content: space-between">
              <div style="font-size: 0.8rem; color: #0000007a">
                {{ review.author }}
              </div>
              <div style="font-size: 0.8rem; color: #10bea9">
                {{ review.date }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-9">
        <PDFJSViewer :path="`${pdfFile.path}`" :fileName="`${pdfFile.name}`" />
        <div class="text-center m-3">
          <div class="m-3">文章合约地址：{{ reviewArticles[article_index].address }}</div>
          <b-button
            style="padding: 0.5rem 2rem; font-size: 1.2rem; font-weight: 800"
          >
            投票
          </b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PDFJSViewer from '@/components/PDFJSViewer'
export default {
  name: 'ReviewPage',
  components: {
    PDFJSViewer,
  },
  data() {
    return {
      article_index: 0,
      reviewArticles: [
        {
          title: '绝学Dao- 去中心化组织是否能改变学术研究的现状',
          author: '小小本科生',
          address: 'cfxtest:aar0e79969taycse290egbwrvu3ha5fmcj70bk62a4',
          image: 'images/user_article4.png',
          date: '2021-05-01',
          pdfPath: '绝学dao.pdf',
        },
        {
          title: '用量子计算机解决先有鸡还是先有蛋的问题',
          author: '小小本科生',
          address: 'cfxtest:aar0e79969taycse290egbabsu3ha5f8540bk62a4',
          image: 'images/user_article3.png',
          date: '2021-05-01',
          pdfPath: '用量子计算机解决先有鸡还是先有蛋的问题.pdf',
        },
      ],
      pdfFile: { path: '绝学dao.pdf', name: '绝学dao.pdf' },
    }
  },
  methods: {
    getImgUrl(imgSrc) {
      return require(imgSrc)
    },
    switchPdf(pdfPath, pdfName, index) {
      this.pdfFile.path = pdfPath
      this.pdfFile.name = pdfName
      this.article_index = index
    },
  },
}
</script>

<style scoped>
.review-block {
  display: flex;
  border-bottom: 1px solid #818181;
  overflow: hidden;
  margin-bottom: 0.5rem;
  padding: 15px 5px;
}
</style>
