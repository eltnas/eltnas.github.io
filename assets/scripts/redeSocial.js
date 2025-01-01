let linkToFace = "https://www.facebook.com/eltnasdev";
let linkToLinkedin = "https://www.linkedin.com/in/eltnas/";
let linkToInsta = "https://www.instagram.com/eltnas.dev/";
let linkToUser = "https://eltnas.github.io/";
function toSocialPage(val){
    if(val === "face"){
        window.open(linkToFace)
    }
    else if(val === "linkedin"){
        window.open(linkToLinkedin)
    }
    else if(val === "instagram"){
        window.open(linkToInsta)
    }
    else if(val === "pessoal"){
        window.open(linkToUser)
    }
}