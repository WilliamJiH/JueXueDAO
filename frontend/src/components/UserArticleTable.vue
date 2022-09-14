<template>
  <div class="page-content page-container my-3" id="page-content">
    <div class="padding">
      <div class="row container d-flex justify-content-center m-0 p-0">
        <div class="col-12 grid-margin stretch-card p-0">
          <div class="card">
            <div class="card-body">
              <div class="table-responsive">
                <table class="table">
                  <thead>
                    <tr>
                      <th style="border-top: none">标题</th>
                      <th style="border-top: none">地址</th>
                      <th style="border-top: none">审核日期</th>
                      <th style="border-top: none">审核状态</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="article in articles" :key="article.id">
                      <td>{{ article.title }}</td>
                      <td style="word-break: break-word">
                        {{ article.address }}
                      </td>
                      <td>{{ article.date }}</td>
                      <td>
                        <label
                          v-if="article.status == 'failed'"
                          class="badge badge-danger"
                          >审核未通过</label
                        >
                        <label
                          v-if="article.status == 'pass'"
                          class="badge badge-success"
                          >审核通过</label
                        >
                        <label
                          v-if="article.status == 'progress'"
                          class="badge badge-warning"
                          >审核进行中</label
                        >
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserArticleTable',
  props: {
    articles: {
      type: Array,
      default: [],
    },
  },

  mounted() {
    console.log(this.articles)
  },
}
</script>

<style></style>
