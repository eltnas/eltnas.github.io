console.log("   dados.js carregado");

async function fetchData() {
    try {
        const response = await fetch('./assets/dados/dados.json');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erro ao buscar os dados:', error);

    }
}

fetchData().then(data => {
    const homeNomeElement = document.getElementById('home-nome');
    if (homeNomeElement) {
        homeNomeElement.textContent = data.home.nome;
    }
});

fetchData().then(data => {
    const typedRoleElement = document.querySelector('.role-badge');
    if (typedRoleElement && data.home.profissao) {
        typedRoleElement.innerHTML = '<span class="typed-text"></span>';
        new Typed('.typed-text', {
            strings: data.home.profissao,
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: 2000,
            loop: true,
            showCursor: true,
            cursorChar: '|'
        });
    }
});

fetchData().then(data => {
    const desc = document.querySelector('.description');
    if (desc) {
        desc.textContent = data.home.frase;
    }
});

fetchData().then(data => {
    const resumeEducationElement = document.getElementById('resume-education');
    if (resumeEducationElement && data.resume.educacao) {
        let educationHTML = '';
        data.resume.educacao.forEach(edu => {
            educationHTML += `
                <div class="resume-item">
                    <span class="date-badge">${edu.ano}</span>
                    <h4>${edu.curso}</h4>
                    <h5>${edu.ano}</h5>
                    <p><em>${edu.instituicao}</em></p>
                    <p>${edu.descricao}</p>
                </div>
            `;
        });
        resumeEducationElement.innerHTML += educationHTML;
    }
});

fetchData().then(data => {
    const resumeExperienceElement = document.getElementById('resume-experience');
    if (resumeExperienceElement && data.resume.experiencia) {
        let experienceHTML = '';
        data.resume.experiencia.forEach(exp => {
            experienceHTML += `
                <div class="resume-item">
                    <span class="date-badge">${exp.ano}</span>
                    <h4>${exp.funcao}</h4>
                    <h5>${exp.ano}</h5>
                    <p><em>${exp.empresa}</em></p>
                    <p>${exp.descricao}</p>
                </div>
            `;
        });
        resumeExperienceElement.innerHTML += experienceHTML;
    }
});

fetchData().then(data => {
    const portfolioGridElement = document.getElementById('portfolioGrid');
    if (portfolioGridElement && data.portifolio) {
        let portfolioHTML = '';
        data.portifolio.forEach(item => {
            portfolioHTML += `
                <div class="portfolio-item ${item.categoria}">
                    <a href ="${item.link}" target="_blank">
                        <img src="${item.imagem}" alt="${item.titulo}">
                        <div class="overlay">
                            <h3>${item.titulo}</h3>
                            <p>${item.descricao || item.sub || ''}</p>
                        </div>
                    </a>
                </div>
            `;
        });
        portfolioGridElement.innerHTML += portfolioHTML;
    }
});