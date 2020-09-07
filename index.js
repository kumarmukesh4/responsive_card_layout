const card = (function () {
    let text = "hello";
    const config = {
        'url': 'https://randomuser.me/api/?gender=male',
        'numberCards': 12
    };
  
    let createCard = (data) => {
        console.log(data);
        let rootElement = document.querySelector('#cards__wrapper');
        let card='';
        data.forEach(item => {
            card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <div class='card_image' style='background-image: url(${item.picture.medium})'></div>
                <div class='name'>${item.name.first} ${item.name.last}</div>
                <button>Call</button>
            `;
            rootElement.appendChild(card);
        })
       
    }
    /**
     * @param(data)
     */
     let getCardFromServer = () => {
        fetch(`${config.url}&results=${config.numberCards}`).then(function(response) {
            return response.json();
          }).then(function(res) {
            createCard(res.results)
          })
          .catch(err => {
                console.log(err);
          });
     }

    return {
        makeCard: getCardFromServer
    }

})();

card.makeCard();