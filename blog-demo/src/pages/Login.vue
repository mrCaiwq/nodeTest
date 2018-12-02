<template>
    <div class="login-box">
        <div class="login-msg-box">
            <div class="msg-box">
                <img src="../assets/images/cellphone.png" alt="电话" class="msg-img">
                <input type="tel" class="msg-input" placeholder="请输入手机号码" v-model="loginMsg.cellphone">
            </div>
            <div class="msg-box">
                <img src="../assets/images/password.png" alt="密码" class="msg-img">
                <input type="password" class="msg-input" placeholder="请输入密码" v-model="loginMsg.password">
            </div>
            <div class="login-button" @click="loginClick()">
                <span>登陆</span>
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    name:'Login',
    data () {
        return {
            loginMsg:{
                cellphone:'',
                password:''
            }
        }
    },
    methods:{
        ...mapActions(['login']),
        loginClick(){
            this.login(this.loginMsg)
            .then(data => {
                // console.log(data)
                localStorage.setItem('token',data.data.token)
                this.$router.push({ path: '/' })
            })
            .catch(data => {
                console.log(data)
            })
        }
    },
    watch:{

    },
    computed:{

    },
    mounted(){

    }
}
</script>

<style lang="sass" scoped>
 @import "../assets/css/Login.scss"
</style>