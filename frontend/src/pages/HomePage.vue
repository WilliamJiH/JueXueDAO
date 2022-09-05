<template>
  <el-main style="padding: 0 40px">
    <el-row :gutter="20">
      <el-col :span="12">
        <!-- Add test-color-1 in class below to test -->
        <div class="grid-content">
          <div class="grid-item-left">知网贵，天下苦知网久矣</div>
        </div>
      </el-col>
      <el-col :span="12">
        <!-- Add test-color-2 in class below to test -->
        <div class="grid-content">
          <el-header style="padding: 0 100px">
            <div class="grid-item-back" v-show="isRegisterPage">
              <i
                class="el-icon-arrow-left item-flex"
                style="color: #3665c5; order: 0"
              ></i>
              <p class="item-flex" style="color: #bdbdbd; order: 1">Back</p>
            </div>
            <div class="grid-item-right" v-show="isLoginPage">
              <div class="item-flex" style="color: #bdbdbd; order: 0">
                Don't have an account?
              </div>
              <div class="item-flex" style="color: #3665c5; order: 1">
                Signup
              </div>
            </div>
          </el-header>
          <el-main style="padding: 20px 100px">
            <div class="form-section" v-show="isLoginPage">
              <div style="font-weight: 900; font-size: 24px">Welcome</div>
              <p
                style="font-weight: 600; font-size: 16px; padding-bottom: 20px"
              >
                Login to continue
              </p>
              <el-form
                ref="loginForm"
                :model="loginForm"
                label-width="100px"
                style="width: 500px"
              >
                <el-form-item
                  label="Email"
                  style="font-weight: 600; font-size: 16px"
                >
                  <el-input
                    v-model="loginForm.email"
                    prefix-icon="el-icon-message"
                  ></el-input>
                </el-form-item>
                <el-form-item
                  label="Password"
                  prop="pass"
                  style="font-weight: 600; font-size: 16px"
                >
                  <el-input
                    type="password"
                    v-model="loginForm.pass"
                    autocomplete="off"
                    prefix-icon="el-icon-lock"
                    suffix-icon="el-icon-turn-off"
                  ></el-input>
                  <div style="display: flex">
                    <el-checkbox
                      v-model="rememberMe"
                      style="font-weight: 600; font-size: 16px"
                      >Remember Me</el-checkbox
                    >
                    <div
                      style="
                        color: #3665c5;
                        font-weight: 600;
                        font-size: 14px;
                        margin-left: auto;
                        margin-right: 0;
                      "
                    >
                      Forgot Password?
                    </div>
                  </div>
                </el-form-item>
                <el-form-item>
                  <el-button
                    type="primary"
                    @click="onSubmit"
                    style="width: 400px"
                    >Login</el-button
                  >
                </el-form-item>
              </el-form>
            </div>
          </el-main>
        </div>
      </el-col>
    </el-row>
  </el-main>
</template>

<script>
import Navbar from '../components/Navbar.vue'

export default {
  name: 'HomePage',
  components: {
    Navbar,
  },

  data() {
    return {
      isLoginPage: true,
      isRegisterPage: false,
      loginForm: {
        email: '',
        pass: '',
      },
      rememberMe: false,
    }
  },

  methods: {},
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
