const jsonData = [
    {
        "nome" : "Marvel",
        "link" : "https://marvel-eltnas.vercel.app/",
        "image" : "assets/image/portfolio/marvel.webp",
        "categoria" : "HTML"
    },{
        "nome" : "Calculadora IMC",
        "link" : "https://imc-web.vercel.app/",
        "image" : "assets/image/portfolio/imc-calc.png",
        "categoria" : "HTML"
    },{
        "nome" : "Calculadora de Gorjetas",
        "link" : "https://calc-gorjetas.vercel.app/",
        "image" : "assets/image/portfolio/calc-gorjetas.png",
        "categoria" : "HTML game"
    },{
        "nome" : "Jogo da Velha",
        "link" : "https://tic-tac-toe-three-drab.vercel.app/",
        "image" : "assets/image/portfolio/jogo-da-velha.png",
        "categoria" : "HTML game"
    },{
        "nome" : "Jokempo",
        "link" : "https://rock-papper-scisor.vercel.app/",
        "image" : "assets/image/portfolio/rock-papper-scisor.png",
        "categoria" : "HTML game"
    },{
        "nome" : "Mata Insetos",
        "link" : "https://pega-inseto.vercel.app/",
        "image" : "assets/image/portfolio/mata-insetos.png",
        "categoria" : "HTML game"
    }
];

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
    // Verifica se o contêiner existe no DOM
    const portfolioBox = document.getElementById("portifolio-box");

    if (portfolioBox) {
        // Itera sobre o JSON para criar os elementos
        jsonData.forEach(item => {
            const cardHTML = `
            <div class="card ${item.categoria}" onClick="window.open('${item.link}')">
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
    // Exibe a primeira seção (Home) por padrão ao carregar
    changeSection('pageHome');
    setupNavigation();
});

function goToPage(id){
    changeSection(id);
    // alert(id)
}

function dowloadResume(){
    let linkDownload = "./assets/docs/resume_elton.pdf"
    let a = document.createElement("a");
    a.href = linkDownload;
    a.download = "resume_elton.pdf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

document.addEventListener("DOMContentLoaded", () => {
    const typedFunctions = document.querySelector(".typed_function");

    if (typedFunctions){
        let typedStrings = typedFunctions.getAttribute('data-typed-items');
        typedStrings = typedStrings.split(',');

        new Typed('.typed_function', {
            strings: typedStrings,
            loop: true,
            typeSpeed: 50,
            backSpeed: 10,
            backDelay: 2000
        });
    }

})

function showHiddeMenuMobile(value){
    const menuMobile = document.querySelector(".menu-mobile");
    const openMenu = document.querySelector(".icon-menu");
    let showHiden = value;

    if (showHiden == "show"){
        menuMobile.style.display = 'block';
        openMenu.style.display = 'none';
    }
    if (showHiden == "hiden"){
        menuMobile.style.display = 'none';
        openMenu.style.display = 'block';
    }



}
