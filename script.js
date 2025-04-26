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

  // Проверка мобильной версии и настройка соответствующих стилей
  function checkMobileView() {
    const isMobile = window.innerWidth <= 768;
    const body = document.body;
    const mainNav = document.querySelector(".main-nav");
    const mobileNavPanel = document.querySelector(".mobile-nav-panel");
    const videoElements = document.querySelectorAll("video");
    const allSections = document.querySelectorAll("section");
    const heroSection = document.querySelector(".hero-section");
    const showcaseSection = document.querySelector(".showcase-section");

    if (isMobile) {
      // Добавляем класс для мобильной версии
      body.classList.add("mobile-view");

      // Устанавливаем фон на body
      body.style.backgroundImage = "url('Images/affinitybg.png')";
      body.style.backgroundSize = "cover";
      body.style.backgroundPosition = "center";
      body.style.backgroundAttachment = "fixed";

      // Сбрасываем стили навигации если меню не активно
      if (mainNav && !mainNav.classList.contains("active")) {
        mainNav.style.display = "none";
      }

      // Скрываем видео на мобильной версии
      videoElements.forEach((video) => {
        video.style.display = "none";
      });

      // Убираем нижнее меню навигации
      if (mobileNavPanel) {
        mobileNavPanel.style.display = "none";
      }

      // Скрываем главную страницу
      if (heroSection) {
        heroSection.style.display = "none";
      }

      if (showcaseSection) {
        showcaseSection.style.display = "none";
      }

      // Убираем фоны секций, так как фон установлен на body
      allSections.forEach((section) => {
        if (!section.classList.contains("contacts-section")) {
          section.style.backgroundImage = "none";
          section.style.backgroundColor = "transparent";
        }
      });

      // Включаем обычный скролл между секциями
      body.style.overflow = "auto";
      body.style.overflowX = "hidden";

      // Показываем все секции для скролла кроме главной
      document
        .querySelectorAll("section:not(.hero-section):not(.showcase-section)")
        .forEach((section) => {
          section.style.display = "block";
          section.style.position = "relative";
          section.style.top = "auto";
          section.style.left = "auto";
          section.style.width = "100%";
          section.style.height = "auto";
          section.style.minHeight = "auto"; // Убираем минимальную высоту
          section.style.opacity = "1";
          section.style.visibility = "visible";
          section.style.overflow = "visible";
          section.style.zIndex = "1";
          section.style.paddingTop = "20px";
          section.style.paddingBottom = "20px";
          section.style.marginTop = "0";
          section.style.marginBottom = "0";
          section.style.boxSizing = "border-box";
        });

      // Добавляем заголовки к секциям, если их нет
      const aboutSection = document.querySelector(".about-section");
      if (
        aboutSection &&
        !aboutSection.querySelector(".mobile-section-title")
      ) {
        const titleDiv = document.createElement("h2");
        titleDiv.className = "mobile-section-title";
        titleDiv.textContent = "О нас";
        titleDiv.style.textAlign = "center";
        titleDiv.style.color = "#ffbe00";
        titleDiv.style.margin = "0 0 20px 0";
        titleDiv.style.fontSize = "24px";
        aboutSection.insertBefore(titleDiv, aboutSection.firstChild);
      }

      const servicesSection = document.querySelector(".services-section");
      if (
        servicesSection &&
        !servicesSection.querySelector(".mobile-section-title")
      ) {
        const titleDiv = document.createElement("h2");
        titleDiv.className = "mobile-section-title";
        titleDiv.textContent = "Производство и сервис";
        titleDiv.style.textAlign = "center";
        titleDiv.style.color = "#ffbe00";
        titleDiv.style.margin = "0 0 20px 0";
        titleDiv.style.fontSize = "24px";
        servicesSection.insertBefore(titleDiv, servicesSection.firstChild);
      }

      const jewelrySection = document.querySelector(".jewelry-section");
      if (
        jewelrySection &&
        !jewelrySection.querySelector(".mobile-section-title")
      ) {
        const titleDiv = document.createElement("h2");
        titleDiv.className = "mobile-section-title";
        titleDiv.textContent = "Ювелирный мерч";
        titleDiv.style.textAlign = "center";
        titleDiv.style.color = "#ffbe00";
        titleDiv.style.margin = "0 0 20px 0";
        titleDiv.style.fontSize = "24px";
        jewelrySection.insertBefore(titleDiv, jewelrySection.firstChild);
      }

      const partnerSection = document.querySelector(".partner-section");
      if (
        partnerSection &&
        !partnerSection.querySelector(".mobile-section-title")
      ) {
        const titleDiv = document.createElement("h2");
        titleDiv.className = "mobile-section-title";
        titleDiv.textContent = "Партнерская программа";
        titleDiv.style.textAlign = "center";
        titleDiv.style.color = "#ffbe00";
        titleDiv.style.margin = "0 0 20px 0";
        titleDiv.style.fontSize = "24px";
        partnerSection.insertBefore(titleDiv, partnerSection.firstChild);
      }

      const contactsSection = document.querySelector(".contacts-section");
      if (
        contactsSection &&
        !contactsSection.querySelector(".mobile-section-title")
      ) {
        const titleDiv = document.createElement("h2");
        titleDiv.className = "mobile-section-title";
        titleDiv.textContent = "Консультация";
        titleDiv.style.textAlign = "center";
        titleDiv.style.color = "#ffbe00";
        titleDiv.style.margin = "0 0 20px 0";
        titleDiv.style.fontSize = "24px";
        contactsSection.insertBefore(titleDiv, contactsSection.firstChild);
      }

      // Убираем отступы между секциями и подложку партнерской программы
      applyMobileStyles();

      // Настройка секции "Ювелирный мерч" для мобильной версии
      const jewelryLayout = document.querySelector(".jewelry-layout");
      if (jewelryLayout) {
        // Проверяем, если уже есть слайдер и карточки
        const slider = jewelryLayout.querySelector(".about-slider");
        const leftCard = jewelryLayout.querySelector(".jewelry-card-left");
        const rightCard = jewelryLayout.querySelector(".jewelry-card-right");

        // Если нет какого-либо элемента, восстанавливаем оригинальное содержимое
        if (!slider || !leftCard || !rightCard) {
          const originalContent = jewelryLayout.getAttribute(
            "data-desktop-content"
          );
          if (originalContent) {
            jewelryLayout.innerHTML = originalContent;
          }
        }

        // Переупорядочиваем элементы для мобильной версии
        setTimeout(() => {
          const updatedSlider = jewelryLayout.querySelector(".about-slider");
          const updatedLeftCard =
            jewelryLayout.querySelector(".jewelry-card-left");
          const updatedRightCard = jewelryLayout.querySelector(
            ".jewelry-card-right"
          );

          if (updatedSlider && updatedLeftCard && updatedRightCard) {
            // Устанавливаем CSS для mobilе вида
            jewelryLayout.style.display = "flex";
            jewelryLayout.style.flexDirection = "column";

            // Ставим слайдер первым
            updatedSlider.style.order = "1";
            updatedSlider.style.width = "100%";
            updatedSlider.style.maxWidth = "100%";
            updatedSlider.style.margin = "0 0 20px 0";

            // Адаптируем карточку "Персонализированная упаковка"
            updatedLeftCard.style.order = "2";
            updatedLeftCard.style.maxWidth = "100%";
            updatedLeftCard.style.width = "calc(100% - 40px)";
            updatedLeftCard.style.margin = "0 20px 20px 20px";
            updatedLeftCard.style.backgroundColor = "#313233";
            updatedLeftCard.style.borderRadius = "15px";
            updatedLeftCard.style.padding = "20px";
            updatedLeftCard.style.boxSizing = "border-box";
            updatedLeftCard.style.fontSize = "14px";

            // Добавляем адаптацию текстовых элементов внутри карточки
            const leftCardText = updatedLeftCard.querySelectorAll(
              "p, h1, h2, h3, h4, h5, h6"
            );
            leftCardText.forEach((element) => {
              if (element.tagName === "H3") {
                element.style.fontSize = "18px";
                element.style.marginBottom = "15px";
                element.style.textAlign = "center";
              } else {
                element.style.fontSize = "14px";
                element.style.lineHeight = "1.4";
                element.style.marginBottom = "10px";
                element.style.wordWrap = "break-word";
                element.style.maxWidth = "100%";
              }

              // Для блоков с классом note делаем меньший шрифт
              if (element.classList.contains("note")) {
                element.style.fontSize = "12px";
                element.style.color = "#aaa";
              }
            });

            // Ставим карточку "Зачем нужен мерч?" третьей
            updatedRightCard.style.order = "3";
            updatedRightCard.style.maxWidth = "100%";
            updatedRightCard.style.width = "calc(100% - 40px)";
            updatedRightCard.style.margin = "0 20px 20px 20px";
            updatedRightCard.style.backgroundColor = "#313233";
            updatedRightCard.style.borderRadius = "15px";
            updatedRightCard.style.padding = "20px";
            updatedRightCard.style.boxSizing = "border-box";
            updatedRightCard.style.fontSize = "14px";

            // Добавляем адаптацию текстовых элементов внутри карточки
            const rightCardText = updatedRightCard.querySelectorAll(
              "p, h1, h2, h3, h4, h5, h6"
            );
            rightCardText.forEach((element) => {
              if (element.tagName === "H3") {
                element.style.fontSize = "18px";
                element.style.marginBottom = "15px";
                element.style.textAlign = "center";
              } else {
                element.style.fontSize = "14px";
                element.style.lineHeight = "1.4";
                element.style.marginBottom = "10px";
                element.style.wordWrap = "break-word";
                element.style.maxWidth = "100%";
              }
            });
          }
        }, 100);
      }

      // Убираем скрытие секций
      document.querySelectorAll(".visible").forEach((section) => {
        section.classList.remove("visible");
      });

      document.querySelectorAll(".hidden").forEach((section) => {
        section.classList.remove("hidden");
      });

      document.querySelectorAll(".fade").forEach((section) => {
        section.classList.remove("fade");
      });

      document.querySelectorAll(".fullscreen").forEach((section) => {
        section.classList.remove("fullscreen");
      });

      // Отключаем десктопные обработчики событий скролла и свайпа
      window.removeEventListener("wheel", handleScroll);
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);

      // Настройка карточек в секции "Производство и сервис" для мобильной версии
      if (servicesSection) {
        // Удаляем созданные ранее мобильные карточки (если есть)
        document.querySelectorAll(".mobile-services-card").forEach((card) => {
          card.remove();
        });

        // Находим оригинальные карточки
        const servicesCards =
          servicesSection.querySelectorAll(".services-card");

        // Делаем их видимыми и стилизуем для мобильной версии
        servicesCards.forEach((card) => {
          card.style.opacity = "1";
          card.style.visibility = "visible";
          card.style.width = "calc(100% - 40px)";
          card.style.margin = "10px 20px";
          card.style.borderRadius = "15px";
          card.style.backgroundColor = "#313233";
          card.style.padding = "15px";
          card.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.3)";
          card.style.color = "#ffffff";
          card.style.cursor = "pointer";
          card.style.zIndex = "5";
          card.style.textAlign = "center";

          // Находим все текстовые элементы внутри карточки и центрируем их
          const textElements = card.querySelectorAll(
            "p, h1, h2, h3, h4, h5, h6, span, div"
          );
          textElements.forEach((element) => {
            element.style.textAlign = "center";
          });

          // Удаляем подсказку "Нажмите для подробностей", если она была добавлена ранее
          const tapHint = card.querySelector(".tap-hint");
          if (tapHint) {
            tapHint.remove();
          }
        });
      }
    } else {
      // Возвращаем стандартные стили для десктопа
      restoreDesktopStyles();

      if (mainNav) {
        mainNav.style.display = "";
      }

      // Показываем главную страницу в десктопе
      if (heroSection) {
        heroSection.style.display = "";
      }

      if (showcaseSection) {
        showcaseSection.style.display = "";
      }

      // Показываем видео на десктопе
      videoElements.forEach((video) => {
        video.style.display = "";
      });

      // Убираем добавленные заголовки секций
      document.querySelectorAll(".mobile-section-title").forEach((title) => {
        title.remove();
      });

      // Убираем установленные для мобильной версии стили
      document.querySelectorAll("section").forEach((section) => {
        section.style.backgroundImage = "";
        section.style.backgroundColor = "";
        section.style.display = "";
        section.style.position = "";
        section.style.top = "";
        section.style.left = "";
        section.style.width = "";
        section.style.height = "";
        section.style.minHeight = "";
        section.style.padding = "";
        section.style.paddingTop = "";
        section.style.paddingBottom = "";
        section.style.marginTop = "";
        section.style.marginBottom = "";
        section.style.boxSizing = "";
        section.style.opacity = "";
        section.style.visibility = "";
        section.style.overflow = "";
        section.style.zIndex = "";
      });

      // Возвращаем стандартное расположение элементов в секции "Ювелирный мерч"
      const jewelryLayout = document.querySelector(".jewelry-layout");
      if (jewelryLayout) {
        const slider = jewelryLayout.querySelector(".about-slider");
        const leftCard = jewelryLayout.querySelector(".jewelry-card-left");
        const rightCard = jewelryLayout.querySelector(".jewelry-card-right");

        if (slider && leftCard && rightCard) {
          jewelryLayout.style.display = "";
          jewelryLayout.style.flexDirection = "";

          slider.style.order = "";
          slider.style.width = "";
          slider.style.maxWidth = "";
          slider.style.margin = "";

          leftCard.style.order = "";
          leftCard.style.maxWidth = "";
          leftCard.style.width = "";
          leftCard.style.margin = "";
          leftCard.style.backgroundColor = "";
          leftCard.style.borderRadius = "";
          leftCard.style.padding = "";
          leftCard.style.boxSizing = "";
          leftCard.style.fontSize = "";

          // Сбрасываем стили для всех текстовых элементов
          const leftCardText = leftCard.querySelectorAll(
            "p, h1, h2, h3, h4, h5, h6"
          );
          leftCardText.forEach((element) => {
            element.style.fontSize = "";
            element.style.lineHeight = "";
            element.style.marginBottom = "";
            element.style.wordWrap = "";
            element.style.maxWidth = "";
            element.style.textAlign = "";
            element.style.color = "";
          });

          rightCard.style.order = "";
          rightCard.style.maxWidth = "";
          rightCard.style.width = "";
          rightCard.style.margin = "";
          rightCard.style.backgroundColor = "";
          rightCard.style.borderRadius = "";
          rightCard.style.padding = "";
          rightCard.style.boxSizing = "";
          rightCard.style.fontSize = "";

          // Сбрасываем стили для всех текстовых элементов
          const rightCardText = rightCard.querySelectorAll(
            "p, h1, h2, h3, h4, h5, h6"
          );
          rightCardText.forEach((element) => {
            element.style.fontSize = "";
            element.style.lineHeight = "";
            element.style.marginBottom = "";
            element.style.wordWrap = "";
            element.style.maxWidth = "";
            element.style.textAlign = "";
          });
        }
      }

      // Восстанавливаем оригинальные стили для карточек в секции "Производство и сервис"
      const servicesCards = document.querySelectorAll(".services-card");
      servicesCards.forEach((card) => {
        card.style.display = "";
        card.style.opacity = "";
        card.style.visibility = "";
        card.style.width = "";
        card.style.margin = "";
        card.style.borderRadius = "";
        card.style.backgroundColor = "";
        card.style.padding = "";
        card.style.boxShadow = "";
        card.style.color = "";
        card.style.cursor = "";
        card.style.zIndex = "";
        card.style.textAlign = "";

        // Восстанавливаем оригинальное выравнивание для всех текстовых элементов
        const textElements = card.querySelectorAll(
          "p, h1, h2, h3, h4, h5, h6, span, div"
        );
        textElements.forEach((element) => {
          element.style.textAlign = "";
        });

        // Удаляем подсказки для тапа в десктопной версии
        const tapHint = card.querySelector(".tap-hint");
        if (tapHint) {
          tapHint.remove();
        }
      });

      // Получаем ссылки на секции
      const sectionsForDesktop = {
        partner: document.querySelector(".partner-section"),
        contacts: document.querySelector(".contacts-section"),
      };

      // Восстанавливаем стили секции "Партнерская программа" для десктопной версии
      if (sectionsForDesktop.partner) {
        sectionsForDesktop.partner.style.removeProperty(
          "--partner-overlay-opacity"
        );
        sectionsForDesktop.partner.style.backgroundColor = "";

        // Возвращаем отображение фоновых изображений
        const partnerBgImages =
          sectionsForDesktop.partner.querySelectorAll(".partner-bg-image");
        partnerBgImages.forEach((img) => {
          img.style.display = "";
        });

        // Удаляем добавленные стили
        const mobileStyles = document.querySelector(".mobile-custom-styles");
        if (mobileStyles) {
          mobileStyles.remove();
        }

        // Восстанавливаем отступы
        sectionsForDesktop.partner.style.marginTop = "";
        sectionsForDesktop.partner.style.paddingTop = "";
      }

      // Восстанавливаем отступы для секции "Консультация"
      if (sectionsForDesktop.contacts) {
        sectionsForDesktop.contacts.style.marginBottom = "";
        sectionsForDesktop.contacts.style.paddingBottom = "";
      }
    }
  }

  // Вспомогательная функция для применения мобильных стилей
  function applyMobileStyles() {
    // Получаем все секции
    const allSections = document.querySelectorAll("section");

    // Применяем стили ко всем секциям на мобильной версии
    allSections.forEach((section) => {
      // Убираем все отступы и фиксированные размеры
      section.style.marginTop = "0";
      section.style.marginBottom = "0";
      section.style.paddingTop = "0";
      section.style.paddingBottom = "0";

      // Устраняем фиксированную высоту и позицию
      section.style.position = "relative";
      section.style.height = "auto";
      section.style.minHeight = "auto";
      section.style.transform = "none";
      section.style.top = "auto";
      section.style.left = "auto";

      // Устанавливаем корректную видимость
      section.style.opacity = "1";
      section.style.visibility = "visible";

      // Уменьшаем отступы для заголовка секции
      const sectionTitle = section.querySelector(".mobile-section-title");
      if (sectionTitle) {
        sectionTitle.style.margin = "5px 0 10px 0";
      }
    });

    // Фиксим подложку в секции "Партнерская программа"
    const partnerSection = document.querySelector(".partner-section");
    if (partnerSection) {
      partnerSection.style.setProperty("--partner-overlay-opacity", "0");
      partnerSection.style.backgroundColor = "transparent";

      // Скрываем фоновые изображения, если они есть
      const partnerBgImages =
        partnerSection.querySelectorAll(".partner-bg-image");
      partnerBgImages.forEach((img) => {
        img.style.display = "none";
      });
    }

    // Добавляем специальные стили для мобильной версии
    if (!document.querySelector(".mobile-custom-styles")) {
      const styleEl = document.createElement("style");
      styleEl.className = "mobile-custom-styles";
      styleEl.textContent = `
        @media screen and (max-width: 768px) {
          /* Общие стили для всех секций */
          section {
            margin-top: 0 !important;
            margin-bottom: 0 !important;
            padding-top: 0 !important;
            padding-bottom: 0 !important;
            position: relative !important;
            transform: none !important;
            height: auto !important;
            min-height: auto !important;
            max-height: none !important;
            overflow: visible !important;
            opacity: 1 !important;
            visibility: visible !important;
            top: auto !important;
            left: auto !important;
          }
          
          /* Стили для заголовков секций */
          .mobile-section-title {
            margin: 5px 0 10px 0 !important;
            padding: 0 !important;
          }
          
          /* Уменьшаем отступы у контейнеров внутри секций */
          .about-content,
          .services-content,
          .jewelry-content,
          .partner-content,
          .contacts-content {
            padding: 5px !important;
            margin: 0 !important;
          }
          
          /* Стили для содержимого секций */
          .about-grid,
          .services-grid,
          .jewelry-layout,
          .partner-blocks,
          .contacts-form-container {
            padding: 5px !important;
            margin: 0 !important;
          }
          
          /* Убираем подложку партнерской программы */
          .partner-section::before {
            opacity: 0 !important;
            display: none !important;
          }
          
          /* Скрываем элементы, добавляющие отступы */
          .scroll-indicator,
          section::before,
          section::after {
            display: none !important;
          }
        }
      `;
      document.head.appendChild(styleEl);
    }

    // Исправление для правильного расположения секций в DOM
    const sectionsArr = Array.from(allSections);
    // Фильтруем секции, которые должны отображаться (не hero и не showcase)
    const visibleSections = sectionsArr.filter(
      (section) =>
        !section.classList.contains("hero-section") &&
        !section.classList.contains("showcase-section")
    );

    // Переупорядочиваем секции в DOM, чтобы они шли одна за другой
    const container = document.querySelector(".container");
    if (container && visibleSections.length > 1) {
      for (let i = 1; i < visibleSections.length; i++) {
        visibleSections[i - 1].insertAdjacentElement(
          "afterend",
          visibleSections[i]
        );
      }
    }

    // Дополнительная фиксация вложенных контейнеров
    document
      .querySelectorAll(
        ".jewelry-card, .about-item, .services-card, .partner-block"
      )
      .forEach((card) => {
        card.style.margin = "5px 0";
        card.style.padding = "10px";
      });
  }

  // Вспомогательная функция для восстановления стилей для десктопа
  function restoreDesktopStyles() {
    // Восстанавливаем стили всех секций
    document.querySelectorAll("section").forEach((section) => {
      section.style.marginTop = "";
      section.style.marginBottom = "";
      section.style.paddingTop = "";
      section.style.paddingBottom = "";
      section.style.position = "";
      section.style.height = "";
      section.style.minHeight = "";
      section.style.transform = "";
      section.style.top = "";
      section.style.left = "";
      section.style.opacity = "";
      section.style.visibility = "";

      // Восстанавливаем стили заголовков
      const sectionTitle = section.querySelector(".mobile-section-title");
      if (sectionTitle) {
        sectionTitle.style.margin = "";
      }
    });

    // Восстанавливаем стили секции "Партнерская программа"
    const partnerSection = document.querySelector(".partner-section");
    if (partnerSection) {
      partnerSection.style.removeProperty("--partner-overlay-opacity");
      partnerSection.style.backgroundColor = "";

      // Возвращаем отображение фоновых изображений
      const partnerBgImages =
        partnerSection.querySelectorAll(".partner-bg-image");
      partnerBgImages.forEach((img) => {
        img.style.display = "";
      });
    }

    // Восстанавливаем стили вложенных контейнеров
    document
      .querySelectorAll(
        ".jewelry-card, .about-item, .services-card, .partner-block"
      )
      .forEach((card) => {
        card.style.margin = "";
        card.style.padding = "";
      });

    // Удаляем добавленные стили
    const mobileStyles = document.querySelector(".mobile-custom-styles");
    if (mobileStyles) {
      mobileStyles.remove();
    }
  }

  // Вызываем функцию при загрузке страницы и при изменении размера окна
  checkMobileView();
  window.addEventListener("resize", checkMobileView);

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

    // Закрываем все активные модальные окна
    document.querySelectorAll(".modal.active").forEach((modal) => {
      modal.classList.remove("active");
    });
    document.querySelector(".modal-overlay").classList.remove("active");

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

    // Закрываем все активные модальные окна
    document.querySelectorAll(".modal.active").forEach((modal) => {
      modal.classList.remove("active");
    });
    document.querySelector(".modal-overlay").classList.remove("active");

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

    // Закрываем все активные модальные окна
    document.querySelectorAll(".modal.active").forEach((modal) => {
      modal.classList.remove("active");
    });
    document.querySelector(".modal-overlay").classList.remove("active");

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

    // Закрываем все активные модальные окна
    document.querySelectorAll(".modal.active").forEach((modal) => {
      modal.classList.remove("active");
    });
    document.querySelector(".modal-overlay").classList.remove("active");

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

    // Закрываем все активные модальные окна
    document.querySelectorAll(".modal.active").forEach((modal) => {
      modal.classList.remove("active");
    });
    document.querySelector(".modal-overlay").classList.remove("active");

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

    // Закрываем все активные модальные окна
    document.querySelectorAll(".modal.active").forEach((modal) => {
      modal.classList.remove("active");
    });
    document.querySelector(".modal-overlay").classList.remove("active");

    if (infoText) infoText.style.opacity = "1";
    mainNav.style.opacity = "1";
    scrollIndicator.classList.remove("hidden");
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
      // Отключаем стандартное поведение переключения секций для мобильных устройств
      document.body.style.overflow = "auto";
      document.body.style.overflowX = "hidden";

      if (scrollIndicator) {
        scrollIndicator.style.display = "none";
      }

      // Отображаем все секции для возможности скролла
      document.querySelectorAll("section").forEach((section) => {
        section.style.display = "block";
        section.style.position = "relative";
        section.style.opacity = "1";
        section.style.visibility = "visible";
      });

      // Отключаем обработчики только для мобильных устройств
      window.removeEventListener("wheel", handleScroll);
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
    } else {
      document.body.style.overflow = "hidden";
      if (scrollIndicator) {
        scrollIndicator.style.display = "flex";
      }

      // Для десктопа включаем обработчики (если они не были добавлены)
      window.addEventListener("wheel", handleScroll, { passive: true });
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

        // Добавляем прокрутку к соответствующей секции для мобильной версии
        scrollToSectionMobile(section);
      }
    });
  });

  // Функция для прокрутки к секции в мобильной версии
  function scrollToSectionMobile(sectionName) {
    if (window.innerWidth > 768) return;

    // Закрываем все активные модальные окна
    document.querySelectorAll(".modal.active").forEach((modal) => {
      modal.classList.remove("active");
    });
    document.querySelector(".modal-overlay").classList.remove("active");

    let targetSection;

    if (sectionName === "about") {
      targetSection = document.querySelector(".about-section");
    } else if (sectionName === "services") {
      targetSection = document.querySelector(".services-section");
    } else if (sectionName === "jewelry") {
      targetSection = document.querySelector(".jewelry-section");
    } else if (sectionName === "partner") {
      targetSection = document.querySelector(".partner-section");
    } else if (sectionName === "contacts") {
      targetSection = document.querySelector(".contacts-section");
    } else if (sectionName === "home") {
      // Прокручиваем к верху страницы
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return;
    }

    if (targetSection) {
      // Прокручиваем к выбранной секции с плавной анимацией
      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      // Добавляем задержку для лучшего UX
      setTimeout(() => {
        // Делаем все секции видимыми
        document.querySelectorAll("section").forEach((section) => {
          section.style.opacity = "1";
          section.style.visibility = "visible";
        });

        // Выделяем активную секцию для лучшей видимости
        targetSection.style.position = "relative";
        targetSection.style.zIndex = "5";

        // Обновляем активный пункт навигации
        updateActiveNavItem();
      }, 300);
    }
  }

  // Обновляем функцию goToAboutSection для поддержки мобильной версии
  const originalGoToAboutSection = goToAboutSection;
  goToAboutSection = function () {
    if (window.innerWidth <= 768) {
      scrollToSectionMobile("about");
    } else {
      originalGoToAboutSection();
    }
  };

  // Обновляем функцию goToServicesSection для поддержки мобильной версии
  const originalGoToServicesSection = goToServicesSection;
  goToServicesSection = function () {
    if (window.innerWidth <= 768) {
      scrollToSectionMobile("services");
    } else {
      originalGoToServicesSection();
    }
  };

  // Обновляем функцию goToJewelrySection для поддержки мобильной версии
  const originalGoToJewelrySection = goToJewelrySection;
  goToJewelrySection = function () {
    if (window.innerWidth <= 768) {
      scrollToSectionMobile("jewelry");
    } else {
      originalGoToJewelrySection();
    }
  };

  // Обновляем функцию goToPartnerSection для поддержки мобильной версии
  const originalGoToPartnerSection = goToPartnerSection;
  goToPartnerSection = function () {
    if (window.innerWidth <= 768) {
      scrollToSectionMobile("partner");
    } else {
      originalGoToPartnerSection();
    }
  };

  // Обновляем функцию goToContactsSection для поддержки мобильной версии
  const originalGoToContactsSection = goToContactsSection;
  goToContactsSection = function () {
    if (window.innerWidth <= 768) {
      scrollToSectionMobile("contacts");
    } else {
      originalGoToContactsSection();
    }
  };

  // Обновляем функцию goToHomeSection для поддержки мобильной версии
  const originalGoToHomeSection = goToHomeSection;
  goToHomeSection = function () {
    if (window.innerWidth <= 768) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      originalGoToHomeSection();
    }
  };

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

    // Закрываем все активные модальные окна
    document.querySelectorAll(".modal.active").forEach((modal) => {
      modal.classList.remove("active");
    });
    document.querySelector(".modal-overlay").classList.remove("active");

    if (infoText) infoText.style.opacity = "1";
    mainNav.style.opacity = "1";
    scrollIndicator.classList.remove("hidden");
    updateActiveNavItem();
    updateCompanyInfo();
  }

  // Функция для добавления нижней мобильной навигации вместо свайпов
  function initMobileBottomNav() {
    // В мобильной версии мы отключаем нижнюю навигацию
    if (window.innerWidth <= 768) {
      const mobilePanel = document.querySelector(".mobile-nav-panel");
      if (mobilePanel) {
        mobilePanel.style.display = "none";
      }

      // Отключаем обработчики свайпов и скролла для мобильных устройств
      window.removeEventListener("wheel", handleScroll);
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
      } else if (section === "contacts" && currentSection === contactsSection) {
        button.classList.add("active");
      }
    });
  }

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
      const chatIds = ["478588941", ]; // Замените на реальные ID чатов
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

  // Функция для адаптации секции "Ювелирный мерч" на мобильных устройствах
  function adaptJewelrySectionForMobile() {
    if (window.innerWidth <= 768) {
      const jewelrySection = document.querySelector(".jewelry-section");
      const jewelryLayout = document.querySelector(".jewelry-layout");

      // Если секция найдена и еще не адаптирована
      if (
        jewelrySection &&
        jewelryLayout &&
        !jewelrySection.classList.contains("mobile-adapted")
      ) {
        // Получаем данные из существующих карточек
        const leftCardContent = document.querySelector(".jewelry-card-left");
        const rightCardContent = document.querySelector(".jewelry-card-right");
        const slider = document.querySelector(".about-slider");

        if (leftCardContent && rightCardContent && slider) {
          // Клонируем слайдер вместо прямого перемещения
          const clonedSlider = slider.cloneNode(true);

          // Создаем новые текстовые блоки
          const textBlock1 = document.createElement("div");
          textBlock1.className = "jewelry-text-block";
          textBlock1.innerHTML = leftCardContent.innerHTML;

          const textBlock2 = document.createElement("div");
          textBlock2.className = "jewelry-text-block";
          textBlock2.innerHTML = rightCardContent.innerHTML;

          // Сохраняем оригинальный контент для десктопа
          const originalContent = jewelryLayout.innerHTML;
          jewelryLayout.setAttribute("data-desktop-content", originalContent);

          // Очищаем существующий layout
          jewelryLayout.innerHTML = "";

          // Добавляем слайдер и текстовые блоки в новой структуре
          jewelryLayout.appendChild(clonedSlider);
          jewelryLayout.appendChild(textBlock1);
          jewelryLayout.appendChild(textBlock2);

          // Отмечаем секцию как адаптированную
          jewelrySection.classList.add("mobile-adapted");

          // Переинициализируем слайдер
          initSliderForMobile(jewelryLayout);
        }
      }
    } else {
      // Возвращаем десктопную версию, если мы увеличили экран
      const jewelrySection = document.querySelector(".jewelry-section");
      const jewelryLayout = document.querySelector(".jewelry-layout");

      if (
        jewelrySection &&
        jewelryLayout &&
        jewelrySection.classList.contains("mobile-adapted")
      ) {
        const originalContent = jewelryLayout.getAttribute(
          "data-desktop-content"
        );
        if (originalContent) {
          jewelryLayout.innerHTML = originalContent;
        }
        jewelrySection.classList.remove("mobile-adapted");
      }
    }
  }

  // Переинициализация слайдера для мобильных устройств
  function initSliderForMobile(container) {
    const slider = container.querySelector(".about-slider");
    if (!slider) return;

    const slides = slider.querySelectorAll(".about-slide");
    const dots = slider.querySelectorAll(".slider-dot");
    const prevBtn = slider.querySelector(".slider-prev");
    const nextBtn = slider.querySelector(".slider-next");

    let currentSlide = 0;
    const totalSlides = slides.length;

    // Функция для отображения нужного слайда
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

    // Следующий слайд
    function nextSlide() {
      showSlide(currentSlide + 1);
    }

    // Предыдущий слайд
    function prevSlide() {
      showSlide(currentSlide - 1);
    }

    // Удаляем старые обработчики, если они есть
    if (prevBtn) {
      const newPrevBtn = prevBtn.cloneNode(true);
      prevBtn.parentNode.replaceChild(newPrevBtn, prevBtn);
      newPrevBtn.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        prevSlide();
      });
    }

    if (nextBtn) {
      const newNextBtn = nextBtn.cloneNode(true);
      nextBtn.parentNode.replaceChild(newNextBtn, nextBtn);
      newNextBtn.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        nextSlide();
      });
    }

    // Добавляем обработчики на точки
    dots.forEach((dot, index) => {
      const newDot = dot.cloneNode(true);
      dot.parentNode.replaceChild(newDot, dot);
      newDot.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        showSlide(index);
      });
    });

    // Устанавливаем начальный слайд
    showSlide(0);

    // Добавляем свайпы для мобильной версии
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
      "touchend",
      function (e) {
        touchEndX = e.changedTouches[0].clientX;
        const swipeDistance = touchStartX - touchEndX;

        if (Math.abs(swipeDistance) > minSwipeDistance) {
          if (swipeDistance > 0) {
            // Свайп влево - следующий слайд
            nextSlide();
          } else {
            // Свайп вправо - предыдущий слайд
            prevSlide();
          }
        }
      },
      { passive: true }
    );
  }

  // Функция для исправления скролла в мобильных секциях "Партнерам" и "Консультация"
  function fixMobileSectionsScroll() {
    if (window.innerWidth <= 768) {
      const partnerSection = document.querySelector(".partner-section");
      const contactsSection = document.querySelector(".contacts-section");

      // Добавляем обработчик для секции "Партнерам"
      if (partnerSection) {
        partnerSection.addEventListener(
          "wheel",
          function (e) {
            const { scrollTop, scrollHeight, clientHeight } = this;

            // Если пользователь скроллит вверх и контент уже в самом верху
            if (e.deltaY < 0 && scrollTop === 0) {
              e.stopPropagation();
              e.preventDefault();
            }

            // Если пользователь скроллит вниз и контент уже в самом низу
            if (e.deltaY > 0 && scrollTop + clientHeight >= scrollHeight - 1) {
              e.stopPropagation();
              e.preventDefault();
            }
          },
          { passive: false }
        );

        // Добавляем обработчик для предотвращения переполнения скролла на сенсорных устройствах
        partnerSection.addEventListener(
          "touchstart",
          function (e) {
            this.startY = e.touches[0].clientY;
          },
          { passive: false }
        );

        partnerSection.addEventListener(
          "touchmove",
          function (e) {
            const { scrollTop, scrollHeight, clientHeight } = this;
            const currentY = e.touches[0].clientY;
            const touchDirection = this.startY - currentY;

            // Если пользователь скроллит вверх и контент уже в самом верху
            if (touchDirection < 0 && scrollTop <= 0) {
              e.preventDefault();
            }

            // Если пользователь скроллит вниз и контент уже в самом низу
            if (
              touchDirection > 0 &&
              scrollTop + clientHeight >= scrollHeight - 1
            ) {
              e.preventDefault();
            }
          },
          { passive: false }
        );
      }

      // Добавляем обработчик для секции "Консультация"
      if (contactsSection) {
        contactsSection.addEventListener(
          "wheel",
          function (e) {
            const { scrollTop, scrollHeight, clientHeight } = this;

            // Если пользователь скроллит вверх и контент уже в самом верху
            if (e.deltaY < 0 && scrollTop === 0) {
              e.stopPropagation();
              e.preventDefault();
            }

            // Если пользователь скроллит вниз и контент уже в самом низу
            if (e.deltaY > 0 && scrollTop + clientHeight >= scrollHeight - 1) {
              e.stopPropagation();
              e.preventDefault();
            }
          },
          { passive: false }
        );

        // Добавляем обработчик для предотвращения переполнения скролла на сенсорных устройствах
        contactsSection.addEventListener(
          "touchstart",
          function (e) {
            this.startY = e.touches[0].clientY;
          },
          { passive: false }
        );

        contactsSection.addEventListener(
          "touchmove",
          function (e) {
            const { scrollTop, scrollHeight, clientHeight } = this;
            const currentY = e.touches[0].clientY;
            const touchDirection = this.startY - currentY;

            // Если пользователь скроллит вверх и контент уже в самом верху
            if (touchDirection < 0 && scrollTop <= 0) {
              e.preventDefault();
            }

            // Если пользователь скроллит вниз и контент уже в самом низу
            if (
              touchDirection > 0 &&
              scrollTop + clientHeight >= scrollHeight - 1
            ) {
              e.preventDefault();
            }
          },
          { passive: false }
        );
      }
    }
  }

  // Запускаем исправления скролла после загрузки DOM
  document.addEventListener("DOMContentLoaded", function () {
    adaptJewelrySectionForMobile();
    fixMobileSectionsScroll();

    // Добавляем обработчик изменения размера окна с дебаунсом
    let resizeTimer;
    window.addEventListener("resize", function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () {
        adaptJewelrySectionForMobile();
        fixMobileSectionsScroll();
      }, 250);
    });
  });

  // Модифицируем функции перехода по секциям для мобильных устройств
  // Оборачиваем в функцию для предотвращения ошибок с дублированием переменных
  (function () {
    // Переопределение функции goToPartnerSection для мобильной версии
    const oldGoToPartnerSection = window.goToPartnerSection;
    window.goToPartnerSection = function () {
      oldGoToPartnerSection.call(this);

      if (window.innerWidth <= 768) {
        const partnerSection = document.querySelector(".partner-section");
        if (partnerSection) {
          // Устанавливаем скролл в начало при переходе на секцию
          partnerSection.scrollTop = 0;
        }
      }
    };

    // Переопределение функции goToContactsSection для мобильной версии
    const oldGoToContactsSection = window.goToContactsSection;
    window.goToContactsSection = function () {
      oldGoToContactsSection.call(this);

      if (window.innerWidth <= 768) {
        const contactsSection = document.querySelector(".contacts-section");
        if (contactsSection) {
          // Устанавливаем скролл в начало при переходе на секцию
          contactsSection.scrollTop = 0;
        }
      }
    };
  })();
});
