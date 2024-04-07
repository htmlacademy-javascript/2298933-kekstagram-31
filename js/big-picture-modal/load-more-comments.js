const loadMoreCommentsButton = document.querySelector('.social__comments-loader');
const commentsShowCount = document.querySelector('.social__comment-shown-count');
const commentTotalCount = document.querySelector('.social__comment-total-count');

const commentsShowStep = 5;

function addLoadMoreCommentsEvent() {
  loadMoreCommentsButton.addEventListener('click', loadMoreComments);
  if(commentsShowCount.textContent === commentTotalCount.textContent) {
    loadMoreCommentsButton.classList.add('hidden');
    loadMoreCommentsButton.removeEventListener('click', loadMoreComments);
  }else {
    loadMoreCommentsButton.classList.remove('hidden');
  }
}

function loadMoreComments() {
  const currentShownComments = document.querySelector('.social__comment-shown-count');
  const hiddenComments = document.querySelectorAll('.social__comment.hidden');
  if(hiddenComments.length <= commentsShowStep) {
    currentShownComments.textContent = Number(currentShownComments.textContent) + hiddenComments.length;
    for(let i = 0; hiddenComments.length > i; i++) {
      hiddenComments[i].classList.remove('hidden');
      loadMoreCommentsButton.classList.add('hidden');
    }
  }else {
    currentShownComments.textContent = Number(currentShownComments.textContent) + commentsShowStep;
    for(let i = 0; i < commentsShowStep; i++) {
      hiddenComments[i].classList.remove('hidden');
    }
  }
  if(loadMoreCommentsButton.classList.contains('hidden')) {
    loadMoreCommentsButton.removeEventListener('click', loadMoreComments);
  }
}

export {addLoadMoreCommentsEvent, loadMoreComments};
