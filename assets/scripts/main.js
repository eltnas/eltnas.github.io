const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove a classe 'active' de todos e adiciona no clicado
        filterBtns.forEach(b => b.classList.remove('active_filter'));
        btn.classList.add('active_filter');

        const filterValue = btn.getAttribute('data-filter');

        // Percorre as imagens
        portfolioItems.forEach(item => {
            if (filterValue === 'all' || item.classList.contains(filterValue)) {
                item.classList.remove('hide'); // Mostra
            } else {
                item.classList.add('hide'); // Esconde
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const typedFunctions = document.querySelector(".typed-role");
    if (typedFunctions){
        let typedStrings = typedFunctions.getAttribute('data-typed-items');
        typedStrings = typedStrings.split(',');

        new Typed('.typed-role', {
            strings: typedStrings,
            loop: true,
            typeSpeed: 100,
            backSpeed: 10,
            backDelay: 2000
        });
    }
});

// function changeSection(sectionId) {
//     const sections = document.querySelectorAll("section");
//     sections.forEach(section => {
//         section.style.display = "none";
//     });

//     const targetSection = document.getElementById(sectionId);
//     if (targetSection) {
//         targetSection.style.display = "flex";
//     }
// }

// function setupNavigation() {
//     const navLinks = document.querySelectorAll(".sidebar-nav a");
//     navLinks.forEach(link => {
//         link.addEventListener("click", (e) => {
//             e.preventDefault();
//             const targetText = link.textContent.trim().toLowerCase().replace(" ", "");
//             changeSection('page' + targetText.charAt(0).toUpperCase() + targetText.slice(1));
//             // Atualiza a classe 'active'
//             navLinks.forEach(l => l.classList.remove("active"));
//             link.classList.add("active");
//         });
//     });
// }

// document.addEventListener("DOMContentLoaded", () => {
//     setupNavigation();
// });

const sectionsId = ['home', 'about', 'resume', 'portfolio', 'contact'];
function changeSection(sectionId) {
    sectionsId.forEach(id => {
        const section = document.getElementById(id);
        if (section) {
            section.style.display = (id === sectionId) ? "flex" : "none";
        }
    });

    // Atualiza a classe 'active' nos ícones da barra lateral
    sectionsId[sectionId].style.display = "flex";
}