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
            <div class="d-flex" style="justify-content: space-between">
              <div style="font-size: 0.8rem; color: #0000007a">
                绝学价值: {{ review.value }}
              </div>
            </div>
            <div style="font-size: 0.8rem; color: #10bea9">
              {{ review.receive }}
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
          value: '0.2',
          receive: '未领取',
        },
        {
          title: '用量子计算机解决先有鸡还是先有蛋的问题',
          value: '0.6',
          receive: '已领取',
        },
        {
          title: '分手后想追回来怎么办?分手后老想着复合怎么办?',
          value: '0.3',
          receive: '已领取',
        },
        {
          title: '自己冲动提了分手，又想挽回！?',
          value: '0.5',
          image: 'images/user_article3.png',
          receive: '未领取',
        },
        {
          title:
            '如何减轻我给前女友造成的分手痛苦并如有可能在未来重新追回她呢？',
          value: '0.7',
          receive: '已领取',
        },
        {
          title: '为什么自己提出分手后又想挽回？',
          value: '0.4',
          receive: '未领取',
        },
        {
          title: '分手几个月后，还是喜欢心中放不下，如何再追回？',
          value: '0.3',
          receive: '已领取',
        },
        {
          title:
            '做不成朋友的分手情侣，为什么彼此害怕相见？为什么分手之后不能做朋友？不做恋人做好朋友啊~',
          value: '0.5',
          receive: '已领取',
        },
        {
          title: '分手后应该绝交么？',
          value: '0.1',
          receive: '已领取',
        },
        {
          title: '有没有分手之后，两个人作为朋友依然在一起的？',
          value: '0.9',
          receive: '未领取',
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
