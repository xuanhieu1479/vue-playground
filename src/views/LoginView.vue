<script>
    import { mapActions } from 'vuex';
    import InputText from 'primevue/inputtext';
    import Button from 'primevue/button';

    export default {
        components: {
            InputText,
            PrimeButton: Button,
        },
        data() {
            return {
                username: '',
                password: '',
            }
        },
        methods: {
            ...mapActions(['login']),
            onLogin() {
                this.login({ username: this.username, password: this.password });
            },
        },
    }
</script>

<template>
    <div class="login-form-wrapper">
        <div class="login-form">
            <h1>Login</h1>
            <div class="username-wrapper">
                <label>Username</label>
                <InputText v-model="username" />
            </div>
            <div class="password-wrapper">
                <label>Password</label>
                <InputText type="password" v-model="password" />
            </div>
            <PrimeButton label="Login" @click="onLogin" />
        </div>
    </div>
</template>

<style>
    .login-form-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }

    .login-form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .username-wrapper,
    .password-wrapper {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }
</style>