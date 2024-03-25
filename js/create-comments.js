const commentsList = document.querySelector('.social__comments');
const commentElementTemplate = commentsList.querySelector('.social__comment');
const loadMoreButton = document.querySelector('.social__comments-loader');

const commentFragment = document.createDocumentFragment();

const commentShown = 5;

function createComments (comments) {
  document.querySelector('.social__comment-total-count').textContent = comments.length;
  commentsList.innerHTML = '';

  comments.forEach(({avatar, message, name}) => {
    const commentElement = commentElementTemplate.cloneNode(true);

    commentElement.querySelector('.social__picture').src = avatar;
    commentElement.querySelector('.social__picture').alt = name;
    commentElement.querySelector('.social__text').textContent = message;

    commentFragment.appendChild(commentElement);
  });
  commentsList.appendChild(commentFragment);

  const commentsArray = commentsList.querySelectorAll('.social__comment');

  if(commentsArray.length > commentShown){
    document.querySelector('.social__comment-shown-count').textContent = commentShown;
    loadMoreButton.classList.remove('hidden');
  } else {
    document.querySelector('.social__comment-shown-count').textContent = commentsArray.length;
    loadMoreButton.classList.add('hidden');
  }

  hideComments (commentsArray);
}

function hideComments (commentsArray) {
  for(let i = commentShown; commentsArray.length > i; i++){
    commentsArray[i].classList.add('hidden');
  }
}

export{createComments};
