<template>
  <div>
    <div>api</div>
  </div>
</template>
<script>
import { post, get } from "../../utils/api.js";
export default {
  props: [],
  data() {
    return {};
  },
  methods: {
    getdata() {
      get(data).then(() => {});
    },
  },
};
</script>
<style lang="scss" scoped>
</style>
