const loadMoreButton = document.querySelector('.social__comments-loader');

function loadMoreComments () {
  const currentShownComments = document.querySelector('.social__comment-shown-count');
  const hiddenComments = document.querySelectorAll('.social__comment.hidden');
  if(hiddenComments.length <= 5){
    currentShownComments.textContent = Number(currentShownComments.textContent) + hiddenComments.length;
    for (let i = 0; i < hiddenComments.length; i++){
      hiddenComments[i].classList.remove('hidden');
      loadMoreButton.classList.add('hidden');
    }
  } else {
    currentShownComments.textContent = Number(currentShownComments.textContent) + 5;
    for (let i = 0; i < 5; i++){
      hiddenComments[i].classList.remove('hidden');
    }
  }
  if (loadMoreButton.classList.contains('hidden')){
    loadMoreButton.removeEventListener('click', loadMoreComments);
  }
}

export {loadMoreComments};
