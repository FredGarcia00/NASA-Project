import { elements } from './base';

export const spinner = () => {
    const loader = `
        <div class="loader" id="load">
        <h1>loading...</h1>
        </div>
        `;
        elements.loadingInput.insertAdjacentHTML('afterbegin', loader);
    };

    export const clearSpinner = () => {
        const loader = document.querySelector('.loader');
    if(loader) loader.parentElement.removeChild(loader);
    }
