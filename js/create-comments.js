const commentsList = document.querySelector('.social__comments');
const commentElementTemplate = commentsList.querySelector('.social__comment');
const loadMoreButton = document.querySelector('.social__comments-loader');

const commentFragment = document.createDocumentFragment();

function createComments (comments) {
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

  if(commentsArray.length > 5){
    document.querySelector('.social__comment-shown-count').textContent = 5;
    loadMoreButton.classList.remove('hidden');
  } else {
    document.querySelector('.social__comment-shown-count').textContent = commentsArray.length;
    loadMoreButton.classList.add('hidden');
  }

  hideComments (commentsArray);

}

function hideComments (commentsArray) {
  for(let i = 5; commentsArray.length > i; i++){
    commentsArray[i].classList.add('hidden');
  }
}

export{createComments};
