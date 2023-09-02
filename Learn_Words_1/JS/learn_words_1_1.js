// 20/06/23
// Делаю Рефакторинг К.-а предыдущей версии файла
// А вообще -- делаю свою  программку по изучению англ слов

// Получаю Доступ к Массиву Кнопок по Классу
let getButtonsArray = document.getElementsByClassName('button_for_word');

//    Достаём Внутренность/Содержимое (каждой) Кнопки
function getInnerHtml(eventObject) {
  let innerButtons = eventObject.currentTarget.innerHTML;
  // let innerButtons = eventObject.currentTarget.textContent;
  onButtonsClick(innerButtons);
}

// Пишем Ф.-ю Действия -- с услови/ем/ями --- для каждой из 10-ти кнопок
function onButtonsClick(innerButtons) {
  // Засовываем Внутрь этой Ф.-и МАССИВ с данными соответствующими каждой кнопке
  let arrayOfWords = [];

  arrayOfWords.push('before');
   
  arrayOfWords.push(
    'до   предже чем   перед   выше    впереди '
  );

  arrayOfWords.push('Cream your hand?');
  arrayOfWords.push('намазать руку?');

  arrayOfWords.push('Resident');     
  arrayOfWords.push('постоянный/житель  постоянный жилец    проживающий   постоялец    постоянно живущий    неперелётная птица     присущий');            

  arrayOfWords.push('Entity');   
  arrayOfWords.push(
    'Объект   Сущ/ность/ество   Организация   организм    Вещь   бытие     Нечто реально существующее '
  );
  arrayOfWords.push('Penetrate');  
  arrayOfWords.push('Проникать/внутрь   вникать   Про/В/ходить    Пронизывать    Просачиваться   Проходить сквозь        постигать  ');

  if (innerButtons === 'English word/expression 1') {
    window.alert(arrayOfWords[0]);
  } else if (innerButtons === 'Russian Word/Expression 1') {
    window.alert(arrayOfWords[1]);
  } else if (innerButtons === 'English word/expression 2') {
    window.alert(arrayOfWords[2]);
  } else if (innerButtons === 'Russian Word/Expression 2') {
    window.alert(arrayOfWords[3]);
  } else if (innerButtons === 'English word/expression 3') {
    window.alert(arrayOfWords[4]);
  } else if (innerButtons === 'Russian Word/Expression 3') {
    window.alert(arrayOfWords[5]);
  } else if (innerButtons === 'English word/expression 4') {
    window.alert(arrayOfWords[6]);
  } else if (innerButtons === 'Russian Word/Expression 4') {
    window.alert(arrayOfWords[7]);
  } else if (innerButtons === 'English word/expression 5') {
    window.alert(arrayOfWords[8]);
  } else {
    window.alert(arrayOfWords[9]);
  }
}

//    Присваиваю Каждой Кнопке Слушателя --- всего Тремя строками --- через ЦИКЛ
for (i = 0; i < getButtonsArray.length; i++) {
  getButtonsArray[i].addEventListener('click', getInnerHtml);
}




//   ДАННЫЕ ИЗ МАССИВА, КОТОРЫЕ УЖЕ ИСПОЛЬЗОВАЛИСЬ
//      (на всякий случай):

// arrayOfWords.push('Recognition');
// arrayOfWords.push('Распознавание  Узнавание  Официальное/Признание   Одобрение');

// arrayOfWords.push('Gospel');
// arrayOfWords.push('Евангелие  Проповедь     Убеждения Взгляды');

// arrayOfWords.push('Ownership');
// arrayOfWords.push('Владение   Собственность  Право собственности');

// Is it possible (например - to write programs…)??
// Можно (что сделать....)?

// it leverages -- leverage
// он использует -- – использовать     система рычагов   действие рычага    усилие рычага      средство/способ для/ достижения цели

// to authenticate
// Удостоверять  Устанавливать подлинность

// it could be due (to)
// это может быть Из-За

// counteroffensive
// контрНаступление

// Singly
// поодиночке  отдельно самостоятельно    без помощи других 

// SCOPE
// ОБЛАСТЬ ВИДИМОСТИ    границы пределы   рамки сфера   объём    возможности масштаб размах     сфера действия/деятельности     размах простор    цель   контекст  предел  кругозор   компетенция   намерение

// Convert
// превращать    переделывать  реконструировать   перестраивать     переводить             обращать/в свою пользу/в другую веру   присваивать в свою пользу

// popup – pop
// НЕожиданно возникнуть   всплывающий   выскакивающий кверху – в т.ч. – выстрел/ивать  возникнуть   Внезапно спросить    Огорошить вопросом      ПАПА папаша    Отрывистый звук    Внезапно     С шумом 

// To put it mildly
// Мягко говоря

// Shorthand
// Сокращённый    Сокращённое (З. - например)

// In Contrast
// В отличие   Напротив