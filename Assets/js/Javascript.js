const el1 = document.getElementById('first');
const el2 = document.getElementById('second');
let bkg = 1;

function chgBkg() {

    if(bkg == 0){
        bkg = 1;
        el1.style.display = 'none';
        el2.style.display = 'block';

        console.log(bkg)
    }
    else if(bkg == 1) {
        bkg = 0;
        el2.style.display = 'none';
        el1.style.display = 'block';

        console.log(bkg)
    }
}

setInterval(chgBkg, 5000);


console.log(el1);
console.log(el2);