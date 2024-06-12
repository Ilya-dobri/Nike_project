const bigPhoto = document.querySelector('.big-fhoto');
const miniPhotos = document.querySelectorAll('.left-fh-mini img');
miniPhotos.forEach(miniPhoto => {
  miniPhoto.addEventListener('mouseover', function() {
    bigPhoto.innerHTML = '';
    const newImage = document.createElement('img');
    newImage.src = this.src;
    bigPhoto.appendChild(newImage);
  });
});

const items = document.querySelectorAll('.grid-item');
items.forEach(item => {
  item.addEventListener('click', function() {
    items.forEach(item => {
      item.classList.remove('active');
    });
    this.classList.add('active');
  });
});

document.getElementById('number-1_bottom').addEventListener('click', function() {
  document.getElementById('panel').classList.toggle('active');
  document.querySelector('.overlay').classList.toggle('active')
  document.querySelector('.buy-ponel').classList.toggle('active')
  document.getElementById('footer').classList.toggle('active')
});
document.querySelector('.x').addEventListener('click', function(){
  document.getElementById('panel').classList.remove('active');
  document.querySelector('.overlay').classList.remove('active');
  document.querySelector('.buy-ponel').classList.toggle('active')
  document.getElementById('footer').classList.toggle('active')
});



var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}
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



document.addEventListener("DOMContentLoaded", function() {
  let hearts = document.querySelectorAll('.number-2_bottom-panel') ;
  hearts.forEach(heart => {
    heart.addEventListener('click', function() {
      let icon = this.querySelector('i');
      if (icon.classList.contains('bx-heart')) {
        icon.classList.remove('bx-heart');
        icon.classList.add('bxs-heart');
      } else {
        icon.classList.remove('bxs-heart');
        icon.classList.add('bx-heart');
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  let hearts = document.querySelectorAll('.number-2_bottom') ;
  hearts.forEach(heart => {
    heart.addEventListener('click', function() {
      let icon = this.querySelector('i');
      if (icon.classList.contains('bx-heart')) {
        icon.classList.remove('bx-heart');
        icon.classList.add('bxs-heart');
      } else {
        icon.classList.remove('bxs-heart');
        icon.classList.add('bx-heart');
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  let hearts = document.querySelectorAll('.accordion');
  hearts.forEach(heart => {
    heart.addEventListener('click', function() {
      let icon = this.querySelector('i');
      if (icon.classList.contains('bx-down-arrow-alt')) {
        icon.classList.remove('bx-down-arrow-alt');
        icon.classList.add('bx-up-arrow-alt');
      } else {
        icon.classList.remove('bx-up-arrow-alt');
        icon.classList.add('bx-down-arrow-alt');
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

    // Функция для показа панели
    function showPanel() {
      // Сначала скрыть все панели
      menuItems.forEach(i => {
        document.getElementById(i.panelId).classList.remove('visible');
      });
      // Затем показать текущую панель
      panel.classList.add('visible');
    }

    menuItem.addEventListener('mouseenter', showPanel);
    panel.addEventListener('mouseenter', showPanel);

    menuItem.addEventListener('mouseleave', () => {
      setTimeout(() => {
        if (!panel.matches(':hover')) {
          panel.classList.remove('visible');
        }
      }, 300); // Подкорректируйте задержку при необходимости
    });

    panel.addEventListener('mouseleave', () => {
      setTimeout(() => {
        panel.classList.remove('visible');
      }, 300); // Подкорректируйте задержку при необходимости
    });
  });
});