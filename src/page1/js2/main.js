import axios from 'axios';
import css from '../style/pod.css';
import * as spinner from '../../page2/spinner';


        // axios.get('https://api.nasa.gov/planetary/apod?api_key=6YmFdsVxaR5ewRLqHtIEIFBPM1jsqFUxjGAJPBPV&hd=false')
        // .then(res => console.log(res));

//Get request

//event listener
// document.getElementById('pod').addEventListener('click', getPicture);
// const pod = document.querySelector('pod');


   spinner.spinner();
    axios({
        method:'get',
        url:'https://api.nasa.gov/planetary/apod?api_key=6YmFdsVxaR5ewRLqHtIEIFBPM1jsqFUxjGAJPBPV&hd=false'
    })
    .then(res => {
        if(res.data.media_type == "video" && res.data.copyright) {  
            spinner.clearSpinner();
            document.getElementById('p').innerHTML = `
            <h2> ${res.data.title} </h2>
            <iframe class="video"
            src= "${res.data.url}">
            </iframe>
            `;
            document.getElementById('p2').innerHTML= `
            <h2> About this picture </h2>
            <p>${res.data.explanation}</p>
            `;
            document.querySelector('.info-display').innerHTML = `
            <p>Uploaded: ${res.data.date}</p>
            <p class="credit">Credit: ${res.data.copyright}</p>
            `;
            document.getElementById('credit').innerHTML= `
            <p>&copy Design by Fred Garcia 2020</p>
            `;
        }
        else if ( res.data.media_type == "video" && !res.data.copyright ) {
            spinner.clearSpinner();
            document.getElementById('p').innerHTML = `
            <h2> ${res.data.title} </h2>
            <iframe class="video"
            src= "${res.data.url}">
            </iframe>
            `;
            document.querySelector('.info-display').innerHTML = `
            <p>Uploaded: ${res.data.date}</p>
            <p>Credit: NASA</p>
            `;
            document.getElementById('p2').innerHTML= `
            <h2> About this picture </h2>
            <p>${res.data.explanation}</p>
            `;
            document.getElementById('credit').innerHTML= `
            <p>&copy Design by Fred Garcia 2020</p>
            `;
        }
        if (res.data.media_type == "image" && res.data.copyright) {
            spinner.clearSpinner();
            document.getElementById('p').innerHTML= `
            <h2>${res.data.title}</h2>
            <a href = "${res.data.url}" target = "_blank"> <img src="${res.data.url}"> </a>
            `;
            document.getElementById('p2').innerHTML= `
            <h2> About this picture </h2>
            <p> ${res.data.explanation} </p>
            `;
            document.querySelector('.info-display').innerHTML = `
            <p>Uploaded: ${res.data.date}</p>
            <p class="credit">Credit: ${res.data.copyright}</p>
            `;
           
            document.getElementById('credit').innerHTML= `
            <p>&copy Design by Fred Garcia 2020</p>
            `;
        }
        else {
            spinner.clearSpinner();
            document.getElementById('p').innerHTML= `
            <h2>${res.data.title}</h2>
            <a href = "${res.data.url}" target = "_blank"> <img src="${res.data.url}"> </a>
            `;
            document.getElementById('p2').innerHTML= `
            <h2> About this picture </h2>
            <p> ${res.data.explanation} </p>
            `;
            document.querySelector('.info-display').innerHTML = `
            <p>Uploaded: ${res.data.date}</p>
            <p class="credit">Credit: NASA</p>
            `;
           
            document.getElementById('credit').innerHTML= `
            <p>&copy Design by Fred Garcia 2020</p>
            `;
        }

    })
    .catch(error => console.log(error))


   
                                                                                                                                       


