document.addEventListener('DOMContentLoaded', function() {
    fetch('../../link.json')
        .then(response => response.json())
        .then(dados => {
            const container = document.getElementById('portfolio-container');

            dados.forEach(item => {
                // Criando o item do portfolio e todo o seu conteúdo interno usando innerHTML
                const portfolioItemHTML = `
                  <div class="col-lg-4 col-md-6 portfolio-item filter-${item.tipo}">
                    <div class="portfolio-wrap">
                      <img src="${item.image}" class="img-fluid" alt="${item.nome}">
                      <div class="portfolio-links">
                        <a href="${item.image}" data-gallery="portfolioGallery" class="portfolio-lightbox" title="${item.nome}"><i class="bx bx-plus"></i></a>
                        <a href="${item.link}" title="Mais detalhes"><i class="bx bx-link"></i></a>
                      </div>
                    </div>
                  </div>
                `;

                console.log(portfolioItemHTML)
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = portfolioItemHTML.trim();

                container.appendChild(tempDiv.firstChild);

                console.log(portfolioItemHTML)
            });
        })
        .catch(error => console.error('Erro ao carregar os dados:', error));
});
