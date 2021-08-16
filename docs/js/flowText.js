export function flowText(text, state){
    let paginatedText = '';
    let separatedWords = text.split(' ')
    let wordsCount = separatedWords.length;
    state.totalPages = Math.ceil(wordsCount / state.limit);

    //algo
    let page = state.currentPage - 1;
    let start = page * state.limit;
    let end = start + state.limit;
    
    
    return paginatedText = separatedWords.slice(start,end).join(' ');

}
