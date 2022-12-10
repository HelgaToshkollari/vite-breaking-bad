<template lang="">
    <div class="d-flex justify-content-between align-items-center">
        <div class="alert alert-info p-2">
                sono stati trovati {{store.pageInfo.count}} elementi . stai visualizzando la pagina {{store.page}} di {{store.pageInfo.pages}}
        </div> 
        <nav aria-label="Page navigation example">
 
            <ul class="pagination ">
                <li class="page-item">
                    <a class="page-link" href="#" aria-label="Previous" @click="onPrevClick">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>
                <li class="page-item">
                    <a class="page-link" href="#" aria-label="current">
                        {{page}} 
                    </a>
                    
                </li>
    
                <li class="page-item">
                    <a class="page-link" href="#" aria-label="Next" @click="onNextClick">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
            </ul>
        </nav>
        
    </div>
</template>
<script>
import { store, } from "../store";
export default {
    props:{
        page:{
            type: Number,
            default: 1,
            
        }
    },
    data() {
        return {
            store,
            
        }
    },
    methods:{
        onPrevClick(){
            this.$emit("pageChange", this.page - 1);
        },
        onNextClick(){
            this.$emit("pageChange",this.page + 1);
        }
    }
    
}
</script>
<style lang="">
    
</style>