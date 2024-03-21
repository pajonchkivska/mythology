let burgerMenu = document.querySelector('.burger-menu');
        let menu = document.querySelector('.menu');
        burgerMenu.addEventListener('click', () => {
          menu.classList.toggle('is-active');
          burgerMenu.classList.toggle('is-active');
        })