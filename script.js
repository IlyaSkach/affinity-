document.addEventListener("DOMContentLoaded", () => {
  const navItems = document.querySelectorAll(".nav-item");
  const mainContainer = document.querySelector(".container");
  const contentArea = document.querySelector(".content-area");
  const burgerMenu = document.querySelector(".burger-menu");
  const mainNav = document.querySelector(".main-nav");
  const overlay = document.querySelector(".overlay");
  const body = document.body;

  // Добавляем индексы для анимации пунктов меню
  navItems.forEach((item, index) => {
    item.style.setProperty("--item-index", index);
  });

  // Инициализация состояния меню
  function initializeMenu() {
    if (window.innerWidth <= 768) {
      mainNav.style.display = "none";
      mainNav.classList.remove("active");
      burgerMenu.classList.remove("active");
      overlay.classList.remove("active");
      document.body.classList.remove("no-scroll");
    } else {
      mainNav.style.display = "flex";
    }
  }

  // Вызываем инициализацию при загрузке
  initializeMenu();

  // Инициализация переменных
  let isFullscreen = false;
  let isScrolling = false;
  let currentSection = null;
  let lastScrollTime = 0;
  const scrollDelay = 3000; // Задержка между скроллами 3 секунды

  // Получаем элементы
  const showcaseSection = document.querySelector(".showcase-section");
  const heroSection = document.querySelector(".hero-section");
  const aboutSection = document.querySelector(".about-section");
  const servicesSection = document.querySelector(".services-section");
  const jewelrySection = document.querySelector(".jewelry-section");
  const partnerSection = document.querySelector(".partner-section");
  const contactsSection = document.querySelector(".contacts-section");
  const scrollIndicator = document.querySelector(".scroll-indicator");
  const infoText = document.querySelector(".info-text");

  // Переменные для свайпов
  let touchStartY = 0;
  let touchEndY = 0;
  let touchStartX = 0;
  let touchEndX = 0;
  const minSwipeDistance = 50;
  let isSwiping = false;

  // Функция для обновления активного пункта меню
  function updateActiveNavItem() {
    const navItems = document.querySelectorAll(".nav-item");
    navItems.forEach((item) => {
      item.classList.remove("active");
    });

    // Обновляем свайп-индикаторы для мобильных устройств
    const swipeDots = document.querySelectorAll(".swipe-dot");
    swipeDots.forEach((dot) => {
      dot.classList.remove("active");
    });

    if (!currentSection) {
      // Если мы на главной
      document
        .querySelector('.swipe-dot[data-section="home"]')
        ?.classList.add("active");
    } else if (currentSection === aboutSection) {
      document
        .querySelector('.nav-item[data-section="about"]')
        .classList.add("active");
      document
        .querySelector('.swipe-dot[data-section="about"]')
        ?.classList.add("active");
    } else if (currentSection === servicesSection) {
      document
        .querySelector('.nav-item[data-section="services"]')
        .classList.add("active");
      document
        .querySelector('.swipe-dot[data-section="services"]')
        ?.classList.add("active");
    } else if (currentSection === jewelrySection) {
      document
        .querySelector('.nav-item[data-section="jewelry"]')
        .classList.add("active");
      document
        .querySelector('.swipe-dot[data-section="jewelry"]')
        ?.classList.add("active");
    } else if (currentSection === partnerSection) {
      document
        .querySelector('.nav-item[data-section="partner"]')
        .classList.add("active");
      document
        .querySelector('.swipe-dot[data-section="partner"]')
        ?.classList.add("active");
    } else if (currentSection === contactsSection) {
      document
        .querySelector('.nav-item[data-section="contacts"]')
        .classList.add("active");
      document
        .querySelector('.swipe-dot[data-section="contacts"]')
        ?.classList.add("active");
    }
  }

  // Функция для обновления видимости информации о компании
  function updateCompanyInfo() {
    const companyInfo = document.querySelector(".company-info");
    if (!companyInfo) return; // Выходим если элемент не найден

    if (currentSection === showcaseSection) {
      companyInfo.style.opacity = "1";
      companyInfo.style.visibility = "visible";
    } else {
      companyInfo.style.opacity = "0";
      companyInfo.style.visibility = "hidden";
    }
  }

  // Функция для перехода к секции "О нас"
  function goToAboutSection() {
    currentSection = aboutSection;
    showcaseSection.classList.remove("fullscreen");
    heroSection.classList.remove("fade");
    aboutSection.classList.add("visible");
    servicesSection.classList.remove("visible");
    jewelrySection.classList.remove("visible");
    partnerSection.classList.remove("visible");
    contactsSection.classList.remove("visible");

    // Скрываем элементы сначала
    if (infoText) infoText.style.opacity = "0";
    mainNav.style.opacity = "0";
    scrollIndicator.classList.add("hidden");

    // Показываем элементы с задержкой
    setTimeout(() => {
      if (infoText) infoText.style.opacity = "1";
      mainNav.style.opacity = "1";
      scrollIndicator.classList.remove("hidden");
    }, 2000);
    updateActiveNavItem();
    updateCompanyInfo();
  }

  // Функция для перехода к секции "Производство и сервис"
  function goToServicesSection() {
    currentSection = servicesSection;
    showcaseSection.classList.remove("fullscreen");
    heroSection.classList.remove("fade");
    aboutSection.classList.remove("visible");
    servicesSection.classList.add("visible");
    jewelrySection.classList.remove("visible");
    partnerSection.classList.remove("visible");
    contactsSection.classList.remove("visible");

    // Скрываем элементы сначала
    if (infoText) infoText.style.opacity = "0";
    mainNav.style.opacity = "0";
    scrollIndicator.classList.add("hidden");

    // Показываем элементы с задержкой
    setTimeout(() => {
      if (infoText) infoText.style.opacity = "1";
      mainNav.style.opacity = "1";
      scrollIndicator.classList.remove("hidden");
    }, 2000);
    updateActiveNavItem();
    updateCompanyInfo();
  }

  // Функция для перехода к секции "Ювелирные изделия"
  function goToJewelrySection() {
    currentSection = jewelrySection;
    showcaseSection.classList.remove("fullscreen");
    heroSection.classList.remove("fade");
    aboutSection.classList.remove("visible");
    servicesSection.classList.remove("visible");
    jewelrySection.classList.add("visible");
    partnerSection.classList.remove("visible");
    contactsSection.classList.remove("visible");

    // Скрываем элементы сначала
    if (infoText) infoText.style.opacity = "0";
    mainNav.style.opacity = "0";
    scrollIndicator.classList.add("hidden");

    // Показываем элементы с задержкой
    setTimeout(() => {
      if (infoText) infoText.style.opacity = "1";
      mainNav.style.opacity = "1";
      scrollIndicator.classList.remove("hidden");
    }, 2000);
    updateActiveNavItem();
    updateCompanyInfo();
  }

  // Функция для перехода к секции "Партнерская программа"
  function goToPartnerSection() {
    currentSection = partnerSection;
    showcaseSection.classList.remove("fullscreen");
    heroSection.classList.add("hidden");
    aboutSection.classList.remove("visible");
    servicesSection.classList.remove("visible");
    jewelrySection.classList.remove("visible");
    partnerSection.classList.add("visible");
    contactsSection.classList.remove("visible");

    // Скрываем элементы сначала
    if (infoText) infoText.style.opacity = "0";
    mainNav.style.opacity = "0";
    scrollIndicator.classList.add("hidden");

    // Показываем элементы с задержкой
    setTimeout(() => {
      if (infoText) infoText.style.opacity = "1";
      mainNav.style.opacity = "1";
      scrollIndicator.classList.remove("hidden");
    }, 2000);
    updateActiveNavItem();
    updateCompanyInfo();
  }

  // Функция для перехода к секции "Контакты"
  function goToContactsSection() {
    currentSection = contactsSection;
    showcaseSection.classList.remove("fullscreen");
    heroSection.classList.add("hidden");
    aboutSection.classList.remove("visible");
    servicesSection.classList.remove("visible");
    jewelrySection.classList.remove("visible");
    partnerSection.classList.remove("visible");
    contactsSection.classList.add("visible");

    // Скрываем элементы сначала
    if (infoText) infoText.style.opacity = "0";
    mainNav.style.opacity = "0";
    scrollIndicator.classList.add("hidden");

    // Показываем элементы с задержкой
    setTimeout(() => {
      if (infoText) infoText.style.opacity = "1";
      mainNav.style.opacity = "1";
      scrollIndicator.classList.remove("hidden");
    }, 2000);
    updateActiveNavItem();
    updateCompanyInfo();
  }

  // Функция для скрытия главной секции
  function hideHeroSection() {
    heroSection.style.display = "none";
  }

  // Функция для показа главной секции
  function showHeroSection() {
    heroSection.style.display = "block";
    heroSection.classList.remove("hidden");
  }

  // Функция для обработки скролла
  function handleScroll(e) {
    // Для мобильных устройств отключаем автоматическую прокрутку
    if (window.innerWidth <= 768) {
      return;
    }

    if (isScrolling) return;

    const currentTime = Date.now();
    if (currentTime - lastScrollTime < scrollDelay) return;

    isScrolling = true;
    lastScrollTime = currentTime;

    // Определяем направление скролла
    if (e.deltaY > 0) {
      // Скролл вниз
      if (!currentSection) {
        isFullscreen = true;
        showcaseSection.classList.add("fullscreen");
        heroSection.classList.add("fade");
        if (infoText) infoText.style.opacity = "0";
        mainNav.style.opacity = "0";
        scrollIndicator.classList.add("hidden");
        currentSection = showcaseSection;

        // Показываем и запускаем видео
        const video = document.querySelector(".product-image");
        if (video) {
          video.currentTime = 0;
          video.style.opacity = "1";
          video.play().catch(function (error) {
            console.log("Ошибка воспроизведения видео:", error);
          });
        }

        updateCompanyInfo();
      } else if (currentSection === showcaseSection) {
        goToAboutSection();
        hideHeroSection();
      } else if (currentSection === aboutSection) {
        goToServicesSection();
      } else if (currentSection === servicesSection) {
        goToJewelrySection();
      } else if (currentSection === jewelrySection) {
        goToPartnerSection();
      } else if (currentSection === partnerSection) {
        goToContactsSection();
      }
    } else if (e.deltaY < 0) {
      // Скролл вверх
      if (currentSection === contactsSection) {
        goToPartnerSection();
      } else if (currentSection === partnerSection) {
        goToJewelrySection();
        showHeroSection();
      } else if (currentSection === jewelrySection) {
        goToServicesSection();
      } else if (currentSection === servicesSection) {
        goToAboutSection();
      } else if (currentSection === aboutSection) {
        goToHomeSection();
      } else if (currentSection === showcaseSection) {
        isFullscreen = false;
        showcaseSection.classList.remove("fullscreen");
        heroSection.classList.remove("fade");
        if (infoText) infoText.style.opacity = "1";
        mainNav.style.opacity = "1";
        scrollIndicator.classList.remove("hidden");
        currentSection = null;

        // Скрываем видео
        const video = document.querySelector(".product-image");
        if (video) {
          video.style.opacity = "0";
        }

        updateCompanyInfo();
      }
    }

    setTimeout(() => {
      isScrolling = false;
    }, scrollDelay);
  }

  // Отключаем обработчики сенсорных событий для переключения секций на мобильных устройствах
  function initMobileSwipe() {
    // Для мобильной версии отключаем эту функцию
    if (window.innerWidth <= 768) {
      return;
    }
  }

  function handleTouchStart(e) {
    // Для мобильной версии отключаем эту функцию
    if (window.innerWidth <= 768) {
      return;
    }
    touchStartY = e.touches[0].clientY;
    touchStartX = e.touches[0].clientX;
  }

  function handleTouchMove(e) {
    // Для мобильной версии отключаем эту функцию
    if (window.innerWidth <= 768) {
      return;
    }
    touchEndY = e.touches[0].clientY;
    touchEndX = e.touches[0].clientX;
  }

  function handleTouchEnd() {
    // Для мобильной версии отключаем эту функцию
    if (window.innerWidth <= 768) {
      return;
    }

    const swipeDistanceY = touchStartY - touchEndY;
    const swipeDistanceX = touchStartX - touchEndX;

    if (
      Math.abs(swipeDistanceY) > minSwipeDistance &&
      Math.abs(swipeDistanceY) > Math.abs(swipeDistanceX)
    ) {
      if (swipeDistanceY > 0) {
        handleSwipeUp();
      } else {
        handleSwipeDown();
      }
    }
  }

  function handleSwipeUp() {
    // Для мобильной версии отключаем эту функцию
    if (window.innerWidth <= 768) {
      return;
    }

    if (isScrolling) return;
    isScrolling = true;

    // Имитация скролла вниз
    const event = new WheelEvent("wheel", {
      deltaY: 100,
    });
    handleScroll(event);

    setTimeout(() => {
      isScrolling = false;
    }, scrollDelay);
  }

  function handleSwipeDown() {
    // Для мобильной версии отключаем эту функцию
    if (window.innerWidth <= 768) {
      return;
    }

    if (isScrolling) return;
    isScrolling = true;

    // Имитация скролла вверх
    const event = new WheelEvent("wheel", {
      deltaY: -100,
    });
    handleScroll(event);

    setTimeout(() => {
      isScrolling = false;
    }, scrollDelay);
  }

  // Сброс стилей для мобильных устройств
  function resetMobileStyles() {
    if (window.innerWidth <= 768) {
      showcaseSection.classList.remove("fullscreen");
      heroSection.classList.remove("fade");
      aboutSection.classList.remove("visible");
      servicesSection.classList.remove("visible");
      jewelrySection.classList.remove("visible");
      partnerSection.classList.remove("visible");
      contactsSection.classList.remove("visible");
      isFullscreen = false;
      currentSection = showcaseSection;
      document.body.style.overflow = "auto";
      if (scrollIndicator) {
        scrollIndicator.style.display = "none";
      }
      if (infoText) infoText.style.opacity = "1";
      mainNav.style.opacity = "1";
      updateActiveNavItem();
    } else {
      document.body.style.overflow = "hidden";
      if (scrollIndicator) {
        scrollIndicator.style.display = "flex";
      }
    }
  }

  // Обработчик изменения размера окна
  window.addEventListener("resize", resetMobileStyles);

  // Инициализация при загрузке
  resetMobileStyles();

  // Добавляем обработчик скролла только для десктопа
  if (window.innerWidth > 768) {
    window.addEventListener("wheel", handleScroll, { passive: true });

    // Добавляем обработчики для тач-устройств (планшеты в десктопном режиме)
    if ("ontouchstart" in window) {
      document.addEventListener("touchstart", handleTouchStart, {
        passive: false,
      });
      document.addEventListener("touchmove", handleTouchMove, {
        passive: false,
      });
      document.addEventListener("touchend", handleTouchEnd, { passive: false });
    }
  }

  // Обновляем обработчик изменения размера окна для скролла
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      window.addEventListener("wheel", handleScroll, { passive: true });

      // Для тач-устройств
      if ("ontouchstart" in window) {
        document.addEventListener("touchstart", handleTouchStart, {
          passive: false,
        });
        document.addEventListener("touchmove", handleTouchMove, {
          passive: false,
        });
        document.addEventListener("touchend", handleTouchEnd, {
          passive: false,
        });
      }
    } else {
      window.removeEventListener("wheel", handleScroll);
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
    }
  });

  // Переключение меню
  function toggleMenu() {
    burgerMenu.classList.toggle("active");
    mainNav.classList.toggle("active");
    overlay.classList.toggle("active");
    body.classList.toggle("no-scroll");

    if (mainNav.classList.contains("active")) {
      mainNav.style.display = "flex";
    } else {
      setTimeout(() => {
        if (!mainNav.classList.contains("active")) {
          mainNav.style.display = "none";
        }
      }, 300);
    }
  }

  // Закрытие меню
  function closeMenu() {
    burgerMenu.classList.remove("active");
    mainNav.classList.remove("active");
    overlay.classList.remove("active");
    body.classList.remove("no-scroll");

    setTimeout(() => {
      if (!mainNav.classList.contains("active")) {
        mainNav.style.display = "none";
      }
    }, 300);
  }

  // Обработчики событий
  burgerMenu.addEventListener("click", toggleMenu);
  overlay.addEventListener("click", closeMenu);

  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      if (window.innerWidth <= 768) {
        closeMenu();
      }
    });
  });

  // Обработка изменения размера окна
  window.addEventListener("resize", () => {
    resetMobileStyles();
    if (window.innerWidth > 768) {
      closeMenu();
    }
  });

  // Добавляем обработчики событий для навигационных ссылок
  navItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();

      // Проверяем, является ли элемент ссылкой на главную
      if (item.classList.contains("home-link")) {
        goToHomeSection();
        return;
      }

      if (item.classList.contains("contacts-modal")) {
        document.getElementById("modal-contacts").classList.add("active");
        document.querySelector(".modal-overlay").classList.add("active");
        return;
      }

      // Если это кнопка бургер-меню или другая кнопка, просто выходим
      if (!item.hasAttribute("data-section")) return;

      const section = item.getAttribute("data-section");

      if (section === "about") {
        goToAboutSection();
      } else if (section === "services") {
        goToServicesSection();
      } else if (section === "jewelry") {
        goToJewelrySection();
      } else if (section === "partner") {
        goToPartnerSection();
      } else if (section === "contacts") {
        goToContactsSection();
      }

      if (window.innerWidth <= 768) {
        closeMenu();
      }
    });
  });

  // Инициализация аккордеона
  const accordionHeaders = document.querySelectorAll(".services-header");

  accordionHeaders.forEach((header) => {
    header.addEventListener("click", () => {
      const body = header.nextElementSibling;
      const icon = header.querySelector(".accordion-icon");

      // Закрываем все остальные аккордеоны
      accordionHeaders.forEach((otherHeader) => {
        if (otherHeader !== header) {
          const otherBody = otherHeader.nextElementSibling;
          const otherIcon = otherHeader.querySelector(".accordion-icon");
          otherBody.classList.remove("active");
          otherHeader.setAttribute("aria-expanded", "false");
          if (otherIcon) otherIcon.style.transform = "rotate(0deg)";
        }
      });

      // Открываем/закрываем текущий аккордеон
      body.classList.toggle("active");
      const isExpanded = body.classList.contains("active");
      header.setAttribute("aria-expanded", isExpanded);
      if (icon)
        icon.style.transform = isExpanded ? "rotate(45deg)" : "rotate(0deg)";
    });
  });

  // Устанавливаем начальное состояние
  accordionHeaders.forEach((header) => {
    header.setAttribute("aria-expanded", "false");
  });

  // Отключаем обработку свайпов и колеса мыши
  document.removeEventListener("wheel", handleScroll);
  document.removeEventListener("touchstart", handleTouchStart);
  document.removeEventListener("touchmove", handleTouchMove);
  document.removeEventListener("touchend", handleTouchEnd);

  // Функция для возврата на главную
  function goToHomeSection() {
    currentSection = null;
    isFullscreen = false;
    showcaseSection.classList.remove("fullscreen");
    heroSection.classList.remove("fade");
    heroSection.classList.remove("hidden");
    aboutSection.classList.remove("visible");
    servicesSection.classList.remove("visible");
    jewelrySection.classList.remove("visible");
    partnerSection.classList.remove("visible");
    contactsSection.classList.remove("visible");
    if (infoText) infoText.style.opacity = "1";
    mainNav.style.opacity = "1";
    scrollIndicator.classList.remove("hidden");
    updateActiveNavItem();
    updateCompanyInfo();
  }

  // Функция для добавления нижней мобильной навигации вместо свайпов
  function initMobileBottomNav() {
    // Проверяем ширину экрана
    if (window.innerWidth <= 768) {
      // Проверяем, существует ли уже панель
      if (!document.querySelector(".mobile-nav-panel")) {
        // Создаем панель навигации
        const navPanel = document.createElement("div");
        navPanel.className = "mobile-nav-panel";

        // Массив с данными для кнопок (секция, иконка, название)
        const navButtons = [
          { section: "home", icon: "🏠", label: "Главная" },
          { section: "about", icon: "ℹ️", label: "О нас" },
          { section: "services", icon: "🛠️", label: "Услуги" },
          { section: "jewelry", icon: "💎", label: "Мерч" },
          { section: "partner", icon: "🤝", label: "Партнерам" },
        ];

        // Создаем кнопки для каждой секции
        navButtons.forEach((button) => {
          const navButton = document.createElement("a");
          navButton.href = "#";
          navButton.className = "mobile-nav-button";
          navButton.setAttribute("data-section", button.section);

          // Если это главная страница и мы на ней, добавляем класс active
          if (button.section === "home" && !currentSection) {
            navButton.classList.add("active");
          }

          const navIcon = document.createElement("span");
          navIcon.className = "mobile-nav-icon";
          navIcon.textContent = button.icon;

          const navLabel = document.createElement("span");
          navLabel.className = "mobile-nav-label";
          navLabel.textContent = button.label;

          navButton.appendChild(navIcon);
          navButton.appendChild(navLabel);
          navPanel.appendChild(navButton);

          // Добавляем обработчик события
          navButton.addEventListener("click", function (e) {
            e.preventDefault();

            // Убираем класс active у всех кнопок
            document.querySelectorAll(".mobile-nav-button").forEach((btn) => {
              btn.classList.remove("active");
            });

            // Добавляем класс active текущей кнопке
            this.classList.add("active");

            // Переходим к соответствующей секции
            const section = this.getAttribute("data-section");

            if (section === "home") {
              goToHomeSection();
            } else if (section === "about") {
              goToAboutSection();
            } else if (section === "services") {
              goToServicesSection();
            } else if (section === "jewelry") {
              goToJewelrySection();
            } else if (section === "partner") {
              goToPartnerSection();
            }
          });
        });

        // Добавляем панель на страницу
        document.body.appendChild(navPanel);
      }

      // Отключаем обработчики свайпов, так как теперь используются кнопки
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
    }
  }

  // Обновляем активную кнопку в нижней навигации при изменении секции
  function updateMobileNavButton() {
    const navButtons = document.querySelectorAll(".mobile-nav-button");

    navButtons.forEach((button) => {
      button.classList.remove("active");

      const section = button.getAttribute("data-section");

      if (section === "home" && !currentSection) {
        button.classList.add("active");
      } else if (section === "about" && currentSection === aboutSection) {
        button.classList.add("active");
      } else if (section === "services" && currentSection === servicesSection) {
        button.classList.add("active");
      } else if (section === "jewelry" && currentSection === jewelrySection) {
        button.classList.add("active");
      } else if (section === "partner" && currentSection === partnerSection) {
        button.classList.add("active");
      }
    });
  }

  // Обновляем функции для перехода между разделами
  const originalGoToAboutSection = goToAboutSection;
  goToAboutSection = function () {
    originalGoToAboutSection();
    updateMobileNavButton();
  };

  const originalGoToServicesSection = goToServicesSection;
  goToServicesSection = function () {
    originalGoToServicesSection();
    updateMobileNavButton();
  };

  const originalGoToJewelrySection = goToJewelrySection;
  goToJewelrySection = function () {
    originalGoToJewelrySection();
    updateMobileNavButton();
  };

  const originalGoToPartnerSection = goToPartnerSection;
  goToPartnerSection = function () {
    originalGoToPartnerSection();
    updateMobileNavButton();
  };

  const originalGoToHomeSection = goToHomeSection;
  goToHomeSection = function () {
    originalGoToHomeSection();
    updateMobileNavButton();
  };

  // Вызываем функцию инициализации при загрузке страницы
  initMobileBottomNav();

  // Обновляем при изменении размера окна
  window.addEventListener("resize", initMobileBottomNav);

  // Обработка модальных окон
  const modalOverlay = document.querySelector(".modal-overlay");
  const modals = document.querySelectorAll(".modal");
  const closeButtons = document.querySelectorAll(".modal-close");
  const serviceCards = document.querySelectorAll(".services-card");

  // Открытие модального окна
  serviceCards.forEach((card) => {
    card.addEventListener("click", () => {
      const modalId = `modal-${card.dataset.modal}`;
      const modal = document.getElementById(modalId);
      if (modal) {
        modalOverlay.classList.add("active");
        modal.classList.add("active");
      }
    });
  });

  // Закрытие модального окна при клике на крестик
  closeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      modalOverlay.classList.remove("active");
      modals.forEach((modal) => modal.classList.remove("active"));
    });
  });

  // Закрытие модального окна при клике на оверлей
  modalOverlay.addEventListener("click", () => {
    modalOverlay.classList.remove("active");
    modals.forEach((modal) => modal.classList.remove("active"));
  });

  // Закрытие модального окна при нажатии Esc
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      document.querySelectorAll(".modal.active").forEach((modal) => {
        modal.classList.remove("active");
      });
      document.querySelector(".modal-overlay").classList.remove("active");
    }
  });

  // Обработчики для модальных окон партнерской программы
  document.querySelectorAll(".partner-block").forEach((block) => {
    block.addEventListener("click", () => {
      const modalId = block.getAttribute("data-modal");
      if (modalId === "download-presentation") {
        // Здесь будет логика для скачивания презентации
        // Пример:
        // window.location.href = 'path/to/presentation.pdf';
        return;
      }

      // Сначала закрываем все активные модальные окна
      document.querySelectorAll(".modal.active").forEach((activeModal) => {
        activeModal.classList.remove("active");
      });

      const modal = document.getElementById(modalId);
      if (modal) {
        modal.classList.add("active");
        document.querySelector(".modal-overlay").classList.add("active");
      }
    });
  });

  // Закрытие модальных окон партнерской программы
  document.querySelectorAll(".modal-close").forEach((closeBtn) => {
    closeBtn.addEventListener("click", () => {
      closeBtn.closest(".modal").classList.remove("active");
      document.querySelector(".modal-overlay").classList.remove("active");
    });
  });

  // Закрытие по клику на оверлей
  document.querySelector(".modal-overlay").addEventListener("click", () => {
    document.querySelectorAll(".modal.active").forEach((modal) => {
      modal.classList.remove("active");
    });
    document.querySelector(".modal-overlay").classList.remove("active");
  });

  // Слайдер в секции "О нас"
  const slider = document.querySelector(".about-slider");
  if (!slider) return;

  const slides = slider.querySelectorAll(".about-slide");
  const dots = slider.querySelectorAll(".slider-dot");
  const prevBtn = slider.querySelector(".slider-prev");
  const nextBtn = slider.querySelector(".slider-next");

  let currentSlide = 0;
  const totalSlides = slides.length;

  // Инициализация слайдера
  function initSlider() {
    function showSlide(index) {
      slides.forEach((slide) => slide.classList.remove("active"));
      dots.forEach((dot) => dot.classList.remove("active"));

      if (index >= totalSlides) {
        currentSlide = 0;
      } else if (index < 0) {
        currentSlide = totalSlides - 1;
      } else {
        currentSlide = index;
      }

      slides[currentSlide].classList.add("active");
      dots[currentSlide].classList.add("active");
    }

    function nextSlide() {
      showSlide(currentSlide + 1);
    }

    function prevSlide() {
      showSlide(currentSlide - 1);
    }

    // Обработчики событий
    prevBtn.addEventListener("click", prevSlide);
    nextBtn.addEventListener("click", nextSlide);

    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => showSlide(index));
    });

    // Автоматическое переключение слайдов
    let slideInterval = setInterval(nextSlide, 5000);

    // Остановка автопереключения при наведении
    slider.addEventListener("mouseenter", () => {
      clearInterval(slideInterval);
    });

    // Возобновление автопереключения
    slider.addEventListener("mouseleave", () => {
      slideInterval = setInterval(nextSlide, 5000);
    });

    // Обработка горизонтальных свайпов для слайдера на мобильных устройствах
    if (window.innerWidth <= 768) {
      let touchStartX = 0;
      let touchEndX = 0;
      const minSwipeDistance = 50;

      slider.addEventListener(
        "touchstart",
        function (e) {
          touchStartX = e.touches[0].clientX;
        },
        { passive: true }
      );

      slider.addEventListener(
        "touchmove",
        function (e) {
          touchEndX = e.touches[0].clientX;
          // Предотвращаем вертикальную прокрутку при горизонтальном свайпе
          if (Math.abs(touchStartX - touchEndX) > 30) {
            e.preventDefault();
          }
        },
        { passive: false }
      );

      slider.addEventListener(
        "touchend",
        function () {
          const swipeDistance = touchStartX - touchEndX;

          if (Math.abs(swipeDistance) > minSwipeDistance) {
            if (swipeDistance > 0) {
              // Свайп влево - переход к следующему слайду
              nextSlide();
            } else {
              // Свайп вправо - переход к предыдущему слайду
              prevSlide();
            }
          }

          // Сбрасываем значения
          touchStartX = 0;
          touchEndX = 0;
        },
        { passive: true }
      );
    }
  }

  // Инициализация слайдера после загрузки DOM
  initSlider();

  function initServicesAnimation() {
    const cards = document.querySelectorAll(".services-card");
    const servicesSection = document.querySelector(".services-section");

    // Устанавливаем индексы для задержки анимации
    cards.forEach((card, index) => {
      card.style.setProperty("--card-index", index);
    });

    // Добавляем наблюдатель за появлением секции
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            servicesSection.classList.add("visible");
          }
        });
      },
      { threshold: 0.3 }
    );

    if (servicesSection) {
      observer.observe(servicesSection);
    }
  }

  // Вызываем инициализацию после загрузки DOM
  document.addEventListener("DOMContentLoaded", initServicesAnimation);

  const consultationBtn = document.querySelector(".consultation-btn");
  const modalConsultation = document.getElementById("modal-consultation");
  const modalError = document.getElementById("modal-error");
  const modalSuccess = document.getElementById("modal-success");
  const consultationForm = document.getElementById("consultation-form");

  // Открытие модального окна консультации
  consultationBtn.addEventListener("click", function () {
    modalConsultation.classList.add("active");
    modalOverlay.classList.add("active");
  });

  // Закрытие модальных окон
  closeButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const modal = this.closest(".modal");
      if (modal.id !== "modal-consultation") {
        modal.classList.remove("active");
        if (!modalConsultation.classList.contains("active")) {
          modalOverlay.classList.remove("active");
        }
      } else {
        modal.classList.remove("active");
        modalOverlay.classList.remove("active");
      }
    });
  });

  // Функция для отправки данных в Telegram
  async function sendToTelegram(formData) {
    try {
      // Массив ID чатов получателей
      const chatIds = ["271823315", "478588941"]; // Замените на реальные ID чатов
      const botToken = "8178204212:AAEDZnqnBJ-mb6fCaB6-2lsdDerEEpCEugU"; // Замените на токен вашего бота

      // Формируем текст сообщения
      let messageText = "Новая заявка с сайта Affinity:\n\n";

      // Добавляем все данные формы в сообщение
      for (const [key, value] of formData.entries()) {
        messageText += `${key}: ${value}\n`;
      }

      // Отправляем сообщение каждому получателю
      const sendPromises = chatIds.map((chatId) => {
        const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
        const data = {
          chat_id: chatId,
          text: messageText,
          parse_mode: "HTML",
        };

        return fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
      });

      // Ждем отправки всех сообщений
      await Promise.all(sendPromises);
      return true;
    } catch (error) {
      console.error("Ошибка при отправке в Telegram:", error);
      return false;
    }
  }

  // Обработка отправки формы консультации (заменяем существующий код)
  consultationForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const contact = document.getElementById("contact").value.trim();

    if (!name || !contact) {
      modalError.classList.add("active");
      modalError.style.display = "block";
      modalError.style.opacity = "1";
      modalError.style.visibility = "visible";
      modalOverlay.classList.add("active");
      return;
    }

    // Собираем данные формы
    const formData = new FormData();
    formData.append("Имя", name);
    formData.append("Контакт", contact);
    formData.append("Форма", "Запрос консультации");

    // Отправляем данные в Telegram
    const sent = await sendToTelegram(formData);

    // Если отправка прошла успешно
    if (sent) {
      // Если все поля заполнены
      modalConsultation.classList.remove("active");
      modalSuccess.classList.add("active");
      modalSuccess.style.display = "block";
      modalSuccess.style.opacity = "1";
      modalSuccess.style.visibility = "visible";

      // Добавляем имя в сообщение
      document.querySelector("#modal-success .user-name").textContent = name;

      // Закрыть окно успеха через 3 секунды
      setTimeout(() => {
        modalSuccess.classList.remove("active");
        modalSuccess.style.display = "none";
        modalSuccess.style.opacity = "0";
        modalSuccess.style.visibility = "hidden";
        modalOverlay.classList.remove("active");
        // Очистить форму
        consultationForm.reset();
      }, 3000);
    } else {
      // Если произошла ошибка при отправке
      modalError.querySelector(".modal-content p").textContent =
        "Ошибка при отправке. Пожалуйста, попробуйте позже.";
      modalError.classList.add("active");
      modalError.style.display = "block";
      modalError.style.opacity = "1";
      modalError.style.visibility = "visible";
    }
  });

  // Обработка отправки формы контактов (заменяем существующий код)
  const contactsForm = document.getElementById("contacts-form");
  if (contactsForm) {
    contactsForm.addEventListener("submit", async function (e) {
      e.preventDefault();
      const name = document.getElementById("contact-name").value.trim();
      const phone = document.getElementById("contact-phone").value.trim();
      const company = document.getElementById("contact-company").value.trim();
      const email = document.getElementById("contact-email").value.trim();
      const contactMethod = document.querySelector(
        'input[name="contact-method"]:checked'
      ).value;

      if (!name || !phone) {
        const modalError = document.getElementById("modal-error");
        if (modalError) {
          modalError.classList.add("active");
          modalError.style.display = "block";
          modalError.style.opacity = "1";
          modalError.style.visibility = "visible";
          modalOverlay.classList.add("active");
          setTimeout(() => {
            modalError.classList.remove("active");
            modalError.style.display = "none";
            modalError.style.opacity = "0";
            modalError.style.visibility = "hidden";
            modalOverlay.classList.remove("active");
          }, 3000);
        }
        return;
      }

      // Собираем данные формы
      const formData = new FormData();
      formData.append("Имя", name);
      formData.append("Телефон", phone);
      formData.append("Компания", company || "Не указана");
      formData.append("Email", email || "Не указан");
      formData.append("Способ связи", contactMethod);
      formData.append("Форма", "Форма обратной связи");

      // Отправляем данные в Telegram
      const sent = await sendToTelegram(formData);

      // Показываем сообщение об успешной отправке
      if (sent) {
        const modalSuccess = document.getElementById("modal-success");
        if (modalSuccess) {
          const userNameSpan = modalSuccess.querySelector(".user-name");
          if (userNameSpan) {
            userNameSpan.textContent = name;
          }
          modalSuccess.classList.add("active");
          modalSuccess.style.display = "block";
          modalSuccess.style.opacity = "1";
          modalSuccess.style.visibility = "visible";
          modalOverlay.classList.add("active");

          // Закрыть окно успеха через 3 секунды
          setTimeout(() => {
            modalSuccess.classList.remove("active");
            modalSuccess.style.display = "none";
            modalSuccess.style.opacity = "0";
            modalSuccess.style.visibility = "hidden";
            modalOverlay.classList.remove("active");
            // Очистить форму
            contactsForm.reset();
          }, 3000);
        }
      } else {
        // Если произошла ошибка при отправке
        const modalError = document.getElementById("modal-error");
        if (modalError) {
          modalError.querySelector(".modal-content p").textContent =
            "Ошибка при отправке. Пожалуйста, попробуйте позже.";
          modalError.classList.add("active");
          modalError.style.display = "block";
          modalError.style.opacity = "1";
          modalError.style.visibility = "visible";
          modalOverlay.classList.add("active");
          setTimeout(() => {
            modalError.classList.remove("active");
            modalError.style.display = "none";
            modalError.style.opacity = "0";
            modalError.style.visibility = "hidden";
            modalOverlay.classList.remove("active");
          }, 3000);
        }
      }
    });
  }

  // Добавляем обработчики кликов для индикаторов свайпа
  document.querySelectorAll(".swipe-dot").forEach((dot) => {
    dot.addEventListener("click", function () {
      const section = this.getAttribute("data-section");

      if (section === "home") {
        goToHomeSection();
      } else if (section === "about") {
        goToAboutSection();
      } else if (section === "services") {
        goToServicesSection();
      } else if (section === "jewelry") {
        goToJewelrySection();
      } else if (section === "partner") {
        goToPartnerSection();
      } else if (section === "contacts") {
        goToContactsSection();
      }
    });
  });
});
