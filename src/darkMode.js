const darkModeButton = document.querySelector('.sidenav__list1')

// Dark Mode //
darkModeButton.addEventListener('click', () => {
    document.documentElement.classList.toggle('light-mode')
    darkModeButton.classList.toggle('moon')


});


