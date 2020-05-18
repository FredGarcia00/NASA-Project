import {key} from './config';
import axios from 'axios';

export default class Search {
    constructor(id) {
        this.id = id;
    }

     async getPhotos() {
        try {
            const res = await axios(`https://api.nasa.gov/mars-photos/api/v1/rovers/spirit/photos?sol=${this.id}&page=1&camera=PANCAM&api_key=${key}`);
            this.result = res.data.photos;
            // this.title = res.data.rover.name;
            //  console.log(res);
        }
        catch(error){
            // console.log(error);
            alert('something went wrong!');
        }
    }

}