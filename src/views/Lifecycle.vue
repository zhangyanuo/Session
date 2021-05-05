<template>
  <div id="lifecycle">
    <div class="lifecyle-wrap">
      <img src="../assets/lifecycle.png" alt="" />
    </div>
    <div class="border">
      <b> 1.beforeCreate </b>
      <p>
        在这个生命周期之间，进行初始化事件，进行数据的观测，可以看到在created的时候数据已经和data属性进行绑定（放在data中的属性当值发生改变的同时，视图也会改变）。
        注意看下：此时还是没有el选项
      </p>
      <b> 2.created </b>
      <p>
        在实例创建完成后被立即调用。在这一步，实例已完成以下的配置：数据观测
        (data observer)，属性和方法的运算，watch/event
        事件回调。然而，挂载阶段还没开始，$el属性目前不可见。
      </p>
      <b> 3.beforeMount </b>
      <p>
        在挂载开始之前被调用：相关的render函数首次被调用。
        不论是created还是beforeMount在它们里面都拿不到真实的dom元素，如果我们需要拿到dom元素就需要在mounted里操作
      </p>
      <b> 4.mounted </b>
      <p>
        上面的案例mounted可以拿到dom元素，但也只是能拿到初始化数据里的dom元素，如果是存在异步对dom元素数据进行更改我们就只能在updated里获取，应用场景：初始数据（在data中有的）的dom渲染完毕，可以获取dom
      </p>
      <b> 5.beforeUpdate </b>
      <p>
        当数据更新后出发的钩子函数，这个钩子函数里拿到的是更改之前的数据，虚拟DOM重新渲染和打补丁之前被调用。
        你可以在这个钩子中进一步地修改data，这不会触发附加的重渲染过程。
      </p>
      <b> 6.updated </b>
      <p>
        当这个钩子被调用时，组件DOM的data已经更新，所以你现在可以执行依赖于DOM的操作。但是不要在当前钩子里修改当前组件中的data，否则会继续触发beforeUpdate、updated这两个生命周期，进入死循环！
      </p>
      <b> 7.beforeDestroy </b>
      <p>实例销毁之前调用。销毁前,准备销毁, 他这里也是啥都可以访问,往往用来做销毁前的善后处理.</p>
      <b> 8.destroyed </b>
      <p>
        Vue 实例销毁后调用。调用后，Vue
        实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁.
      </p>
    </div>
    <div class="border">
      <label for="">input</label>
      <div>
        <div id="message">{{destroyedMessage}}</div>
        <ul>
          <li v-for="(item, index) in items" :key="index">{{ item }}</li>
        </ul>
      </div>
      <button @click="pushArr">click push</button>
    </div>
    <div class="border">
      <h3 v-if="isShow">{{ SSone }}</h3>
      <h3 v-else>{{ SStwo }}</h3>
      <button class="btn btn-danger" type="button" @click="destroyVM">销毁实例</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      isShow: false,
      SSone: "one",
      SStwo: "two",
      items: [1, 2, 3, 4],
      message: "Vue的生命周期",
      updatedMessage: "触发组件更新",
      destroyedMessage: "销毁",
    };
  },
  computed: {
    reversedMessage: function () {
      // `this` 指向 vm 实例
      return this.msg.split("").reverse().join("");
    },
  },
  beforeCreate() {
    console.group("------beforeCreate创建前状态------");
    console.log("%c%s", "color:red", "el     : " + this.$el); //undefined
    console.log("%c%s", "color:red", "data   : " + this.$data); //undefined
    console.log("%c%s", "color:red", "message: " + this.message);
  },
  created() {
    console.group("------created创建完毕状态------");
    console.log("%c%s", "color:red", "el     : " + this.$el); //undefined
    console.log("%c%s", "color:red", "data   : " + this.$data); //已被初始化
    console.log("%c%s", "color:red", "message: " + this.message); //已被初始化
  },
  beforeMount() {
    console.group("------beforeMount挂载前状态------");
    console.log("%c%s", "color:red", "el     : " + this.$el); //已被初始化
    console.log("%c%s", "color:red", "data   : " + this.$data); //已被初始化
    console.log("%c%s", "color:red", "message: " + this.message); //已被初始化
  },
  mounted() {
    // this.intervalID = setInterval(() => {
    //   // 添加提示
    //   console.log(
    //     "一秒,定时期是全局的，需要注意，放置的位置，需要在beforDestroy的时候销毁 "
    //   );
    //   this.isShow = !this.isShow;
    // }, 1000);
    console.group("------mounted 挂载结束状态------");
    console.log("%c%s", "color:red", "el     : " + this.$el); //已被初始化
    console.log("%c%s", "color:red", "data   : " + this.$data); //已被初始化
    console.log("%c%s", "color:red", "message: " + this.message); //已被初始化
  },
  beforeUpdate() {
    console.group("beforeUpdate 更新前状态===============》");
    console.log("%c%s", "color:red", "el     : " + this.$el);
    console.log("%c%s", "color:red", "data   : " + this.$data);
    console.log("%c%s", "color:red", "message: " + this.updatedMessage);
     console.log("beforeUpdate", document.querySelectorAll("li").length);
  },
  updated() {
    console.group("updated 更新完成状态===============》");
    console.log("%c%s", "color:red", "el     : " + this.$el);
    console.log("%c%s", "color:red", "data   : " + this.$data);
    console.log("%c%s", "color:red", "message: " + this.updatedMessage);
    console.log("Updated", document.querySelectorAll("li").length);
  },
  beforeDestroy() {
    // console.log("7beforeDestroy()(被执行)");
    // // 清除定时器
    // clearInterval(this.intervalID);
    console.group("beforeDestroy 销毁前状态===============》");
    console.log("%c%s", "color:red", "el     : " + this.$el);
    console.log("%c%s", "color:red", "data   : " + this.$data);
    console.log("%c%s", "color:red", "message: " + this.destroyedMessage);
  },
  destroyed() {
    console.group("destroyed 销毁完成状态===============》");
    console.log("%c%s", "color:red", "el     : " + this.$el);
    console.log("%c%s", "color:red", "data   : " + this.$data);
    console.log("%c%s", "color:red", "message: " + this.destroyedMessage);
  },
  methods: {
    pushArr() {
      this.items.push("0");
    },
    destroyVM() {
      this.$destroy();
    },
  },
};
</script>

<style>
.lifecyle-wrap {
  width: 500px;
}
.lifecyle-wrap img {
  width: 100%;
  height: 100%;
}
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
