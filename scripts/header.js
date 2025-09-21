var lastScrollPosition = window.pageYOffset;

window.onscroll = function () {
    var navbar = document.querySelector(".navbar");
    var currentScrollPosition = window.pageYOffset;
    var menu = document.querySelector(".menu");

    if (!menu.classList.contains("mobile_menu")) {
        if (currentScrollPosition > lastScrollPosition) {
            navbar.classList.add("hidden");
        } else {
            navbar.classList.remove("hidden");
            if (currentScrollPosition === 0) {
                navbar.style.backgroundColor = '';
                navbar.style.boxShadow = '';
            } else {
                navbar.style.backgroundColor = '#130f40';
                navbar.style.boxShadow = '0px 0px 15px 5px rgba(0, 0, 0, 0.5)';
            }
        }
    }

    lastScrollPosition = currentScrollPosition;
}

function menu_mobile() {
    const btn_menu = document.querySelector(".btn_menu");
    const menu = document.querySelector(".menu");

    btn_menu.addEventListener('click', () => {
        menu.classList.toggle('mobile_menu');
    });
}

menu_mobile();



function set_color_mouseover(element) {
    if (window.innerWidth >= 850)
        element.style.color = '#F8DE22';
};

function set_color_mouseout(element) {
    if (window.innerWidth >= 850)
        element.style.color = 'white';
};

var home = document.querySelector('.home a');

home.addEventListener('mouseout', function () {
    set_color_mouseout(home);
});
home.addEventListener('mouseover', function () {
    set_color_mouseover(home);
});

var about = document.querySelector('.about a');

about.addEventListener('mouseout', function () {
    set_color_mouseout(about);
});
about.addEventListener('mouseover', function () {
    set_color_mouseover(about);
});

var projects = document.querySelector('.projects a');

projects.addEventListener('mouseout', function () {
    set_color_mouseout(projects);
});
projects.addEventListener('mouseover', function () {
    set_color_mouseover(projects);
});

var skill = document.querySelector('.skills a');

skill.addEventListener('mouseout', function () {
    set_color_mouseout(skill);
});
skill.addEventListener('mouseover', function () {
    set_color_mouseover(skill);
});

var experiences = document.querySelector('.experiences a');

experiences.addEventListener('mouseout', function () {
    set_color_mouseout(experiences);
});
skill.addEventListener('mouseover', function () {
    set_color_mouseover(experiences);
});

var contact = document.querySelector('.contact a');

contact.addEventListener('mouseout', function () {
    set_color_mouseout(contact);
});
contact.addEventListener('mouseover', function () {
    set_color_mouseover(contact);
});

var license = document.querySelector('#license');

license.addEventListener('mouseout', function () {
    license.style.textDecoration = "none";
});
license.addEventListener('mouseover', function () {
    license.style.textDecoration = "underline";
});