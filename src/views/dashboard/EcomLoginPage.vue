<template>
    <div class="ecomLoginContainer">
        <div class="col-sm-12">
            <section class="vh-100">
                <div class="container  h-100">
                    <div class="row d-flex align-items-center justify-content-center h-100">
                        <router-link to="/" class="mt-3 ds-b">Home</router-link>
                        <div class="col-md-5 col-lg-6 col-xl-6 loginI">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                                class="img-fluid" alt="Phone image">
                        </div>
                        <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1 mt-6">

                            <div class="errorChecker" v-if="checker !== ''">
                                <h3 v-if="checker == 'email'">Incorrect Email address</h3>
                                <h3 v-else>Incorrect Password</h3>
                            </div>
                            <form @submit.prevent="login">
                                <!-- Email input -->
                                <div class="form-outline mb-4">
                                    <input type="email" id="form1Example13" class="form-control form-control-lg"
                                        v-model="loginForm.email" @mouseover="isLogin = true"
                                        @mouseleave="isLogin = false" />
                                    <p v-if="isLogin" class="logEmail">Login: {{ store.state.admin.email }}</p>
                                    <label class="form-label" for="form1Example13">Email address</label>
                                    <span class="text-red-500" v-for="error in v$.email.$errors" :key="error.$uid">{{
                                        error.$message }}</span>
                                </div>

                                <!-- Password input -->
                                <div class="form-outline mb-4">
                                    <input type="password" id="form1Example23" class="form-control form-control-lg"
                                        v-model="loginForm.password" @mouseover="isPassword = true"
                                        @mouseleave="isPassword = false" />
                                    <p v-if="isPassword" class="logEmail">Password: {{ store.state.admin.password }}</p>
                                    <label class="form-label" for="form1Example23">Password</label>
                                    <span class="text-red-500" v-for="error in v$.password.$errors" :key="error.$uid">{{
                                        error.$message }}</span>
                                </div>

                                <!-- Submit button -->
                                <button type="submit" class="btn btn-primary btn-lg btn-block">Sign in</button>



                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script setup>
import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators';
import { computed, reactive, ref } from 'vue';
import router from '../../router';
import store from '../../store';

let isLogin = ref(false)
let isPassword = ref(false)

const loginForm = reactive({
    email: null,
    password: null
})

const logRules = computed(() => {
    return {
        email: { required, email },
        password: { required }
    }
})

let checker = ref('')

const v$ = useVuelidate(logRules, loginForm)

const login = async () => {
    const result = await v$.value.$validate()
    if (result) {
        if (store.state.admin.email !== loginForm.email) {
            checker.value = 'email'
        } else if (store.state.admin.password !== loginForm.password) {
            checker.value = 'password'
        } else {
            window.sessionStorage.setItem('TOKEN', loginForm.password)
            router.push('/dashboard')
        }
    } else {
        return
    }
}
</script>

<style lang="scss">
.ecomLoginContainer {
    .loginI {
        display: flex;
        justify-content: center;
        margin-top: 24px;
    }

    form {
        position: relative;

        .logEmail {
            position: fixed;
            top: 48px;
        }
    }

    .errorChecker {
        margin-bottom: 12px;

        h3 {
            color: red;
        }
    }

    .form-outline {
        span {
            display: block;
            margin-bottom: 12px;
            color: red;
        }
    }
}

@media screen and (max-width: 768px) {
    .ecomLoginContainer {
        .loginI {
            justify-content: flex-end !important;

            img {
                width: 100%;
                margin-top: 24px;
            }
        }
    }
}</style>