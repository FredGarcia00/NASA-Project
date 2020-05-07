import axios from 'axios';
import css from '../style/pod.css';



        // axios.get('https://api.nasa.gov/planetary/apod?api_key=6YmFdsVxaR5ewRLqHtIEIFBPM1jsqFUxjGAJPBPV&hd=false')
        // .then(res => console.log(res));

//Get request
const getPicture = () => {
    axios({
        method:'get',
        url:'https://api.nasa.gov/planetary/apod?api_key=6YmFdsVxaR5ewRLqHtIEIFBPM1jsqFUxjGAJPBPV&hd=false'
    })
    .then(res => showOutput(res))
    .catch(error => console.log(error))
}

const showOutput = res => {
    if(res.data.media_type == "video") {
        let btn = document.getElementById('pod');
        btn.remove();
        document.getElementById('p').innerHTML = `
        <h2>${res.data.title}</h2>
            <iframe width="420" height="315"
                src= "${res.data.url}">
             </iframe>
             <p>${res.data.date}</p>
        `;
        document.getElementById('p2').innerHTML= `
        <h2>About this picture</h2>
        <p>${res.data.explanation}</p>
    `;
    document.getElementById('credit').innerHTML= `
        <p>&copy ${res.data.copyright}</p>
    `;
    }
     else {
        let btn = document.getElementById('pod');
        btn.remove();
         document.getElementById('p').innerHTML= `
     
         <h2>${res.data.title}</h2>
         <a href = "${res.data.url}" target = "_blank"> <img src="${res.data.url}"> </a>
         <p>Uploaded: ${res.data.date}</p>
         <p>Image by ${res.data.copyright}</p>
             `;
             document.getElementById('p2').innerHTML= `
                 <h2>About this picture</h2>
                 <p>${res.data.explanation}</p>
             `;
             document.getElementById('credit').innerHTML= `
                 <p>&copy Design by Fred Garcia 2020</p>
             `;
     }
};
//event listener
document.getElementById('pod').addEventListener('click', getPicture);
