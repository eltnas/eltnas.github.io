const menuBtns = document.querySelectorAll(".opt_menu");
const pages = [
    document.querySelector("#pageHome"),
    document.querySelector("#header_content"),
    document.querySelector("#pages_content"),
    document.querySelector("#pageAboutMe"),
    document.querySelector("#pageResume"),
    document.querySelector("#pagePortifolio"),
    document.querySelector("#pageTestimonials"),
    document.querySelector("#pageContact")
];
const menuPages = document.querySelectorAll(".opt_menu");

menuPages.forEach((menuPage, index) => {
    menuPage.addEventListener("click", () => {
        // Remove a classe "active" de todos os itens do menu
        document.querySelectorAll(".opt_menu").forEach((e) => {
            e.classList.remove("active");
        });

        // Adiciona a classe "active" ao botão do menu clicado
        menuPage.classList.add("active");
        
    });
});

function showPage(value1, value2){
    let page1 = pages[value1].id;
    let page2 = pages[value2].id;
    pages.forEach(page => {
        page.style.display = "none";
    });

    if (value1 >= 0 && value1 < pages.length && value2 >= 0 && value2 < pages.length) {
        let page1 = pages[value1];
        let page2 = pages[value2];

        if (page1) {
            page1.style.display = "flex";
        }

        if (page2) {
            page2.style.display = "flex";
        }
    }
    else {
        console.error("Índice(s) inválido(s)!");
    }
    
}
