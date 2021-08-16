import { paragrafo,titulo,escolhas } from './script.js'
import { flowText } from './flowText.js'

function renderPage(chapter,state){
    // if(state.currentPage == 1){
    //     titulo.classList.remove('display_none');
    // }
    
    paragrafo.textContent = '';

    update(flowText(chapter.content,state),state,chapter)
    titulo.textContent = chapter.titulo;

    //renderButtons(chapter.escolhas);
    // if(state.currentPage == state.totalPages){
    //     renderButtons(chapter.escolhas);
    // }

}

function renderButtons(options){
    //reset das opções a cada página
    escolhas.innerHTML = '';
    
    options.forEach( option => {
        let button = document.createElement('button');
        button.textContent = option.name;
        button.name = option.path;

    escolhas.appendChild(button);
    })
    
}
function update(text,state,chap){
    if(state.currentPage == 1){
        titulo.classList.remove('display_none');
    } else {
        titulo.classList.add('display_none');
    }
    if(state.currentPage == state.totalPages){
        renderButtons(chap.choices);
    } else {
        escolhas.innerHTML = '';
    }

    paragrafo.textContent = text;
}

export { renderPage, update }