<template lang="">
    <div class="alert alert-info">
        sono stati trovati {{store.pageInfo.count}} elementi . stai visualizzando la pagina {{store.page}} di {{store.pageInfo.pages}}
    </div>
    <button @click="onSearch" class="btn btn-light">filter</button>
</template>
<script>
import { store, getData } from "../store";
export default {
    data(){
        return{
            store
        }
    },
    methods:{
        onSearch(){
            getData()

        }


    }
}
</script>
<style lang="">
    
</style>