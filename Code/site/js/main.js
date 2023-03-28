function buttonmenu() {
    var menu = document.querySelector('div.menu');

    if(menu.style.display === 'flex') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'flex'
    }
}

function buttoninsta() {
    window.open('https://www.instagram.com/starbucks/', '_blank');
}