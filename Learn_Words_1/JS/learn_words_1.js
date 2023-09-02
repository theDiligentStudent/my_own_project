




// 2. access button elements
let button1 = getElement('button_for_word_1');
let button2 = getElement('button_for_word_2');
let button3 = getElement('button_for_word_3');
let button4 = getElement('button_for_word_4');
let button5 = getElement('button_for_word_5');
let button6 = getElement('button_for_word_6');
let button7 = getElement('button_for_word_7');
let button8 = getElement('button_for_word_8');
let button9 = getElement('button_for_word_9');
let button10 = getElement('button_for_word_10');



let arrayOfWords = [];
arrayOfWords.push('Is it possible (например - to write programs…)??');
arrayOfWords.push('Можно (что сделать....)?');

arrayOfWords.push('it leverages -- leverage');
arrayOfWords.push('он использует -- – использовать     система рычагов   действие рычага    усилие рычага      средство/способ для/ достижения цели    ');

arrayOfWords.push('to authenticate');
arrayOfWords.push('Удостоверять  Устанавливать подлинность');

arrayOfWords.push('popup – pop');
arrayOfWords.push('НЕожиданно возникнуть   всплывающий   выскакивающий кверху – в т.ч. – выстрел/ивать  возникнуть   Внезапно спросить    Огорошить вопросом      ПАПА папаша    Отрывистый звук    Внезапно     С шумом ');

arrayOfWords.push('To put it mildly');
arrayOfWords.push('Мягко говоря');


// let b1 = arrayOfWords[0];


// assign listeners to button elements
button1.addEventListener('click', onButtonWords1);
button2.addEventListener('click', onButtonWords2);
button3.addEventListener('click', onButtonWords3);
button4.addEventListener('click', onButtonWords4);
button5.addEventListener('click', onButtonWords5);
button6.addEventListener('click', onButtonWords6);
button7.addEventListener('click', onButtonWords7);
button8.addEventListener('click', onButtonWords8);
button9.addEventListener('click', onButtonWords9);
button10.addEventListener('click', onButtonWords10);


// assign command to listeners
function onButtonWords1() {
    window.alert(arrayOfWords[0]);
}
function onButtonWords2() {
    window.alert(arrayOfWords[1]);
}
function onButtonWords3() {
    window.alert(arrayOfWords[2]);
}
function onButtonWords4() {
    window.alert(arrayOfWords[3]);
}
function onButtonWords5() {
    window.alert(arrayOfWords[4]);
}
function onButtonWords6() {
    window.alert(arrayOfWords[5]);
}
function onButtonWords7() {
    window.alert(arrayOfWords[6]);
}
function onButtonWords8() {
    window.alert(arrayOfWords[7]);
}
function onButtonWords9() {
    window.alert(arrayOfWords[8]);
}
function onButtonWords10() {
    window.alert(arrayOfWords[9]);
}



// 1. Create function to get elements
function getElement(id) {
    let element = document.getElementById(id);
    return element;
} 






