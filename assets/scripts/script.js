const jsonData = [
    {
        "nome" : "Marvel",
        "link" : "https://marvel-eltnas.vercel.app/",
        "image" : "assets/image/portfolio/marvel.webp",
        "categoria" : "HTML"
    },{
        "nome" : "Cullinaria",
        "link" : "https://marvel-eltnas.vercel.app/",
        "image" : "assets/image/portfolio/Culinaria.webp",
        "categoria" : "HTML"
    },{
        "nome" : "Jokenpo",
        "link" : "https://marvel-eltnas.vercel.app/",
        "image" : "assets/image/portfolio/Jokenpo.webp",
        "categoria" : "HTML"
    },{
        "nome" : "Netflix",
        "link" : "https://marvel-eltnas.vercel.app/",
        "image" : "assets/image/portfolio/netflix-clone.webp",
        "categoria" : "HTML"
    },{
        "nome" : "Jogo da Velha",
        "link" : "https://marvel-eltnas.vercel.app/",
        "image" : "assets/image/portfolio/Tic-Tac-Toe.webp",
        "categoria" : "HTML"
    }
];

// Verifica se o contêiner existe no DOM
const portfolioBox = document.getElementById("portifolio-box");

if (portfolioBox) {
    // Itera sobre o JSON para criar os elementos
    jsonData.forEach(item => {
        const cardHTML = `
            <div class="card ${item.categoria}">
                <div class="card-img">
                    <img src="${item.image}" alt="${item.nome}">
                </div>
                <div class="caption">
                    ${item.nome}
                </div>
            </div>
        `;
        
        // Adiciona o HTML ao contêiner
        portfolioBox.innerHTML += cardHTML;
    });
} else {
    console.error("Elemento com ID 'portifolio-box' não encontrado!");
}

// Função para alterar a exibição das seções
function changeSection(id) {
    // Pegando todas as seções
    const sections = document.querySelectorAll('.pageBox');
    
    // Escondendo todas as seções
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Mostrando a seção clicada
    const sectionToShow = document.getElementById(id);
    if (sectionToShow) {
        sectionToShow.style.display = 'flex';
    }
}

// Função que será chamada quando um item de navegação for clicado
function handleMenuClick(event) {
    // Pegando o id da seção através do atributo data-id
    const sectionId = event.target.getAttribute('data-id');
    changeSection(sectionId);
}

// Função para configurar a navegação
function setupNavigation() {
    // Pegando todos os itens do menu
    const navLinks = document.querySelectorAll('.nav-menu .menu-itens');
    
    // Atribuindo a função onclick para cada item de navegação
    navLinks.forEach(link => {
        link.addEventListener('click', handleMenuClick);
    });
}

// Inicializando a navegação ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    // Exibe a primeira seção (Home) por padrão ao carregar
    changeSection('pageHome');
    setupNavigation();
});

