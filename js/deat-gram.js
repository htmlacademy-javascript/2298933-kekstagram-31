function addDeathGram () {
  const keksGramField = document.querySelector('.img-upload__start');
  const keksGramForm = document.querySelector('.img-upload__form');

  const urlPath = 'fun/background.png';

  keksGramField.style.backgroundImage = `url(${urlPath})`;
  keksGramForm.style.backgroundImage = 'none';
  keksGramForm.style.backgroundColor = 'transparent';
}

export{addDeathGram};
