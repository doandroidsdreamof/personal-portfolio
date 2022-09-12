const darkModeButton = document.querySelector('.sidenav__list0')


darkModeButton.addEventListener('click', () => {
    document.documentElement.classList.toggle('light-mode')
    darkModeButton.classList.toggle('moon')
    

});


