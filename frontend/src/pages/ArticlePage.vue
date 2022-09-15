<template>
  <div class="container">
    <div class="row mt-3">
      <div class="col-md-3">
        <div class="row">
          <div class="col-12 bg-white p-0 px-2 pb-3 mb-3">
            <div class="d-flex justify-content-between border-bottom py-2 px-3">
              <div class="author-name">{{article.authors[0]}}</div>
              <img
                class="profile-icon"
                src="../assets/images/profile_pic1.jpg"
                alt=""
              />
            </div>
            <div class="d-flex justify-content-between border-bottom py-2 px-3">
              <div class="article-title">{{article.title}}</div>
            </div>
            <div class="d-flex justify-content-between border-bottom py-2 px-3">
              <p><span class="fab fa-github-alt me-2"></span>文章获得</p>
              <a href="#">500砂砾值</a>
            </div>

            <div class="d-flex justify-content-between border-bottom py-2 px-3">
              <p>合约地址</p>
              <div style="word-break: break-all">{{ address }}</div>
            </div>
          </div>
        </div>

      </div>

      <div class="col-md-9">
        <PDFJSViewer :path="`${pdfFile.path}`" :fileName="`${pdfFile.name}`" />
      </div>
    </div>
  </div>
</template>

<script>
import PDFJSViewer from '@/components/PDFJSViewer'
export default {
  name: 'ArticlePage',
  components: {
    PDFJSViewer,
  },
  data() {
    return {
      pdfFile: { path: '绝学dao.pdf', name: '绝学dao.pdf' },
      address: 'cfxtest:aar0e79969taycse290egbwrvu3ha5fmcj70bk62a4',
      article: {
        title: '在图书馆喝奶茶学习能否提高学习效率',
        authors: ['小小本科生'],
        date: '2021-09-01',
        category: '社会心理',
        desc: '',
        content: '',
        },
    }
  },
  mounted() {
    this.pdfFile.path = '在图书馆喝奶茶学习能否提高学习效率.pdf'
    this.pdfFile.name = '在图书馆喝奶茶学习能否提高学习效率.pdf'
    // this.address = this.$route.query.address
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@200;300;400;500;600;700;900&display=swap');
.profile-icon {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  object-fit: cover;
}

p {
  font-size: 1rem;
}

.author-name {
  font-family: 'Poppins';
}

.article-title {
font-family: 'Noto Serif SC';
    font-size: 1rem;
    font-weight: 800;
  
}
</style>
