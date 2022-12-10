<template lang="">
    <form action="" @submit.prevent="onSearch">
        <div class="row py-2">
            <div class="col">
                <input type="text" class="form-control" placeholder="Name" v-model="filters.name" aria-label="name">
            </div>
            <div class="col">
              <input type="text" class="form-control" placeholder="Status" v-model="filters.status" aria-label="Status">
            </div>
            <div class="col">
              <input type="text" class="form-control" placeholder="Gender" v-model="filters.gender" aria-label="Gender">
            </div>
        </div>
        <div class="row py-2 ">
            <div class="col">
              <input type="text" class="form-control" placeholder="Type" v-model="filters.type" aria-label="Type">
            </div>
            <div class="col">
              <input type="text" class="form-control" placeholder="Spiecies" v-model="filters.species" aria-label="Spiecies">
            </div> 
              
        </div>
        <div class="row py-2 d-flex justify-content-center">
            <div class="col-sm-6 text-center">
                <button @click="onSearch" class="btn btn-warning text-white mx-2"><strong>Filter</strong></button>
                <button @click="onSearch" class="btn btn-light text-warning mx-2"><strong>Reset</strong></button>
            </div> 
        </div>
        
    </form>
    
   
</template>
<script>
import { store, } from "../store";
export default {
    data(){
        return{
            store,
            filters:{
                name:"",
                status:"",
                gender:"",
                species:"",
                type:""
            }
        }
    },
    methods:{
        onSearch(){
            this.$emit("filter",{...this.filters})

        }


    }
}
</script>
<style lang="">
    
</style>