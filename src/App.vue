<script >
import TheHeader from './components/TheHeader.vue';
import Filter from './components/Filter.vue';
import TheFooter from './components/TheFooter.vue';
import CharactersList from './components/CharactersList.vue';
import { getData, store } from "./store";
import Loading from './components/Loading.vue';
import Pagination  from './components/Pagination.vue';

export default{
  components:{ TheHeader , Filter, TheFooter, CharactersList, Loading, Pagination },
  data() {
    return {
      store
      
    }
  },
  methods:{
    onFilter(filtersOn){
      this.store.filtered = filtersOn;
      
      getData()
     

    }
    
  }
}

</script>

<template>
  <div class="m-bg">
    <TheHeader></TheHeader>
    <div class="container">
      <div class="p-4">
        <Filter @filter="onFilter"></Filter>
        <CharactersList></CharactersList>
      </div>
      <Transition>
        <Loading v-if="store.loading"></Loading>
      </Transition>

    </div>
    <TheFooter></TheFooter>
  </div>

</template>

<style lang="scss">
@use "./styles/general.scss";

.m-bg{
  background: rgb(184,238,174);
  background: radial-gradient(circle, rgba(184,238,174,1) 0%, rgba(180,217,195,1) 49%, rgba(66,140,227,1) 100%);
}

</style>
