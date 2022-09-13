<template>
  <div>
    <div class="row" style="height: 100vh; align-content: center">
      <div class="col-md-6 landing-caption my-3">知网贵，天下苦知网久矣</div>
      <div class="col-md-6">
        <div class="container">
          <div class="welcome-caption">愿与初相见，便成故人归</div>
          <LoginForm
            v-if="!isRegisterForm"
            @switchToRegister="switchForm"
            v-on="$listeners"
          />
          <RegisterForm v-if="isRegisterForm" @switchToLogin="switchForm"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LoginForm from '../components/LoginForm.vue'
import RegisterForm from '../components/RegisterForm.vue'
export default {
  name: 'LandingPage',
  components: {
    LoginForm,
    RegisterForm,
  },
  data() {
    return {
      isRegisterForm: false,
    }
  },
  methods: {
    switchForm() {
      console.log('switch form')
      this.isRegisterForm = !this.isRegisterForm
    },
  },
}
</script>

<style scoped>
.test-color-1 {
  background: #dae5ff;
}

.test-color-2 {
  background: #edddff;
}
.grid-content {
  min-height: 100vh;
}

.landing-caption {
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 39px;
  color: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.welcome-caption {
  font-weight: 800;
  font-size: 1.2rem;
}
.grid-item-left {
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 39px;
  color: #000000;

  text-align: center;
  line-height: 100vh;
}

.grid-item-right {
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 5px;
  float: right;

  font-family: 'Gilroy', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 60px;
}

.grid-item-back {
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 5px;
  float: left;

  font-family: 'Gilroy', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 60px;
}

.form-section {
  font-family: 'Gilroy', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
}

.item-flex {
  flex: none;
  flex-grow: 0;
}
</style>
