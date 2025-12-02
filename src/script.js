// --- FUTSTATS - SCRIPT PRINCIPAL ---

// --- Popula as opções de anos no <select> ---
const selectAno = document.getElementById('ano');
if (selectAno) {
  for (let ano = 2025; ano >= 1995; ano--) {
    const option = document.createElement('option');
    option.value = ano;
    option.textContent = ano;
    selectAno.appendChild(option);
  }
}

// --- Objeto para armazenar os dados por ano ---
let dadosPorAno = {};

// --- Carrega o JSON com os dados ---
async function carregarDadosJSON() {
  try {
    const resposta = await fetch('../web/brasileirao_2022_2024_completo.json');
    dadosPorAno = await resposta.json();
    if (selectAno) renderTabela(selectAno.value);
  } catch (erro) {
    console.error("Erro ao carregar JSON:", erro);
  }
}

// Só carrega se estiver na página com tabela
if (document.getElementById('tabela-body')) {
  carregarDadosJSON();
}

// --- Renderiza a tabela com os dados do ano selecionado ---
function renderTabela(ano) {
  const tbody = document.getElementById('tabela-body');
  if (!tbody) return;
  tbody.innerHTML = '';

  const dados = dadosPorAno[ano] || [];

  dados.forEach(time => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${time.pos}</td>
      <td>${time.time}</td>
      <td>${time.j}</td>
      <td>${time.v}</td>
      <td>${time.e}</td>
      <td>${time.d}</td>
      <td>${time.saldo >= 0 ? '+' + time.saldo : time.saldo}</td>
      <td>${time.gols}</td>
      <td>${time.ultimos5}</td>
      <td>${time.pts}</td>
    `;
    tbody.appendChild(tr);
  });
}

// --- Atualiza a tabela ao mudar o ano ---
if (selectAno) {
  selectAno.addEventListener('change', () => {
    renderTabela(selectAno.value);
  });
}

// --- Menu de Equipes ---
const botaoEquipes = document.getElementById('botao-equipes');
const menuEquipes = document.getElementById('menu-equipes');
if (botaoEquipes && menuEquipes) {
  botaoEquipes.addEventListener('click', function (e) {
    e.stopPropagation();
    menuEquipes.classList.toggle('show');
  });
  document.addEventListener('click', function () {
    menuEquipes.classList.remove('show');
  });
}

// --- Botão Tabelas ---
const botaoTabelas = document.getElementById('botao-tabelas');
const menuTabelas = document.getElementById('menu-tabelas');
if (botaoTabelas && menuTabelas) {
  botaoTabelas.addEventListener('click', function (e) {
    e.stopPropagation();
    menuTabelas.classList.toggle('show');
  });
  document.addEventListener('click', function () {
    menuTabelas.classList.remove('show');
  });
}

// --- Avatar Dropdown ---
const avatarBtn = document.getElementById('avatarBtn');
const dropdownMenu = document.getElementById('dropdownMenu');
if (avatarBtn && dropdownMenu) {
  avatarBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdownMenu.classList.toggle('show');
  });

  document.addEventListener('click', () => {
    dropdownMenu.classList.remove('show');
  });
}

// --- Carrossel (Swiper) ---
if (document.querySelector('.swiper')) {
  const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
}


// --- JOGOS DA RODADA ---

// Dados de exemplo dos jogos (agora com 10 jogos)
// Substitua o array jogosDaRodada por este mais completo
const jogosDaRodada = [
    {
      dia: "SÁB, 07/09",
      estadio: "Maracanã",
      timeCasa: "Flamengo",
      logoCasa: "../assets/flamengo.webp",
      placar: "2 - 1",
      timeVisitante: "Vasco",
      logoVisitante: "../assets/vasco-da-gama-logo-png-transparent.webp",
      transmissao: "TV Globo, Premiere",
      cidade: "Rio de Janeiro",
      estado: "RJ",
      arbitro: "Wilton Pereira Sampaio",
      escalacao: {
          casa: ["Rossi", "Varela", "Fabrício Bruno", "Léo Pereira", "Ayrton Lucas", "Erick Pulgar", "Gerson", "De Arrascaeta", "Luiz Araújo", "Bruno Henrique", "Pedro"],
          visitante: ["Léo Jardim", "Puma Rodríguez", "Maicon", "Léo", "Lucas Piton", "Zé Gabriel", "Praxedes", "Paulinho", "Gabriel Pec", "Pablo Vegetti", "Rossi"]
      }
    },
    {
      dia: "SÁB, 07/09",
      estadio: "Neo Química Arena",
      timeCasa: "Corinthians",
      logoCasa: "../assets/corinthians-logo.webp",
      placar: "1 - 1",
      timeVisitante: "Palmeiras",
      logoVisitante: "../assets/palmeiras-logo-0.webp",
      transmissao: "Premiere",
      cidade: "São Paulo",
      estado: "SP",
      arbitro: "Raphael Claus",
      escalacao: {
          casa: ["Cássio", "Fagner", "Gil", "Murillo", "Fábio Santos", "Gabriel Moscardo", "Maycon", "Renato Augusto", "Matías Rojas", "Wesley", "Yuri Alberto"],
          visitante: ["Weverton", "Mayke", "Gustavo Gómez", "Murilo", "Piquerez", "Zé Rafael", "Gabriel Menino", "Raphael Veiga", "Artur", "Dudu", "Rony"]
      }
    },
    // Adicionei os detalhes para os outros jogos também...
    {
        dia: "DOM, 08/09",
        estadio: "Morumbi",
        timeCasa: "São Paulo",
        logoCasa: "../assets/sao-paulo-4096.webp",
        placar: "18:30",
        timeVisitante: "Fortaleza",
        logoVisitante: "../assets/fortaleza-logo.webp",
        transmissao: "Premiere",
        cidade: "São Paulo",
        estado: "SP",
        arbitro: "Anderson Daronco",
        escalacao: {
            casa: ["Rafael", "Rafinha", "Arboleda", "Beraldo", "Caio Paulista", "Pablo Maia", "Alisson", "Rodrigo Nestor", "Wellington Rato", "Lucas Moura", "Calleri"],
            visitante: ["João Ricardo", "Tinga", "Brítez", "Titi", "Bruno Pacheco", "Caio Alexandre", "Zé Welison", "Pochettino", "Marinho", "Guilherme", "Lucero"]
        }
    },
    {
        dia: "DOM, 08/09",
        estadio: "Vila Belmiro",
        timeCasa: "Santos",
        logoCasa: "../assets/santos-logo-0.webp",
        placar: "21:00",
        timeVisitante: "Fluminense",
        logoVisitante: "../assets/fluminense-football-club-logo-png_seeklogo-56026.webp",
        transmissao: "Sportv, Premiere",
        cidade: "Santos",
        estado: "SP",
        arbitro: "Braulio da Silva Machado",
        escalacao: {
            casa: ["João Paulo", "João Lucas", "Joaquim", "Messias", "Dodô", "Dodi", "Jean Lucas", "Lucas Lima", "Mendoza", "Soteldo", "Marcos Leonardo"],
            visitante: ["Fábio", "Samuel Xavier", "Nino", "Felipe Melo", "Marcelo", "André", "Ganso", "Arias", "Keno", "John Kennedy", "Cano"]
        }
    },
    {
      dia: "SÁB, 07/09",
      estadio: "Arena MRV",
      timeCasa: "Atlético-MG",
      logoCasa: "../assets/Atlétcomg.webp",
      placar: "1 - 0",
      timeVisitante: "Cruzeiro",
      logoVisitante: "../assets/cruzeiro.webp",
      transmissao: "Premiere",
      cidade: "Belo Horizonte",
      estado: "MG",
      arbitro: "Ramon Abatti Abel",
      escalacao: {
          casa: ["Everson", "Mariano", "Mauricio Lemos", "Jemerson", "Guilherme Arana", "Otávio", "Battaglia", "Zaracho", "Pavón", "Paulinho", "Hulk"],
          visitante: ["Rafael Cabral", "William", "Neris", "Luciano Castán", "Marlon", "Matheus Jussa", "Lucas Silva", "Mateus Vital", "Bruno Rodrigues", "Wesley", "Gilberto"]
      }
    },
    {
      dia: "SÁB, 07/09",
      estadio: "Arena do Grêmio",
      timeCasa: "Grêmio",
      logoCasa: "../assets/gremio-vector-logo-400x400.webp",
      placar: "2 - 2",
      timeVisitante: "Internacional",
      logoVisitante: "../assets/internacional-logo-0.webp",
      transmissao: "TV Globo, Premiere",
      cidade: "Porto Alegre",
      estado: "RS",
      arbitro: "Leandro Pedro Vuaden",
      escalacao: {
          casa: ["Gabriel Grando", "João Pedro", "Geromel", "Kannemann", "Reinaldo", "Villasanti", "Carballo", "Cristaldo", "Bitello", "Ferreira", "Suárez"],
          visitante: ["Rochet", "Bustos", "Vitão", "Mercado", "Renê", "Johnny", "Aránguiz", "Mauricio", "Alan Patrick", "Wanderson", "Enner Valencia"]
      }
    },
    {
      dia: "DOM, 08/09",
      estadio: "Nilton Santos",
      timeCasa: "Botafogo",
      logoCasa: "../assets/botafogo.webp",
      placar: "16:00",
      timeVisitante: "Bragantino",
      logoVisitante: "../assets/bragantino.webp",
      transmissao: "Premiere",
      cidade: "Rio de Janeiro",
      estado: "RJ",
      arbitro: "Flavio Rodrigues de Souza",
      escalacao: {
          casa: ["Lucas Perri", "Di Plácido", "Adryelson", "Cuesta", "Marçal", "Marlon Freitas", "Tchê Tchê", "Eduardo", "Júnior Santos", "Victor Sá", "Tiquinho Soares"],
          visitante: ["Cleiton", "Aderlan", "Léo Ortiz", "Natan", "Juninho Capixaba", "Jadsom", "Matheus Fernandes", "Lucas Evangelista", "Helinho", "Vitinho", "Sasha"]
      }
    },
    {
      dia: "DOM, 08/09",
      estadio: "Fonte Nova",
      timeCasa: "Bahia",
      logoCasa: "../assets/bahia.webp",
      placar: "16:00",
      timeVisitante: "Vitória",
      logoVisitante: "../assets/vitoria-2.webp",
      transmissao: "TV Bahia",
      cidade: "Salvador",
      estado: "BA",
      arbitro: "Edina Alves Batista",
      escalacao: {
          casa: ["Marcos Felipe", "Gilberto", "Kanu", "Vitor Hugo", "Camacho", "Cauly", "Thaciano", "Biel", "Everaldo", "Ademir", "Ratão"],
          visitante: ["Lucas Arcanjo", "Zeca", "Camutanga", "Wagner Leonardo", "Felipe Vieira", "Dudu", "Rodrigo Andrade", "Matheuzinho", "Iury Castilho", "Léo Gamalho", "Osvaldo"]
      }
    },
    {
      dia: "SEG, 09/09",
      estadio: "Ilha do Retiro",
      timeCasa: "Sport Recife",
      logoCasa: "../assets/sport-recife-logo-escudo-13.webp",
      placar: "20:00",
      timeVisitante: "Ceará",
      logoVisitante: "../assets/ceara.webp",
      transmissao: "Sportv 2",
      cidade: "Recife",
      estado: "PE",
      arbitro: "Luiz Flavio de Oliveira",
      escalacao: {
          casa: ["Renan", "Eduardo", "Thyere", "Sabino", "Cariús", "Ronaldo", "Fabinho", "Jorginho", "Edinho", "Vagner Love", "Luciano Juba"],
          visitante: ["Richard", "Warley", "Tiago Pagnussat", "Luiz Otávio", "Danilo Barcelos", "Richardson", "Guilherme Castilho", "Jean Carlos", "Erick", "Janderson", "Nicolas"]
      }
    },
    {
      dia: "SEG, 09/09",
      estadio: "Alfredo Jaconi",
      timeCasa: "Juventude",
      logoCasa: "../assets/juventude-logo-escudo-2.webp",
      placar: "20:00",
      timeVisitante: "Mirassol",
      logoVisitante: "../assets/Mirassol_FC_logo.webp",
      transmissao: "Premiere",
      cidade: "Caxias do Sul",
      estado: "RS",
      arbitro: "Andre Luiz Skettino",
      escalacao: {
          casa: ["Thiago Couto", "Reginaldo", "Danilo Boza", "Zé Marcos", "Alan Ruschel", "Jádson", "Vini Paulista", "Nenê", "David", "Erick Farias", "Gabriel Taliari"],
          visitante: ["Alex Muralha", "Lucas Ramon", "Thalisson", "Luiz Otávio", "Guilherme Biro", "Danielzinho", "Leandro Vilela", "Gabriel", "Chico Kim", "Negueba", "Zé Roberto"]
      }
    }
];

// Função para renderizar os jogos na tela
function renderizarJogosDaRodada() {
    const container = document.getElementById('jogos-da-rodada-container');
    if (!container) return; // Se o container não existir na página, não faz nada
  
    container.innerHTML = ''; // Limpa o container antes de adicionar os novos jogos
  
    jogosDaRodada.forEach(jogo => {
      const jogoCardHTML = `
        <div class="jogo-card">
          <div class="jogo-info">
            <span>${jogo.dia}</span>
            <span>${jogo.estadio}</span>
          </div>
          <div class="jogo-placar">
            <div class="time-info">
              <img src="${jogo.logoCasa}" alt="Logo ${jogo.timeCasa}" class="time-logo">
              <span class="time-nome">${jogo.timeCasa}</span>
            </div>
            <div class="placar">${jogo.placar}</div>
            <div class="time-info visitante">
              <img src="${jogo.logoVisitante}" alt="Logo ${jogo.timeVisitante}" class="time-logo">
              <span class="time-nome">${jogo.timeVisitante}</span>
            </div>
          </div>
          <a href="#" class="btn-detalhes">Ver detalhes</a>
        </div>
      `;
      container.innerHTML += jogoCardHTML;
    });
}
  
// --- LÓGICA DO CARROSSEL DE JOGOS ---
function configurarCarrosselJogos() {
    const wrapper = document.getElementById('jogos-wrapper');
    const scrollLeftBtn = document.getElementById('scroll-left');
    const scrollRightBtn = document.getElementById('scroll-right');

    if (!wrapper || !scrollLeftBtn || !scrollRightBtn) return;

    const scrollAmount = 374; // Largura do card (350px) + gap (24px)

    // Função para verificar e mostrar/ocultar as setas
    const checkArrows = () => {
        // Oculta a seta da esquerda se estiver no início
        scrollLeftBtn.style.display = wrapper.scrollLeft <= 0 ? 'none' : 'flex';
        // Oculta a seta da direita se estiver no final
        const maxScrollLeft = wrapper.scrollWidth - wrapper.clientWidth;
        scrollRightBtn.style.display = wrapper.scrollLeft >= maxScrollLeft - 5 ? 'none' : 'flex';
    };

    scrollLeftBtn.addEventListener('click', () => {
        wrapper.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });

    scrollRightBtn.addEventListener('click', () => {
        wrapper.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });

    // Verifica as setas quando a página carregar e durante a rolagem
    wrapper.addEventListener('scroll', checkArrows);
    window.addEventListener('resize', checkArrows); // Também verifica ao redimensionar a janela
    checkArrows(); // Verificação inicial
}

// --- INICIALIZAÇÃO DAS FUNCIONALIDADES DA PÁGINA ---
document.addEventListener('DOMContentLoaded', () => {
    // Só executa as funções se os elementos existirem na página atual
    if (document.getElementById('jogos-da-rodada-container')) {
        renderizarJogosDaRodada();
        configurarCarrosselJogos();
    }
});

// --- LÓGICA DO MODAL DE DETALHES DO JOGO ---

// Pega os elementos do modal
const modal = document.getElementById('modal-jogo-detalhes');
const modalCloseBtn = document.querySelector('.modal-jogo-close');
const jogosContainer = document.getElementById('jogos-da-rodada-container');

// Função para abrir o modal e popular com os dados
function abrirModal(jogo) {
  // Preenche o cabeçalho
  document.getElementById('modal-header-casa').innerHTML = `<img src="${jogo.logoCasa}" alt=""> <span>${jogo.timeCasa}</span>`;
  document.getElementById('modal-header-placar').textContent = jogo.placar;
  document.getElementById('modal-header-visitante').innerHTML = `<span>${jogo.timeVisitante}</span> <img src="${jogo.logoVisitante}" alt="">`;

  // Preenche os detalhes da partida
  document.getElementById('modal-transmissao').textContent = jogo.transmissao;
  document.getElementById('modal-local').textContent = `${jogo.estadio} - ${jogo.cidade}, ${jogo.estado}`;
  document.getElementById('modal-arbitro').textContent = jogo.arbitro;

  // Preenche as escalações
  const escalacaoCasaUl = document.getElementById('modal-escalacao-casa');
  const escalacaoVisitanteUl = document.getElementById('modal-escalacao-visitante');
  escalacaoCasaUl.innerHTML = ''; // Limpa a lista anterior
  escalacaoVisitanteUl.innerHTML = ''; // Limpa a lista anterior

  jogo.escalacao.casa.forEach(jogador => {
    escalacaoCasaUl.innerHTML += `<li>${jogador}</li>`;
  });
  jogo.escalacao.visitante.forEach(jogador => {
    escalacaoVisitanteUl.innerHTML += `<li>${jogador}</li>`;
  });

  // Mostra o modal
  modal.style.display = 'block';
}

// Função para fechar o modal
function fecharModal() {
  modal.style.display = 'none';
}

// Adiciona o evento de clique nos botões "Ver detalhes"
if (jogosContainer) {
  jogosContainer.addEventListener('click', function(e) {
    // Verifica se o clique foi em um botão de detalhes
    if (e.target && e.target.classList.contains('btn-detalhes')) {
      e.preventDefault();
      const jogoCard = e.target.closest('.jogo-card'); // Pega o card do jogo pai do botão
      const jogoIndex = jogoCard.getAttribute('data-index'); // Pega o índice do jogo
      
      if (jogoIndex) {
        abrirModal(jogosDaRodada[jogoIndex]);
      }
    }
  });
}

// Eventos para fechar o modal
modalCloseBtn.onclick = fecharModal;
window.onclick = function(event) {
  if (event.target == modal) {
    fecharModal();
  }
}

// Modificação final na função que renderiza os cards de jogo
// Precisamos adicionar o atributo data-index a cada card
function renderizarJogosDaRodada() {
    const container = document.getElementById('jogos-da-rodada-container');
    if (!container) return;
  
    container.innerHTML = '';
  
    // Adicionamos o 'index' para saber qual jogo foi clicado
    jogosDaRodada.forEach((jogo, index) => {
      // Adicionamos data-index="${index}" ao card
      const jogoCardHTML = `
        <div class="jogo-card" data-index="${index}">
          <div class="jogo-info">
            <span>${jogo.dia}</span>
            <span>${jogo.estadio}</span>
          </div>
          <div class="jogo-placar">
            <div class="time-info">
                <img src="${jogo.logoCasa}" alt="" class="time-logo">
                <span class="time-nome">${jogo.timeCasa}</span>
            </div>
            <div class="placar">${jogo.placar}</div>
            <div class="time-info visitante">
                <img src="${jogo.logoVisitante}" alt="" class="time-logo">
                <span class="time-nome">${jogo.timeVisitante}</span>
            </div>
          </div>
          <a href="#" class="btn-detalhes">Ver detalhes</a>
        </div>
      `;
      container.innerHTML += jogoCardHTML;
    });
}


// --- API CONFIGURAÇÕES ---
// Usar configurações do arquivo config.js
const API_URL = CONFIG?.API_URL || 'http://localhost:3000/usuarios';
const API_LOGIN_URL = CONFIG?.API_LOGIN_URL || 'http://localhost:3000/login';

// --- CADASTRO DE USUÁRIOS ---
const formCadastro = document.getElementById('form-cadastro');
if (formCadastro) {
  formCadastro.addEventListener('submit', async function(e) {
    e.preventDefault();
    console.log('Formulário enviado');
    const form = e.target;

    const usuario = {
      nome: form.nome.value,
      email: form.email.value,
      telefone: form.telefone.value,
      senha: form.senha.value
    };

    try {
      const resposta = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(usuario)
      });
      if (resposta.ok) {
        alert('Usuário cadastrado com sucesso!');
        form.reset();
      } else {
        alert('Erro ao cadastrar usuário!');
      }
    } catch (erro) {
      alert('Erro de conexão!');
      console.error(erro);
    }
  });
}

// --- LOGIN VERIFICAÇÃO ---
const formLogin = document.getElementById('form-login');
if (formLogin) {
  formLogin.addEventListener('submit', async function(e) {
    e.preventDefault();
    const form = e.target;
    const dados = {
      email: form.email.value,
      senha: form.senha.value
    };

    try {
      const resposta = await fetch(API_LOGIN_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dados)
      });
      if (resposta.ok) {
        window.location.href = 'web/inicial.html';
      } else {
        alert('E-mail ou senha inválidos!');
      }
    } catch (erro) {
      alert('Erro de conexão!');
      console.error(erro);
    }
  });
}
