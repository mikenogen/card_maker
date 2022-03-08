//Card Box
let card = document.getElementById(`card`)
//Text Button
let bdButton = document.getElementById(`bdButton`)
let cgButton = document.getElementById(`cgButton`)
let gwsButton = document.getElementById(`gwsButton`)
//Bg Color Button
let roseBgColor = document.getElementById(`roseBgColor`)
let greenBgColor = document.getElementById(`greenBgColor`)
let blueBgColor = document.getElementById(`blueBgColor`)
//Txt Color Button
let blackTxtColor = document.getElementById(`blackTxtColor`)
let redTxtColor = document.getElementById(`redTxtColor`)
let greenTxtColor = document.getElementById(`greenTxtColor`)
let blueTxtColor = document.getElementById(`blueTxtColor`)
//Font Size Button
let size40px = document.getElementById(`size40px`)
let size60px = document.getElementById(`size60px`)
let size80px = document.getElementById(`size80px`)
//Paragrah Size Text
let sizeParagraph = document.getElementById(`sizeParagraph`)
//Text Box
let textBox = document.getElementById(`textBox`)
//Color Picker
let backgroundColorPicker = document.getElementById(`backgroundColorPicker`)
//Text Color Picker
let textColorPicker = document.getElementById(`textColorPicker`)
//Font Size Slider
let fontSizeSlider = document.getElementById(`fontSizeSlider`)

//Text Buttons
bdButton.addEventListener(`click`, showBirthday)
cgButton.addEventListener(`click`, showCongratulation)
gwsButton.addEventListener(`click`, showGWS)
//Bg Color Buttons
roseBgColor.addEventListener(`click`, showRoseBg)
greenBgColor.addEventListener(`click`, showGreenBg)
blueBgColor.addEventListener(`click`, showBlueBg)
//Txt Color Buttons
redTxtColor.addEventListener(`click`, showRedTxt)
blackTxtColor.addEventListener(`click`, showBlackTxt)
greenTxtColor.addEventListener(`click`, showGreenTxt)
blueTxtColor.addEventListener(`click`, showBlueTxt)
//Font Size Buttons
size40px.addEventListener(`click`, show40px)
size60px.addEventListener(`click`, show60px)
size80px.addEventListener(`click`, show80px)
//Text Box
textBox.addEventListener(`input`, showText)
//Color Picker
backgroundColorPicker.addEventListener(`input`, showbackgroundColor)
//Text Color Picker
textColorPicker.addEventListener(`input`, showTextColor)
//Font Size Slider
fontSizeSlider.addEventListener(`input`, showFontSizeSlider)

//Text Functions
function showBirthday() {
    card.innerHTML = `Happy Birthday`
}
function showCongratulation() {
    card.innerHTML = `Congratulation`
}
function showGWS() {
    card.innerHTML = `Get Well Soon`
}
//Background Functions
function showRoseBg() {
    card.style.backgroundColor = `#ffe4e1`
}
function showGreenBg() {
    card.style.backgroundColor = `#00FF7F`
}
function showBlueBg() {
    card.style.backgroundColor = `#87ceeb`
}
//Text Color Functions
function showRedTxt() {
    card.style.color = 'red'
}
function showBlackTxt() {
    card.style.color = `black`
}
function showGreenTxt() {
    card.style.color = `green`
}
function showBlueTxt() {
    card.style.color = `blue`
}
//Font Size Functions
function show40px() {
    card.style.fontSize = `40px`
    sizeParagraph.innerHTML = `Font Size: 40 Pixels`
}
function show60px() {
    card.style.fontSize = `60px`
    sizeParagraph.innerHTML = `Font Size: 60 Pixels`
}
function show80px() {
    card.style.fontSize = `80px`
    sizeParagraph.innerHTML = `Font Size: 80 Pixels`
}
//Text Box Function
function showText() {
    card.innerHTML = textBox.value
  }
//Color Picker Function
function showbackgroundColor() {
    card.style.backgroundColor = backgroundColorPicker.value
}
//Text Color Picker Function
function showTextColor() {
    card.style.color = textColorPicker.value
}
//Font Size Slider Function
function showFontSizeSlider() {
    card.style.fontSize = `${fontSizeSlider.value}px`
    sizeParagraph.innerHTML = `Selected font size: ${fontSizeSlider.value} pixels`
}