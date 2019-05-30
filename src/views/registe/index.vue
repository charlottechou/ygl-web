<template>
  <div class="registe">
    <el-steps :active="active">
      <el-step title="填写用户名密码" icon="el-icon-user"></el-step>
      <el-step title="填写个人资料" icon="el-icon-edit"></el-step>
      <el-step title="完成注册" icon="el-icon-finished"></el-step>
    </el-steps>
    <div class="userAccount" v-if="active === 1">
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="账号" prop="name">
          <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <el-button style="margin-top: 12px;" @click="next" class="next-button1">下一步</el-button>
    </div>
    <div class="userInfo" v-if="active === 2">
      <div class="info-all">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="昵称">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="性别">
            <el-select v-model="form.region" placeholder="请选择性别">
              <el-option label="女" value="female"></el-option>
              <el-option label="男" value="male"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="出生日期">
            <el-col :span="11">
              <el-date-picker
                type="date"
                placeholder="选择日期"
                v-model="form.date1"
                style="width: 100%;"
              ></el-date-picker>
            </el-col>
          </el-form-item>
          <el-form-item label="感兴趣" class="type-box">
            <el-checkbox-group v-model="checkedTypes">
              <el-checkbox label="最热门" name="type"></el-checkbox>
              <el-checkbox label="网红打卡" name="type"></el-checkbox>
              <el-checkbox label="休闲娱乐" name="type"></el-checkbox>
              <el-checkbox label="人文历史" name="type"></el-checkbox>
              <el-checkbox label="美食" name="type"></el-checkbox>
              <el-checkbox label="风景名胜" name="type"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
        </el-form>
        <el-button style="margin-top: 12px;" @click="next" class="next-button2">下一步</el-button>
      </div>
    </div>
    <div class="finishRegiste" v-if="active === 3">
      <div class="word-hint">
        <p>您已完成注册！请点击下方按钮进行登录</p>
      </div>
      <el-button style="margin-top: 50px;" @click="login" class="login-button">登录</el-button>
    </div>
  </div>
</template>
<script>
const typeOptions = [
  "休闲娱乐",
  "人文历史",
  "美食",
  "最热门",
  "网红打卡",
  "风景名胜"
];
export default {
  data() {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("年龄不能为空"));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error("请输入数字值"));
        } else {
          if (value < 18) {
            callback(new Error("必须年满18岁"));
          } else {
            callback();
          }
        }
      }, 1000);
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        pass: "",
        checkPass: "",
        age: ""
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        age: [{ validator: checkAge, trigger: "blur" }]
      },

      form: {
        id: 0,
        username: "hejianqin",
        password: "string",
        sex: 0,
        nickname: "string",
        age: 0,
        tag: 0,
        head: "string",
        role: "string"
      },
      active: 1,
      firstForm: {
        username: "",
        password: "",
        surepassword: ""
      },
      checkedTypes: ["最热门"],
      types: typeOptions
    };
  },

  methods: {
    next() {
      if (this.active++ > 2) this.active = 3;
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.form.age = Date.parse(new Date(this.form.age));
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    login: function() {
      this.$router.push("/login");
    }
  }
};
</script>

<style scoped>
.registe {
  height: 550px;
}
.userAccount {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
}
.userInfo {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  width: 420px;
}
.info-all {
  margin-left: 1100px;
}
.el-form {
  width: 500px;
}
.el-input {
  width: 400px;
}
.el-select {
  width: 400px;
}
.el-col-11 {
  width: 400px;
}
.type-module {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  margin-left: 40px;
}
.type-box {
}
.next-button {
  margin-left: 700px;
}
.next-button2 {
  margin-left: 200px;
}

p {
  font-size: 14px;
}
.finishRegiste {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.word-hint {
  width: 500px;
  height: 100px;
  display: flex;
  justify-content: center;
  margin-top: 100px;
}
.word-hint p {
  font-size: 24px;
}
</style>
