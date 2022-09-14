<template>
  <div class="container px-0 mt-3">
    <b-form v-if="show">
      <!-- 学历 -->
      <b-form-group id="input-group-1" label="学历" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="text"
          placeholder="您的学历"
          required
        ></b-form-input>
      </b-form-group>

      <!-- 学历认证文件 -->
      <b-form-group id="input-group-4" label="学历认证文件" label-for="input-4">
        <b-form-file
          id="input-4"
          v-model="form.file"
          type="file"
          placeholder="学历认证文件"
          accept=".pdf, .doc, .docx"
        ></b-form-file>
      </b-form-group>

      <!-- 审核范畴 -->
      <b-form-group id="input-group-2" label="审核范畴" label-for="input-2">
        <b-form-select
          id="input-2"
          v-model="form.category"
          :options="categoryOptions"
          required
        ></b-form-select>
      </b-form-group>

      <!-- 为什么想成为审核员 -->
      <b-form-group
        id="input-group-2"
        label="为什么想成为审核员"
        label-for="input-2"
        style="width: 100%"
      >
        <b-form-textarea
          id="input-2"
          v-model="form.reason"
          type="text"
          placeholder="为什么想成为审核员"
          required
        ></b-form-textarea>
      </b-form-group>
      <b-button class="login-btn mt-3" v-on:click="apply" variant="primary"
        >申请</b-button
      >
    </b-form>
  </div>
</template>

<script>
export default {
  name: 'ReviewerApplicationPage',
  data() {
    return {
      show: true,
      form: {
        email: '',
        file: '',
        category: '',
        reason: '',
      },
      categoryOptions: [
        { value: '1', text: '计算机科学' },
        { value: '2', text: '数学' },
        { value: '3', text: '物理' },
        { value: '4', text: '化学' },
        { value: '5', text: '生物' },
        { value: '6', text: '医学' },
        { value: '7', text: '心理学' },
        { value: '8', text: '经济学' },
        { value: '9', text: '管理学' },
        { value: '10', text: '社会学' },
        { value: '11', text: '政治学' },
        { value: '12', text: '历史学' },
        { value: '13', text: '地理学' },
        { value: '14', text: '哲学' },
        { value: '15', text: '法学' },
        { value: '16', text: '教育学' },
        { value: '17', text: '文学' },
        { value: '18', text: '艺术' },
        { value: '19', text: '体育' },
        { value: '20', text: '农学' },
        { value: '21', text: '林学' },
        { value: '22', text: '海洋学' },
        { value: '23', text: '天文学' },
        { value: '24', text: '地质学' },
        { value: '25', text: '工程学' },
        { value: '26', text: '军事学' },
        { value: '27', text: '其他' },
      ],
    }
  },
}
</script>

<style></style>
