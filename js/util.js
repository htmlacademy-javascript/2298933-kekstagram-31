const isEscapeKey = function(evt){
  return evt.key === 'Escape';
};

function getDataElement(datas, datasetId) {
  for(let i = 0; datas.length > i; i++){
    if(datas[i].id === datasetId){
      return datas[i];
    }
  }
}

export {isEscapeKey, getDataElement};
