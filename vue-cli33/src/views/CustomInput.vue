
<template>
  <div @click="updateValue">
    asdasdasdasdasd
    <!-- <input :value="value" @input="updateValue"> -->
    <!-- <input v-model="asd @input = qwe> -->
  </div>
  
</template>

<script>
export default {
  props: ['value'],
  data() {
    return {
      asd: '',
      qq: 1
    }
  },
  watch: {
  },
  methods: {
    updateValue() {
      this.$emit('input', this.qq++);
    }
  }
}
</script>
