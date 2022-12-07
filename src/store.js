import { reactive } from "vue";
import axios from "axios";

export const store = reactive ({
    charactersList : [],
    pageInfo:{},
    loading:false,
    
});

export function getData(){

    store.loading = true;

    axios.get("https://rickandmortyapi.com/api/character")
    .then((resp) => {
        store.charactersList = resp.data.results;
        store.pageInfo = resp.data.info;
        setTimeout(() => {        
        store.loading = false;
        }, 2000);
    })

}