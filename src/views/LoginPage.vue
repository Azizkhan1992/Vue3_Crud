<template>
    <div class="loginContainer">
        <section id="form"><!--form-->
		<div class="container">


            <div v-if="isSubmit" class="errorMessage">
                <p>Error, form is not submitted!</p>
            </div>
			<div class="row">
				<!-- <div class="col-sm-4 col-sm-offset-1">
					<div class="login-form">
						<h2>Login to your account</h2>
						<form @submit.prevent="submitLogin">
							<input  type="text" placeholder="Name" />
							<input  type="email" placeholder="Email Address" />
							<button type="submit" class="btn btn-default">Login</button>
						</form>
					</div>
				</div>
				<div class="col-sm-1">
					<h2 class="or">OR</h2>
				</div> -->
				<div class="col-sm-6">
					<div class="signup-form"><!--sign up form-->
						<h2>New User Signup!</h2>
						<form @submit.prevent="register">
							<input v-model="registerForm.name" type="text" placeholder="Name"/>
                            <span class="text-red-500" v-for="error in v$.name.$errors" :key="error.$uid">{{ error.$message }}</span>
                            <input v-model="registerForm.phone" type="number" placeholder="Phone">
							<input v-model="registerForm.email" type="email" placeholder="Email Address"/>
                            <span class="text-red-500" v-for="error in v$.email.$errors" :key="error.$uid">{{ error.$message }}</span>
							<input v-model="registerForm.password" type="password" placeholder="Password"/>
                            <span class="text-red-500" v-for="error in v$.password.$errors" :key="error.$uid">{{ error.$message }}</span>
							<button type="submit" class="btn btn-default">Signup</button>
						</form>
					</div><!--/sign up form-->
				</div>
			</div>
		</div>
	</section>
    </div>
</template>

<script setup>
import {useVuelidate} from '@vuelidate/core'
import {required, email, minLength} from '@vuelidate/validators'
import { reactive, computed, ref } from 'vue'
import router from '../router';
import store from '../store'

const isSubmit = ref(false)

const registerForm = reactive({
    name: null,
    phone: null,
    email: null,
    password: null
})

const regRules = computed(() => {
    return {
        name: {required, minLength: minLength(3)},
        email: {required, email},
        password: {required, minLength: minLength(5)}
    }
})




const v$ = useVuelidate(regRules, registerForm)

const register = async () => {
    const result = await v$.value.$validate()
    if(result){
        store.commit('setUser', registerForm)
        window.sessionStorage.setItem('user', JSON.stringify(registerForm))
        isSubmit.value = false
        router.push({path: '/dashboard'})
    } else {
        isSubmit.value = true
    }
}

</script>

<style lang="scss">
#form{
    margin-top: 80px !important;

    .text-red-500{
        display: inline-block;
        color: red;
        margin-bottom: 12px;
    }
}

.errorMessage{
    position: fixed;
    top: 64px;
    left: 520px;
    z-index: 1200;
    padding: 2px 8px;
    box-sizing: border-box;
    border: 1px solid red;
    border-radius: 2px;

    p{
        font-size: 1.5rem;
        margin: 0;
    }
}

@media screen and (max-width: 768px) {
    .errorMessage{
        left: 70px !important;
    }
}
</style>