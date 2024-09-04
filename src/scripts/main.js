document.addEventListener('DOMContentLoaded', function() {
    const games = [
        { name: "Stardew Valley", price: "R$ 24,99", image: "https://image.api.playstation.com/cdn/UP2456/CUSA06840_00/0WuZecPtRr7aEsQPv2nJqiPa2ZvDOpYm.png" },
        { name: "Terraria", price: "R$ 19,99", image: "https://needgames.com.br/wp-content/uploads/2023/01/Terraria.jpg.webp" },
        { name: "Celeste", price: "R$ 36,99", image: "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_400/ncom/pt_BR/games/switch/c/celeste-switch/description-image" },
        { name: "Undertale", price: "R$ 19,99", image: "https://www.vgdb.com.br/gf/fotos/games/media_68601/----undertale-68601.jpg" },
        { name: "Hollow Knight", price: "R$ 27,99", image: "https://image.api.playstation.com/cdn/UP1822/CUSA13632_00/GuFQKWlrIVODEA1su20fCOrNZEYX5CB9.png" },
        { name: "Minecraft", price: "R$ 129,00", image: "https://image.api.playstation.com/vulcan/ap/rnd/202407/0401/670c294ded3baf4fa11068db2ec6758c63f7daeb266a35a1.png" },
        { name: "Shovel Knight", price: "R$ 39,99", image: "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_1240/b_white/f_auto/q_auto/ncom/software/switch/70010000000121/2a52dd0769e5d8dba0d9d8d1aaf23803068b6350d2cbfb680df2fa113c23ec8f" },
        { name: "Enter the Gungeon", price: "R$ 29,99", image: "https://image.api.playstation.com/vulcan/ap/rnd/202010/1205/7iRqnxpwQtVuEFuOjBAW1hFz.png" }
    ];

    const gameGrid = document.querySelector('.game-grid');

    const easterEggs = [
        "Um NPC quer te dar uma missão especial!",
        "Você encontrou um item lendário!",
        "Achievement unlocked: Comprador Compulsivo",
        "Parabéns! Você zerou a loja!",
        "Erro 404: Dinheiro não encontrado",
        "Você ativou o código de trapaça: Dinheiro infinito",
        "Nível de Hype aumentado em 1000%!"
    ];

    function createGameElement(game) {
        const gameItem = document.createElement('div');
        gameItem.classList.add('game-item');

        const img = document.createElement('img');
        img.src = game.image;
        img.alt = game.name;

        const title = document.createElement('h3');
        title.textContent = game.name;

        const price = document.createElement('p');
        price.textContent = game.price;

        const buyButton = document.createElement('button');
        buyButton.textContent = 'Comprar';
        buyButton.classList.add('buy-button');
        buyButton.addEventListener('click', function(event) {
            event.preventDefault();
            showEasterEgg(game.name);
        });

        gameItem.appendChild(img);
        gameItem.appendChild(title);
        gameItem.appendChild(price);
        gameItem.appendChild(buyButton);

        return gameItem;
    }

    function showEasterEgg(gameName) {
        let message;
        if (gameName === "Undertale") {
            message = "A perspectiva de adquirir este jogo na loja... Isso enche você de DETERMINAÇÃO!";
        } else {
            message = easterEggs[Math.floor(Math.random() * easterEggs.length)];
        }
        alert(`${message}\nVocê "comprou" ${gameName}!`);
    }

    games.forEach(game => {
        const gameElement = createGameElement(game);
        gameGrid.appendChild(gameElement);
    });

    // Adiciona efeito de hover nos itens do menu
    const menuItems = document.querySelectorAll('nav a');
    menuItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
        });
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Adiciona rolagem suave para os links do menu
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});