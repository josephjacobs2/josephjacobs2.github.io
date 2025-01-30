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
function calculatePerimeter() {
    let radius = Number(document.getElementById("RadiusInput").value);
    let perimeter = radius * 2 * Math.PI;
    document.getElementById("PerimeterTitle").innerHTML = "Perimeter = " + perimeter;
}
function calculateArea() {
    let radius = Number(document.getElementById("RadiusInput").value);
    let area = radius ** 2 * Math.PI;
    document.getElementById("AreaTitle").innerHTML = "Area = " + area;
}
function calculateVolume() {
    let radius = Number(document.getElementById("RadiusInput").value);
    let volume = radius ** 3 * Math.PI * (4.0 / 3.0);
    document.getElementById("VolumeTitle").innerHTML = "Volume = " + volume;
}