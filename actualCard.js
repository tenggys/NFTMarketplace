async function fetchata() {
    try {
        const response = await fetch ('actualCard.json');

        if (!response) {
            throw new Error('Не отображается JSON');
        } 
        const data = await response.json();
        const actualCard = document.querySelector('.actual__card');

        data.forEach(({id, img, alt, name, time, price, currency}) => {
            const cardEl = `
                <div id="${id}" class="actual__card_item">
                    <img class="actual__card_item-img" src="${img}" alt="${alt}">
                    <div class="content">
                        <div class="content__top">
                            <p class="content__top_name">${name}</p>
                            <div class="content__top_info">
                                <svg class="content__top_info-svg" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.89998 9.6L11.7 7.5C11.9 7.4 12.1 7.4 12.4 7.5L17.2 9.6C17.6 9.8 18 9.3 17.7 8.9L12.7 2.8C12.4 2.4 11.8 2.4 11.5 2.8L6.49997 8.9C6.09997 9.3 6.49998 9.8 6.89998 9.6Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M6.89998 15.4L11.7 17.5C11.9 17.6 12.1 17.6 12.4 17.5L17.2 15.4C17.6 15.2 18 15.7 17.7 16.1L12.7 22.2C12.4 22.6 11.8 22.6 11.5 22.2L6.49997 16.1C6.09997 15.7 6.49998 15.2 6.89998 15.4Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M12 9.8999L6.79999 12.4999L12 15.0999L17.2 12.4999L12 9.8999Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <p class="content__top_info-price">${price}<span>${currency}</span></p>    
                            </div>
                        </div>
                        <div class="content__bot">
                            <div class="content__bot_info">
                                <p class="content__bot_info-text">
                                    Ending In
                                </p>
                                <div class="content__timer">
                                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22 12.5C22 18.02 17.52 22.5 12 22.5C6.48 22.5 2 18.02 2 12.5C2 6.98 6.48 2.5 12 2.5C17.52 2.5 22 6.98 22 12.5Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M15.71 15.68L12.61 13.83C12.07 13.51 11.63 12.74 11.63 12.11V8.01001" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg> 
                                    <p class="content__timer_time">${time}</p>
                                </div>
                            </div>
                            <button id="button" class="content__bot_button">
                                Place A Bid
                            </button>
                        </div>
                    </div>
                </div>
            `;
            actualCard.insertAdjacentHTML('beforeend', cardEl);

            const button = document.querySelectorAll('#button');
            button.forEach(item => {
                item.addEventListener('click', () => {
                    alert('МАТЕРИАЛА ЕЩЕ НЕТ...')
                })
            }); 
        });
    } catch (error) {
        console.log(error);
    }
};

fetchata()