// --- 1. SELEÇÃO DOS MODAIS ---
const modalCadastro = document.getElementById('modal-cadastro');
const modalLogin = document.getElementById('modal-login');
const modalEsqueci = document.getElementById('modal-esqueci');
const modalNovaSenha = document.getElementById('modal-nova-senha');

// --- 2. BOTÕES DO TOPO (HEADER) ---
const btnAbrirLogin = document.getElementById('btn-login-topo');
const btnAbrirCadastro = document.getElementById('btn-cadastro-topo');

// --- 3. LINKS DE TROCA INTERNA (ENTRE MODAIS) ---
const linkEsqueciSenha = document.querySelector('.forgot-password');
const linkIrParaLogin = document.getElementById('ir-para-login');
const linkTrocarParaCadastro = document.getElementById('trocar-para-cadastro');
const linkVoltarCadastroEsqueci = document.getElementById('voltar-para-cadastro');
const linkTrocarCadastroNova = document.getElementById('trocar-cadastro-nova');

// --- 4. BOTÕES DE FECHAR (X) ---
const btnFecharCadastro = document.getElementById('fechar-modal');
const btnFecharLogin = document.getElementById('fechar-login');
const btnFecharEsqueci = document.getElementById('fechar-esqueci');
const btnFecharNovaSenha = document.getElementById('fechar-nova-senha');

// --- FUNÇÃO PARA LIMPAR A TELA (FECHAR TUDO) ---
function fecharTodosModais() {
    if (modalCadastro) modalCadastro.style.display = 'none';
    if (modalLogin) modalLogin.style.display = 'none';
    if (modalEsqueci) modalEsqueci.style.display = 'none';
    if (modalNovaSenha) modalNovaSenha.style.display = 'none';
}

// --- LÓGICA DE ABERTURA PELO TOPO ---
if (btnAbrirLogin) {
    btnAbrirLogin.addEventListener('click', (e) => {
        e.preventDefault();
        fecharTodosModais();
        if (modalLogin) modalLogin.style.display = 'flex';
    });
}

if (btnAbrirCadastro) {
    btnAbrirCadastro.addEventListener('click', (e) => {
        e.preventDefault();
        fecharTodosModais();
        if (modalCadastro) modalCadastro.style.display = 'flex';
    });
}

// --- LÓGICA DE TROCAS INTERNAS ---

// Do Login para o Esqueci Senha
if (linkEsqueciSenha) {
    linkEsqueciSenha.addEventListener('click', (e) => {
        e.preventDefault();
        fecharTodosModais();
        if (modalEsqueci) modalEsqueci.style.display = 'flex';
    });
}

// Do Esqueci Senha para o Cadastro
if (linkVoltarCadastroEsqueci) {
    linkVoltarCadastroEsqueci.addEventListener('click', (e) => {
        e.preventDefault();
        fecharTodosModais();
        if (modalCadastro) modalCadastro.style.display = 'flex';
    });
}

// Do Login para o Cadastro
if (linkTrocarParaCadastro) {
    linkTrocarParaCadastro.addEventListener('click', (e) => {
        e.preventDefault();
        fecharTodosModais();
        if (modalCadastro) modalCadastro.style.display = 'flex';
    });
}

// Do Cadastro para o Login
if (linkIrParaLogin) {
    linkIrParaLogin.addEventListener('click', (e) => {
        e.preventDefault();
        fecharTodosModais();
        if (modalLogin) modalLogin.style.display = 'flex';
    });
}

// Da Nova Senha para o Cadastro (Link -CADASTRE-SE-)
if (linkTrocarCadastroNova) {
    linkTrocarCadastroNova.addEventListener('click', (e) => {
        e.preventDefault();
        fecharTodosModais();
        if (modalCadastro) modalCadastro.style.display = 'flex';
    });
}

// --- CONFIGURAÇÃO DOS BOTÕES DE FECHAR (X) ---
if (btnFecharCadastro) btnFecharCadastro.onclick = fecharTodosModais;
if (btnFecharLogin) btnFecharLogin.onclick = fecharTodosModais;
if (btnFecharEsqueci) btnFecharEsqueci.onclick = fecharTodosModais;
if (btnFecharNovaSenha) btnFecharNovaSenha.onclick = fecharTodosModais;

// --- FECHAR AO CLICAR NO FUNDO ESCURO (OVERLAY) ---
window.addEventListener('click', (e) => {
    const overlays = [modalCadastro, modalLogin, modalEsqueci, modalNovaSenha];
    if (overlays.includes(e.target)) {
        fecharTodosModais();
    }
});