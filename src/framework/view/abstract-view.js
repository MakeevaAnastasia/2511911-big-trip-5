import {createElement} from '../render.js';
import './abstract-view.css';

/** @const {string} Класс, реализующий эффект "покачивания головой" */
const SHAKE_CLASS_NAME = 'shake';

<<<<<<< HEAD
/** @const {number} */
const SHAKE_ANIMATION_TIMEOUT = 600;

=======
/** @const {number} Время анимации в миллисекундах */
const SHAKE_ANIMATION_TIMEOUT = 600;

/**
 * Абстрактный класс представления
 */
>>>>>>> 1ef1417a4cea80d50dc1cea8cecee39895aa588c
export default class AbstractView {
  /** @type {HTMLElement|null} Элемент представления */
  #element = null;

<<<<<<< HEAD
  /** @type {Object}  */
=======
  /** @type {Object} Объект с колбэками. Может использоваться для хранения обработчиков событий */
>>>>>>> 1ef1417a4cea80d50dc1cea8cecee39895aa588c
  _callback = {};

  constructor() {
    if (new.target === AbstractView) {
      throw new Error('Can\'t instantiate AbstractView, only concrete one.');
    }
  }

  /**
<<<<<<< HEAD
   
    @returns {HTMLElement} 
=======
   * Геттер для получения элемента
   * @returns {HTMLElement} Элемент представления
>>>>>>> 1ef1417a4cea80d50dc1cea8cecee39895aa588c
   */
  get element() {
    if (!this.#element) {
      this.#element = createElement(this.template);
    }

    return this.#element;
  }

  /**
<<<<<<< HEAD
   
    @abstract
    @returns {string} 
=======
   * Геттер для получения разметки элемента
   * @abstract
   * @returns {string} Разметка элемента в виде строки
>>>>>>> 1ef1417a4cea80d50dc1cea8cecee39895aa588c
   */
  get template() {
    throw new Error('Abstract method not implemented: get template');
  }

  /** Метод для удаления элемента */
  removeElement() {
    this.#element = null;
  }

  /**
<<<<<<< HEAD
   
    @param {shakeCallback} [callback] 
=======
   * Метод, реализующий эффект "покачивания головой"
   * @param {shakeCallback} [callback] Функция, которая будет вызвана после завершения анимации
>>>>>>> 1ef1417a4cea80d50dc1cea8cecee39895aa588c
   */
  shake(callback) {
    this.element.classList.add(SHAKE_CLASS_NAME);
    setTimeout(() => {
      this.element.classList.remove(SHAKE_CLASS_NAME);
      callback?.();
    }, SHAKE_ANIMATION_TIMEOUT);
  }
}

/**
 * Функция, которая будет вызвана методом shake после завершения анимации
 * @callback shakeCallback
 */
