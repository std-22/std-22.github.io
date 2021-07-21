var _i = 0;
var _wrongs = [
            'Сайт - самый первый проект студии, наша визитная карточка, наш ' + "<br>" + 'способ продемонстрировать миру на что мы способны.',
            'Telegram bot у нас в планах, мы давно присматриваемся к этой ' + "<br>" + 'инновационной площадке, но руки все никак не доходят(', 
            'Lama уже вышла в play market! А скоро на подходе еще и другие ' + "<br>" + 'приложения, обязательно следите за всеми новостями в нашей ' + "<br>" + 'группе в ВК или на нашем сайте.',
            'Если у вас есть среда разработки, установлен gradle и вы хотите ' + "<br>" + 'развернуть сервер на своем пк, то переходите на наш гитхаб, ' + "<br>" + 'music advisor в вашем полном распоряжении.'
        ];

function showResult(b) {
    var res = document.getElementById('info');
    if (b.classList.contains('planet_site')) {
        res.innerHTML = _wrongs[0];
    } else if (b.classList.contains('planet_tg_bot')) {
        res.innerHTML = _wrongs[1];
    } else if (b.classList.contains('planet_lama')) {
        res.innerHTML = _wrongs[2];
    } else if (b.classList.contains('planet_bot')) {
        res.innerHTML = _wrongs[3];
    }
}