<script>
import { ref } from "vue";
export default {
  name: "AttrsComp",
  // inheritAttrs: false,

  setup() {
    const form = ref({
      name: "",
      password: "",
    });
    
    function login() {
      console.log(form.value);
      //TODO: 登录

    }
    return {
      form,
      login,
    };
  },
};
</script>

<template>
  <!-- <el-button>attrs</el-button>
  <el-button v-bind="$attrs">attrs</el-button> -->
  <el-form :model="form" label-width="60px">
    <el-form-item>
      <template #label>
        <div class="form-title">用户名</div>
      </template>
      <el-input v-model="form.name" placeholder="请输入用户名" />
    </el-form-item>
    <el-form-item>
      <template #label>
        <div class="form-title">密码</div>
      </template>
      <el-input
        v-model="form.password"
        type="password"
        placeholder="请输入密码"
        :show-password="true"
      />
      <el-button @click="login">登录</el-button>
    </el-form-item>
  </el-form>
</template>

<style scoped>
.form-title {
  display: flex;
  justify-content: flex-start;
}
</style>
