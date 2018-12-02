<template>
  <div class="hello">

  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    ...mapActions(['exampleGet','exampleCreate','register','login']),
    test(){
      this.exampleGet()
      .then(data => {
        console.log(data)
      })
      .catch(err => {
        console.log(err)
      })
    },
    test2(){
      let msg = {msg :'test post request'}
      this.exampleCreate(msg)
      .then(data => {
        console.log(data)
      })
      .catch(err => {
        console.log(err)
      })
    },
    test3(){
      let msg = {
        username:'张四',
        password:'123456',
        cellphone:13715459296,
      }
      this.register(msg)
      .then(data => {
        console.log(data)
      })
      .catch(err => {
        console.log(err)
      })
    },
    test4(){
      let msg = {
        cellphone: '13715459296',
        password: '123456'
      }
      this.login(msg)
      .then(data => {
        console.log(data)
      })
      .catch(err => {
        console.log(err)
      })
    }
  },
  mounted(){
    this.test2()
    this.test4()
    // this.test3()
    this.test()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
</style>
