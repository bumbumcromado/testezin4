//helper
var html = {
  get: function get(el) {
    return document.querySelector(el);
  }
};
var data = conteudoP;
var charLimit = 1000;
var state = {
  page: 1,
  perPage: charLimit,
  totalPages: Math.ceil(data.length / charLimit)
};
var controls = {
  next: function next() {
    state.page++;
    var lastPage = state.page > state.totalPages;

    if (lastPage) {
      state.page--;
    }
  },
  prev: function prev() {
    state.page--;

    if (state.page < 1) {
      state.page++;
    }
  },
  createListeners: function createListeners() {
    html.get('.prev').addEventListener('click', function () {
      controls.prev();
      update();
    });
    html.get('.next').addEventListener('click', function () {
      controls.next();
      update();
    });
  }
};
var list = {
  render: function render(text) {
    html.get('.texto').textContent = text;
  },
  update: function update() {
    html.get('.texto').textContent = '';
    var page = state.page - 1;
    var start = page * state.perPage;
    var end = start + state.perPage;
    paginatedText = data.slice(start, end);
    list.render(paginatedText);
    html.get('.pagina').textContent = "pagina ".concat(state.page);
    var titulo = html.get('h1');

    if (state.page != 1) {
      titulo.classList.add('display_none');
    } else {
      titulo.classList.remove('display_none');
    }
  }
};

function update() {
  list.update();
}

function init() {
  list.update();
  controls.createListeners();
}

init();