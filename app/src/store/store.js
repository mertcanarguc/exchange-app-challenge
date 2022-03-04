import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

import router from '../router/router'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        token: null,
    },
    getters: {
        isAuth(state) {
            return typeof state.token !== null
        }
    },
    mutations: {
        setToken(state, token) {
            localStorage.token = token
            console.log(localStorage.getItem('token'))
        },
        clearToken(state) {
            localStorage.clear()
            router.push('/login')
        }
    },
    actions: {
        login({ commit, dispatch, state }, authData) {
            axios.post('/users/login', {
                email: authData.email,
                password: authData.password
            }).then(response => {
                if (response.data.success == false) {
                    state.bilgi = "Lütfen bilgilerinizi kontrol ediniz."
                } else {
                    localStorage.userid = response.data.user._id
                    localStorage.token = response.data.token
                    localStorage.username = response.data.user.email
                    setTimeout(() => {
                        window.location = '/'
                    }, 100);
                }
            })
        },
        register({ commit, dispatch, state }, authData) {
            return axios.post('/users/register', {
                user: {
                    email: authData.email,
                    password: authData.password,
                    firstname: authData.firstname,
                    lastname: authData.lastname,
                    username: authData.username
                }
            }).then(response => {
                if (response.data.status == true) {
                    localStorage.username = authData.email
                    window.location = '/'
                } else {

                }
            })
        },
        logout({ commit, dispatch, state }) {
            commit("clearToken")
        }
    },
    modules: {
    }
})