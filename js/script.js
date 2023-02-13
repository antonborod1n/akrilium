/* document.addEventListener('DOMContentLoaded', function () {
    // modalImg
    const img = () => {
        function modalRew(triggerSection, btnClick, closeSelector) {
            const imgPopup = document.createElement('div');
            const imgPopupContent = document.createElement('div');
            const btnPopup = document.createElement('button');
            const bigImage = document.createElement('img');

            const portfolioSection = document.querySelector(triggerSection);
            const close = document.querySelector(closeSelector);

            imgPopup.classList.add('popup');
            btnPopup.classList.add('popup__close');
            imgPopupContent.classList.add('popup-content');

            btnPopup.innerText = 'x';

            portfolioSection.appendChild(imgPopup);
            imgPopup.appendChild(imgPopupContent);
            imgPopupContent.appendChild(bigImage);
            imgPopupContent.appendChild(btnPopup);

            imgPopup.style.justifyContent = 'center';
            imgPopup.style.alignItems = 'center';
            imgPopup.style.display = 'none';

            portfolioSection.addEventListener('click', (e) => {
                e.preventDefault();

                let target = e.target;

                if (target && target.classList.contains(btnClick)) {
                    imgPopup.style.display = 'flex';
                    const path = target.parentNode.getAttribute('href');
                    bigImage.setAttribute('src', path);

                    console.log(path);
                }

                if (target && target.matches('div.popup')) {
                    imgPopup.style.display = 'none';
                } else if (target && target.matches('button.popup__close')) {
                    imgPopup.style.display = 'none';
                }
            });
        }

        modalRew('.ark-resource__sertificat-box', '.ark-resource__sertificat-img', '.popup .popup__close');
    };

    img();
}) */