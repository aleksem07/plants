// contact us-----------------------------------------------------------------------

const contactButton = document.querySelector('.contacts__dropdown');
const contactButtonText = contactButton.querySelector('.dropdown__text');
const dropdownStatusActive = contactButton.querySelector('.dropdown-status');
const cityList = contactButton.querySelector('.contacts__city-list');
const contactsCityItem = contactButton.querySelectorAll('.contacts__city-item');

contactButton.addEventListener('click', () => {
  contactButton.classList.toggle('button--active');
  dropdownStatusActive.classList.toggle('dropdown-status--reverse');
  cityList.classList.toggle('city-list--active');

  //text
  contactsCityItem.forEach((city, i) => {
    city.addEventListener('click', () => {
      for (let j = 0; j < contactsCityItem.length; j++) {
        document.querySelectorAll('.contacts__city-show')[j].classList.remove('city-show--active');
      }
      contactButtonText.textContent = city.textContent;
      document.querySelectorAll('.contacts__city-show')[i].classList.add('city-show--active');
    });
  });
});
