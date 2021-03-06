'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

var WIZARD_NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];
var WIZARD_SURNAMES = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];
var COAT_COLOR = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];
var EYES_COLOR = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];
var MIN_ARRAY_LENGTH = 0;

/**
 * Нахождение случайного числа в диапазоне
 * @param {number} min минимальное число в диапазоне
 * @param {number} max максимальное число в диапазоне
 * @return {number} возвращаем случайное число от min до max
 */
var randomInteger = function (min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1));
};

/**
 * Нахождение случайного элемента в массиве
 * @param {Array} array передаем массив данных
 * @return {*} возвращаем случайный элемент массива
 */
var getRandomElement = function (array) {
  return array[randomInteger(MIN_ARRAY_LENGTH, array.length - 1)];
};

/**
 * Отрисовывает одного случайного волшебника
 * @param {Array} WIZARD_NAMES передаем массив с именами волшебников
 * @param {Array} WIZARD_SURNAMES передаем массив с фамилиями волшебников
 * @param {Array} COAT_COLOR передаем массив с цветами плащей волшебников
 * @param {Array} EYES_COLOR передаем массив с цветами глаз волшебников
 * @return {*} возвращаем случайного волшебника
 */
var renderWizard = function (wizardNames, wizardSurnames, coatColor, eyesColor) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = getRandomElement(wizardNames) + ' ' + getRandomElement(wizardSurnames);
  wizardElement.querySelector('.wizard-coat').style.fill = getRandomElement(coatColor);
  wizardElement.querySelector('.wizard-eyes').style.fill = getRandomElement(eyesColor);
  return wizardElement;
};
/**
 * Создаем фрагмент, для оптимизации
 */
var fragment = document.createDocumentFragment();

/**
 * Добавляем в фрагмент четырех, случайно сгенерированных, волшебников
 */
for (var i = 0; i < 4; i++) {
  fragment.appendChild(renderWizard(WIZARD_NAMES, WIZARD_SURNAMES, COAT_COLOR, EYES_COLOR));
}
/**
 * Добавляем фрагмент в DOM
 */
similarListElement.appendChild(fragment);
