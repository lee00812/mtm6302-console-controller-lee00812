const h1 = document.querySelector('h1');

function setTitle(newTitle) {
  h1.textContent = newTitle;
}

const p = document.querySelector('p')

function setDescription(text) {
    p.textContent = text
}

const body = document.querySelector('body');

function setBackgroundColor(newBackgroundColor) {
    body.style.backgroundColor = newBackgroundColor
}

function setFontColor(newFontColor) {
    body.style.color = newFontColor
}

function setTheme(newTheme) {
    
    if ( newTheme == 'dark-theme') {

        body.classList.add('dark-theme');
        body.classList.remove('light-theme');

    } else if ( newTheme == 'light-theme' ) {

        body.classList.add('light-theme');
        body.classList.remove('dark-theme');
    }
}
    
