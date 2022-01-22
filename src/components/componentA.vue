<script setup>
import { ref, reactive, onMounted, watch } from 'vue'
const testf = ref({
    idx:0,
    name:'10'
})
const txt = ref('123')
const person = reactive({
    name: 'Bob'
})
const person2 = ref({
    name:'Tommy'
})
console.log('test', testf.value)
console.log('log', person2.value)
function getWorld(){
    console.log('hello World')
}
onMounted(()=>{
    getWorld()
})

console.log(person)

watch(testf.value, (nval)=>{
console.log('log', nval)
})

setTimeout(()=>{
    testf.value.idx = 1
},1000)
</script>

<template>
<div>
 <h2>v3 hello world</h2>
 <input type="text" v-model="txt" />
 {{ txt }}
 <p>reative - {{ person.name }}</p>
 <p>ref - {{ person2.name  }}</p>
 <button @click="getWorld">enter me</button>
 </div>
</template>

<style>

</style>
