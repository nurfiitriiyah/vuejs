<template>
  <div class="hello">
    <h2>Please Login</h2>
    <form role="form" class="form" onsubmit="return false;">
      <table>
        <tr>
          <td>Username</td>
          <td><input v-model="todo.username" id="login_username" name="login_username" type="text"/></td>
        </tr>
        <tr>
          <td>Password</td>
          <td><input v-model="todo.pass"  name="login_password" type="password"/></td>
        </tr>
        <tr>
          <td colspan="2">
            <button class="btn btn-primary" @click="login()"><span>Create</span></button>
          </td>
        </tr>
      </table>
    </form>

  </div>
</template>

<script>
  const axios = require('axios');
  const API_URL = 'http://localhost:10002/login';

  export default {
    data() {
      return {
        showError: false,
        todo: {}
      };
    },
    methods: {
      async login() {
       try{
         var submitLogin = await axios.post(API_URL,this.todo)
         console.log(submitLogin.data)
         if(submitLogin.data.status === "nok"){
           this.$swal("Gagal","Silahkan Cek Username & Password","error");
         }else{
           this.$swal("Sukses","Login Sukses","success");

         }
       }catch (e) {
         console.log(e)
       }
      },
    },
  }

</script>
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
