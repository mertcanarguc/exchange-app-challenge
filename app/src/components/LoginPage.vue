<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4"></div>
      <div class="col-md-4">
        <div class="form-row">
          <h2 class="text-center">Crypto Exchange</h2>
          <div class="form">
            <div class="form-group">
              <label style="font-size: 9pt">Email</label>
              <input
                type="text"
                class="form-control"
                v-model="user.email"
                placeholder="Email"
              />
            </div>
            <div class="form-group pass">
              <label style="font-size: 9pt">Password</label>
              <input
                type="password"
                class="form-control"
                v-model="user.password"
                placeholder="Password"
              />
            </div>
            <div class="row buttons" style="margin-top: 5vh">
              <div class="col-6">
                <a
                  href="/register"
                  class="btn btn-info"
                  style="
                    float: right;
                    background-color: white;
                    color: blue;
                    border: 1px solid;
                  "
                  >REGİSTER</a
                >
              </div>
              <div class="col-6">
                <button
                  class="btn btn-primary"
                  style="float: right"
                  @click="login()"
                >
                  SIGN IN
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4"></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import qs from "qs";
export default {
  data() {
    return {
      user: {
        email: null,
        password: null,
      },
    };
  },
  methods: {
    login() {
      axios({
        method: "post",
        url: "/users/login",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        data: qs.stringify(this.user),
      })
        .then(function (response) {
          if (response.data.status == true) {
            localStorage.token = response.data.token;
            localStorage.firstname = response.data.user.firstname;
            localStorage.lastname = response.data.user.lastname;
            localStorage.id = response.data.user.id
            window.location = "/";
          } else {
            alert('Lütfen daha sonra tekrar deneyiniz')
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>

<style>
.form {
  margin-top: 8vh;
  height: 400px;
}
.pass {
  margin-top: 4vh;
}
.form-row {
  margin-top: 20vh;
}
.btn {
  width: 80%;
}
</style>