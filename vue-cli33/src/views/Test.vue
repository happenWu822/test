T<template>
  <div class="about">
    <h1>This is an Test page</h1>
    <p>{{str}}</p>
    <input type="text" v-model="testInput">
    <p @click="clickP('arg2')">{{changeArr}}</p>
    =====================
    <p>{{message}}</p>
    <custom-input v-model="message"></custom-input>
  </div>
</template>
<script>
import CustomInput from './CustomInput.vue';
import { mapState, mapGetters, mapMutations } from 'vuex'
export default {
  name: "Test",
  data() {
    return {
      testInput: '',
      message: ''
    }
  },
  components: {
    CustomInput
  },
  computed: {
    ...mapState(["str"]), //可以在非computed？????????????
    ...mapGetters(["changeArr"])
  },
  methods: {
    ...mapMutations(["changeStr"]),
    clickP() {
      this.changeStr(this.testInput);
    }
  }
};
</script>