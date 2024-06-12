document.addEventListener("DOMContentLoaded", function() {
  let hearts = document.querySelectorAll('.click');
  hearts.forEach(heart => {
    heart.addEventListener('click', function() {
      if (this.classList.contains('bx-heart')) {
        this.classList.remove('bx-heart');
        this.classList.add('bxs-heart');
      } else {
        this.classList.remove('bxs-heart');
        this.classList.add('bx-heart');
      }
    });
  });
});




document.addEventListener('DOMContentLoaded', () => {
  const menuItems = [
    { id: 'new-featured', panelId: 'panel-new-featured' },
    { id: 'men', panelId: 'panel-men' },
    { id: 'women', panelId: 'panel-women'},
    { id: 'kids', panelId: 'panel-kids'},
    { id: 'jordan', panelId: 'panel-jordan'},
    { id: 'sale', panelId: 'panel-sale'}
  ];

  menuItems.forEach(item => {
    const menuItem = document.getElementById(item.id);
    const panel = document.getElementById(item.panelId);

    
    function showPanel() {
    
      menuItems.forEach(i => {
        document.getElementById(i.panelId).classList.remove('visible');
      });
     
      panel.classList.add('visible');
    }

    menuItem.addEventListener('mouseenter', showPanel);
    panel.addEventListener('mouseenter', showPanel);

    menuItem.addEventListener('mouseleave', () => {
      setTimeout(() => {
        if (!panel.matches(':hover')) {
          panel.classList.remove('visible');
        }
      }, 500); // Подкорректируйте задержку при необходимости
    });

    panel.addEventListener('mouseleave', () => {
      setTimeout(() => {
        panel.classList.remove('visible');
      }, 500); // Подкорректируйте задержку при необходимости
    });
  });
});


document.addEventListener('DOMContentLoaded', function() {
  const accordions = document.querySelectorAll('.accordion');

  accordions.forEach((accordion) => {
    accordion.addEventListener('click', function() {
      const panel = this.nextElementSibling;
      const arrow = this.querySelector('.click2');
      
      panel.classList.toggle('expanded');
      
      if (panel.classList.contains('expanded')) {
        
        arrow.classList.remove('bx-down-arrow-alt');
        arrow.classList.add('bx-up-arrow-alt');
      } else {
        arrow.classList.remove('bx-up-arrow-alt');
        arrow.classList.add('bx-down-arrow-alt');
      }
    });
  });
});

const initSlider = () => {
  const imageList = document.querySelector(".slider-wrapper .image-list");
  const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
  const sliderScrollbar = document.querySelector(".container .slider-scrollbar");
  const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");
  const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;
  
  // Handle scrollbar thumb drag
  scrollbarThumb.addEventListener("mousedown", (e) => {
      const startX = e.clientX;
      const thumbPosition = scrollbarThumb.offsetLeft;
      const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;
      
      // Update thumb position on mouse move
      const handleMouseMove = (e) => {
          const deltaX = e.clientX - startX;
          const newThumbPosition = thumbPosition + deltaX;

          // Ensure the scrollbar thumb stays within bounds
          const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
          const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;
          
          scrollbarThumb.style.left = `${boundedPosition}px`;
          imageList.scrollLeft = scrollPosition;
      }

      // Remove event listeners on mouse up
      const handleMouseUp = () => {
          document.removeEventListener("mousemove", handleMouseMove);
          document.removeEventListener("mouseup", handleMouseUp);
      }

      // Add event listeners for drag interaction
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
  });

  // Slide images according to the slide button clicks
  slideButtons.forEach(button => {
      button.addEventListener("click", () => {
          const direction = button.id === "prev-slide" ? -1 : 1;
          const scrollAmount = imageList.clientWidth * direction;
          imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
      });
  });

   // Show or hide slide buttons based on scroll position
  const handleSlideButtons = () => {
      slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "flex";
      slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "flex";
  }

  // Update scrollbar thumb position based on image scroll
  const updateScrollThumbPosition = () => {
      const scrollPosition = imageList.scrollLeft;
      const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
      scrollbarThumb.style.left = `${thumbPosition}px`;
  }

  // Call these two functions when image list scrolls
  imageList.addEventListener("scroll", () => {
      updateScrollThumbPosition();
      handleSlideButtons();
  });
}

window.addEventListener("resize", initSlider);
window.addEventListener("load", initSlider);
const size = document.querySelectorAll('.size-block');

// Для каждого элемента добавляем обработчик события
size.forEach(grid => {
  grid.addEventListener('click', function() {
    // Удаляем класс 'active' у всех элементов
    
    // Добавляем класс 'active' нажатому элементу
    this.classList.toggle('active');
  });
});
const mobileclick = document.querySelector('.mobile');
const click = document.querySelector('.mobile-click');
const bootsmobile =document.querySelector('.boots')
const footer = document.getElementById('footer')
const closebar = document.querySelector('.close-bar')

click.addEventListener('click', function() {
  mobileclick.classList.toggle('active');
  bootsmobile.classList.toggle('active');
  footer.classList.toggle('active');
});

closebar.addEventListener('click', function(){
  mobileclick.classList.toggle('active');
  bootsmobile.classList.toggle('active');
  footer.classList.toggle('active');
});



const panel = document.getElementById('panel');
const closeButton = document.getElementById('closeButton');

// Функция для показа панели
function showPanel() {
    panel.style.display = 'block';
}

// Функция для скрытия панели
function hidePanel() {
    panel.style .display = 'none';
}

// Запуск функции showPanel каждую минуту
setInterval(showPanel, 50000); // 60000 милисекунд = 1 минута

// Обработчик события клика по кнопке закрытия
closeButton.addEventListener('click', hidePanel);

document.querySelector('.magasine').addEventListener('click', function() {
  document.querySelector('.panel-magazine').classList.toggle('active');
  document.querySelector('.overlay').classList.toggle('active');
  document.body.classList.toggle('overflow-hidden');
});
document.querySelector('.x1').addEventListener('click', function(){
  document.querySelector('.panel-magazine').classList.toggle('active');
  document.querySelector('.overlay').classList.toggle('active');
  document.body.classList.toggle('overflow-hidden');
})


document.addEventListener('DOMContentLoaded', function() {
  const colors = document.querySelectorAll('.color1, .multi');
  colors.forEach(color => {
      color.addEventListener('click', function() {
          this.classList.toggle('active');
      });
  });
});


document.addEventListener('DOMContentLoaded', function() {
  const mapInfoElements = document.querySelectorAll('.map-info');

  mapInfoElements.forEach(function(mapInfoElement) {
      mapInfoElement.addEventListener('click', function() {
          mapInfoElements.forEach(function(element) {
              element.classList.remove('active');
          });
          this.classList.add('active');
      });
  });
});