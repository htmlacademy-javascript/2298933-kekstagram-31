const commentsList = document.querySelector('.social__comments');
const commentElementTemplate = commentsList.querySelector('.social__comment');

const commentFragment = document.createDocumentFragment();

const maxCommentShownCount = 5;

function createCommentsList(dataElement) {
  const commentsArray = dataElement.comments;
  addComments(commentsArray);
  hideComments();
}

function addComments(commentsArray) {
  const commentTotalCount = document.querySelector('.social__comment-total-count');
  commentTotalCount.textContent = commentsArray.length;
  commentsList.innerHTML = '';
  commentsArray.forEach(({avatar, message, name}) => {
    const commentElement = commentElementTemplate.cloneNode(true);
    commentElement.querySelector('.social__picture').src = avatar;
    commentElement.querySelector('.social__picture').alt = name;
    commentElement.querySelector('.social__text').textContent = message;
    commentFragment.appendChild(commentElement);
  });
  commentsList.appendChild(commentFragment);
}

function hideComments() {
  const commentsListElements = document.querySelectorAll('.social__comment');
  const commentsShowCount = document.querySelector('.social__comment-shown-count');
  if(commentsListElements.length <= maxCommentShownCount) {
    commentsShowCount.textContent = commentsListElements.length;
  } else {
    commentsShowCount.textContent = maxCommentShownCount;
    for(let i = 5; commentsListElements.length > i; i++) {
      commentsListElements[i].classList.add('hidden');
    }
  }
}

export {createCommentsList};
