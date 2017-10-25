<template>
    <div id="app">
        <h1>{{title}}</h1>
        <ul>
            <li v-for="item,index in todos" :id="index">
                <label>
                    {{index + 1}} .{{item.things}}
                </label>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data() {
            return {
                title: 'demo',
                todos: [
                    {
                        'things': '每天读一本书', 'done': false
                    },
                    {
                        'things': '今天上线机器人', done: false,
                    },
                    {
                        'things': '办信用卡', done: true
                    }

                ]
            }
        }
    }
</script>

<style scoped>
    @import "./assets/todos.less";

    /*#app {*/
    /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
    /*-webkit-font-smoothing: antialiased;*/
    /*-moz-osx-font-smoothing: grayscale;*/
    /*text-align: center;*/
    /*color: #2c3e50;*/
    /*margin-top: 60px;*/
    /*}*/

    /*h1, h2 {*/
    /*font-weight: normal;*/
    /*}*/

    /*ul {*/
    /*list-style-type: none;*/
    /*padding: 0;*/
    /*}*/

    /*li {*/
    /*display: inline-block;*/
    /*margin: 0 10px;*/
                 /*}*/

    /*a {*/
    /*color: #42b983;*/
    /*}*/
</style>
