<template lang="">
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4  g-4 " >
        <div class="col" v-for="singleCharacter in store.charactersList ">
            <Character :character="singleCharacter"></Character>

        </div>
        
    </div>
</template>
<script>
import Character from "./Character.vue";
import { store, getData } from "../store";
export default {
    components:{ Character},
    data(){
        return {
            store,
        };
    },
    created (){
        
       getData()
      
    }
    
}
</script>
<style lang="scss">
    
</style>