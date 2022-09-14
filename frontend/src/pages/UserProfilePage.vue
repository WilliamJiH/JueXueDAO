<template>
  <div class="container">
    <div class="row">
      <div class="col-md-3">
        <div class="row">
          <div class="col-12 bg-white p-0 px-3 py-3 mb-3">
            <div class="d-flex flex-column align-items-center">
              <img
                class="profile-img"
                src="../assets/images/profile_pic1.jpg"
                alt=""
              />
              <p class="fw-bold h4 mt-3">Yang TingJin</p>
              <p class="text-muted">ytj@juexuedao.com</p>
              <p class="text-muted mb-3">多伦多大学 - 本科</p>
            </div>
          </div>
          <div class="col-12 bg-white p-0 px-2 pb-3 mb-3">
            <div class="d-flex justify-content-between border-bottom py-2 px-3">
              <p><span class="fas fa-globe me-2"></span>Scholar Bricks</p>
              <a href="#">10</a>
            </div>
            <div class="d-flex justify-content-between border-bottom py-2 px-3">
              <p><span class="fab fa-github-alt me-2"></span>Scholar Sand</p>
              <a href="#">2</a>
            </div>
          </div>
        </div>

        <div class="mt-3 d-flex justify-content-center">
          <div
            style="
              padding: 0.5rem 1.5rem;
              border-radius: 0.7rem;
              border: 1px solid #10bea9;
            "
          >
            <b-link to="/UserArticles">文章总览</b-link>
          </div>
        </div>
      </div>
      <div class="col-md-9 ps-md-4">
        <div class="row p-5">
          <div class="col-12 bg-white px-3 mb-3 pb-3">
            <div
              class="d-flex align-items-center justify-content-between border-bottom"
            >
              <p class="py-2">尊称</p>
              <p class="py-2 text-muted">小小本科生</p>
            </div>
            <div
              class="d-flex align-items-center justify-content-between border-bottom"
            >
              <p class="py-2">电子飞鸽</p>
              <p class="py-2 text-muted">fip@jukmuh.al</p>
            </div>
            <div
              class="d-flex align-items-center justify-content-between border-bottom"
            >
              <p class="py-2">电话</p>
              <p class="py-2 text-muted">(239) 816-9029</p>
            </div>

            <div class="d-flex align-items-center justify-content-between">
              <p class="py-2">公钥地址</p>
              <p class="py-2 text-muted">
                cfxtest:acfg1y2j1etc48krz4g1wyu841kdymwf6jy3vs7ren
              </p>
            </div>
          </div>
          <div class="col-12 bg-white px-3 pb-2">
            <h6 class="py-3">
              <i class="text-info mb-2">最近审核状态</i>
              <UserArticleTable :articles="this.recentReviewArticles" />
            </h6>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserArticleTable from '../components/UserArticleTable.vue'
export default {
  name: 'UserProfilePage',
  components: { UserArticleTable },
  data() {
    return {
      recentReviewArticles: [
        {
          title: '在图书馆喝奶茶学习能否提高学习效率',
          address: 'cfxtest:aar0e79969taycse290egbwrvu3ha5fmcj70bk62a4',
          date: '2021-05-01',
          status: 'pass',
        },
        {
          title: 'Copilot 图像计算与应用',
          address: 'cfxtest:aar0e79969taycse290egbwrvu3ha5fmcj70bk62a4',
          date: '2021-05-01',
          status: 'failed',
        },
        {
          title: '用量子计算机解决先有鸡还是先有蛋的问题',
          address: 'cfxtest:aar0e79969taycse290egbwrvu3ha5fmcj70bk62a4',
          date: '2021-05-01',
          status: 'progress',
        },
      ],
    }
  },
}
</script>

<style scoped>
.profile-img {
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  object-fit: cover;
}
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
}

.breadcrumb {
  background-color: #c5cee4;
}

.breadcrumb a {
  text-decoration: none;
}

.container {
  max-width: 1000px;
  padding: 0;
}

p {
  margin: 0;
}
</style>
