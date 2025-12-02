// Configurações globais do sistema
const CONFIG = {
  API_URL: 'http://localhost:3000/usuarios',
  API_LOGIN_URL: 'http://localhost:3000/login',
  
  FUNCOES: {
    ADMINISTRADOR: 'administrador',
    USUARIO: 'usuario'
  },
  
  FUNCOES_DISPLAY: {
    administrador: 'Administrador',
    usuario: 'Usuário'
  }
};

// Função helper para formatar função para exibição
function formatarFuncaoDisplay(funcao) {
  return CONFIG.FUNCOES_DISPLAY[funcao] || 'Usuário';
}

// Função helper para validar função
function validarFuncao(funcao) {
  return Object.values(CONFIG.FUNCOES).includes(funcao);
}
