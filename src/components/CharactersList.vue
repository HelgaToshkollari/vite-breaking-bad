<template lang="">
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4  g-4 " >
        <div class="col" v-for="singleCharacter in store.charactersList ">
            <Character :character="singleCharacter"></Character>

        </div>
        
    </div>
</template>
<script>
import axios from "axios"
import Character from "./Character.vue";
import { store } from "../store";
export default {
    components:{ Character},
    data(){
        return {
            store,
        };
    },
    created (){
        
        this.store.loading = true;
        axios.get("https://rickandmortyapi.com/api/character")
        .then((resp) => {
            store.charactersList = resp.data.results;
            setTimeout(() => {        
            this.store.loading = false;
            }, 2000);
        })
      
    }
    
}
</script>
<style lang="scss">
    
</style>