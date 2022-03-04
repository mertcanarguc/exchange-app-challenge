<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4"></div>
      <div class="col-md-4">
        <div class="form-row">
          <h2 class="text-center">Crypto Exchange</h2>
          <div class="form">
            <div class="form-group">
              <label style="font-size: 9pt">Firstname</label>
              <input
                v-model="user.firstname"
                type="text"
                class="form-control"
                placeholder="Firstname"
              />
            </div>
            <div class="form-group">
              <label style="font-size: 9pt">Lastname</label>
              <input
                v-model="user.lastname"
                type="text"
                class="form-control"
                placeholder="Lastname"
              />
            </div>
            <div class="form-group">
              <label style="font-size: 9pt">Email</label>
              <input
                v-model="user.email"
                type="text"
                class="form-control"
                placeholder="Email"
              />
            </div>
            <div class="form-group">
              <label style="font-size: 9pt">Password</label>
              <input
                v-model="user.password"
                type="text"
                class="form-control"
                placeholder="Password"
              />
            </div>
            <div class="row buttons" style="margin-top: 5vh">
              <div class="col-6">
                <a
                  href="/login"
                  class="btn btn-info"
                  style="
                    float: right;
                    background-color: white;
                    color: blue;
                    border: 1px solid;
                  "
                >
                  BACK
                </a>
              </div>
              <div class="col-6">
                <button
                  class="btn btn-primary"
                  style="float: right"
                  @click="register()"
                >
                  REGİSTER
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
        firstname: "",
        lastname: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    register() {
      axios({
        method: "post",
        url: "/users/register",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        data: qs.stringify(this.user),
      })
        .then(function (response) {
          if (response.data.status == true) {
            console.log(response);
            localStorage.token = response.data.token;
            localStorage.firstname = response.data.user.firstname;
            localStorage.lastname = response.data.user.lastname;
            localStorage.id = response.data.userid
            window.location = "/";
          } else {
            alert('Hatalı giriş')
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
  margin-top: 2vh;
}
.form-group {
  margin-top: 2vh;
}
.form-row {
  margin-top: 20vh;
}
.btn {
  width: 80%;
}
</style>