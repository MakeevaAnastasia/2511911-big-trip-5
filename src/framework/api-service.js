/**
 * Класс для отправки запросов к серверу
 */
export default class ApiService {
  /**
<<<<<<< HEAD
    @param {string} endPoint 
    @param {string} authorization 
=======
   * @param {string} endPoint Адрес сервера
   * @param {string} authorization Авторизационный токен
>>>>>>> 1ef1417a4cea80d50dc1cea8cecee39895aa588c
   */
  constructor(endPoint, authorization) {
    this._endPoint = endPoint;
    this._authorization = authorization;
  }

  /**
<<<<<<< HEAD
   
    @param {Object} config 
    @param {string} config.url 
    @param {string} [config.method] 
    @param {string} [config.body] 
    @param {Headers} [config.headers] 
    @returns {Promise<Response>}
=======
   * Метод для отправки запроса к серверу
   * @param {Object} config Объект с настройками
   * @param {string} config.url Адрес относительно сервера
   * @param {string} [config.method] Метод запроса
   * @param {string} [config.body] Тело запроса
   * @param {Headers} [config.headers] Заголовки запроса
   * @returns {Promise<Response>}
>>>>>>> 1ef1417a4cea80d50dc1cea8cecee39895aa588c
   */
  async _load({
    url,
    method = 'GET',
    body = null,
    headers = new Headers(),
  }) {
    headers.append('Authorization', this._authorization);

    const response = await fetch(
      `${this._endPoint}/${url}`,
      {method, body, headers},
    );

    try {
      ApiService.checkStatus(response);
      return response;
    } catch (err) {
      ApiService.catchError(err);
    }
  }

  /**
<<<<<<< HEAD
   
    @param {Response} response 
    @returns {Promise<JSON>}
=======
   * Метод для обработки ответа
   * @param {Response} response Объект ответа
   * @returns {Promise<JSON>}
>>>>>>> 1ef1417a4cea80d50dc1cea8cecee39895aa588c
   */
  static parseResponse(response) {
    return response.json();
  }

  /**
<<<<<<< HEAD
   
    @param {Response} response 
=======
   * Метод для проверки ответа
   * @param {Response} response Объект ответа
>>>>>>> 1ef1417a4cea80d50dc1cea8cecee39895aa588c
   */
  static checkStatus(response) {
    if (!response.ok) {
      throw new Error(`${response.status}: ${response.statusText}`);
    }
  }

  /**
<<<<<<< HEAD
   
    @param {Error} err 
=======
   * Метод для обработки ошибок
   * @param {Error} err Объект ошибки
>>>>>>> 1ef1417a4cea80d50dc1cea8cecee39895aa588c
   */
  static catchError(err) {
    throw err;
  }
}
