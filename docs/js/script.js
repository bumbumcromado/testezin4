import { renderPage, update } from './renderPage.js'
import { flowText } from './flowText.js'
//render(chap){}
//evento de click chamar o render, mudando a rota do fetch, mas não a da pagina (ver como gerenciar rotas em spa)
let paragrafo = document.querySelector('.texto'); 
let titulo = document.querySelector('h1'); 
let escolhas = document.querySelector('#escolhas');
let next = document.querySelector('.next');
let prev = document.querySelector('.prev'); 
let baseURL = 'https://druiddd-test.herokuapp.com/esqueleto/'

export { paragrafo, titulo, escolhas };

async function fetchChapter(route){
    return fetch(`${baseURL}${route}`).then(resp => resp.text().then(result => result));
}



async function start(route){
    let state = { limit: 180, currentPage:1};
    let jsonChapter = await fetchChapter(route);
    let chapter = JSON.parse(jsonChapter);
    renderPage(chapter, state);
    addButtonListeners();
    pageControlListeners(chapter,state);
    
}

//primeiro render
start('c1cp1');


function addButtonListeners(){
    let escolhas = document.querySelector('#escolhas');
    escolhas.addEventListener('click', event => { 
        let button = event.target;
        start(button.name);
        console.log(button.name)
    })
}

const stateController = {
    nextPage(state){
        state.currentPage++;
        if(state.currentPage > state.totalPages){
            state.currentPage--;
        }
    },
    prevPage(state){
        state.currentPage--;
        if(state.currentPage < 1){
            state.currentPage++;
        }
    }
}

function pageControlListeners(chap,state){
    prev.addEventListener('click', () => {
        stateController.prevPage(state);
        update(flowText(chap.conteudo,state),state,chap);
    })
    next.addEventListener('click', () => {
        stateController.nextPage(state);
        update(flowText(chap.conteudo,state),state,chap);
    })
}