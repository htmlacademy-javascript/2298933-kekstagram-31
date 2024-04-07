const filterForm = document.querySelector('.img-filters__form');
const defaultButton = filterForm.querySelector('#filter-default');
const randomButton = filterForm.querySelector('#filter-random');
const discussedButton = filterForm.querySelector('#filter-discussed');

function addFilterEvent() {
  filterForm.addEventListener('click', onFilterButton);
}


function onFilterButton(evt) {
  const picturePosts = document.querySelectorAll('.picture');
  const currentButton = evt.target.closest('.img-filters__button');
  switch(currentButton){
    case currentButton.closest('#filter-default'):
      onFilterDefaultButton(picturePosts);
      break;
    case currentButton.closest('#filter-random'):
      onFilterRandomButton(picturePosts);
      break;
    case currentButton.closest('#filter-discussed'):
      onFilterDiscussedButton(picturePosts);
      break;
  }
}

function onFilterDefaultButton(picturePosts) {
  defaultButton.classList.add('img-filters__button--active');
  randomButton.classList.remove('img-filters__button--active');
  discussedButton.classList.remove('img-filters__button--active');
}

function onFilterRandomButton(picturePosts) {
  defaultButton.classList.remove('img-filters__button--active');
  randomButton.classList.add('img-filters__button--active');
  discussedButton.classList.remove('img-filters__button--active');
}

function onFilterDiscussedButton(picturePosts) {
  defaultButton.classList.remove('img-filters__button--active');
  randomButton.classList.remove('img-filters__button--active');
  discussedButton.classList.add('img-filters__button--active');
}


export {addFilterEvent};
