document.addEventListener('DOMContentLoaded', () => {
    const listaTimesEl = document.getElementById('lista-times');

    // Dados de exemplo dos times
    // No futuro, isso viria de uma API ou de um arquivo JSON
    const timesDisponiveis = [
    { id: 'atletico-mg', nome: 'Atlético-MG', logo: '../assets/Atlétcomg.webp' },
    { id: 'athletico-pr', nome: 'Athletico-PR', logo: '../assets/Athletico_Paranaense_(Logo_2019).svg.png' }, // Adicionado
    { id: 'atletico-go', nome: 'Atlético-GO', logo: '../assets/Atletico_Goianiense.png' }, // Adicionado
    { id: 'bahia', nome: 'Bahia', logo: '../assets/bahia.webp' },
    { id: 'botafogo', nome: 'Botafogo', logo: '../assets/botafogo.webp' },
    { id: 'bragantino', nome: 'Bragantino', logo: '../assets/bragantino.webp' },
    { id: 'ceara', nome: 'Ceará', logo: '../assets/ceara.webp' },
    { id: 'corinthians', nome: 'Corinthians', logo: '../assets/corinthians-logo.webp' },
    { id: 'criciuma', nome: 'Criciúma', logo: '../assets/criciuma.png' }, // Adicionado
    { id: 'cruzeiro', nome: 'Cruzeiro', logo: '../assets/cruzeiro.webp' },
    { id: 'cuiaba', nome: 'Cuiabá', logo: '../assets/cuiaba.png' }, // Adicionado
    { id: 'flamengo', nome: 'Flamengo', logo: '../assets/flamengo.webp' },
    { id: 'fluminense', nome: 'Fluminense', logo: '../assets/fluminense-football-club-logo-png_seeklogo-56026.webp' },
    { id: 'fortaleza', nome: 'Fortaleza', logo: '../assets/fortaleza-logo.webp' },
    { id: 'gremio', nome: 'Grêmio', logo: '../assets/gremio-vector-logo-400x400.webp' },
    { id: 'internacional', nome: 'Internacional', logo: '../assets/internacional-logo-0.webp' },
    { id: 'juventude', nome: 'Juventude', logo: '../assets/juventude-logo-escudo-2.webp' },
    { id: 'mirassol', nome: 'Mirassol', logo: '../assets/Mirassol_FC_logo.webp' },
    { id: 'palmeiras', nome: 'Palmeiras', logo: '../assets/palmeiras-logo-0.webp' },
    { id: 'santos', nome: 'Santos', logo: '../assets/santos-logo-0.webp' },
    { id: 'sao-paulo', nome: 'São Paulo', logo: '../assets/sao-paulo-4096.webp' }, // Corrigido para 'sao-paulo'
    { id: 'sport', nome: 'Sport', logo: '../assets/sport-recife-logo-escudo-13.webp' },
    { id: 'vasco', nome: 'Vasco da Gama', logo: '../assets/vasco-da-gama-logo-png-transparent.webp' },
    { id: 'vitoria', nome: 'Vitória', logo: '../assets/vitoria-2.webp' }, 
    
    ];

    function renderizarTimes() {
        listaTimesEl.innerHTML = ''; // Limpa o conteúdo existente

        // Ordena a lista de times em ordem alfabética pelo nome
        timesDisponiveis.sort((a, b) => a.nome.localeCompare(b.nome));

        timesDisponiveis.forEach(time => {
            const timeCard = document.createElement('div');
            timeCard.className = 'time-card';
            timeCard.dataset.timeId = time.id; // Armazenar o ID do time

            timeCard.innerHTML = `
                <img src="${time.logo}" alt="Escudo do ${time.nome}">
                <p>${time.nome}</p>
            `;

            timeCard.addEventListener('click', () => {
                // Ao clicar no time, redireciona para a página de escalação
                // e passa o ID do time como um parâmetro na URL
                window.location.href = `escalacao.html?time=${time.id}`;
            });

            listaTimesEl.appendChild(timeCard);
        });
    }

    // Chama a função para renderizar os times quando a página carregar
    renderizarTimes();
});