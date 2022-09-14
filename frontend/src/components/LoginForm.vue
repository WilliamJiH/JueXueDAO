<template>
  <div class="container px-0 mt-3">
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group id="input-group-1" label="电子飞鸽" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          placeholder="您的邮箱"
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
        >登录</b-button
      >
      <div
        class="registration-btn text-center mt-4"
        v-on:click="$emit('switchToRegister')"
        type="button"
      >
        注册编户
      </div>
    </b-form>
    <!-- <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card> -->
  </div>
</template>

<script>
export default {
  name: 'LoginForm',
  data() {
    return {
      form: {
        email: '',
        password: '',
      },
      show: true,
    }
  },
  methods: {
    onSubmit(event) {
      event.preve
      // 暂时把所有的login 都设成true
      localStorage.setItem('isAuthenticated', true)
      localStorage.setItem('user', {})
      this.$store.dispatch("connectWallet");
      this.$emit('setAuthenticated', true)
      this.$router.replace({ name: 'main' })
    },
    onReset(event) {
      event.preventDefault()
      // Reset our form values
      this.form.email = ''
      this.form.password = ''
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
