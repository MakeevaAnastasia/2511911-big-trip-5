import AbstractView from './abstract-view.js';

<<<<<<< HEAD
=======
/**
 * Абстрактный класс представления с состоянием
 */
>>>>>>> 1ef1417a4cea80d50dc1cea8cecee39895aa588c
export default class AbstractStatefulView extends AbstractView {
  /** @type {Object} Объект состояния */
  _state = {};

  /**
<<<<<<< HEAD
   
    @param {Object} update 
=======
   * Метод для обновления состояния и перерисовки элемента
   * @param {Object} update Объект с обновлённой частью состояния
>>>>>>> 1ef1417a4cea80d50dc1cea8cecee39895aa588c
   */
  updateElement(update) {
    if (!update) {
      return;
    }

    this._setState(update);

    this.#rerenderElement();
  }

  /**
   * Метод для восстановления обработчиков после перерисовки элемента
   * @abstract
   */
  _restoreHandlers() {
    throw new Error('Abstract method not implemented: restoreHandlers');
  }

  /**
<<<<<<< HEAD
   
    @param {Object} update 
=======
   * Метод для обновления состояния
   * @param {Object} update Объект с обновлённой частью состояния
>>>>>>> 1ef1417a4cea80d50dc1cea8cecee39895aa588c
   */
  _setState(update) {
    this._state = structuredClone({...this._state, ...update});
  }

<<<<<<< HEAD

=======
  /** Метод для перерисовки элемента */
>>>>>>> 1ef1417a4cea80d50dc1cea8cecee39895aa588c
  #rerenderElement() {
    const prevElement = this.element;
    const parent = prevElement.parentElement;
    this.removeElement();

    const newElement = this.element;

    parent.replaceChild(newElement, prevElement);

    this._restoreHandlers();
  }
}
