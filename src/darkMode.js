const darkModeButton = document.querySelector('.sidenav__list1')

// Dark Mode //
darkModeButton.addEventListener('click', () => {
    document.documentElement.classList.toggle('light-mode')
    darkModeButton.classList.toggle('moon')


});


/*



       <div class="sidenav__list2 sidenav__icons"></div>
            <div class="sidenav__list3 sidenav__icons"></div>
            <div class="sidenav__list4 sidenav__icons"></div>
            <div class="sidenav__list5 sidenav__icons"></div>    














*/