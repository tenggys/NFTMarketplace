async function fetchata() {
    try {
        const response = await fetch ('artistCard.json');

        if (!response) {
            throw new Error('Не отображается JSON');
        } 
        const data = await response.json();
        const artistCard = document.querySelector('.artist__card');

        data.forEach(({id, img, alt, figure, figureAlt, who, name}) => {
            const cardEl = `
                <div id="${id}" class="artist__card_item">
                    <figure class="figure">
                        <img src="${figure}" alt="${figureAlt}">
                        <div class="figure__info">
                            <p class="figure__info_who">${who}</p>
                            <p class="figure__info_name">${name}</p>
                        </div>
                    </figure>
                    <img class="artist__card_item-img" src="${img}" alt="${alt}">
                </div>
            `;
            artistCard.insertAdjacentHTML('beforeend', cardEl); 
        });
    } catch (error) {
        console.log(error);
    }
};

fetchata()