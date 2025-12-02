// CONFIG ADM - Gerenciamento de Usuários
// URL da API usando configurações centralizadas
const API_URL = CONFIG?.API_URL || 'http://localhost:3000/usuarios';

let usuarios = [];

// Função para carregar usuários da API
async function carregarUsuarios() {
  const loading = document.getElementById("loading");
  if (!loading) return; // Verifica se elemento existe
  
  loading.style.display = "block";
  
  try {
    const resposta = await fetch(API_URL);
    if (resposta.ok) {
      usuarios = await resposta.json();
      renderUsuarios();
    } else {
      const erro = await resposta.json();
      console.error('Erro ao carregar usuários:', erro);
      alert(`Erro ao carregar lista de usuários: ${erro.message || 'Erro desconhecido'}`);
    }
  } catch (erro) {
    console.error('Erro de conexão:', erro);
    alert('Erro de conexão com o servidor! Verifique se o servidor está rodando.');
  } finally {
    loading.style.display = "none";
  }
}

// Função para buscar usuário por ID específico
async function buscarUsuarioPorId(userId) {
  const loading = document.getElementById("loading");
  if (!loading) return;
  
  loading.style.display = "block";
  
  try {
    const resposta = await fetch(`${API_URL}/${userId}`);
    if (resposta.ok) {
      const usuario = await resposta.json();
      usuarios = [usuario];
      renderUsuarios();
    } else if (resposta.status === 404) {
      alert('Usuário não encontrado!');
      carregarUsuarios();
    } else {
      const erro = await resposta.json();
      alert(`Erro ao buscar usuário: ${erro.message || 'Erro desconhecido'}`);
    }
  } catch (erro) {
    console.error('Erro de conexão:', erro);
    alert('Erro de conexão com o servidor!');
  } finally {
    loading.style.display = "none";
  }
}

function renderUsuarios() {
  const tabela = document.getElementById("tabela-usuarios");
  const contador = document.getElementById("contador-resultados");
  
  if (!tabela || !contador) return; // Verifica se elementos existem
  
  tabela.innerHTML = "";
  usuarios.forEach((user, index) => {
    const userId = user._id || user.id;
    
    // Formatar a função para exibição
    const funcaoDisplay = formatarFuncaoDisplay(user.funcao);
    
    tabela.innerHTML += `
      <tr>
        <td>${userId}</td>
        <td>${user.nome}</td>
        <td>${user.email}</td>
        <td>${user.telefone || 'N/A'}</td>
        <td>${funcaoDisplay}</td>
        <td>
          <button class="login-btn btn-editar" data-index="${index}" style="padding:4px 10px; font-size:13px;">Editar</button>
          <button class="login-btn btn-excluir" data-user-id="${userId}" style="background:#d9534f; padding:4px 10px; font-size:13px;">Excluir</button>
        </td>
      </tr>
    `;
  });
  
  contador.textContent = `Exibindo ${usuarios.length} usuário(s)`;
}

function abrirFormulario() {
  const form = document.getElementById("form-usuario");
  const modal = document.getElementById("modal-form");
  const titulo = document.getElementById("form-titulo");
  const senha = document.getElementById("senha");
  const senhaHelp = document.getElementById("senha-help");
  const usuarioId = document.getElementById("usuario-id");
  const funcao = document.getElementById("funcao");
  
  if (!form || !modal || !titulo || !senha || !senhaHelp || !usuarioId || !funcao) return;
  
  form.reset();
  usuarioId.value = "";
  titulo.textContent = "Cadastrar Usuário";
  senha.required = true;
  senhaHelp.style.display = "none";
  
  // Limpar classes de estilo
  funcao.classList.remove('admin-selected', 'user-selected');
  
  modal.style.display = "flex";
}

function fecharFormulario() {
  const modal = document.getElementById("modal-form");
  if (modal) modal.style.display = "none";
}

function limparBuscas() {
  const buscarUsuario = document.getElementById("buscar-usuario");
  const buscarPorId = document.getElementById("buscar-por-id");
  
  if (buscarUsuario) buscarUsuario.value = '';
  if (buscarPorId) buscarPorId.value = '';
  carregarUsuarios();
}

function editarUsuario(index) {
  const user = usuarios[index];
  if (!user) return;
  
  const usuarioId = document.getElementById("usuario-id");
  const nome = document.getElementById("nome");
  const email = document.getElementById("email");
  const telefone = document.getElementById("telefone");
  const funcao = document.getElementById("funcao");
  const senha = document.getElementById("senha");
  const senhaHelp = document.getElementById("senha-help");
  const titulo = document.getElementById("form-titulo");
  const modal = document.getElementById("modal-form");
  
  if (!usuarioId || !nome || !email || !telefone || !funcao || !senha || !senhaHelp || !titulo || !modal) return;
  
  usuarioId.value = user._id || user.id;
  nome.value = user.nome;
  email.value = user.email;
  telefone.value = user.telefone || '';
  funcao.value = user.funcao || CONFIG.FUNCOES.USUARIO;
  senha.value = '';
  senha.required = false;
  senhaHelp.style.display = "block";
  titulo.textContent = "Editar Usuário";
  
  // Aplicar estilo baseado na função selecionada
  funcao.classList.remove('admin-selected', 'user-selected');
  if (funcao.value === 'administrador') {
    funcao.classList.add('admin-selected');
  } else if (funcao.value === 'usuario') {
    funcao.classList.add('user-selected');
  }
  
  modal.style.display = "flex";
}

// Função para deletar usuário via API
async function deletarUsuario(userId) {
  if (!userId) {
    alert('ID do usuário não encontrado!');
    return;
  }

  if (confirm("Deseja realmente excluir este usuário?")) {
    const loading = document.getElementById("loading");
    if (loading) loading.style.display = "block";
    
    try {
      const resposta = await fetch(`${API_URL}/${userId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      if (resposta.ok) {
        const resultado = await resposta.json();
        alert(resultado.message || 'Usuário excluído com sucesso!');
        
        const buscarUsuario = document.getElementById("buscar-usuario");
        const buscarPorId = document.getElementById("buscar-por-id");
        if (buscarUsuario) buscarUsuario.value = '';
        if (buscarPorId) buscarPorId.value = '';
        
        carregarUsuarios();
      } else {
        const textoErro = await resposta.text();
        try {
          const erro = JSON.parse(textoErro);
          alert(`Erro ao excluir usuário: ${erro.message || 'Erro desconhecido'}`);
        } catch {
          alert(`Erro ao excluir usuário: ${textoErro || 'Erro desconhecido'}`);
        }
      }
    } catch (erro) {
      console.error('Erro de conexão na exclusão:', erro);
      alert('Erro de conexão!');
    } finally {
      if (loading) loading.style.display = "none";
    }
  }
}

function renderUsuariosFiltrados(usuariosFiltrados) {
  const tabela = document.getElementById("tabela-usuarios");
  const contador = document.getElementById("contador-resultados");
  
  if (!tabela || !contador) return;
  
  tabela.innerHTML = "";
  usuariosFiltrados.forEach((user) => {
    const indexOriginal = usuarios.findIndex(u => (u._id || u.id) === (user._id || user.id));
    const userId = user._id || user.id;
    
    // Formatar a função para exibição
    const funcaoDisplay = formatarFuncaoDisplay(user.funcao);
    
    tabela.innerHTML += `
      <tr>
        <td>${userId}</td>
        <td>${user.nome}</td>
        <td>${user.email}</td>
        <td>${user.telefone || 'N/A'}</td>
        <td>${funcaoDisplay}</td>
        <td>
          <button class="login-btn btn-editar" data-index="${indexOriginal}" style="padding:4px 10px; font-size:13px;">Editar</button>
          <button class="login-btn btn-excluir" data-user-id="${userId}" style="background:#d9534f; padding:4px 10px; font-size:13px;">Excluir</button>
        </td>
      </tr>
    `;
  });
  
  contador.textContent = `Exibindo ${usuariosFiltrados.length} de ${usuarios.length} usuário(s) - Busca ativa`;
}

// Função para aplicar estilo baseado na função selecionada
function aplicarEstiloFuncao() {
  const selectFuncao = document.getElementById('funcao');
  if (selectFuncao) {
    selectFuncao.addEventListener('change', function() {
      // Remove classes anteriores
      selectFuncao.classList.remove('admin-selected', 'user-selected');
      
      // Adiciona classe baseada no valor selecionado
      if (this.value === 'administrador') {
        selectFuncao.classList.add('admin-selected');
      } else if (this.value === 'usuario') {
        selectFuncao.classList.add('user-selected');
      }
    });
    
    // Aplicar estilo inicial se já houver valor selecionado
    if (selectFuncao.value === 'administrador') {
      selectFuncao.classList.add('admin-selected');
    } else if (selectFuncao.value === 'usuario') {
      selectFuncao.classList.add('user-selected');
    }
  }
}

// Inicialização quando a página carrega
document.addEventListener('DOMContentLoaded', function() {
  // Verificar se estamos na página config_adm
  if (document.getElementById("tabela-usuarios")) {
    
    // Carregar usuários ao inicializar
    carregarUsuarios();

    // Event listener para o formulário
    const formUsuario = document.getElementById("form-usuario");
    if (formUsuario) {
      formUsuario.addEventListener("submit", async function (e) {
        e.preventDefault();
        const userId = document.getElementById("usuario-id").value;
        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;
        const telefone = document.getElementById("telefone").value;
        const funcao = document.getElementById("funcao").value;
        const senha = document.getElementById("senha").value;

        // Validação para garantir que uma função seja selecionada
        if (!funcao || !validarFuncao(funcao)) {
          alert('Por favor, selecione uma função válida para o usuário!');
          return;
        }

        const userData = {
          nome,
          email,
          telefone,
          funcao
        };

        if (senha) {
          userData.senha = senha;
        }

        try {
          let resposta;
          
          if (userId) {
            resposta = await fetch(`${API_URL}/${userId}`, {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(userData)
            });
          } else {
            if (!senha) {
              alert('Senha é obrigatória para novos usuários!');
              return;
            }
            
            resposta = await fetch(API_URL, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(userData)
            });
          }
          
          if (resposta.ok) {
            const resultado = await resposta.json();
            const funcaoDisplay = formatarFuncaoDisplay(funcao);
            const mensagem = userId ? 
              `Usuário atualizado com sucesso! Função: ${funcaoDisplay}` : 
              `Usuário cadastrado com sucesso! Função: ${funcaoDisplay}`;
            alert(mensagem);
            fecharFormulario();
            carregarUsuarios();
          } else {
            const erro = await resposta.json();
            alert(`Erro ao salvar usuário: ${erro.message || 'Erro desconhecido'}`);
          }
        } catch (erro) {
          console.error('Erro:', erro);
          alert('Erro de conexão!');
        }
      });
    }

    // Funcionalidade de busca geral
    const buscarUsuario = document.getElementById("buscar-usuario");
    if (buscarUsuario) {
      buscarUsuario.addEventListener("input", function(e) {
        const termoBusca = e.target.value.toLowerCase();
        
        if (termoBusca === '') {
          carregarUsuarios();
          return;
        }

        const usuariosFiltrados = usuarios.filter(user => 
          user.nome.toLowerCase().includes(termoBusca) ||
          user.email.toLowerCase().includes(termoBusca) ||
          (user.funcao && user.funcao.toLowerCase().includes(termoBusca)) ||
          (user._id && user._id.toLowerCase().includes(termoBusca)) ||
          (user.id && user.id.toString().toLowerCase().includes(termoBusca))
        );
        renderUsuariosFiltrados(usuariosFiltrados);
      });
    }

    // Funcionalidade de busca por ID específico
    const buscarPorId = document.getElementById("buscar-por-id");
    if (buscarPorId) {
      buscarPorId.addEventListener("input", function(e) {
        const idBusca = e.target.value.trim();
        
        const buscarUsuario = document.getElementById("buscar-usuario");
        if (buscarUsuario) buscarUsuario.value = '';
        
        if (idBusca === '') {
          carregarUsuarios();
          return;
        }

        if (idBusca.length >= 3) {
          buscarUsuarioPorId(idBusca);
        }
      });

      buscarPorId.addEventListener("keypress", function(e) {
        if (e.key === 'Enter') {
          const idBusca = e.target.value.trim();
          if (idBusca) {
            buscarUsuarioPorId(idBusca);
          }
        }
      });
    }

    // Event delegation para botões de editar e excluir
    const tabelaUsuarios = document.getElementById('tabela-usuarios');
    if (tabelaUsuarios) {
      tabelaUsuarios.addEventListener('click', function(e) {
        if (e.target.classList.contains('btn-editar')) {
          const index = parseInt(e.target.getAttribute('data-index'));
          editarUsuario(index);
        } else if (e.target.classList.contains('btn-excluir')) {
          const userId = e.target.getAttribute('data-user-id');
          deletarUsuario(userId);
        }
      });
    }

    aplicarEstiloFuncao();
  }
});
