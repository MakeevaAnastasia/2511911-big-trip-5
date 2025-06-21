/**
 * Класс, реализующий паттерн Наблюдатель.
 */
export default class Observable {
<<<<<<< HEAD
  /** @type {Set<observerCallback>} */
=======
  /** @type {Set<observerCallback>} Множество функций типа observerCallback */
>>>>>>> 1ef1417a4cea80d50dc1cea8cecee39895aa588c
  #observers = new Set();

  /**
   * Метод, позволяющий подписаться на событие
   * @param {observerCallback} observer Функция, которая будет вызвана при наступлении события
   */
  addObserver(observer) {
    this.#observers.add(observer);
  }

  /**
<<<<<<< HEAD
   
    @param {observerCallback} observer 
=======
   * Метод, позволяющий отписаться от события
   * @param {observerCallback} observer Функция, которую больше не нужно вызывать при наступлении события
>>>>>>> 1ef1417a4cea80d50dc1cea8cecee39895aa588c
   */
  removeObserver(observer) {
    this.#observers.delete(observer);
  }

  /**
<<<<<<< HEAD
   
    @param {*} event 
    @param {*} payload 
=======
   * Метод для оповещения подписчиков о наступлении события
   * @param {*} event Тип события
   * @param {*} payload Дополнительная информация
>>>>>>> 1ef1417a4cea80d50dc1cea8cecee39895aa588c
   */
  _notify(event, payload) {
    this.#observers.forEach((observer) => observer(event, payload));
  }
}

/**
<<<<<<< HEAD
 
  @callback observerCallback
  @param {*} event 
  @param {*} [payload] 
=======
 * Функция, которая будет вызвана при наступлении события
 * @callback observerCallback
 * @param {*} event Тип события
 * @param {*} [payload] Дополнительная информация
>>>>>>> 1ef1417a4cea80d50dc1cea8cecee39895aa588c
 */
