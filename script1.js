function changeItem1() {
    document.getElementById('hat1').style.backgroundColor = '#d02184';
    document.getElementById('lowertext1').style.textDecoration ='underline';
    document.getElementById('hat1').style.color ='white';
    document.getElementById('money1').style.color ='white';
  }// функция, которая сработает при наведении.
  function rechangeItem1() {
    document.getElementById('hat1').style.backgroundColor = '#f4fafa';
    document.getElementById('lowertext1').style.textDecoration ='none';
    document.getElementById('hat1').style.color ='#404f54';
    document.getElementById('money1').style.color ='#d02184';
  }// процесс происходящий при отводе курсора.
  function changeItem2() {
    document.getElementById('hat2').style.backgroundColor = '#d02184';
    document.getElementById('lowertext2').style.textDecoration ='underline';
    document.getElementById('hat2').style.color ='white';
    document.getElementById('money2').style.color ='white';
  }// функция, которая сработает при наведении.
  function rechangeItem2() {
    document.getElementById('hat2').style.backgroundColor = '#f4fafa';
    document.getElementById('lowertext2').style.textDecoration ='none';
    document.getElementById('hat2').style.color ='#404f54';
    document.getElementById('money2').style.color ='#d02184';
  }// процесс происходящий при отводе курсора.
  function changeItem3() {
    document.getElementById('hat3').style.backgroundColor = '#d02184';
    document.getElementById('lowertext3').style.textDecoration ='underline';
    document.getElementById('hat3').style.color ='white';
    document.getElementById('money3').style.color ='white';
  }// функция, которая сработает при наведении.
  function rechangeItem3() {
    document.getElementById('hat3').style.backgroundColor = '#f4fafa';
    document.getElementById('lowertext3').style.textDecoration ='none';
    document.getElementById('hat3').style.color ='#404f54';
    document.getElementById('money3').style.color ='#d02184';
  }// процесс происходящий при отводе курсора.



  //для границ и теней в 5 секторе
  function changeItem51() {
    document.getElementById('bord1').style.backgroundColor = 'white';
    document.getElementById('bord5').style.backgroundColor = 'white';
    document.getElementById('shadowshow1').style.boxShadow = '0px 5px 11px #b9bebf';
  }// функция, которая сработает при наведении.
  function rechangeItem51() {
    document.getElementById('bord1').style.backgroundColor = '#dddddd';
    document.getElementById('bord5').style.backgroundColor = '#dddddd';
    document.getElementById('shadowshow1').style.boxShadow = 'none';
  }// процесс происходящий при отводе курсора.
  function changeItem52() {
    document.getElementById('bord1').style.backgroundColor = 'white';
    document.getElementById('bord2').style.backgroundColor = 'white';
    document.getElementById('bord6').style.backgroundColor = 'white';
    document.getElementById('shadowshow2').style.boxShadow = '0px 5px 11px #b9bebf';
  }// функция, которая сработает при наведении.
  function rechangeItem52() {
    document.getElementById('bord1').style.backgroundColor = '#dddddd';
    document.getElementById('bord2').style.backgroundColor = '#dddddd';
    document.getElementById('bord6').style.backgroundColor = '#dddddd';
    document.getElementById('shadowshow2').style.boxShadow = 'none';
  }// процесс происходящий при отводе курсора.
  function changeItem53() {
    document.getElementById('bord2').style.backgroundColor = 'white';
    document.getElementById('bord7').style.backgroundColor = 'white';
    document.getElementById('shadowshow3').style.boxShadow = '0px 5px 11px #b9bebf';
  }// функция, которая сработает при наведении.
  function rechangeItem53() {
    document.getElementById('bord2').style.backgroundColor = '#dddddd';
    document.getElementById('bord7').style.backgroundColor = '#dddddd';
    document.getElementById('shadowshow3').style.boxShadow = 'none';
  }// процесс происходящий при отводе курсора.
  function changeItem54() {
    document.getElementById('bord3').style.backgroundColor = 'white';
    document.getElementById('bord5').style.backgroundColor = 'white';
    document.getElementById('shadowshow4').style.boxShadow = '0px 5px 11px #b9bebf';
  }// функция, которая сработает при наведении.
  function rechangeItem54() {
    document.getElementById('bord3').style.backgroundColor = '#dddddd';
    document.getElementById('bord5').style.backgroundColor = '#dddddd';
    document.getElementById('shadowshow4').style.boxShadow = 'none';
  }// процесс происходящий при отводе курсора.
  function changeItem55() {
    document.getElementById('bord3').style.backgroundColor = 'white';
    document.getElementById('bord4').style.backgroundColor = 'white';
    document.getElementById('bord6').style.backgroundColor = 'white';
    document.getElementById('shadowshow5').style.boxShadow = '0px 5px 11px #b9bebf';
  }// функция, которая сработает при наведении.
  function rechangeItem55() {
    document.getElementById('bord3').style.backgroundColor = '#dddddd';
    document.getElementById('bord4').style.backgroundColor = '#dddddd';
    document.getElementById('bord6').style.backgroundColor = '#dddddd';
    document.getElementById('shadowshow5').style.boxShadow = 'none';
  }// процесс происходящий при отводе курсора.
  function changeItem56() {
    document.getElementById('bord4').style.backgroundColor = 'white';
    document.getElementById('bord7').style.backgroundColor = 'white';
    document.getElementById('shadowshow6').style.boxShadow = '0px 5px 11px #b9bebf';
  }// функция, которая сработает при наведении.
  function rechangeItem56() {
    document.getElementById('bord4').style.backgroundColor = '#dddddd';
    document.getElementById('bord7').style.backgroundColor = '#dddddd';
    document.getElementById('shadowshow6').style.boxShadow = 'none';
  }// процесс происходящий при отводе курсора.


  //бургер меню
menuBtn = document.getElementById('menuBtn');
menuContainer = document.getElementById('menuContainer');
 
menuIconClosed = "menu-icon closed"; //class name for closed button
menuIconOpened = "menu-icon opened"; //class name for opened button
menuContClosed = "menu-container closed"; //class name for closed menu
menuContOpened = "menu-container opened"; //class name for opened menu
 
menuBtn.onclick = function() {
  if (menuBtn.className == menuIconClosed) {
    menuBtn.className = menuIconOpened;
    menuContainer.className = menuContOpened;
  } else if (menuBtn.className == menuIconOpened) {
    menuBtn.className = menuIconClosed;
    menuContainer.className = menuContClosed;
  }
}