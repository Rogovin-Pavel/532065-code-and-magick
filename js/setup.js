'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];
var MIN_ARRAY_LENGTH = 0;

var randomInteger = function (min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1));
};

for (var i = 0; i < 4; i++) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = WIZARD_NAMES[randomInteger(MIN_ARRAY_LENGTH, WIZARD_NAMES.length - 1)] + ' ' + WIZARD_SURNAMES[randomInteger(MIN_ARRAY_LENGTH, WIZARD_SURNAMES.length - 1)];
  wizardElement.querySelector('.wizard-coat').style.fill = coatColor[randomInteger(MIN_ARRAY_LENGTH, coatColor.length - 1)];
  wizardElement.querySelector('.wizard-eyes').style.fill = eyesColor[randomInteger(MIN_ARRAY_LENGTH, eyesColor.length - 1)];
  similarListElement.appendChild(wizardElement);
}
