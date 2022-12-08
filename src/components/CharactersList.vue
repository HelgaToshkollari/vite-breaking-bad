<template lang="">
    <div class="py-3">
        <Pagination :page="store.page" @pageChange="onPageChange"></Pagination>
    </div>
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4  g-4 " >
        <div class="col" v-for="singleCharacter in store.charactersList ">
            <Character :character="singleCharacter"></Character>
        </div>
    </div>
    <div class="py-3">
        <Pagination :page="store.page" @pageChange="onPageChange"></Pagination>
    </div>
    
</template>
<script>
import Pagination from "./Pagination.vue";
import Character from "./Character.vue";
import { store, getData } from "../store";
export default {
    components:{ Character,Pagination},
    data(){
        return {
            store,
        };
    },
    methods:{
        onPageChange(newPage){

            store.page = newPage;
            
            getData();

        }

        
    },
    created (){
        
       getData()
      
    }
    
}
</script>
<style lang="scss">
    
</style>