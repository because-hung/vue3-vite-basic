import {
    defineStore
  } from 'pinia'
  import { ref } from 'vue' 
  
  
  export const useAboutStore = defineStore('about', () => { 
    
   const name = ref('wangC')

   function setName(user) {
    name.value = user
   }
  
    return { name, setName }
  })
  