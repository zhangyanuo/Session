<template>
  <div id="home">
    <div class="border">
      <label>声明式渲染:</label>
      <div>{{ msg }}</div>
    </div>

    <div class="border">
      <label>属性:</label>
      <div class="margin-bottom-5">
        <button v-bind:disabled="isButtonDisabled">v-bind:disabled</button>
      </div>
    </div>

    <div class="border">
      <label for="">使用js表达式</label>
      <div>
        {{ number + 1 }}
      </div>
      <div>
        {{ ok ? "YES" : "NO" }}
      </div>
      <div>
        {{ msg.split("").reverse().join("") }}
      </div>
      <div v-bind:id="'list-' + id">id</div>
    </div>

    <div class="border">
      <label for="">修饰符</label>
      <button v-on:click.stop="showContent">click stop</button>
      <div>
        <a href="https://cn.vuejs.org/v2/guide/events.html"
          >https://cn.vuejs.org/v2/guide/events.html</a
        >
      </div>
    </div>

    <div class="border">
      <label for="">缩写</label>
      <div v-bind:id="'testId'">v-bind:id</div>
      <div :id="'testId1'">:id</div>
      <button v-on:click="showmsg">v-on:click</button>
      <button @click="showmsg">@click</button>
    </div>

    <div class="border">
      <label for="">class绑定</label>
      <button
        @click="
          isActive = true;
          hasError = false;
        "
      >
        active
      </button>
      <div :class="{ active: isActive, 'dander-text': hasError }">
        active样式
      </div>
      <div :class="classObj">多个class绑定</div>
      <!-- <div :class="computeClassObj">
        计算属性
      </div> -->
      <div :class="[activeClass, weightClass]">数组添加</div>
      <div :class="[isActive ? activeClass : '', weightClass]">三元表达</div>
    </div>

    <div class="border">
      <label for="">style绑定</label>
      <div :style="{ color: activeColor, fontSize: fontSize + 'px' }">
        style样式
      </div>
      <div :style="styleObject">style对象绑定</div>
      <div :style="[baseStyles, overridingStyles]">数组添加style</div>
    </div>

    <div class="border">
      <label>条件渲染v-if:</label>
      <button @click="showContent">click</button>
      <div v-if="isShow">{{ msg }}</div>
      <div v-else>{{ msg.split("").reverse().join("") }}</div>
    </div>

    <div class="border">
      <label>条件渲染v-show:</label>
      <button @click="showContent">click</button>
      <div v-show="isShow">{{ msg }}</div>
      <div class="tips">v-show不支持v-else，元素始终在dom中</div>
    </div>

    <div class="border">
      <label for="">列表渲染</label>
      <ul>
        <li v-for="(item, index) in list" :key="item.id">
          {{ index }}---{{ item.name }}:{{ item.age }}
        </li>
      </ul>
      <button @click="addItem">Add Item</button>
      <label for="">v-for使用对象</label>
      <div v-for="value in listObj" :key="value">{{ value }}</div>
      <!-- <div v-for="(value,name) in listObj" :key="name">{{name}}:{{value}}</div> -->
    </div>

    <div class="border">
      <label for="">表单</label>
      <div class="tips">
        你可以用 v-model 指令在表单 'input'、'textarea' 及 'select'
        元素上创建双向数据绑定。它会根据控件类型自动选取正确的方法来更新元素。尽管有些神奇，但
        v-model
        本质上不过是语法糖。它负责监听用户的输入事件以更新数据，并对一些极端场景进行一些特殊处理。
      </div>
      <div class="tips">
        v-model 会忽略所有表单元素的 value、checked、selected attribute
        的初始值而总是将 Vue 实例的数据作为数据来源。你应该通过 JavaScript
        在组件的 data 选项中声明初始值。
      </div>
      <label for="">input</label>
      <div>
        <input v-model="msg" placeholder="edit me" />
        <p>
          Message is: <span class="active">{{ msg }}</span>
        </p>
      </div>
      <label for="">textarea</label>
      <div>
        <textarea
          v-model="multMessage"
          placeholder="add multiple lines"
        ></textarea>
        <p style="white-space: pre-line">
          Multiline message is: <span class="active">{{ multMessage }}</span>
        </p>
      </div>
      <label for="">复选框</label>
      <div>
        <input type="checkbox" id="jack" value="Jack" v-model="checkedNames" />
        <span>Jack</span>
        <input type="checkbox" id="john" value="John" v-model="checkedNames" />
        <span>John</span>
        <input type="checkbox" id="mike" value="Mike" v-model="checkedNames" />
        <span>Mike</span>
        <br />
        <span>
          Checked names:
          <span class="active">{{ checkedNames }}</span>
        </span>
      </div>
      <label for="">单选框</label>
      <div>
        <input type="radio" id="one" value="One" v-model="picked" />
        <span>One</span>
        <br />
        <input type="radio" id="two" value="Two" v-model="picked" />
        <span>Two</span>
        <br />
        <span>
          Picked: <span class="active">{{ picked }}</span>
        </span>
      </div>
      <label for="">Select</label>
      <div>
        <select v-model="selected">
          <option
            v-for="option in options"
            :key="option.value"
            :value="option.value"
          >
            {{ option.text }}
          </option>
        </select>
        <span>
          Selected:
          <span class="active">{{ selected }}</span>
        </span>
      </div>
      <label for="">修饰符</label>
      <input v-model.number="age" type="number" />
    </div>

    <div class="border">
      <label for="">计算属性及侦听器</label>
      <div>
        {{ msg.split("").reverse().join("") }}
      </div>
      <div class="tips">
        在这个地方，模板不再是简单的声明式逻辑。你必须看一段时间才能意识到，这里是想要显示变量
        message
        的翻转字符串。当你想要在模板中的多处包含此翻转字符串时，就会更加难以处理。
        <br />
        所以，对于任何复杂逻辑，你都应当使用计算属性。
      </div>
      <label for="">基础例子</label>
      <div id="example">
        <p>Original message: "{{ msg }}"</p>
        <p>Computed reversed message: "{{ reversedMessage }}"</p>
      </div>
      <label for="">计算属性缓存 vs 方法</label>
      <p>Reversed message: "{{ reversedMessages() }}"</p>
      <div class="tips">
        我们可以将同一函数定义为一个方法而不是一个计算属性。两种方式的最终结果确实是完全相同的。然而，不同的是计算属性是基于它们的响应式依赖进行缓存的。只在相关响应式依赖发生改变时它们才会重新求值。这就意味着只要
        message 还没有发生改变，多次访问 reversedMessage
        计算属性会立即返回之前的计算结果，而不必再次执行函数。
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      msg: "hello world", //声明式渲染
      isShow: false, //条件渲染
      isButtonDisabled: true, //属性
      number: 1, //表达式
      ok: true,
      id: 1,
      isActive: true,
      hasError: false,
      classObj: {
        "orange-text": true,
        "pink-text": false,
      },
      activeClass: "active",
      weightClass: "fontWeight",
      activeColor: "pink",
      fontSize: 30,
      styleObject: {
        color: "red",
        fontSize: "13px",
      },
      baseStyles: {
        fontSize: "20px",
        fontWeight: "bold",
      },
      overridingStyles: {
        color: "blue",
      },
      list: [
        { id: 1, name: "张三", age: 12 },
        { id: 2, name: "赵四", age: 19 },
        { id: 3, name: "王五", age: 29 },
        { id: 4, name: "李六", age: 9 },
      ],
      listObj: {
        title: "How to do lists in Vue",
        author: "Jane Doe",
        publishedAt: "2016-04-10",
      },
      multMessage: "mult message",
      checkedNames: [],
      picked: "",
      selected: "A",
      options: [
        { text: "One", value: "A" },
        { text: "Two", value: "B" },
        { text: "Three", value: "C" },
      ],
      age: 1,
      message: "hello",
    };
  },
  computed: {
    reversedMessage: function () {
      // `this` 指向 vm 实例
      return this.msg.split("").reverse().join("");
    },
    computeClassObj() {
      return {
        active: this.isActive && !this.hasError,
        "danger-text": this.hasError,
      };
    },
  },
  methods: {
    showmsg() {
      alert(this.msg);
    },
    showContent() {
      this.isShow = !this.isShow;
    },
    allClick() {
      alert("test");
    },
    addItem() {
      this.list.push({ id: 10, name: "xxx", age: 10 });
    },
    reversedMessages: function () {
      console.log("ssssss");
      return this.message.split("").reverse().join("");
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
.tips {
  color: red;
  font-size: 12px;
}
.active {
  color: green;
}
.dander-text {
  color: red;
}
.orange-text {
  color: orange;
}
.pink-text {
  color: pink;
}
.fontWeight {
  font-weight: bold;
}
</style>
