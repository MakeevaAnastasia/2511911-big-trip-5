import './ui-blocker.css';

/**
 * Класс для блокировки интерфейса
 */
export default class UiBlocker {
<<<<<<< HEAD
  /** @type {number}  */
  #lowerLimit;

  /** @type {number}  */
=======
  /** @type {number} Время до блокировки интерфейса в миллисекундах */
  #lowerLimit;

  /** @type {number} Минимальное время блокировки интерфейса в миллисекундах */
>>>>>>> 1ef1417a4cea80d50dc1cea8cecee39895aa588c
  #upperLimit;

  /** @type {HTMLElement|null} Элемент, блокирующий интерфейс */
  #element;

  /** @type {number} Время вызова метода block */
  #startTime;

  /** @type {number} Время вызова метода unblock */
  #endTime;

  /** @type {number} Идентификатор таймера */
  #timerId;

  /**
<<<<<<< HEAD
   * @param {Object} config 
   * @param {number} config.lowerLimit 
   * @param {number} config.upperLimit 
=======
   * @param {Object} config Объект с настройками блокировщика
   * @param {number} config.lowerLimit Время до блокировки интерфейса в миллисекундах. Если вызвать метод unblock раньше, то интерфейс заблокирован не будет
   * @param {number} config.upperLimit Минимальное время блокировки в миллисекундах. Минимальная длительность блокировки
>>>>>>> 1ef1417a4cea80d50dc1cea8cecee39895aa588c
   */
  constructor({lowerLimit, upperLimit}) {
    this.#lowerLimit = lowerLimit;
    this.#upperLimit = upperLimit;

    this.#element = document.createElement('div');
    this.#element.classList.add('ui-blocker');
    document.body.append(this.#element);
  }

  /** Метод для блокировки интерфейса */
  block() {
    this.#startTime = Date.now();
    this.#timerId = setTimeout(() => {
      this.#addClass();
    }, this.#lowerLimit);
  }
<<<<<<< HEAD
=======

  /** Метод для разблокировки интерфейса */
>>>>>>> 1ef1417a4cea80d50dc1cea8cecee39895aa588c
  unblock() {
    this.#endTime = Date.now();
    const duration = this.#endTime - this.#startTime;

    if (duration < this.#lowerLimit) {
      clearTimeout(this.#timerId);
      return;
    }

    if (duration >= this.#upperLimit) {
      this.#removeClass();
      return;
    }

    setTimeout(this.#removeClass, this.#upperLimit - duration);
  }

  /** Метод, добавляющий CSS-класс элементу */
  #addClass = () => {
    this.#element.classList.add('ui-blocker--on');
  };

  /** Метод, убирающий CSS-класс с элемента */
  #removeClass = () => {
    this.#element.classList.remove('ui-blocker--on');
  };
}
