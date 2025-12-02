// TRANSFERÊNCIAS - Sistema de gestão de transferências e rumores

// Dados mockados de transferências confirmadas
const transferenciasConfirmadas = [
    {
        id: 1,
        data: "20/05/2024",
        jogador: {
            nome: "Felipe Anderson",
            idade: 31,
            posicao: "MEI",
            avatar: "../assets/perfilsemfoto.jpeg"
        },
        clubeOrigem: {
            nome: "Lazio",
            logo: "../assets/lazio.png" // Usando um logo existente como placeholder
        },
        clubeDestino: {
            nome: "Palmeiras",
            logo: "../assets/palmeiras-logo-0.webp"
        },
        valor: "Grátis",
        detalhes: "Contrato até 2027",
        destaque: true
    },
    {
        id: 2,
        data: "17/05/2024",
        jogador: {
            nome: "Cássio",
            idade: 37,
            posicao: "GOL",
            avatar: "../assets/perfilsemfoto.jpeg"
        },
        clubeOrigem: {
            nome: "Corinthians",
            logo: "../assets/corinthians-logo.webp"
        },
        clubeDestino: {
            nome: "Cruzeiro",
            logo: "../assets/cruzeiro.webp"
        },
        valor: "Grátis",
        detalhes: "Rescisão amigável",
        destaque: true
    },
    {
        id: 3,
        data: "07/05/2024",
        jogador: {
            nome: "Thiago Silva",
            idade: 39,
            posicao: "ZAG",
            avatar: "../assets/perfilsemfoto.jpeg"
        },
        clubeOrigem: {
            nome: "Chelsea",
            logo: "../assets/chelsea.png" // Usando um logo existente como placeholder
        },
        clubeDestino: {
            nome: "Fluminense",
            logo: "../assets/fluminense-football-club-logo-png_seeklogo-56026.webp"
        },
        valor: "Grátis",
        detalhes: "Contrato de 2 anos",
        destaque: false
    },
    {
        id: 4,
        data: "16/02/2024",
        jogador: {
            nome: "Igor Coronado",
            idade: 31,
            posicao: "MEI",
            avatar: "../assets/perfilsemfoto.jpeg"
        },
        clubeOrigem: {
            nome: "Al-Ittihad",
            logo: "../assets/al-ith.png" // Usando um logo existente como placeholder
        },
        clubeDestino: {
            nome: "Corinthians",
            logo: "../assets/corinthians-logo.webp"
        },
        valor: "Grátis",
        detalhes: "Contrato até 2026",
        destaque: false
    }
];

// Dados mockados de rumores
const rumoresTransferencias = [
    {
        id: 1,
        data: "01/06/2024",
        jogador: {
            nome: "Philippe Coutinho",
            idade: 32,
            posicao: "MEI",
            avatar: "../assets/perfilsemfoto.jpeg"
        },
        clubeOrigem: {
            nome: "Aston Villa",
            logo: "../assets/aston.png" // Usando um logo existente como placeholder
        },
        clubeDestino: {
            nome: "Vasco da Gama",
            logo: "../assets/vasco-da-gama-logo-png-transparent.webp"
        },
        probabilidade: "alta",
        fonte: "Fabrizio Romano"
    },
    {
        id: 2,
        data: "28/05/2024",
        jogador: {
            nome: "Michael",
            idade: 28,
            posicao: "ATA",
            avatar: "../assets/perfilsemfoto.jpeg"
        },
        clubeOrigem: {
            nome: "Al-Hilal",
            logo: "../assets/al hilal.png" // Usando um logo existente como placeholder
        },
        clubeDestino: {
            nome: "Flamengo",
            logo: "../assets/flamengo.webp"
        },
        probabilidade: "media",
        fonte: "GE"
    },
    {
        id: 3,
        data: "15/05/2024",
        jogador: {
            nome: "Ángel Di María",
            idade: 36,
            posicao: "ATA",
            avatar: "../assets/perfilsemfoto.jpeg"
        },
        clubeOrigem: {
            nome: "Benfica",
            logo: "../assets/benfica.jfif" // Usando um logo existente como placeholder
        },
        clubeDestino: {
            nome: "Grêmio",
            logo: "../assets/gremio-vector-logo-400x400.webp"
        },
        probabilidade: "baixa",
        fonte: "ESPN"
    }
];

// Função para obter o badge da posição
function obterBadgePosicao(posicao) {
    const badges = {
        'GOL': 'gk',
        'ZAG': 'def',
        'LAT': 'def',
        'VOL': 'mid',
        'MEI': 'mid',
        'ATA': 'att'
    };
    return badges[posicao] || 'mid';
}

// Função para renderizar transferências confirmadas
function renderizarTransferenciasConfirmadas() {
    const container = document.getElementById('transferencias-confirmadas');
    if (!container) return;

    container.innerHTML = ''; // Limpa o container
    
    transferenciasConfirmadas.forEach(transferencia => {
        const item = document.createElement('div');
        item.className = `transferencia-item ${transferencia.destaque ? 'transferencia-destaque' : ''}`;
        
        const badgePosicao = obterBadgePosicao(transferencia.jogador.posicao);
        
        item.innerHTML = `
            <div class="data-transferencia">${transferencia.data}</div>
            
            <div class="clube-info">
                <img src="${transferencia.clubeOrigem.logo}" alt="${transferencia.clubeOrigem.nome}" class="clube-logo">
                <span class="clube-nome">${transferencia.clubeOrigem.nome}</span>
            </div>
            
            <div class="jogador-info">
                <img src="${transferencia.jogador.avatar}" alt="${transferencia.jogador.nome}" class="jogador-avatar">
                <div class="jogador-details">
                    <div class="jogador-nome">${transferencia.jogador.nome}</div>
                    <div class="jogador-posicao">
                        <span class="posicao-badge posicao-${badgePosicao}">${transferencia.jogador.posicao}</span>
                        <span class="jogador-idade">${transferencia.jogador.idade} anos</span>
                    </div>
                </div>
            </div>
            
            <div class="clube-info">
                <img src="${transferencia.clubeDestino.logo}" alt="${transferencia.clubeDestino.nome}" class="clube-logo">
                <span class="clube-nome">${transferencia.clubeDestino.nome}</span>
            </div>
            
            <div class="valor-transferencia ${transferencia.valor === 'Grátis' ? 'valor-gratis' : ''}">
                ${transferencia.valor}
            </div>
            
            <div class="detalhes-transferencia">
                ${transferencia.detalhes}
            </div>
        `;
        
        container.appendChild(item);
    });
}

// Função para renderizar rumores
function renderizarRumores() {
    const container = document.getElementById('transferencias-rumores');
    if (!container) return;
    
    container.innerHTML = ''; // Limpa o container
    
    rumoresTransferencias.forEach(rumor => {
        const item = document.createElement('div');
        item.className = 'transferencia-item';
        
        const badgePosicao = obterBadgePosicao(rumor.jogador.posicao);
        
        item.innerHTML = `
            <div class="data-transferencia">${rumor.data}</div>
            
            <div class="clube-info">
                <img src="${rumor.clubeOrigem.logo}" alt="${rumor.clubeOrigem.nome}" class="clube-logo">
                <span class="clube-nome">${rumor.clubeOrigem.nome}</span>
            </div>
            
            <div class="jogador-info">
                <img src="${rumor.jogador.avatar}" alt="${rumor.jogador.nome}" class="jogador-avatar">
                <div class="jogador-details">
                    <div class="jogador-nome">${rumor.jogador.nome}</div>
                    <div class="jogador-posicao">
                        <span class="posicao-badge posicao-${badgePosicao}">${rumor.jogador.posicao}</span>
                        <span class="jogador-idade">${rumor.jogador.idade} anos</span>
                    </div>
                </div>
            </div>
            
            <div class="clube-info">
                <img src="${rumor.clubeDestino.logo}" alt="${rumor.clubeDestino.nome}" class="clube-logo">
                <span class="clube-nome">${rumor.clubeDestino.nome}</span>
            </div>
            
            <div class="probabilidade-badge prob-${rumor.probabilidade}">
                ${rumor.probabilidade.toUpperCase()}
            </div>
            
            <div class="fonte-rumor">
                ${rumor.fonte}
            </div>
        `;
        
        container.appendChild(item);
    });
}

// Função para alternar entre abas
function configurarAbas() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const sections = document.querySelectorAll('.transferencias-section');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove classe active de todos os botões e seções
            tabButtons.forEach(btn => btn.classList.remove('active'));
            sections.forEach(section => section.classList.remove('active'));
            
            // Adiciona classe active ao botão clicado
            button.classList.add('active');
            
            // Mostra a seção correspondente
            const targetTab = button.dataset.tab;
            const targetSection = document.getElementById(`${targetTab}-section`);
            if (targetSection) {
                targetSection.classList.add('active');
            }
        });
    });
}

// Função para configurar filtros
function configurarFiltros() {
    const filtros = document.querySelectorAll('.filtros-transferencias select');
    
    filtros.forEach(filtro => {
        filtro.addEventListener('change', aplicarFiltros);
    });
}

// Função para aplicar filtros (implementação básica)
function aplicarFiltros() {
    const clube = document.getElementById('filtro-clube')?.value;
    const posicao = document.getElementById('filtro-posicao')?.value;
    
    console.log('Filtros aplicados:', { clube, posicao });
    
    // Aqui você pode implementar a lógica de filtro real
    // Por enquanto, apenas recarrega os dados
    renderizarTransferenciasConfirmadas();
    renderizarRumores();
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    // Só executa se estivermos na página de transferências
    if (document.querySelector('.transferencias-container')) {
        configurarAbas();
        configurarFiltros();
        renderizarTransferenciasConfirmadas();
        renderizarRumores();
    }
});

// Função para adicionar nova transferência (para uso futuro)
function adicionarTransferencia(dadosTransferencia) {
    transferenciasConfirmadas.unshift(dadosTransferencia);
    renderizarTransferenciasConfirmadas();
}

// Função para adicionar novo rumor (para uso futuro)
function adicionarRumor(dadosRumor) {
    rumoresTransferencias.unshift(dadosRumor);
    renderizarRumores();
}