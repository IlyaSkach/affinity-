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
  const scrollIndicator = document.querySelector(".scroll-indicator");
  const infoText = document.querySelector(".info-text");

  // Переменные для свайпов
  let touchStartY = 0;
  let touchEndY = 0;
  const minSwipeDistance = 50;
  let isSwiping = false;

  // Функция для обновления активного пункта меню
  function updateActiveNavItem() {
    const navItems = document.querySelectorAll(".nav-item");
    navItems.forEach((item) => {
      item.classList.remove("active");
    });

    if (currentSection === aboutSection) {
      document
        .querySelector('.nav-item[data-section="about"]')
        .classList.add("active");
    } else if (currentSection === servicesSection) {
      document
        .querySelector('.nav-item[data-section="services"]')
        .classList.add("active");
    } else if (currentSection === jewelrySection) {
      document
        .querySelector('.nav-item[data-section="jewelry"]')
        .classList.add("active");
    } else if (currentSection === partnerSection) {
      document
        .querySelector('.nav-item[data-section="partner"]')
        .classList.add("active");
    }
  }

  // Функция для обновления видимости информации о компании
  function updateCompanyInfo() {
    const companyInfo = document.querySelector(".company-info");
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

    // Скрываем элементы сначала
    infoText.style.opacity = "0";
    mainNav.style.opacity = "0";
    scrollIndicator.classList.add("hidden");

    // Показываем элементы с задержкой
    setTimeout(() => {
      infoText.style.opacity = "1";
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

    // Скрываем элементы сначала
    infoText.style.opacity = "0";
    mainNav.style.opacity = "0";
    scrollIndicator.classList.add("hidden");

    // Показываем элементы с задержкой
    setTimeout(() => {
      infoText.style.opacity = "1";
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

    // Скрываем элементы сначала
    infoText.style.opacity = "0";
    mainNav.style.opacity = "0";
    scrollIndicator.classList.add("hidden");

    // Показываем элементы с задержкой
    setTimeout(() => {
      infoText.style.opacity = "1";
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

    // Скрываем элементы сначала
    infoText.style.opacity = "0";
    mainNav.style.opacity = "0";
    scrollIndicator.classList.add("hidden");

    // Показываем элементы с задержкой
    setTimeout(() => {
      infoText.style.opacity = "1";
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
        infoText.style.opacity = "0";
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
      }
    } else if (e.deltaY < 0) {
      // Скролл вверх
      if (currentSection === partnerSection) {
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
        infoText.style.opacity = "1";
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
      jewelrySection.classList.remove("visible");
      partnerSection.classList.remove("visible");
      isFullscreen = false;
      currentSection = showcaseSection;
      document.body.style.overflow = "auto";
      if (scrollIndicator) {
        scrollIndicator.style.display = "none";
      }
      infoText.style.opacity = "1";
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

  // Обработка клика по пунктам меню
  navItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      const section = item.getAttribute("data-section");

      if (item.classList.contains("contacts")) {
        // Открываем модальное окно контактов
        const modal = document.getElementById("modal-contacts");
        const overlay = document.querySelector(".modal-overlay");
        if (modal && overlay) {
          modal.classList.add("active");
          overlay.classList.add("active");
        }
      } else if (section === "about") {
        goToAboutSection();
      } else if (section === "services") {
        goToServicesSection();
      } else if (section === "jewelry") {
        goToJewelrySection();
      } else if (section === "partner") {
        goToPartnerSection();
      }

      // Добавляем класс active к активному пункту меню
      navItems.forEach((nav) => nav.classList.remove("active"));
      item.classList.add("active");
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

  // Функция для обработки начала свайпа
  function handleTouchStart(e) {
    touchStartY = e.touches[0].clientY;
  }

  // Функция для обработки движения при свайпе
  function handleTouchMove(e) {
    if (isScrolling) return;
    touchEndY = e.touches[0].clientY;
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
    if (swipeDistance > 0) {
      if (currentSection === showcaseSection) {
        goToAboutSection();
      } else if (currentSection === aboutSection) {
        goToServicesSection();
      } else if (currentSection === servicesSection) {
        goToJewelrySection();
      } else if (currentSection === jewelrySection) {
        goToPartnerSection();
      }
    }
    // Свайп вниз
    else if (swipeDistance < 0) {
      if (currentSection === partnerSection) {
        goToJewelrySection();
      } else if (currentSection === jewelrySection) {
        goToServicesSection();
      } else if (currentSection === servicesSection) {
        goToAboutSection();
      } else if (currentSection === aboutSection) {
        goToHomeSection();
      }
    }

    setTimeout(() => {
      isSwiping = false;
    }, scrollDelay);
  }

  // Функция для возврата на главную
  function goToHomeSection() {
    currentSection = null;
    isFullscreen = false;
    showcaseSection.classList.remove("fullscreen");
    heroSection.classList.remove("fade");
    aboutSection.classList.remove("visible");
    servicesSection.classList.remove("visible");
    jewelrySection.classList.remove("visible");
    partnerSection.classList.remove("visible");
    infoText.style.opacity = "1";
    mainNav.style.opacity = "1";
    scrollIndicator.classList.remove("hidden");
    updateActiveNavItem();
    updateCompanyInfo();
  }

  // Добавляем обработчики свайпов для мобильных устройств
  if (window.innerWidth <= 768) {
    document.addEventListener("touchstart", handleTouchStart, {
      passive: true,
    });
    document.addEventListener("touchmove", handleTouchMove, { passive: true });
    document.addEventListener("touchend", handleTouchEnd);

    // Обновляем стили секций для мобильной версии
    const sections = [
      heroSection,
      aboutSection,
      servicesSection,
      jewelrySection,
      partnerSection,
    ];
    sections.forEach((section) => {
      if (section) {
        section.style.position = "fixed";
        section.style.width = "100%";
        section.style.height = "100vh";
        section.style.overflow = "hidden";
      }
    });
  }

  // Обновляем обработчик изменения размера окна
  window.addEventListener("resize", () => {
    resetMobileStyles();
    if (window.innerWidth > 768) {
      closeMenu();
      // Удаляем обработчики свайпов
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
    } else {
      // Добавляем обработчики свайпов
      document.addEventListener("touchstart", handleTouchStart, {
        passive: true,
      });
      document.addEventListener("touchmove", handleTouchMove, {
        passive: true,
      });
      document.addEventListener("touchend", handleTouchEnd);
    }
  });

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
});
