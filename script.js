// let tg = window.Telegram.WebApp;
// tg.expand()
// tg.MainButton.textColor = "#FFFFFF";
// tg.MainButton.color = "#2cab37";

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
    // let placemark = new ymaps.Placemark([55.05382432494923,67.87319124699712],{}, {});
    
    // map.geoObjects.add(placemark);
}
ymaps.ready(init);