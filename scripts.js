function setLightTheme() {
    document.getElementById('ButtonsStatus').innerHTML = "Theme Buttons - Currently Light";
    document.getElementById('body').style = "background-color: #FFFFFF";
}
function setDarkTheme() {
    document.getElementById('ButtonsStatus').innerHTML = "Theme Buttons - Currently Dark";
    document.getElementById('body').style = "background-color: #000000";
}
function setDefaultTheme() {
    document.getElementById('ButtonsStatus').innerHTML = "Theme Buttons - Currently Default";
    document.getElementById('body').style = "background-color: lightblue";
}