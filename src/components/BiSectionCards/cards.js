import cardsData from "../../services/cardsService.js";

const cards = () => {
    return `
        <div class="biSection">
            <ul class="cardList">
                ${cardGenerator(cardsData)}
            </ul>
        </div>   
    `;
}


const cardGenerator = (cardsData) => {
    let cardListItem = '';

    for (let cardKey in cardsData) {
        cardListItem += `
            <li class="cardItem">
                <a href="${cardsData[cardKey].linkURL}">
                    ${ cardsData[cardKey].isActive ? 
                        `<img src="${cardsData[cardKey].cardImage.url1}" alt="${cardsData[cardKey].cardImage.alt1}">` 
                        : 
                        `<img src="${cardsData[cardKey].cardImage.url2}" alt="${cardsData[cardKey].cardImage.alt2}">` 
                    } 
                </a>
            </li>
        `;
    }

    return cardListItem
}


export default cards