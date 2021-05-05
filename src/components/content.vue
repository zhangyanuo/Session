<template>
  <div id="content">
    <div class="border">
        <label for="">{{labelName}}</label>
        {{msg}}
        <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Component",
  props:{
      msg:{
          type:String,
          required:true
      },
       labelName:{
          type:String,
          required:true
      },
  },
  data() {
    return {
      
    };
  },
  computed: {
    
  },
  methods: {
    
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
