//var WebApp = window.Telegram.WebApp;
// WebApp.expand()
// WebApp.MainButton.textColor = "#FFFFFF";
// WebApp.MainButton.color = "#2cab37";
// import "style.css";

function init(){
    let map = new ymaps.Map('map-test',{
        center: [55.06855895549169,67.89210412689205],
        zoom: 14,
        // controls: ['routePanelControl']
    });
    map.controls.remove('trafficControl'); // удаляем контроль трафика
    map.controls.remove('typeSelector'); // удаляем тип
    map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    map.controls.remove('zoomControl'); // удаляем контрол зуммирования
    map.controls.remove('rulerControl'); // удаляем контрол правил
    map.controls.remove('searchControl'); // удаляем контрол правил
    
    // map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
    // let control = map.controls.get('routePanelControl');

    // control.routePanel.state.set({
    //     type: 'auto',
    //     from: 'Петухово улица Мозолева 15',
    //     to: 'Петухово улица Советская 86'
    // });

    // control.routePanel.options.set({
    //     types: {
    //         auto: true
    //     }
    // });
    // let placemark = new ymaps.Placemark(map.getCenter(),{}, {
    //   iconColor: '#fdce69'
    // });
    
    // map.geoObjects.add(placemark);
    
}
ymaps.ready(init);

let contentView = document.getElementById("menu-text-center");
let contentclick = document.getElementById("decor-rect");

let mouseX,
  initialX = 0;
let isSwiped;

let events = {
  mouse:{
    down: "mousedown",
    move: "mousemove",
    up: "mouseup",
  },
  touch: {
    down: "touchstart",
    move: "touchmove",
    up: "touchend",
  },
};

let deviceType = "";

const isTouchDevice = () => {
  try {
    document.createEvent("TouchEvent");
    deviceType = "touch";
    return true;
  } catch (e) {
    deviceType = "mouse";
    return false;
  }
};

var touchStart = null; //Точка начала касания
var touchPosition = null; //Текущая позиция
const sensitivity = 20;

//Перехватываем события
contentView.addEventListener("touchstart", function (e) { TouchStart(e); }); //Начало касания
contentView.addEventListener("touchmove", function (e) { TouchMove(e); }); //Движение пальцем по экрану
//Пользователь отпустил экран
contentView.addEventListener("touchend", function (e) { TouchEnd(e, "green"); });

function TouchStart(e)
{
    //Получаем текущую позицию касания
    touchStart = { x: e.changedTouches[0].clientX, y: e.changedTouches[0].clientY };
    touchPosition = { x: touchStart.x, y: touchStart.y };
}

function TouchMove(e)
{
    //Получаем новую позицию
    touchPosition = { x: e.changedTouches[0].clientX, y: e.changedTouches[0].clientY };
}

function TouchEnd(e, color)
{
    CheckAction(); //Определяем, какой жест совершил пользователь

    //Очищаем позиции
    touchStart = null;
    touchPosition = null;
}

function CheckAction() {
  var d = //Получаем расстояния от начальной до конечной точек по обеим осям
  {
    x: touchStart.x - touchPosition.x,
    y: touchStart.y - touchPosition.y
  };
  if (Math.abs(d.y) > sensitivity) {
    if (d.y > 0) //Свайп вверх
    {
      contentView.style.transform = 'translateY(0)';
    }
    else //Свайп вниз
    {
      contentView.style.transform = 'translateY(75%)';
    }
  }
}
// function swipeUp() {
//   contentView.classList.toggle("menu-text-hidden");
// }

// function swipeDown() {
//   contentView.classList.toggle("menu-text");
// }
// contentclick.addEventListener("click", function(evt) {
//   evt.preventDefault(); // отмена стандартного поведения браузера
//   contentView.classList.toggle("menu-text-hidden");
// });