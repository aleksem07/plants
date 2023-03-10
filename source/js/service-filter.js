const serviceButtonContainer = document.querySelector('.service__container');
const serviceButtonItems = serviceButtonContainer.querySelectorAll('.service__button');
const cardItem = serviceButtonContainer.querySelectorAll('.service__card-item');

window.onload = function () {
  console.log('hello');

  document.querySelector('.service__button-box').addEventListener('click', (evt) => {
    if (evt.target.classList.contains('service__button')) {
      let clickedButton = evt.target;

      clickedButton.classList.toggle('service__button--active');

      disabledButtonMax(2);
      filterActivatedItems('gardens');
      filterActivatedItems('lawn');
      filterActivatedItems('planting');

      for (let i = 0; i < serviceButtonItems.length; i++) {
        if (
          !serviceButtonItems[0].classList.contains('service__button--active') &&
          !serviceButtonItems[1].classList.contains('service__button--active') &&
          !serviceButtonItems[2].classList.contains('service__button--active')
        ) {
          cardItem.forEach((item) => {
            item.classList.remove('service__button--blur');
          });
        }
      }
    }
  });
};

const disabledButtonMax = (maxActiveButtons) => {
  let pressedButtonCuont = 0;
  serviceButtonItems.forEach((arr) => {
    if (arr.classList.contains('service__button--active')) {
      pressedButtonCuont++;
    }
  });

  if (pressedButtonCuont >= maxActiveButtons) {
    serviceButtonItems.forEach((button) => {
      if (!button.classList.contains('service__button--active')) {
        button.disabled = true;
      }
    });
  } else {
    serviceButtonItems.forEach((button) => {
      button.disabled = false;
    });
  }
};

const filterActivatedItems = (classButton) => {
  for (let i = 0; i < serviceButtonItems.length; i++) {
    if (
      serviceButtonItems[i].classList.contains('service__button--active') &&
      serviceButtonItems[i].classList.contains(`button--${classButton}`)
    ) {
      cardItem.forEach((item) => {
        if (item.classList.contains(`${classButton}`)) {
          item.classList.add('no-blur');
        }
      });
    } else if (
      !serviceButtonItems[i].classList.contains('service__button--active') &&
      serviceButtonItems[i].classList.contains(`button--${classButton}`)
    ) {
      cardItem.forEach((item) => {
        if (item.classList.contains(`${classButton}`)) {
          item.classList.remove('no-blur');
          item.classList.add('service__button--blur');
        }
      });
    }
  }
};
