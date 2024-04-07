const effectsPreview = document.querySelectorAll('.effects__preview');
const effectSlider = document.querySelector('.effect-level__slider');
const effectsInputList = document.querySelector('.effects__list');
const previewImage = document.querySelector('.img-upload__preview img');
const sliderFieldSet = document.querySelector('.img-upload__effect-level');


const effectsList = createEffectsList(effectsPreview);
const styleRulleList = createRulleList(effectsList);


const sliderRules = {
  default: {
    range: {
      min: 0,
      max: 1,
    },
    start: 1,
    step: 0.1,
    connect: 'lower',
  },
  grayscale:
  {
    range: {
      min: 0,
      max: 1,
    },
    start: 1,
    step: 0.1,
  },
  sepia: {
    range: {
      min: 0,
      max: 1,
    },
    start: 1,
    step: 0.1,
  },
  invert: {
    range: {
      min: 0,
      max: 1,
    },
    start: 1,
    step: 0.1,
  },
  blur: {
    range: {
      min: 0,
      max: 3,
    },
    start: 3,
    step: 0.1,
  },
  brightness: {
    range: {
      min: 1,
      max: 3,
    },
    start: 3,
    step: 0.1,
  }
};


function onChangeSlider() {
  const value = effectSlider.noUiSlider.get();
  const rule = previewImage.style.filter.replace(/\(.+\)/,'');
  previewImage.style.filter = '';
  let filterRule = `${rule}(${value})`;
  if(rule === 'blur'){
    filterRule = `${rule}(${value}px)`;
    previewImage.style.filter = filterRule;
  }
  previewImage.style.filter = `${rule}(${value})`;
}


function addEffectsEvent() {
  if(document.querySelector('.img-upload__overlay').classList.contains('hidden')){
    effectsInputList.addEventListener('click', onEffectInputClick);
    sliderFieldSet.classList.add('hidden');
    noUiSlider.create(effectSlider, sliderRules.default);
    effectSlider.noUiSlider.on('update', onChangeSlider);
  } else {
    previewImage.className = '';
    effectsInputList.removeEventListener('click', onEffectInputClick);
    effectSlider.noUiSlider.destroy();
  }
}

function createRulleList(effect){
  const rulles = [];
  for(let i = 0; effect.length > i; i++){
    const element = document.querySelector(`.${effect[i]}`);
    const style = getComputedStyle(element);
    rulles.push(style.filter);
  }
  return rulles;
}


function createEffectsList (effects) {

  const effectsArray = [];

  for(let i = 0; effects.length > i; i++){
    let effect = effectsPreview[i].className;
    effect = effect.replace(/ {2,}/g, ' ');
    effect = effect.split(' ');
    effect.splice(0, 1);
    effect = effect.join();
    effectsArray.push(effect);
  }
  return effectsArray;
}


function onEffectInputClick(evt){
  const currentItem = evt.target.closest('.effects__preview');
  if(currentItem){
    addEffect(currentItem);
  }
}

function addEffect(effect) {
  for(let i = 0; effectsList.length > i; i++){
    if(effect.classList.contains(effectsList[i])){
      const styleRule = getStyleRule(effect);
      previewImage.style.filter = styleRule;
      addSlider(styleRule);
      const effectRule = addEffectRule(styleRule);
      effectSlider.noUiSlider.updateOptions(effectRule);
    }
  }
}

function addSlider (rule) {
  if(rule !== 'none'){
    sliderFieldSet.classList.remove('hidden');
  } else {
    sliderFieldSet.classList.add('hidden');
  }
}

function addEffectRule (effect) {
  let rule;
  switch(effect){
    case 'none':
      rule = sliderRules.default;
      break;
    case 'grayscale(1)':
      rule = sliderRules.grayscale;
      break;
    case 'sepia(1)':
      rule = sliderRules.sepia;
      break;
    case 'invert(1)':
      rule = sliderRules.invert;
      break;
    case 'blur(3px)':
      rule = sliderRules.blur;
      break;
    case 'brightness(3)':
      rule = sliderRules.brightness;
      break;
  }
  return rule;
}

function getStyleRule (element){
  const style = window.getComputedStyle(element);
  for(let j = 0; styleRulleList.length > j; j++){
    if(style.filter === styleRulleList[j]){
      return styleRulleList[j];
    }
  }
}

export{addEffectsEvent};
