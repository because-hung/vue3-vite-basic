<script setup>
import { storeToRefs } from 'pinia'
import { useCounterStore } from '../store/counter'
import { useAboutStore } from '../store/about'
import { ref, reactive, onMounted, watch } from 'vue'

// pinia
const counterStore = useCounterStore()
// 解構 func 可以
const { addCount } = useCounterStore()
// state 資料 必須用 storeToRefs
const { counter, doubleCount } = storeToRefs(counterStore)

const { name } = storeToRefs(useAboutStore())

// 直接使用 pinia 裡的 func

const { setName } = useAboutStore()

// 多個func 接 pinia

// const setUserName = (user) => {
//     setName(username)
// }

// subscribe = watch
counterStore.$subscribe((mutation, state) => {
    console.log('mutation =>', mutation)
    console.log('state =>', state)
    console.log('state =>', state.counter)
})


const clickAdd = () => {
    counterStore.addCount()
}

// 分隔線
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
    <h2>pinia 練習</h2>
    <h2> store = {{ counterStore.counter }}</h2>
    <h2> store to refs = {{ counter }}</h2>
    <h2>store + store {{ doubleCount }}</h2>
    <button @click="addCount">click</button>
    <p></p>
    <button @click="setName('ciyu')">set Name</button>
    <br>
    <hr>
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
