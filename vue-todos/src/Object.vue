<template>
    <div id="app">
        <ul>
            <li v-for="item in objects">
                <label>

                    {{item}}
                </label>

            </li>
        </ul>

    </div>
</template>
<script>
    export default {
        name: 'object',
        data() {
            return {
                objects: {
                    'name': 'guider',
                    'age': 20
                }
            }
        }


    }
</script>
<style>

</style>