<template lang="">
    <div class="card text-white bg-dark" style="width: 13rem;">
        <img class="card-img-top" :src="character.image" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">{{character.name}}</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a :href="character.url" class="btn text-white border-success">Go somewhere</a>
        </div>
    </div>
    
</template>
<script>
export default {
    props:{
        character:{
        type: Object,
        required: true,
        },
    }
    
    
}
</script>
<style lang="scss">
@use "../styles/partials/variables"  as *;
    
</style>