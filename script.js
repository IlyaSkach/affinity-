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

  // Функция переключения меню
  function toggleMenu() {
    const isOpening = !mainNav.classList.contains("active");

    burgerMenu.classList.toggle("active");
    mainNav.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("no-scroll");

    // Анимация появления пунктов меню
    if (isOpening) {
      mainNav.style.display = "flex";
      requestAnimationFrame(() => {
        navItems.forEach((item, index) => {
          setTimeout(() => {
            item.style.opacity = "1";
            item.style.transform = "translateX(0)";
          }, 100 + index * 50);
        });
      });
    } else {
      navItems.forEach((item) => {
        item.style.opacity = "0";
        item.style.transform = "translateX(20px)";
      });
      setTimeout(() => {
        if (!mainNav.classList.contains("active")) {
          mainNav.style.display = "none";
        }
      }, 300);
    }
  }

  // Обработчики для бургер-меню
  burgerMenu.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleMenu();
  });

  overlay.addEventListener("click", (e) => {
    e.preventDefault();
    if (mainNav.classList.contains("active")) {
      toggleMenu();
    }
  });

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

  // Обработка клика по пункту "Производство"
  navItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      if (item.textContent.includes("Производство")) {
        e.preventDefault();

        // Закрываем мобильное меню перед открытием FAQ
        if (window.innerWidth <= 768 && mainNav.classList.contains("active")) {
          toggleMenu();
        }

        // Очищаем контент
        contentArea.innerHTML = "";

        // Создаем кнопку "Назад"
        const backButton = document.createElement("button");
        backButton.classList.add("back-button");
        backButton.textContent = "Назад";

        // Создаем секцию FAQ
        const faqSection = document.createElement("section");
        faqSection.classList.add("faq-section");

        const faqGrid = document.createElement("div");
        faqGrid.classList.add("faq-grid");

        // Данные для FAQ
        const faqItems = [
          {
            question: "Материалы",
            answer:
              "Мы работаем с драгоценными металлами и любыми видами камней. К выбору материала мы подходим с особым вниманием, чтобы обеспечить качество, которого ожидают наши клиенты.",
          },
          {
            question: "Этапы производства",
            answer: `<ul class="faq-list">
                <li>Дизайн</li>
                <li>3D моделирование</li>
                <li>Закупка метала и камней</li>
                <li>Отлив металла</li>
                <li>Обработка изделия</li>
                <li>Контроль качества</li>
                <li>Упаковка</li>
                <li>Отправка</li>
              </ul>`,
          },
          {
            question: "Сроки изготовления",
            answer:
              "Каждый проект уникален, поэтому при создании дизайна мы сможем оценить сроки изготовления. Чаще всего это не более 2 недель, возможно изготовление партиями, срок обсуждается дополнительно в зависимости от загруженности производства.<br><br>При необходимости, срок возможно сократить.",
          },
          {
            question: "Какая у вас минимальная партия?",
            answer:
              "Объем партии зависит от потребности бизнеса, бюджета и сложности производства. Так как наше ценообразование зависит от дизайна, то минимальную партию сможем обсудить на этапе проектирования изделия.<br><br>Ограничений со своей стороны не ставим, от 1 штуки.",
          },
          {
            question: "Что такое сервис и как он выглядит?",
            answer:
              "Мы предоставляем сервисное обслуживание изделий при Партнерской программе на срок действия Партнерства. При формате Сотрудничества оказывает сервисное обслуживание в рамках 14 дней.<br><br>Так же возможно заключить договор на дополнительное обслуживание, если срок основного договора истек.",
          },
          {
            question: "Как осуществляется доставка?",
            answer: `Возможны 2 варианта доставки:<br><br>
              <ul class="faq-list">
                <li>До вашего магазина или склада, откуда вы самостоятельно осуществляете логистику изделий (Более актуально при офлайн продажах, позволяет не ожидать изготовления каждого изделия)</li>
                <li>До конечного Клиента (Более актуально при онлайн продажах, особенно на этапе Пилота, позволяет сократить затраты на производство и хранение)</li>
              </ul>`,
          },
        ];

        // Создаем карточки FAQ
        faqItems.forEach((item, index) => {
          const faqItem = document.createElement("div");
          faqItem.classList.add("faq-item");
          faqItem.style.setProperty("--item-index", index);
          faqItem.innerHTML = `
            <h3 class="faq-question">${item.question}</h3>
            <div class="faq-answer">${item.answer}</div>
          `;
          faqGrid.appendChild(faqItem);
        });

        // Добавляем элементы на страницу
        faqSection.appendChild(faqGrid);
        contentArea.appendChild(backButton);
        contentArea.appendChild(faqSection);

        // Показываем FAQ с анимацией
        setTimeout(() => {
          contentArea.classList.add("active");
          setTimeout(() => {
            backButton.classList.add("visible");
            faqSection.classList.add("visible");
          }, 100);
        }, 50);

        // Обработчик для кнопки назад
        backButton.addEventListener("click", () => {
          backButton.classList.remove("visible");
          faqSection.classList.remove("visible");

          setTimeout(() => {
            contentArea.classList.remove("active");
            setTimeout(() => {
              contentArea.innerHTML = "";
            }, 600);
          }, 300);
        });
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
});
