import {
  defineStore, storeToRefs
} from 'pinia'
import { ref, computed } from 'vue' 
import { useAboutStore } from '../store/about'

// ccomposition api 寫法

export const useCounterStore = defineStore('counter', () => { 
  
 const aboutStore = useAboutStore();
 const { name } = storeToRefs(aboutStore)

  const counter = ref('0')

  const doubleCount = computed(() => {
    return counter.value * 2 + name.value;
  })
 
  const addCount = () =>{
    counter.value++;
  }

  return { counter, addCount, doubleCount }
})

// option api 寫法

// export const useCounterStore = defineStore({
//   id: 'counter',
//   state: () => ({
//     counter: 0
//   }),
//   getters: {
//     doubleCount: (state) => state.counter * 2
//   },
//   actions: {
//     addCount() {
//       this.counter++
//     }
//   }
// }) 