<script >
import TheHeader from './components/TheHeader.vue';
import TheFooter from './components/TheFooter.vue';
import CharactersList from './components/CharactersList.vue';
import { store } from "./store";
import Loading from './components/Loading.vue';

export default{
  components:{ TheHeader , TheFooter, CharactersList, Loading },
  data() {
    return {
      
      store
      
    }
  },
}

</script>

<template>
  <div class="bg-dark ">
    <TheHeader></TheHeader>
    <div class="container">
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

</style>
