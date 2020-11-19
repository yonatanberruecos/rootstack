<template>
  <div class="info">
    <div class="container">
    <div class="row userinfo">
    <div class="col-md-6">
    <h1>{{nameuser}}</h1>
    <p>{{emailuser}}</p>	
    </div>
    <div class="col-md-6 userjobs">
    <div class="box-info" v-for="job in infojobs" :key="job.id">
    <h3>{{job.title}}</h3>
    <p class="descrip">{{job.description}}</p>
    <p class="statusjob">{{job.status}}</p>
    </div>
    <pagination v-model="page" :records="15" :per-page="4"/>	
    </div>		
    </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios'

export default defineComponent({
  name: 'Info',
  data () {
  return {
  nameuser:'',
  emailuser:'',
  infojobs:[],
  page:1
  }
  },
  created() {
  const urlinfo='https://coding-test.rootstack.net/api/auth/me?token='+this.$route.params.token
  const urljobs='https://coding-test.rootstack.net/api/jobs?token='+this.$route.params.token

  axios.get(urlinfo,{
  headers: {
  'Access-Control-Allow-Origin': '*',
  }
  }
  ).then(response => {
  this.nameuser=response.data.name
  this.emailuser=response.data.email
  }).catch(e => {
  console.log(e);
  });

  axios.get(urljobs,{
  headers: {
  'Access-Control-Allow-Origin': '*',
  }
  }
  ).then(response => {
  this.infojobs=response.data.data
  }).catch(e => {
  console.log(e);
  });
  }
});
</script>
<style type="text/css">
.userinfo {
	margin-top: 50px;
}
.box-info {
	margin-bottom:40px; 
}
.descrip {
	text-align: left;
}
.statusjob {
	color: green;
}
</style>