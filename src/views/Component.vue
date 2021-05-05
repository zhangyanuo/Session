<template>
  <div id="component">
    <Content :msg="msg" :labelName="labelName">
      <div>aaaaa</div>
    </Content>
    <div class="border">
      <Brother @titleChanged="updateTitle"></Brother>
      <h2>{{ title }}</h2>
    </div>
  </div>
</template>

<script>
import Content from "../components/content";
import Brother from "../components/brother";
export default {
  name: "Component",
  components: {
    Content,
    Brother,
  },
  data() {
    return {
      msg: "组件内容",
      labelName: "组件",
      title: "传递的是一个值",
    };
  },
  methods: {
    updateTitle(e) {
      //声明这个函数
      this.title = e;
    },
  },
};
</script>

<style>
.border {
  border: 1px solid #333;
  padding: 10px;
  margin-bottom: 10px;
}
.border label {
  font-size: 14px;
  font-weight: bold;
  display: block;
  margin: 5px 0;
}
.margin-bottom-5 {
  margin-bottom: 5px;
}
.active {
  color: green;
}
</style>
