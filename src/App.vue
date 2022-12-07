<script >
import TheHeader from './components/TheHeader.vue';
import Filter from './components/Filter.vue';
import TheFooter from './components/TheFooter.vue';
import CharactersList from './components/CharactersList.vue';
import { store } from "./store";
import Loading from './components/Loading.vue';

export default{
  components:{ TheHeader , Filter, TheFooter, CharactersList, Loading },
  data() {
    return {
      
      store
      
    }
  },
}

</script>

<template>
  <div class="m-bg">
    <TheHeader></TheHeader>
    <div class="container">
      <Filter></Filter>
      <div class="p-4">
        <CharactersList></CharactersList>
      </div>
      <Transition name="fade">
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
