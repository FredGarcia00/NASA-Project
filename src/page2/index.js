import Search from './search-rover';
import * as searchView from './searchView';
import { elements } from './base';
import './style.css';
import axios from 'axios';
import * as spinner from  './spinner';


//Global state of the app
//search object
const state ={};

const controlSearch = async () => {
    // 1) Get the id from the view
    const id = searchView.getInput();
    console.log(id);
    if(id) {
        //2) New search object and add to state
        state.search = new Search(id);

        //3) prepare UI for results
        searchView.clearInput();
        searchView.clearResults();
        spinner.spinner();
        try {
            //4) waits for data from api
            await state.search.getPhotos();
            spinner.clearSpinner();
            //5) render results on UI
            // console.log(state.search.result); get pics from search-rover this.result
            searchView.renderResults(state.search.result);  }
            catch(err) {
                console.log('something went wrong');
            }
        }
}
elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();//so it doesn't refresh each click
    controlSearch();
})

// below is rover data

const info = document.querySelector('.grid-info');
axios({
        method:'get',
        url:'https://api.nasa.gov/mars-photos/api/v1/rovers/spirit/photos?sol=12&camera=NAVCAM&api_key=6YmFdsVxaR5ewRLqHtIEIFBPM1jsqFUxjGAJPBPV'
    })
    .then(res => {
        for(let a in res.data){
            info.innerHTML = `
            <p>Rover: ${res.data.photos[0].rover.name}</p>
            <p>Launched from Earth on: ${res.data.photos[0].rover.launch_date}</p>
            <p>Landed on Mars: ${res.data.photos[0].rover.landing_date}</p>
            <p>Status: <span class="status-green">${res.data.photos[0].rover.status}</span></p>
            `;
        }
        // console.log(res);
    })
    .catch(error => console.error(error));


