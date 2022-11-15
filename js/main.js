'use strict';
(function() {

  let initializeGallery = function() {
    let galleries = document.querySelectorAll('.lightgallery');
    for (let i = 0; i < galleries.length; i++) {
      lightGallery(galleries[i], {
        thumbnail: true,
        share: false,
        download: false,
      })
    }
  }

  setTimeout(initializeGallery, 0);

})();
'use strict';
(function() {
  var header = document.querySelector('.header');
  var main = document.querySelector('.main');
  if (header) {
    var sticky = header.offsetHeight;
    window.addEventListener('scroll', function() {

      if (window.pageYOffset > sticky) {
        header.classList.add("header--scroll");
        main.style.paddingTop = sticky + 'px';
      } else {
        header.classList.remove("header--scroll");
        main.style.paddingTop = '0';
      }
    });
  }
})();
'use strict';
(function() {
  let yMap;
  const mapElement = document.querySelector('[data-map]');
  const mapElements = document.querySelector('[data-maps]');
  if (mapElement) {
    yMap = new YmapsInitializer(mapElement);
  }
  if (mapElements) {
    yMap = new YmapsInitializerFew(mapElements);
  }
})();
'use strict';
(function() {
  let tel = document.querySelector('#tel');
  if (tel) {
    var phoneMask = IMask(
      document.getElementById('tel'), {
        mask: '+{7}(000)000-00-00'
      });
  }
})()

'use strict';
(function() {
  var openBtn = document.querySelector('.header__burger');
  var closeBtn = document.querySelector('.header__cross');
  var nav = document.querySelector('.nav__list');
  var body = document.querySelector('body');
  var overlay = document.querySelector('.overlay');

  var openMenu = function(evt) {
    evt.preventDefault();
    console.log('g');
    nav.classList.remove('hidden');
    nav.classList.add('show');
    body.classList.add('overflow-hidden');
    openBtn.classList.add('hidden');
    overlay.classList.remove('hidden');
    closeBtn.classList.remove('hidden');
  };

  var closeMenu = function(evt) {
    evt.preventDefault();
    nav.classList.add('hidden');
    nav.classList.remove('show');
    body.classList.remove('overflow-hidden');
    openBtn.classList.remove('hidden');
    overlay.classList.add('hidden');
    closeBtn.classList.add('hidden');
  };

  openBtn.addEventListener('click', openMenu);
  closeBtn.addEventListener('click', closeMenu);
  document.addEventListener('click', function(evt) {
    if (evt.target.closest('.overlay')) {
      closeMenu(evt);
    }
  });
})();
'use strict';
(function() {
  var openBtn = document.querySelector('.login');
  var closeBtn = document.querySelector('.modal__close');
  var loginModal = document.querySelector('.login-modal');
  var orderModal = document.querySelector('.order-modal');

  document.addEventListener('click', function(evt) {
    if (evt.target.closest('.login')) {
      document.querySelectorAll('.modal').forEach(function(modal) {
        modal.classList.add('hidden');
      });
      loginModal.classList.remove('hidden');
    } else if (evt.target.closest('.not-logined')) {
      orderModal.classList.remove('hidden');
    } else if (evt.target.closest('.modal__close')) {
      const closeBtn = evt.target.closest('.modal__close');
      evt.target.closest('.modal').classList.add('hidden');
    } else if (evt.target.classList.contains('modal__overlay')) {
      const overlay = evt.target.classList.contains('modal__overlay');
      console.log(overlay.parentElement);
      evt.target.closest('.modal').classList.add('hidden');
    };
  });
})();
'use strict';
(function() {
  //кнопка открытия - <div><a href="#" class="(классы для стилей) open-modal" data-modal="1" и т.д. (data-modal="2" ...)></div>

  //сами модалки <section class="modal modal--closed" data-modal-content="1"> и т.д. (data-modal-сontent="2" (соответствует кнопке открытия))>
  var modal = document.querySelector('.modal');
  var modals = document.querySelectorAll('.modal');
  var header = document.querySelector('.header');
  if (modal) {
    var ESC_KEYCODE = 27;
    var ENTER_KEYCODE = 13;
    var btnOpen = document.querySelectorAll('.open-modal');
    var modals = document.querySelectorAll('.modal');
    var closeModals = document.querySelectorAll('.close-modal');
    closeModals.forEach(closeModal => closeModal.addEventListener('click', function(evt) {
      evt.target.closest('.modal').classList.add('hidden');

    }));

    var closeModal = function(modal) {
      modal.classList.add('hidden');
      modal.classList.remove('modal--active');
      if (header.classList.contains('header--zindex')) {
        header.classList.remove('header--zindex');
      }
    };
    var openModal = function(modal) {
      modals.forEach(modal => modal.classList.add('hidden'));
      modal.classList.remove('hidden');
      modal.classList.add('modal--active');

      modal.querySelector('.modal__close').addEventListener('click', function() {
        closeModal(modal)
      });

      //обработчик клика по оверлею

      modal.querySelector('.modal__overlay').addEventListener('click', function() {
        closeModal(modal);
      });

      modal.querySelector('.modal__container').addEventListener('click', function(evt) {
        evt.stopPropagation();
      });

      //обработчик клика по ESC

      document.addEventListener('keydown', function(evt) {
        if (evt.key === ESC_KEYCODE) {
          closeModal(modal);
        };
      });
    };

    for (var i = 0; i < btnOpen.length; i++) {
      //клики по кнопкам открытия
      btnOpen[i].addEventListener("click", function(e) {
        e.preventDefault();
        var activeModalAttr = this.getAttribute('data-modal');
        var modal = document.querySelector(`[data-modal-content = ${activeModalAttr}]`);
        openModal(modal);
        if (activeModalAttr === "choose-city") {
          header.classList.add('header--zindex');
        }
      }, false);

      // открытие по Enter

      btnOpen[i].addEventListener("keydown", function(e) {
        if (e.key === ENTER_KEYCODE) {
          e.preventDefault();
          var activeModalAttr = this.getAttribute('data-modal');
          var modal = document.querySelector(`[data-modal-content = ${activeModalAttr}]`);
          openModal(modal);
          if (activeModalAttr === "choose-city") {
            header.classList.add('header--zindex');
          }
        };
      });
    };

  };
})();
'use strict';
(function() {
  let today = new Date();
  let lastDayDate = new Date(today.getFullYear(), today.getMonth() + 1, 0);
  let currentDate = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
  let lastDay = lastDayDate.toString().split(' ')[2];
  let lastDate = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + lastDay;
  const minDate = document.querySelector('#min-date');
  const maxDate = document.querySelector('#max-date');
  if (minDate) {
    minDate.setAttribute('min', currentDate);
    minDate.setAttribute('value', currentDate);
    maxDate.setAttribute('min', currentDate);
    maxDate.setAttribute('max', lastDate);
    maxDate.setAttribute('value', lastDate);
  }
})();
'use strict';
(function() {
  const buttonItems = document.querySelectorAll('.choose__item');
  const chosenCardLine = document.querySelector('.chosen__cards');
  if (chosenCardLine) {

    const notChosenCard = chosenCardLine.querySelector('.chosen__card--empty');
    const chooseScheme = document.querySelector('.choose__scheme');
    const priceElement = document.querySelector('.chosen__price-js');

    if (buttonItems.length) {
      const chooseHandler = (evt) => {
        if (evt.target.classList.contains('active')) return;
        Array.from(buttonItems).find(item => item.classList.contains('active')).classList.remove('active');
        evt.target.classList.add('active');
      }

      buttonItems.forEach(item => item.addEventListener('click', chooseHandler));
    }

    const DateDiff = (date1, date2) => {
      date1.setHours(0);
      date1.setMinutes(0, 0, 0);
      date2.setHours(0);
      date2.setMinutes(0, 0, 0);
      var datediff = Math.abs(date1.getTime() - date2.getTime()); // difference 
      return parseInt(datediff / (24 * 60 * 60 * 1000), 10); //Convert values days and return value      
    }

    const monthLength = 31;

    const getPrice = (days, monthPrice, dayPrice) => {
      console.log(days, monthPrice, dayPrice);
      console.log((days * dayPrice) + monthPrice);
      return Number((days * dayPrice) + monthPrice);
    }

    const countPricePlus = () => {
      let newSum;
      const priceElement = document.querySelector('.chosen__price-js');
      let currentPrice = Number(priceElement.innerHTML);
      let dayPrice = document.querySelector('.choose__item.active').dataset.day;
      let monthPrice = document.querySelector('.choose__item.active').dataset.month;
      const startDate = document.querySelector('#min-date').value;

      const endDate = document.querySelector('#max-date').value;
      let daysNumber = DateDiff(new Date(endDate), new Date(startDate));
      let lastChosenDate = new Date(endDate).getDate();
      if (lastChosenDate == 30 || lastChosenDate == 31) {
        dayPrice = 0;
        daysNumber = 0;
      } else {
        monthPrice = 0;
      }

      newSum = getPrice(Number(daysNumber), Number(monthPrice), Number(dayPrice));
      return currentPrice += newSum;
    }

    const countPriceMinus = (elt) => {
      let newSum;
      const priceElement = document.querySelector('.chosen__price-js');
      let currentPrice = Number(priceElement.innerHTML);
      const dayPrice = elt.dataset.day;
      const monthPrice = elt.dataset.month;
      const daysNumber = Number(elt.dataset.daysnumber);
      newSum = getPrice(Number(daysNumber), Number(monthPrice), Number(dayPrice));
      return currentPrice -= newSum;
    }

    // удаление самой карточки
    const destroyCard = (currentCard) => {
      currentCard.parentNode.removeChild(currentCard);
      console.log(currentCard.dataset.monthly);
      //если карточка за месяц
      if (currentCard.dataset.monthly == 'true') {
        currentCard.dataset.day = 0;
        currentCard.dataset.daysnumber = 0;

      } else {
        currentCard.dataset.month = 0;
      }
      console.log(currentCard);
      priceElement.innerHTML = countPriceMinus(currentCard);
      console.log(countPriceMinus(currentCard));
    };

    const removeCard = (id) => {
      const chosenCards = chosenCardLine.querySelectorAll('.chosen__card');
      const currentCard = Array.from(chosenCards).find(item => item.dataset.id === id);
      destroyCard(currentCard);
    }

    const getInfo = (idPlace) => {

      const chosenCarType = document.querySelector('.choose__item.active');
      let obj = {};
      obj.ifMonthly = false;

      if (new Date(document.querySelector('#max-date').value).getDate() == 30 || new Date(document.querySelector('#max-date').value).getDate() == 31) {
        obj.ifMonthly = true;
      }
      obj.id = idPlace;
      obj.carType = chosenCarType.innerText;
      obj.dayPrice = chosenCarType.dataset.day;
      obj.dayMonth = chosenCarType.dataset.month;
      obj.startDate = document.querySelector('#min-date').value;
      obj.endDate = document.querySelector('#max-date').value;
      return obj;
    }

    const cardsRemoveHandler = (evt) => {
      const crossElement = evt.target.closest('.chosen__cross');
      if (crossElement) {
        const cardElement = crossElement.closest('.chosen__card');
        const cardElementId = cardElement.dataset.id;
        destroyCard(cardElement);
        const places = chooseScheme.querySelectorAll('.taken');
        const currentPlace = Array.from(places).find(item => item.dataset.id === cardElementId);
        currentPlace.classList.remove('taken');
        currentPlace.classList.add('free');
      }
    }

    chosenCardLine.addEventListener('click', cardsRemoveHandler);

    const createElt = (id, placeNewData) => {
      const placeNumber = id;
      const carType = placeNewData.carType;
      const ifMonthly = placeNewData.ifMonthly;
      const dayPrice = placeNewData.dayPrice;
      const monthPrice = placeNewData.dayMonth;
      const placeStore = placeNewData.placeStore || '1';
      const placeQuad = placeNewData.placeQuad || '24.6';
      const startDate = new Date(placeNewData.startDate);
      const startDateLocal = startDate.toLocaleDateString();
      const endDate = new Date(placeNewData.endDate);
      const endDateLocal = endDate.toLocaleDateString();
      const daysNumber = DateDiff(endDate, startDate);


      return `<div class="chosen__card" data-id="${placeNumber}" data-day="${dayPrice}"  data-monthly="${ifMonthly}" data-month="${monthPrice}" data-daysnumber="${daysNumber}">
    <button class="chosen__cross" type="button">
    <svg width="24" height="24">
      <use xlink:href="img/sprite_auto.svg#icon-cross"></use>
    </svg>
  </button>
    <div class="chosen__upper">
      <h3 class="chosen__subtitle">Место P${placeNumber}</h3>
      <figure class="chosen__picture">
        <svg width="24" height="24">
        <use xlink:href="img/sprite_auto.svg#icon-van"></use>
    </svg>
      </figure>
      <span>${carType}</span>
    </div>
    <div class="chosen__lower">
      <p class="chosen__feature">
        ${daysNumber} дней
        <span>(${startDateLocal} - ${endDateLocal})</span>
      </p>
    </div>
  </div>`
    };

    //Выбирает место на парковке и считает сколько выбрано
    let taken = 0;
    const takenElement = document.querySelector('.choose__number.taken');
    document.addEventListener('click', function(evt) {
      const evtTarget = evt.target;
      if (evtTarget.closest('.choose__scheme')) {
        if (evtTarget.classList == 'free' || evtTarget.classList == 'taken') {
          evtTarget.classList.toggle('taken');
          evtTarget.classList.toggle('free');
          if (evtTarget.classList.contains('taken')) {
            const placeData = getInfo(evtTarget.dataset.id);
            notChosenCard.insertAdjacentHTML('beforebegin', createElt(evtTarget.dataset.id, placeData));
            priceElement.innerHTML = countPricePlus();
            taken++;
          } else {
            removeCard(evtTarget.dataset.id);
            taken--;
          }
          takenElement.textContent = taken;
        }
      }
    });
  };
})();
'use strict';
(function() {
  let mySwiper = new Swiper('.photo__slider', {
    slidesPerView: 1.5,
    loop: true,
    spaceBetween: 10,
    breakpoints: {
      500: {
        slidesPerView: 3,
      },

    },

    navigation: {
      nextEl: '.photo__next',
      prevEl: '.photo__prev',
    },
  });
})();
var tabNavs = document.querySelectorAll(".nav-tab");
var tabPanes = document.querySelectorAll(".tab-pane");
if (tabNavs) {

  for (var i = 0; i < tabNavs.length; i++) {

    tabPanes[i].addEventListener("click", function(e) {
      e.preventDefault();
      tabNavs.forEach(tabNav => tabNav.classList.add('hidden'));
      tabPanes.forEach(tabPane => tabPane.classList.remove('active'));
      const activeNavId = e.target.dataset.tabContent;
      const activeNav = e.target;
      const activeTab = document.querySelector('[data-tab="' + activeNavId + '"]');
      activeNav.classList.add('active');
      activeTab.classList.remove('hidden');
      console.log('g');


      // for (var j = 0; j < tabNavs.length; j++) {
      //   var contentAttr = tabPanes[j].getAttribute("data-tab-content");

      //   if (activeTabAttr === contentAttr) {
      //     tabNavs[j].classList.add("active");

      //     tabPanes[j].classList.remove("hidden");
      //   } else {
      //     tabNavs[j].classList.remove("active");
      //     tabPanes[j].classList.add("hidden");
      //   }
      // };
    });
  }
}
'use strict';
(function() {
  const zoomButton = document.querySelector('.choose__zoom');
  if (zoomButton) {
    const scheme = document.querySelector('.choose__scheme');
    zoomButton.addEventListener('click', function() {
      scheme.classList.add('zoom');

    });
  }
})();