<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col-lg-8 m-auto" id="login">
          <div class="cad"
            <h2 class="align-left">Login</h2>
            <hr>
            <form>
            <div class="form-group row">
              <label class=" col-md-4 col-form-label text-md-right">Usename</label>
              <div class="col-md-6">
                <input  class ="form-control" type="text" name="user_id" v-model="user_id" placeholder="Enter your ID">
              </div>
            </div>  
            <div class="form-group row">
              <label class=" col-md-4 col-form-label text-md-right ">Password</label>
              <div class="col-md-6">
                <input class ="form-control" type="password" name="user_pwd" v-model="user_password" placeholder="Enter your password">
              </div>
            </div><!-- Remember Me -->
            <div class="form-group row">
              <div class="col-md-4"></div>
              <div class="col-md-3 "> 
                  <b-form-checkbox id="checkbox1"
                       v-model="status"
                       value="accepted"
                       unchecked-value="not_accepted">
                    Rember me
                  </b-form-checkbox>
              </div>
              <div class="col-md-3 text-md-left"><a href="#">Forgot password</a></div>
            </div>

            <!-- Submit Button -->
            <div class="form-group row">
              <div class="col-md-8 ml-md-auto text-md-left">
                <b-button variant="success" size="lg">Login</b-button> 
              </div>
            </div>  

            </form>
          </div>
      </div> 
  </div>     
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      user_id: '',
      user_pwd: ''
    }
  },
  methods: {
    addUser: function() {
      var userId = this.user_id;
      var userPwd = this.user_pwd;
      this.$http.post('/api/user/addUser', {
        user_id: userId,
        user_pwd: userPwd
      }).then((response) => {
        console.log(response);
      })
    }
  }
}
</script>