<template>
  <div class="about">
    <h1>This is an about page</h1>
    <ul>
      <li v-for="(item,index) in Listasd" :key="index">{{item}}</li>
    </ul>
    <p>{{asd[3].a.a.a}}</p>
    <button @click="changeListasd">asdasd</button>
  </div>
</template>
<script>
export default {
  name: "Home",
  data() {
    return {
      Listasd: ['asd','qwe','xcz'],
      asd: ['asd','qwe','xcz', {a: {a: {a:1}}}],
      person: {
        age: 19
      }
    } 
  },
  methods: {
    changeListasd() {
      this.Listasd.length = 0
      this.person = {
        a: {
          a: '123123'
        },
        name : 123,
        age: 654
      }
      this.asd[3].a.a.a = {
        a: 234,
        h: 23454
      }
      console.log(this.person)
    }
  }
};
</script>