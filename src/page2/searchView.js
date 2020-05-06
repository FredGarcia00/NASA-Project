import {elements} from './base'

export const clearInput = () => {
    elements.searchInput.value = '';
};

export const clearResults = ()=> {
    elements.searchResult.innerHTML = '';
};

export const getInput = () => elements.searchInput.value;

const renderPicture = picture => {
        const markup = `

         <a href = "${picture.img_src}" target ="_blank">
         <img src="${picture.img_src}" alt="">
         </a>

        `;
    
    elements.searchResult.insertAdjacentHTML('beforeend', markup);
};


export const renderResults = pictures => {
    pictures.forEach(renderPicture);
};

