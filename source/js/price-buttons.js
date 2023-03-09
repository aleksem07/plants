// window.onload = () => {
//   console.log('hello');

//   addPricesButtonClickHandler();
// };

// const addPricesButtonClickHandler = () => {
//   document.querySelector('.prices__tariff').addEventListener('click', (evt) => {
//     console.log('df');
//     if (evt.target.classList.contains('tariff__item')) {
//     }
//   });
// };

const pricePerHour = ['$15', '$25', '$35'];

const buttonTarifContainer = document.querySelector('.tariff__list');
const buttonTarif = buttonTarifContainer.querySelectorAll('.tariff__item');
const dropdownStatusActive = buttonTarifContainer.querySelectorAll('.dropdown-status');

const tarifDescTemplate = document
  .querySelector('#priceTemplate')
  .content.querySelector('.tariff__item-description');

const closeOpenedButton = () => {
  buttonTarif.forEach((btn, i) => {
    const addedBlock = btn.querySelector('.tariff__item-description');
    if (btn.classList.contains('tariff__item--active')) {
      // dropdownStatusActive[i].classList.remove('dropdown-status--reverse');
      btn.classList.remove('tariff__item--active');
      btn.removeChild(addedBlock);
    }
  });
};

buttonTarif.forEach((button, i) => {
  button.addEventListener('click', () => {
    closeOpenedButton();
    if (dropdownStatusActive[i].classList.contains('dropdown-status--reverse')) {
      closeOpenedButton();
    }

    button.classList.add('tariff__item--active');

    if (button.classList.contains('tariff__item--active')) {
      dropdownStatusActive[i].classList.toggle('dropdown-status--reverse');
      const price = tarifDescTemplate.querySelector('.tariff__item-price span');
      price.textContent = pricePerHour[i];
      const addTarifTemplate = tarifDescTemplate.cloneNode(true);
      button.appendChild(addTarifTemplate);
    }
  });
});

buttonTarif.forEach(() => {});
