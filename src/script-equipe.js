// SCRIPT PARA AS ABAS DA PÁGINA DE EQUIPE
document.addEventListener('DOMContentLoaded', () => {
    // --- LÓGICA DAS ABAS (HISTÓRIA, TÍTULOS, ETC.) ---
    const tabButtons = document.querySelectorAll('.team-tab-button');
    const contentSections = document.querySelectorAll('.team-content-section');

    if (tabButtons.length > 0) {
        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                tabButtons.forEach(btn => btn.classList.remove('active'));
                contentSections.forEach(section => section.classList.remove('active'));

                const tabId = button.dataset.tab;
                const targetSection = document.getElementById(tabId);
                
                button.classList.add('active');
                if (targetSection) {
                    targetSection.classList.add('active');
                }
            });
        });
    }

    // --- LÓGICA DOS MENUS DO HEADER (COPIADO DO SCRIPT.JS) ---
    const botaoEquipes = document.getElementById('botao-equipes');
    const menuEquipes = document.getElementById('menu-equipes');
    if (botaoEquipes && menuEquipes) {
      botaoEquipes.addEventListener('click', function (e) {
        e.stopPropagation();
        menuEquipes.classList.toggle('show');
      });
    }

    const botaoTabelas = document.getElementById('botao-tabelas');
    const menuTabelas = document.getElementById('menu-tabelas');
    if (botaoTabelas && menuTabelas) {
      botaoTabelas.addEventListener('click', function (e) {
        e.stopPropagation();
        menuTabelas.classList.toggle('show');
      });
    }

    const avatarBtn = document.getElementById('avatarBtn');
    const dropdownMenu = document.getElementById('dropdownMenu');
    if (avatarBtn && dropdownMenu) {
      avatarBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdownMenu.classList.toggle('show');
      });
    }

    // Fecha os menus se clicar fora
    document.addEventListener('click', function () {
        if(menuEquipes) menuEquipes.classList.remove('show');
        if(menuTabelas) menuTabelas.classList.remove('show');
        if(dropdownMenu) dropdownMenu.classList.remove('show');
    });
});