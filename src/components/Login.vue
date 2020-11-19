<template>
  <div class="login">
    <div class="container">
    <div class="row">
	<div class="col-md-4">
	<div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input v-model="uemail" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
	</div>
	</div>
	<div class="col-md-4">
	<div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input v-model="upass" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
	</div>
	</div>
	<div class="col-md-4 button-box">
	<button @click.prevent="tologin" type="submit" class="btn btn-primary">Enviar</button>
	</div>
    </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import axios from 'axios'

export default defineComponent({
  name: 'Login',
  data () {
  return {
  uemail:'',
  upass:''
  }
  },
  methods:{
  tologin: function(){
  axios.post('https://coding-test.rootstack.net/api/auth/login', {
  email: this.uemail,
  password: this.upass
  }).then(response => {
  console.log(response.data.access_token)
  const tokenacces=response.data.access_token
  this.$router.push({ name: 'Info', params: { token: tokenacces }})
  }).catch(e => {
  console.log(e);
  });
  }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
.button-box {
   padding-top: 36px;
}
.login {
	margin-top: 50px;
}
</style>
