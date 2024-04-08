import { getDataErrorMessage } from './messages.js';

const BASE_URL = 'https://31.javascript.htmlacademy.pro/kekstagram';

const Route = {
  GET_DATA: '/data',
  SEND_DATA: '/',
};
const Method = {
  GET: 'GET',
  POST: 'POST',
};

const error = {
  [Method.GET]: getDataErrorMessage,
  [Method.POST]: 'Не удалось отправить данные формы'
};


const load = async(route, method = Method.GET, body = null) => {
  const response = await fetch(`${BASE_URL}${route}`, {method, body});
  return response.ok ? await response.json() : Promise.reject(error[method]());
};


const getData = async () => await load(Route.GET_DATA);

const sendData = async (body) => await load(Route.SEND_DATA, Method.POST, body);

export {getData, sendData};
