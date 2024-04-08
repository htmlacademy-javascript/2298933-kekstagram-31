const isEscapeKey = function(evt){
  return evt.key === 'Escape';
};

function getDataElement(dataArray, datasetId) {
  let dataElement = '';
  for(let i = 0; dataArray.length > i; i++) {
    if(dataArray[i].id === datasetId){
      dataElement = dataArray[i];
    }
  }
  return dataElement;
}


export {isEscapeKey, getDataElement};
