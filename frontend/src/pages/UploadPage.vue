<template>
  <div class="container mt-3">
    <div class="upload-caption p-3" style="font-size: 1.5rem; font-weight: 600">
      投稿
    </div>

    <div class="upload-form container">
      <b-form>
        <b-form-group id="input-group-1" label="文章标题" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="form.title"
            type="text"
            placeholder="Web 3.0 原住民生态研究"
            required
          ></b-form-input>
        </b-form-group>
        <!-- 分类 -->
        <b-form-group id="input-group-2" label="文章分类" label-for="input-2">
          <b-form-select
            id="input-2"
            v-model="form.category"
            :options="categoryOptions"
            required
          ></b-form-select>
        </b-form-group>

        <b-form-group id="input-group-2" label="摘要" label-for="input-2">
          <b-form-textarea
            id="input-2"
            v-model="form.content"
            type="text"
            placeholder="Web3的发展已经超越了本身的金融渊源及界限(这里指Crypto赛道源于金融领域的比特币)整个Web3社区的构成(Community), 涵盖从艺术从业者到小生意人,还有普罗大众。因此, 智能监管必须考量Web3潜在用户的多样性, 和应用案例的多元化。"
            size="lg"
            required
          ></b-form-textarea>
        </b-form-group>

        <!-- 其他作者 -->
        <div style="display: flex">
          <b-form-group
            id="input-group-2"
            label=""
            label-for="input-2"
            style="width: 100%"
          >
            <div class="form-title-with-btn">
              <div>其他作者</div>
              <b-button class="check-address-btn" variant="primary"
                >查看作者</b-button
              >
            </div>
            <b-form-input
              id="input-2"
              v-model="form.author"
              type="text"
              placeholder="作者1, 作者2, 作者3"
              required
            ></b-form-input>
          </b-form-group>
        </div>

        <b-form-group id="input-group-3" label="封面图片" label-for="input-3">
          <b-form-file
            id="input-3"
            v-model="form.image"
            type="file"
            placeholder="图片"
            accept="image/*"
          ></b-form-file>
        </b-form-group>

        <!-- 上传文章 -->
        <b-form-group id="input-group-4" label="上传文章" label-for="input-4">
          <b-form-file
            id="input-4"
            v-model="form.file"
            type="file"
            placeholder="文章"
            accept=".pdf, .doc, .docx"
          ></b-form-file>
        </b-form-group>

        <!-- 添加引用文章 -->
        <b-form-group
          id="input-group-2"
          label=""
          label-for="input-2"
          style="width: 100%"
        >
          <div class="form-title-with-btn">
            <div>添加引用文章</div>
            <b-button class="check-address-btn" variant="primary"
              >查看引用文章</b-button
            >
          </div>
          <b-form-input
            id="input-2"
            v-model="form.reference"
            type="text"
            placeholder="文章1, 文章2, 文章3"
            required
          ></b-form-input>
        </b-form-group>

        <!-- 文章标签 -->
        <b-form-group
          id="input-group-2"
          label="文章标签"
          label-for="input-2"
          style="width: 100%"
        >
          <b-form-tags input-id="tags-basic" v-model="form.tags"></b-form-tags>
        </b-form-group>

        <b-button class="mt-3" v-on:click="upload" variant="primary"
          >上传</b-button
        >
      </b-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UploadPage',
  data() {
    return {
      form: {
        title: '',
        category: '',
        content: '',
        reference: '',
        image: '',
        tags: ['Blockchain', 'Web3.0'],
      },
      categoryOptions: [
        { value: null, text: '请选择' },
        { value: '1', text: '科技' },
        { value: '2', text: '社会' },
        { value: '3', text: '经济' },
        { value: '4', text: '文化' },
        { value: '5', text: '生态' },
      ],
    }
  },
  methods: {
    upload() {
      console.log(this.form)
      this.$notify({
        title: '通知',
        message: '审核合约创建成功',
        duration: 3000,
        type: 'success',
      })
    },
  },
}
</script>

<style scoped>
.form-group {
  margin-top: 1rem;
}

.form-title-with-btn {
  margin-bottom: 0.5rem;
  display: flex;
  width: 100%;
  justify-content: space-between;
}
.check-address-btn {
  float: right;
  background-color: #086257;
  border-color: #086257;
  font-size: 0.8rem;
  padding: auto;
}
</style>
