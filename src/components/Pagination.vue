<template lang="">
    <div class="d-flex justify-content-end">
        <nav aria-label="Page navigation example">
            <ul class="pagination">
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
export default {
    props:{
        page:{
            type: Number,
            default: 1,
            
        }
    },
    data() {
        return {
            
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