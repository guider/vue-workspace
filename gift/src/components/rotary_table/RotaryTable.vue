<template>
    <div class="rotary_table_container">
        <div style="display: flex;margin: 20px;width:320px;flex: 1;flex-wrap: wrap;">
            <div
                :class="{rotary_table_item_container:actvieIndex !=index,rotary_table_item_container10 :actvieIndex ==index}"
                v-for="item, index in items "
                v-on:click="startDraw">
                <p style="align-content: center; align-items: center; display: flex;align-self: center; ">
                    {{item.name}}
                </p>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'RotaryTable',
        data() {
            return {
                actvieIndex: 3,
                i: 0,
                count: 0,
                items: [
                    {name: '1'},
                    {name: '2'},
                    {name: '3'},
                    {name: '4'},
                    {name: '抽奖'},  // 这些都假设是一些用户名字
                    {name: '6'},
                    {name: '7'},
                    {name: '8'},
                    {name: '9'},
                ]
            };
        },
        methods: {
            startDraw: function () {
                this.go(5);
            },
            go: function (seconds) {
                const SECONDS = seconds * 1000;
                const HALF_SECONDS = SECONDS / 2;
                const FREQUENCY = 50;

                setTimeout(() => {
                    this.actvieIndex++;
                    if (this.actvieIndex >= this.items.length) this.actvieIndex = 0;

                    if (this.count >= HALF_SECONDS) {
                        this.i += 10;
                        this.count += 50 + this.i;
                    } else {
                        this.count += 50;
                    }

                    if (this.count <= SECONDS) {
                        this.go(seconds)
                    }
                }, FREQUENCY + this.i);
            }
        },
        mounted() {

        }

    };
</script>
<style scoped>
    .rotary_table_container {
        display: flex;
        flex-wrap: wrap;
        align-content: center;
        background: url('../../assets/矢量智能对象@2x.png') center no-repeat;
        justify-content: space-between;
        background-size: cover;
        width: 100%;
        flex: 1;
    }

    .rotary_table_item_container {
        display: flex;
        background: url('../../assets/9@2x.png') center no-repeat;
        background-size: contain;
        padding: 0;
        margin: 2px;
        width: 32%;
        height: 90px;
        align-items: center;
        justify-content: center;
    }

    .rotary_table_item_container10 {
        display: flex;
        background: url('../../assets/10@2x.png') center no-repeat;
        background-size: contain;
        padding: 0;
        margin: 2px;
        width: 32%;
        height: 90px;
        align-items: center;
        justify-content: center;
    }

</style>
