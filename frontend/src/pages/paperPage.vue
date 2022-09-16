<template>
  <div class="container">
    <div>
      <div>
        <div
          class="row review-block"
          v-for="(review, index) in reviewArticles"
          :key="index"
        >
          <div>
            <div
              class="title"
              style="font-size: 0.9rem; font-weight: 900; letter-spacing: 1px"
            >
              {{ review.title }}
            </div>
            <div
              class="d-flex"
              v-if="review.status === '已领取'"
              style="justify-content: space-between"
            >
              <div style="font-size: 0.8rem; color: rgb(16 119 190)">
                绝学价值: {{ review.value }}
              </div>
            </div>

            <div
              v-if="review.status === '未领取'"
              style="font-size: 0.8rem; color: rgb(190 120 16)"
            >
              {{ review.status }}
            </div>
            <div
              v-else-if="review.status === '已领取'"
              style="font-size: 0.8rem; color: #10bea9"
            >
              {{ review.status }}
            </div>
            <div
              v-else-if="review.status === '审核中'"
              style="font-size: 0.8rem; color: #ffc107"
            >
              {{ review.status }}
            </div>
            <div
              v-else-if="review.status === '审核失败'"
              style="font-size: 0.8rem; color: rgb(190 16 16)"
            >
              {{ review.status }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'myPaperPage',
  components: {},
  data() {
    return {
      article_index: 0,
      reviewArticles: [
        {
          title: '绝学Dao- 去中心化组织是否能改变学术研究的现状',
          value: '',
          status: '审核中',
        },
        {
          title: '用量子计算机解决先有鸡还是先有蛋的问题',
          value: '',
          status: '审核中',
        },
        {
          title: '分手后应该绝交么？',
          value: '',
          status: '未领取',
        },
        {
          title: '在图书馆喝奶茶学习能否提高学习效率',
          value: '1 绝学砖块, 5绝学砂砾',
          status: '已领取',
        },

        {
          title: '有没有分手之后，两个人作为朋友依然在一起的？',
          value: '1 绝学砖块, 20绝学砂砾',
          status: '已领取',
        },
        {
          title: '如何在分手后保持友谊？',
          value: '1 绝学砖块, 25绝学砂砾',
          status: '审核中',
        },

        {
          title: 'Copilot 图像计算与应用',
          value: '',
          status: '审核失败',
        },
      ],
    }
  },
  methods: {},
}
</script>

<style scoped>
.review-block {
  display: flex;
  border-bottom: 1px solid #818181;
  overflow: hidden;
  margin-bottom: 0.5rem;
  padding: 20px 5px;
}

.red {
  color: red;
}

.vote-btn {
  font-size: 1.5rem;
  padding: 0.5rem 1.5rem;
}
</style>
