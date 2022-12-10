import { reactive } from "vue";
import axios from "axios";

export const store = reactive ({
    charactersList : [],
    pageInfo:{},
    loading:false,
    page: 1,
    filtered: null,
    
});

export function getData(){

    store.loading = true;

    axios.get("https://rickandmortyapi.com/api/character",{
        params:{
            page: store.page,
            ...store.filtered

        }
    }
    )
    .then((resp) => {
        store.charactersList = resp.data.results;
        store.pageInfo = resp.data.info;
        setTimeout(() => {        
        store.loading = false;
        }, 500);
    })

}