//  Selezione degli elementi
const btn = document.querySelector("#btn-toggle")
const htmlEl = document.getElementsByTagName('html')[0]

//  Ottenimento preferenza del tema (se presente)
var currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null

if (currentTheme === null) {
    localStorage.setItem('theme', 'light')
} else if (currentTheme === 'light') {
    htmlEl.dataset.theme = 'light'
} else{
    htmlEl.dataset.theme = 'dark'
}

// Listen for a click on the button 
btn.addEventListener("click", function() {

    if (currentTheme === 'dark') {
        currentTheme = 'light'
    } else {
        currentTheme = 'dark'
    }

    updatePage()

});

function updatePage() {
    htmlEl.dataset.theme = currentTheme
    localStorage.setItem('theme', currentTheme)
}