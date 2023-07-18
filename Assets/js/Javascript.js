// Parte do Background
const el1 = document.getElementById('first');
const el2 = document.getElementById('second');
let bkg = 1;

function chgBkg() {
    if (bkg == 0) {
        bkg = 1;
        el1.style.display = 'none';
        el2.style.display = 'block';
    } else if (bkg == 1) {
        bkg = 0;
        el2.style.display = 'none';
        el1.style.display = 'block';
    }
}

setInterval(chgBkg, 5000);

// Parte do Carousel
const boxLang = document.querySelector(".box-languages");
var imgLink = [];
var currentImg = 0;

fetch('../../link.json')
    .then((response) => response.json())
    .then(data => {
        const dataLength = data.length;
        const imgEl = [];

        // Adicione as divs de imagem ao carousel
        for (let i = 0; i < 3; i++) {
            const imgDiv = document.createElement('div');
            imgDiv.classList.add('box');

            const imgElement = document.createElement('img');
            imgEl.push(imgElement);
            imgDiv.appendChild(imgElement);
            boxLang.appendChild(imgDiv);

            const link = document.createElement('a');
            link.href = data[i].link;
            link.target = '_blank';
            link.appendChild(imgElement);
            imgDiv.appendChild(link);

            imgElement.src = data[i].image;
            imgElement.alt = data[i].nome;
        }

        console.log(imgEl);

        let currentImgIndex = 0;

        function updateCarousel() {
            // Atualiza a posição das imagens no carousel
            for (let i = 0; i < 3; i++) {
                const imgElement = imgEl[i];
                const index = (currentImgIndex + i) % dataLength;
                imgElement.src = data[index].image;
                imgElement.alt = data[index].nome;
                imgElement.dataset.link = data[index].link;
            }

            currentImgIndex = (currentImgIndex + 1) % dataLength;
        }

        updateCarousel();

        setInterval(updateCarousel, 3000);
    });
