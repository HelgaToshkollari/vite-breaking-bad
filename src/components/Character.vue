<template lang="">
    <div class="my-card">
        <img class="card-img-top" :src="character.image" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title text-center">{{character.name}}</h5>
            <p class="card-text">
                <ul class="list-unstyled">
                    <li> Status : {{character.status}}</li>
                    <li>Species : {{character.species}}</li>
                    <li>Gender : {{character.gender}}</li>
                    <li>Type : {{character.type}}</li> 
                </ul>
            </p>
            <a :href="character.url" class="btn text-white btn-warning "><strong>Go somewhere</strong></a>
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

.my-card{
    width: 100%;
    border-radius: 1rem;
    img{
        border-radius: 1rem  1rem 0 0;      
    }
    
    div{
        background-color: #4c92e885;
        padding: 1rem;
        border-radius: 0 0 1rem 1rem;
        h5{
            color: #fafafa;
            padding: 0.5rem;
            border-bottom: 3px solid #4586d6cb;
            
          
        }
        p{     
            color: #fafafa;
        }
        a{
            border-radius: 0.8rem;
            width: 100%;
            background: rgb(139, 207, 166);
            border: 0;
            
        }
    }
}
    
</style>