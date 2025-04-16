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
  }

  // Обновляем обработчик изменения размера окна для скролла
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      window.addEventListener("wheel", handleScroll, { passive: true });
    } else {
      window.removeEventListener("wheel", handleScroll);
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

  // Функция для обработки начала касания
  function handleTouchStart(e) {
    touchStartY = e.touches[0].clientY;
    touchStartX = e.touches[0].clientX;
    isSwiping = false;
  }

  // Функция для обработки движения пальца
  function handleTouchMove(e) {
    if (!touchStartY || !touchStartX) return;

    touchEndY = e.touches[0].clientY;
    touchEndX = e.touches[0].clientX;

    // Определяем направление свайпа (вертикальное или горизонтальное)
    const yDiff = touchStartY - touchEndY;
    const xDiff = touchStartX - touchEndX;

    // Если горизонтальный свайп сильнее, чем вертикальный, отключаем обработку
    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      return;
    }

    // Блокируем прокрутку страницы, чтобы избежать конфликтов
    e.preventDefault();
    isSwiping = true;
  }

  // Функция для обработки окончания касания
  function handleTouchEnd() {
    if (!touchStartY || !touchEndY || !isSwiping) return;

    const yDiff = touchStartY - touchEndY;
    const now = new Date().getTime();

    // Проверяем, прошло ли достаточно времени с последнего свайпа
    if (now - lastScrollTime < scrollDelay) return;

    // Проверяем расстояние свайпа
    if (Math.abs(yDiff) < minSwipeDistance) return;

    // Свайп вниз - к предыдущей секции
    if (yDiff < 0) {
      handleSwipeDown();
    }
    // Свайп вверх - к следующей секции
    else if (yDiff > 0) {
      handleSwipeUp();
    }

    // Обновляем время последнего свайпа
    lastScrollTime = now;

    // Сбрасываем значения
    touchStartY = 0;
    touchEndY = 0;
    touchStartX = 0;
    touchEndX = 0;
  }

  // Функция для обработки свайпа вверх (переход к следующей секции)
  function handleSwipeUp() {
    // Если текущая секция не установлена (домашняя страница)
    if (!currentSection || currentSection === showcaseSection) {
      goToAboutSection();
    }
    // Если текущая секция "О нас"
    else if (currentSection === aboutSection) {
      goToServicesSection();
    }
    // Если текущая секция "Производство и сервис"
    else if (currentSection === servicesSection) {
      goToJewelrySection();
    }
    // Если текущая секция "Ювелирный мерч"
    else if (currentSection === jewelrySection) {
      goToPartnerSection();
    }
    // Если текущая секция "Партнерская программа"
    else if (currentSection === partnerSection) {
      // Можно сделать циклический переход или ничего не делать
      // goToHomeSection();
    }
  }

  // Функция для обработки свайпа вниз (переход к предыдущей секции)
  function handleSwipeDown() {
    // Если текущая секция "О нас"
    if (currentSection === aboutSection) {
      goToHomeSection();
    }
    // Если текущая секция "Производство и сервис"
    else if (currentSection === servicesSection) {
      goToAboutSection();
    }
    // Если текущая секция "Ювелирный мерч"
    else if (currentSection === jewelrySection) {
      goToServicesSection();
    }
    // Если текущая секция "Партнерская программа"
    else if (currentSection === partnerSection) {
      goToJewelrySection();
    }
  }

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

  // Инициализация обработчиков для свайпа на мобильных устройствах
  function initMobileSwipe() {
    // Проверяем, поддерживается ли сенсорный ввод
    if ("ontouchstart" in window) {
      // Добавляем индикатор свайпа для мобильных устройств
      if (!document.querySelector(".swipe-indicator")) {
        const swipeIndicator = document.createElement("div");
        swipeIndicator.className = "swipe-indicator";

        // Создаем точки для каждой секции
        const sections = ["home", "about", "services", "jewelry", "partner"];
        sections.forEach((section) => {
          const dot = document.createElement("div");
          dot.className = "swipe-dot";
          dot.setAttribute("data-section", section);
          if (section === "home") dot.classList.add("active");
          swipeIndicator.appendChild(dot);
        });

        document.body.appendChild(swipeIndicator);
      }

      // Добавляем обработчики событий touch
      document.addEventListener("touchstart", handleTouchStart, {
        passive: false,
      });
      document.addEventListener("touchmove", handleTouchMove, {
        passive: false,
      });
      document.addEventListener("touchend", handleTouchEnd, { passive: false });
    }
  }

  // Вызов функции инициализации свайпа
  initMobileSwipe();

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

  // Обработка отправки формы
  consultationForm.addEventListener("submit", function (e) {
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
  });

  // Обработка закрытия окна с ошибкой
  document
    .querySelector("#modal-error .modal-close")
    .addEventListener("click", function () {
      modalError.classList.remove("active");
      modalError.style.display = "none";
      modalError.style.opacity = "0";
      modalError.style.visibility = "hidden";
      // НЕ закрываем оверлей и окно консультации
    });

  // Закрытие по клику на оверлей
  modalOverlay.addEventListener("click", function () {
    if (
      !modalError.classList.contains("active") &&
      !modalSuccess.classList.contains("active")
    ) {
      modalConsultation.classList.remove("active");
      modalOverlay.classList.remove("active");
    }
  });

  // Обработка отправки формы контактов
  const contactsForm = document.getElementById("contacts-form");
  if (contactsForm) {
    contactsForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const name = document.getElementById("contact-name").value;
      const phone = document.getElementById("contact-phone").value;

      if (!name || !phone) {
        const modalError = document.getElementById("modal-error");
        if (modalError) {
          modalError.classList.add("active");
          setTimeout(() => {
            modalError.classList.remove("active");
          }, 3000);
        }
        return;
      }

      // Здесь будет логика отправки формы

      // Показываем сообщение об успешной отправке
      const modalSuccess = document.getElementById("modal-success");
      if (modalSuccess) {
        const userNameSpan = modalSuccess.querySelector(".user-name");
        if (userNameSpan) {
          userNameSpan.textContent = name;
        }
        modalSuccess.classList.add("active");

        // Закрываем модальное окно через 3 секунды
        setTimeout(() => {
          modalSuccess.classList.remove("active");
          contactsForm.reset();
        }, 3000);
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
