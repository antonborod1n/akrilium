(function () {
    var elemTarget;
    // создаём модальное окно
    var modal = $modal({
        title: 'Сертификат соответствия',
        content: '<img src="" alt="" style="display: block; height: auto; max-width: 100%;">',

    });
    // при клике на документ
    document.addEventListener('click', function (e) {
        // если мы кликнули на измобржение расположенное в .img__items, то...
        if (e.target.matches('.img__items img')) {
            elemTarget = e.target;
            // устанавливаем модальному окну title
            modal.setContent('<div style="flex: 1 0 60%;"><img src="' + e.target.src + '" alt="' + e.target.alt + '" style="display: block; height: auto; max-width: 100%; margin: 0 auto;"></div><div style="flex: 1 0 40%;">');
            modal.show();
        } else if (e.target.dataset.handler === 'modalHandlerCancel') {
            modal.hide();
        } else if (e.target.dataset.handler === 'modalHandlerDelete') {
            elemTarget.parentElement.removeChild(elemTarget);
            modal.hide();
        }
    });
})();