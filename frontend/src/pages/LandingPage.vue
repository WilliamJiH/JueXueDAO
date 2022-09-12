<template>
  <div>
    <div class="row" style="height: 100vh; align-content: center">
      <div class="col-md-6 landing-caption my-3">知网贵，天下苦知网久矣</div>
      <div class="col-md-6">
        <div class="container">
          <div class="welcome-caption">愿与初相见，便成故人归</div>
          <LoginForm v-on="$listeners"/>
        </div>
      </div>
    </div>
    <button v-on:click="setAuth">Set Autho</button>
  </div>
</template>

<script>
import LoginForm from '../components/LoginForm.vue'
export default {
  name: 'LandingPage',
  components: {
    LoginForm,
  },
  methods: {
    setAuth() {
      this.$emit("setAuthenticated", true);
      this.$router.replace({ name: "main" });
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
