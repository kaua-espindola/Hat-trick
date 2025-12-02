document.addEventListener('DOMContentLoaded', () => {

    // --- DADOS MOCKADOS (EXEMPLO) ---
    // No futuro, isso viria de uma API
    const dadosSerieA = {
        statsGerais: [
            { icone: 'ph-soccer-ball', titulo: 'Jogos Realizados', valor: '130 / 380' },
            { icone: 'ph-football', titulo: 'Gols Marcados', valor: '325' },
            { icone: 'ph-divide', titulo: 'Média Gols/Jogo', valor: '2.5' },
            { icone: 'ph-trophy', titulo: 'Líder do Campeonato', valor: 'Botafogo', detalhe: '79 pontos' },
            { icone: 'ph-person-simple-run', titulo: 'Artilheiro', valor: 'Alerrandro Barra Mansa Realino de Souza', detalhe: '15 gols' }
        ],
        artilharia: [
            { pos: 1, jogador: 'Alerrandro', time: 'Vitória', logo: '../assets/vitoria-2.webp', gols: 15 },
            { pos: 2, jogador: 'Yuri Alberto', time: 'Corinthians', logo: '../assets/corinthians-logo.webp', gols: 15 },
            { pos: 3, jogador: 'Estêvão', time: 'Palmeiras', logo: '../assets/palmeiras-logo-0.webp', gols: 13 },
            { pos: 4, jogador: 'Pablo Vegetti', time: 'Vasco', logo: '../assets/vasco-da-gama-logo-png-transparent.webp', gols: 12 },
        ],
        assistencias: [
            { pos: 1, jogador: 'Rodrigo Garro', time: 'Corinthians', logo: '../assets/corinthians-logo.webp', passes: 10 },
            { pos: 2, jogador: 'Estêvão', time: 'Palmeiras', logo: '../assets/palmeiras-logo-0.webp', passes: 9 },
            { pos: 3, jogador: 'Savarino', time: 'Botafogo', logo: '../assets/botafogo.webp', passes: 7 },
            { pos: 4, jogador: 'Matheus Pereira', time: 'Cruzeiro', logo: '../assets/cruzeiro.webp', passes: 7 },
        ],
        goleiros: [
            { pos: 1, jogador: 'Jhon', time: 'Botafogo', logo: '../assets/botafogo.webp', jogos: 16 },
            { pos: 2, jogador: 'Weverton', time: 'Palmeiras', logo: '../assets/palmeiras-logo-0.webp', jogos: 16 },
            { pos: 3, jogador: 'Fábio', time: 'Fluminense', logo: '../assets/fluminense-football-club-logo-png_seeklogo-56026.webp', jogos: 13 },
            { pos: 4, jogador: 'João Ricardo', time: 'Fortaleza', logo: '../assets/fortaleza-logo.webp', jogos: 13 },
        ],
        equipeSemana: [
            // Goleiro
            { nome: 'Jhon', posicao: { top: '88%', left: '50%' } },
            // Defensores
            { nome: 'Wesley', posicao: { top: '68%', left: '15%' } },
            { nome: 'Barboza', posicao: { top: '72%', left: '38%' } },
            { nome: 'Bastos', posicao: { top: '72%', left: '62%' } },
            { nome: 'Bernabei', posicao: { top: '68%', left: '85%' } },
            // Meio-campistas
            { nome: 'Marlon Freitas', posicao: { top: '48%', left: '30%' } },
            { nome: 'Alan Patrick', posicao: { top: '40%', left: '50%' } },
            { nome: 'Rodrigo Garro', posicao: { top: '48%', left: '70%' } },
            // Atacantes
            { nome: 'Luiz Henrique', posicao: { top: '22%', left: '20%' } },
            { nome: 'Estevão', posicao: { top: '15%', left: '50%' } },
            { nome: 'Gerson', posicao: { top: '22%', left: '80%' } },
        ]
    };

    // --- FUNÇÕES DE RENDERIZAÇÃO ---

    function renderStatsGerais() {
        const container = document.getElementById('lista-stats-gerais');
        container.innerHTML = '';
        dadosSerieA.statsGerais.forEach(stat => {
            container.innerHTML += `
                <li>
                    <i class="${stat.icone}"></i>
                    <div class="stat-info">
                        <strong>${stat.titulo}</strong>
                        <span>${stat.valor} ${stat.detalhe ? `(${stat.detalhe})` : ''}</span>
                    </div>
                </li>
            `;
        });
    }

    function renderRanking(containerId, dados, tipo) {
        const container = document.getElementById(containerId);
        container.innerHTML = '';
        dados.forEach(item => {
            container.innerHTML += `
                <li>
                    <span class="posicao">${item.pos}</span>
                    <img src="${item.logo}" alt="${item.time}" class="time-logo">
                    <div class="jogador-info">
                        <strong>${item.jogador}</strong>
                        <span>${item.time}</span>
                    </div>
                    <span class="valor">${item[tipo]}</span>
                </li>
            `;
        });
    }

    function renderEquipeSemana() {
        const container = document.querySelector('.campo-equipe-semana');
        container.innerHTML = '';
        dadosSerieA.equipeSemana.forEach(jogador => {
            const playerEl = document.createElement('div');
            playerEl.className = 'player-dot';
            playerEl.style.top = jogador.posicao.top;
            playerEl.style.left = jogador.posicao.left;
            playerEl.innerHTML = `<span>${jogador.nome}</span>`;
            container.appendChild(playerEl);
        });
    }


    // --- LÓGICA DE ABAS ---

    const tabButtons = document.querySelectorAll('.stats-tab-button');
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            // Aqui você pode adicionar lógica para carregar dados da Série B
            // Por enquanto, apenas o visual da aba é alterado.
        });
    });

    // --- INICIALIZAÇÃO ---
    renderStatsGerais();
    renderRanking('lista-artilharia', dadosSerieA.artilharia, 'gols');
    renderRanking('lista-assistencias', dadosSerieA.assistencias, 'passes');
    renderRanking('lista-goleiros', dadosSerieA.goleiros, 'jogos');
    renderEquipeSemana();
});