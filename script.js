document.addEventListener("DOMContentLoaded", () => {
  const navItems = document.querySelectorAll(".nav-item");
  const mainContainer = document.querySelector(".container");
  const contentArea = document.querySelector(".content-area");
  const burgerMenu = document.querySelector(".burger-menu");
  const mainNav = document.querySelector(".main-nav");
  const overlay = document.querySelector(".overlay");

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
  let currentSection = 0;
  let lastScrollTime = 0;
  const scrollDelay = 3000; // Задержка между скроллами 3 секунды

  // Получаем элементы
  const showcaseSection = document.querySelector(".showcase-section");
  const heroSection = document.querySelector(".hero-section");
  const aboutSection = document.querySelector(".about-section");
  const servicesSection = document.querySelector(".services-section");
  const scrollIndicator = document.querySelector(".scroll-indicator");
  const infoText = document.querySelector(".info-text");

  // Переменные для обработки свайпов
  let touchStartY = 0;
  let touchEndY = 0;
  const minSwipeDistance = 50; // Минимальное расстояние для свайпа
  let isSwiping = false;

  // Функция для обновления активного пункта меню
  function updateActiveNavItem() {
    navItems.forEach((item) => {
      if (currentSection === 2 && item.textContent.includes("О нас")) {
        item.classList.add("active");
      } else if (
        currentSection === 3 &&
        item.textContent.includes("Производство")
      ) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  }

  // Функция для перехода к секции "О нас"
  function goToAboutSection() {
    currentSection = 2;
    showcaseSection.classList.remove("fullscreen");
    heroSection.classList.remove("fade");
    aboutSection.classList.add("visible");
    servicesSection.classList.remove("visible");
    // Показываем элементы с задержкой
    setTimeout(() => {
      infoText.style.opacity = "1";
      mainNav.style.opacity = "1";
      scrollIndicator.classList.remove("hidden");
    }, scrollDelay);
    updateActiveNavItem();
  }

  // Функция для перехода к секции "Производство и сервис"
  function goToServicesSection() {
    currentSection = 3;
    showcaseSection.classList.remove("fullscreen");
    heroSection.classList.remove("fade");
    aboutSection.classList.remove("visible");
    servicesSection.classList.add("visible");
    // Показываем элементы с задержкой
    setTimeout(() => {
      infoText.style.opacity = "1";
      mainNav.style.opacity = "1";
      scrollIndicator.classList.remove("hidden");
    }, scrollDelay);
    updateActiveNavItem();
  }

  // Функция для обработки скролла
  function handleScroll(e) {
    if (isScrolling) return;

    const currentTime = Date.now();
    if (currentTime - lastScrollTime < scrollDelay) return;

    isScrolling = true;
    lastScrollTime = currentTime;

    // Определяем направление скролла
    if (e.deltaY > 0 && currentSection < 3) {
      // Скролл вниз
      currentSection++;

      if (currentSection === 1) {
        // Разворачиваем картинку
        isFullscreen = true;
        showcaseSection.classList.add("fullscreen");
        heroSection.classList.add("fade");
        // Скрываем элементы
        infoText.style.opacity = "0";
        mainNav.style.opacity = "0";
        scrollIndicator.classList.add("hidden");
      } else if (currentSection === 2) {
        // Показываем секцию "О нас"
        showcaseSection.classList.remove("fullscreen");
        heroSection.classList.remove("fade");
        aboutSection.classList.add("visible");
        servicesSection.classList.remove("visible");
        // Показываем элементы с задержкой
        setTimeout(() => {
          infoText.style.opacity = "1";
          mainNav.style.opacity = "1";
          scrollIndicator.classList.remove("hidden");
        }, scrollDelay);
        updateActiveNavItem();
      } else if (currentSection === 3) {
        // Показываем секцию "Производство и сервис"
        showcaseSection.classList.remove("fullscreen");
        heroSection.classList.remove("fade");
        aboutSection.classList.remove("visible");
        servicesSection.classList.add("visible");
        // Показываем элементы с задержкой
        setTimeout(() => {
          infoText.style.opacity = "1";
          mainNav.style.opacity = "1";
          scrollIndicator.classList.remove("hidden");
        }, scrollDelay);
        updateActiveNavItem();
      }
    } else if (e.deltaY < 0 && currentSection > 0) {
      // Скролл вверх
      currentSection--;

      if (currentSection === 0) {
        // Возвращаем в исходное состояние
        isFullscreen = false;
        showcaseSection.classList.remove("fullscreen");
        heroSection.classList.remove("fade");
        aboutSection.classList.remove("visible");
        servicesSection.classList.remove("visible");
        // Показываем элементы с задержкой
        setTimeout(() => {
          infoText.style.opacity = "1";
          mainNav.style.opacity = "1";
          scrollIndicator.classList.remove("hidden");
        }, scrollDelay);
        updateActiveNavItem();
      } else if (currentSection === 1) {
        // Возвращаем картинку в полноэкранный режим
        isFullscreen = true;
        showcaseSection.classList.add("fullscreen");
        heroSection.classList.add("fade");
        // Скрываем элементы
        infoText.style.opacity = "0";
        mainNav.style.opacity = "0";
        scrollIndicator.classList.add("hidden");
        updateActiveNavItem();
      } else if (currentSection === 2) {
        // Возвращаемся к секции "О нас"
        showcaseSection.classList.remove("fullscreen");
        heroSection.classList.remove("fade");
        aboutSection.classList.add("visible");
        servicesSection.classList.remove("visible");
        // Показываем элементы с задержкой
        setTimeout(() => {
          infoText.style.opacity = "1";
          mainNav.style.opacity = "1";
          scrollIndicator.classList.remove("hidden");
        }, scrollDelay);
        updateActiveNavItem();
      }
    }

    // Сбрасываем флаг скролла после задержки
    setTimeout(() => {
      isScrolling = false;
    }, scrollDelay);
  }

  // Функция для обработки начала свайпа
  function handleTouchStart(e) {
    touchStartY = e.touches[0].clientY;
  }

  // Функция для обработки движения при свайпе
  function handleTouchMove(e) {
    if (isScrolling) return;
    touchEndY = e.touches[0].clientY;

    // Предотвращаем стандартную прокрутку страницы
    e.preventDefault();
  }

  // Функция для обработки окончания свайпа
  function handleTouchEnd() {
    if (isScrolling || isSwiping) return;

    const swipeDistance = touchStartY - touchEndY;
    const currentTime = Date.now();

    if (
      Math.abs(swipeDistance) < minSwipeDistance ||
      currentTime - lastScrollTime < scrollDelay
    )
      return;

    isSwiping = true;
    lastScrollTime = currentTime;

    // Свайп вверх
    if (swipeDistance > 0 && currentSection < 3) {
      // Имитируем скролл вниз
      handleScroll({ deltaY: 100 });
    }
    // Свайп вниз
    else if (swipeDistance < 0 && currentSection > 0) {
      // Имитируем скролл вверх
      handleScroll({ deltaY: -100 });
    }

    // Сбрасываем флаг свайпа после задержки
    setTimeout(() => {
      isSwiping = false;
    }, scrollDelay);
  }

  // Добавляем обработчик скролла только для десктопа
  if (window.innerWidth > 768) {
    window.addEventListener("wheel", handleScroll, { passive: true });
  }

  // Сброс стилей для мобильных устройств
  function resetMobileStyles() {
    if (window.innerWidth <= 768) {
      showcaseSection.classList.remove("fullscreen");
      heroSection.classList.remove("fade");
      aboutSection.classList.remove("visible");
      servicesSection.classList.remove("visible");
      isFullscreen = false;
      currentSection = 0;
      document.body.style.overflow = "auto";
      if (scrollIndicator) {
        scrollIndicator.style.display = "none";
      }
      infoText.style.opacity = "1";
      mainNav.style.opacity = "1";
      updateActiveNavItem();

      // Добавляем обработчики свайпов
      document.addEventListener("touchstart", handleTouchStart, {
        passive: false,
      });
      document.addEventListener("touchmove", handleTouchMove, {
        passive: false,
      });
      document.addEventListener("touchend", handleTouchEnd, { passive: false });
    } else {
      document.body.style.overflow = "hidden";
      if (scrollIndicator) {
        scrollIndicator.style.display = "flex";
      }
      // Удаляем обработчики свайпов
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
    }
  }

  // Обработчик изменения размера окна
  window.addEventListener("resize", resetMobileStyles);

  // Инициализация при загрузке
  resetMobileStyles();

  // Обработка навигации
  function toggleMenu() {
    burgerMenu?.classList.toggle("active");
    mainNav?.classList.toggle("active");
    overlay?.classList.toggle("active");
    document.body.classList.toggle("no-scroll");
  }

  if (burgerMenu) {
    burgerMenu.addEventListener("click", toggleMenu);
  }

  if (overlay) {
    overlay.addEventListener("click", toggleMenu);
  }

  // Закрытие меню при клике на пункт меню
  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      if (window.innerWidth <= 768 && mainNav.classList.contains("active")) {
        toggleMenu();
      }
    });
  });

  // Закрытие меню при клике вне меню
  document.addEventListener("click", (e) => {
    if (
      window.innerWidth <= 768 &&
      mainNav.classList.contains("active") &&
      !mainNav.contains(e.target) &&
      !burgerMenu.contains(e.target)
    ) {
      toggleMenu();
    }
  });

  // Обработка изменения размера окна
  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      if (window.innerWidth > 768) {
        mainNav.style.display = "flex";
        burgerMenu.classList.remove("active");
        mainNav.classList.remove("active");
        overlay.classList.remove("active");
        document.body.classList.remove("no-scroll");
        navItems.forEach((item) => {
          item.style.opacity = "1";
          item.style.transform = "translateX(0)";
        });
      } else {
        if (!mainNav.classList.contains("active")) {
          mainNav.style.display = "none";
        }
      }
    }, 250);
  });

  // Обработка клика по пунктам меню
  navItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      if (item.textContent.includes("О нас")) {
        e.preventDefault();
        goToAboutSection();
      } else if (item.textContent.includes("Производство")) {
        e.preventDefault();
        goToServicesSection();
      }
    });
  });

  // Обработка клика по кнопке "Запросить консультацию"
  const consultationBtn = document.querySelector(".consultation-btn");
  if (consultationBtn) {
    consultationBtn.addEventListener("click", () => {
      alert("Форма запроса консультации будет добавлена здесь");
    });
  }

  // Инициализация аккордеона
  const accordionHeaders = document.querySelectorAll(".services-header");

  accordionHeaders.forEach((header) => {
    header.addEventListener("click", () => {
      const accordionId = header.getAttribute("data-accordion");
      const body = document.getElementById(accordionId);
      const isExpanded = header.getAttribute("aria-expanded") === "true";

      // Закрываем все остальные аккордеоны
      accordionHeaders.forEach((otherHeader) => {
        if (otherHeader !== header) {
          otherHeader.setAttribute("aria-expanded", "false");
          const otherId = otherHeader.getAttribute("data-accordion");
          const otherBody = document.getElementById(otherId);
          otherBody.classList.remove("active");
        }
      });

      // Открываем/закрываем текущий аккордеон
      header.setAttribute("aria-expanded", !isExpanded);
      body.classList.toggle("active");
    });
  });

  // Устанавливаем начальное состояние
  accordionHeaders.forEach((header) => {
    header.setAttribute("aria-expanded", "false");
  });
});
