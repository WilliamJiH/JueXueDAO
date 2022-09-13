<template>
  <div class="container px-0 mt-3">
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <div class="row p-0">
        <div class="col-6">
          <b-form-group id="input-group-1" label="姓氏" label-for="input-1">
            <b-form-input
              id="input-1"
              v-model="form.lastname"
              type="text"
              placeholder="姓氏"
              required
            ></b-form-input>
          </b-form-group>
        </div>
        <div class="col-6">
          <b-form-group id="input-group-2" label="名字" label-for="input-1">
            <b-form-input
              id="input-2"
              v-model="form.firstname"
              type="text"
              placeholder="名字"
              required
            ></b-form-input>
          </b-form-group>
        </div>
      </div>

      <b-form-group id="input-group-3" label="电子飞鸽" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="form.email"
          type="email"
          placeholder="您的邮箱"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-4" label="电话" label-for="input-4">
        <b-form-input
          id="input-4"
          v-model="form.number"
          type="number"
          placeholder="您的电话"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="密钥" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.password"
          type="password"
          placeholder="您的密码"
          required
        ></b-form-input>
      </b-form-group>

      <b-button class="login-btn mt-3" type="submit" variant="primary"
        >注册编户</b-button
      >
      <div
        class="registration-btn text-center mt-4"
        v-on:click="$emit('switchToLogin')"
        type="button"
      >
        <span style="color: #848989;">已有编户? </span>登入
      </div>
    </b-form>
    <!-- <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card> -->
  </div>
</template>

<script>
export default {
  name: 'RegisterForm',
  data() {
    return {
      form: {
        email: '',
        password: '',
        lastname: '',
        firstname: '',
        number: '',
      },
      show: true,
    }
  },
  methods: {
    onSubmit(event) {
      event.preve
    },
    onReset(event) {
      event.preventDefault()
      // Reset our form values
      this.form.email = ''
      this.form.password = ''
      this.form.lastname = ''
      this.form.firstname = ''
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    },
  },
}
</script>

<style scoped>
.login-btn {
  width: 100%;
  border-radius: 0.5rem;
}

.registration-btn {
  font-size: 0.8rem;
  color: #10bea9;
}
</style>
