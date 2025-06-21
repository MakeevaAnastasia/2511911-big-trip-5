import AbstractView from './view/abstract-view.js';

/** @enum {string} Перечисление возможных позиций для отрисовки */
const RenderPosition = {
  BEFOREBEGIN: 'beforebegin',
  AFTERBEGIN: 'afterbegin',
  BEFOREEND: 'beforeend',
  AFTEREND: 'afterend',
};

/**
<<<<<<< HEAD
 *
 @param {string} template 
  @returns {HTMLElement} 
=======
 * Функция для создания элемента на основе разметки
 * @param {string} template Разметка в виде строки
 * @returns {HTMLElement} Созданный элемент
>>>>>>> 1ef1417a4cea80d50dc1cea8cecee39895aa588c
 */
function createElement(template) {
  const newElement = document.createElement('div');
  newElement.innerHTML = template;

  return newElement.firstElementChild;
}

/**
<<<<<<< HEAD
 
  @param {AbstractView} component 
  @param {HTMLElement} container 
  @param {string} place 
=======
 * Функция для отрисовки элемента
 * @param {AbstractView} component Компонент, который должен был отрисован
 * @param {HTMLElement} container Элемент в котором будет отрисован компонент
 * @param {string} place Позиция компонента относительно контейнера. По умолчанию - `beforeend`
>>>>>>> 1ef1417a4cea80d50dc1cea8cecee39895aa588c
 */
function render(component, container, place = RenderPosition.BEFOREEND) {
  if (!(component instanceof AbstractView)) {
    throw new Error('Can render only components');
  }

  if (container === null) {
    throw new Error('Container element doesn\'t exist');
  }

  container.insertAdjacentElement(place, component.element);
}

/**
<<<<<<< HEAD
 
  @param {AbstractView} newComponent 
  @param {AbstractView} oldComponent 
=======
 * Функция для замены одного компонента на другой
 * @param {AbstractView} newComponent Компонент, который нужно показать
 * @param {AbstractView} oldComponent Компонент, который нужно скрыть
>>>>>>> 1ef1417a4cea80d50dc1cea8cecee39895aa588c
 */
function replace(newComponent, oldComponent) {
  if (!(newComponent instanceof AbstractView && oldComponent instanceof AbstractView)) {
    throw new Error('Can replace only components');
  }

  const newElement = newComponent.element;
  const oldElement = oldComponent.element;

  const parent = oldElement.parentElement;

  if (parent === null) {
    throw new Error('Parent element doesn\'t exist');
  }

  parent.replaceChild(newElement, oldElement);
}

/**
<<<<<<< HEAD
 
 @param {AbstractView} component 
=======
 * Функция для удаления компонента
 * @param {AbstractView} component Компонент, который нужно удалить
>>>>>>> 1ef1417a4cea80d50dc1cea8cecee39895aa588c
 */
function remove(component) {
  if (component === null) {
    return;
  }

  if (!(component instanceof AbstractView)) {
    throw new Error('Can remove only components');
  }

  component.element.remove();
  component.removeElement();
}

export {RenderPosition, createElement, render, replace, remove};
