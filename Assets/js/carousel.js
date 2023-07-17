const 
fetch('../../link.json')
    .then((response) => response.json())
    .then(data => {
        const dataItem = data.length;
        const boxLang = document.querySelector(".box-languages");
        data.forEach(dataItem =>{
            let proj = dataItem.image;
            const divBox = document.createElement('div');
            divBox.classList.add("box")
            divBox.id = dataItem.id;
            console.log(divBox);


        })

})