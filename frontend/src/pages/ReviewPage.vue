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
              v-on:click="switchPdf(index)"
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
          <div class="m-3">
            文章合约地址：{{ reviewArticles[article_index].address }}
          </div>
          <b-button
            style="padding: 0.5rem 2rem; font-size: 1.2rem; font-weight: 800"
            v-b-modal.modal-1
          >
            投票
          </b-button>
          <b-modal id="modal-1" hide-footer title="投票选择" ref="vote-modal">
            <div class="d-flex m-5" style="justify-content: space-between">
              <b-button
                class="vote-btn"
                variant="danger"
                v-on:click="submitVote"
                >回退</b-button
              >
              <b-button
                class="vote-btn"
                variant="success"
                v-on:click="submitVote"
                >通过</b-button
              >
            </div>
          </b-modal>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PDFJSViewer from '@/components/PDFJSViewer'
import { Notification } from 'element-ui'
const {
  abi: PaperApprovalContractAbi,
} = require('../assets/PaperApprovalContract.json')

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
    switchPdf(index) {
      this.pdfFile.path = this.reviewArticles[index].pdfPath
      this.pdfFile.name = this.reviewArticles[index].title
      this.article_index = index
    },

    async submitVote() {
      const getters = this.$store.getters
      const cfx = getters.getCfx
      const tempPaperAddress = "cfxtest:acdk8af9k12hwfx7m6u6mmrhc5b18s2rtpm0nb5mw1"
      const paperReviewContract = cfx.Contract({
        abi: PaperApprovalContractAbi,
        address: tempPaperAddress,
      })
      
      
      
      // for demo only
      //remove the first element in reviewArticles
      this.reviewArticles.shift()
      this.pdfFile.path = this.reviewArticles[0].pdfPath
      this.pdfFile.name = this.reviewArticles[0].title
      const Jux = {
        title: '绝学Dao- 去中心化组织是否能改变学术研究的现状',
        authors: ['小小本科生'],
        date: '2021-05-01',
        category: '计算机科学',
        desc: '绝学dao 的核心，就是给知识赋值。等知识有价值之后，学术研究就可以有收益。而我们给知识赋值的方式则是通过智能合约来进行。那先让我们讲一下有关于知识的几个点。知识的传播，免费。知识的引用，收费。',
        imgSrc: 'images/user_article4.png',
        address: 'cfxtest:aar0e79969taycse290egbwrvu3ha5fmcj70bk62a4',
        pdfPath: '绝学dao.pdf',
      }
      let x = getters.getCards
      x.push(Jux)
      this.$store.commit('setCards', x)

      // call contract
      console.log(paperReviewContract)
      // const result = await paperReviewContract.commitVote(true);
      // console.log(result)

      this.$refs['vote-modal'].hide()
      Notification.closeAll()
      this.$notify({
        title: '通知',
        message: '投票结果已提交',
        duration: 3000,
        type: 'success',
      })
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

.vote-btn {
  font-size: 1.5rem;
  padding: 0.5rem 1.5rem;
}
</style>
