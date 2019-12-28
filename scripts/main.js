const header__title = document.getElementById('header__title');
const search__bar = document.getElementById('search-bar');
const header__nav = document.getElementById('header__nav');
const header__icons = document.getElementById('header__icons');
const categorias = document.getElementById('categorias');
const categorias__nav = document.getElementById('categorias__nav');
const search = document.getElementById('search');
const share = document.getElementById('share');
const cross = document.getElementById('cross');
const bars = document.getElementById('bars');

if (screen.width >= 800) {
  document.getElementById('bars').classList.add('hide')
  document.getElementById('share').classList.remove('hide')
  document.getElementById('search').classList.remove('hide')
  document.getElementById('categorias__nav').classList.add('hide')

  search.addEventListener('click', function () {
    header__title.classList.toggle('hide');
    header__search.classList.toggle('hide');
    header__nav.classList.toggle('hide');
    share.classList.toggle('hide');
    cross.classList.toggle('hide');
    search.classList.toggle('hide');
  })
  
  cross.addEventListener('click', function () {
    header__title.classList.toggle('hide');
    header__search.classList.toggle('hide');
    header__nav.classList.toggle('hide');
    share.classList.toggle('hide');
    cross.classList.toggle('hide');
    search.classList.toggle('hide');
  })

} else if (screen.width < 800) {
  document.getElementById('header__nav').classList.add('hide')
  document.getElementById('bars').classList.remove('hide')
  document.getElementById('share').classList.add('hide')
  document.getElementById('search').classList.add('hide')
  document.getElementById('categorias__nav').classList.add('hide')

  bars.addEventListener('click', function () {
    header__nav.classList.add('hide');
    search.classList.remove('hide');
    cross.classList.remove('hide');
    bars.classList.add('hide');
    categorias.classList.add('categorias-activate');
    categorias.classList.remove('categorias');
    categorias__nav.classList.remove('hide');
  })

  search.addEventListener('click', function () {
    header__title.classList.add('hide');
    header__nav.classList.add('hide');
    header__search.classList.remove('hide');
  })

  cross.addEventListener('click', function () {
    header__title.classList.remove('hide');
    header__search.classList.add('hide');
    header__nav.classList.add('hide');
    bars.classList.remove('hide');
    cross.classList.add('hide');
    search.classList.add('hide');
    categorias.classList.remove('categorias-activate');
    categorias.classList.add('categorias');
    categorias__nav.classList.add('hide');
  })
}


