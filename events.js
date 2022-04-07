window.onload = function () {
    /* let div = document.getElementsByTagName('div'); */
    /* div[0].addEventListener('click', () => {
        alert("Saludo desde Javascript y Eventos")
    }) */
    /*     for (let i = 0; i < div.length; i++) {
            div[i].addEventListener('click', saludo);
        }
    
    
        let divs = document.querySelectorAll('div');
        divs.forEach((div) => {
            div.addEventListener('mouseover', saludo2);
        })
    
        let list = document.querySelectorAll('li');
        list.forEach((li) => {
            li.addEventListener('mouseover', (evento) => {
                evento.target.style.backgroundColor = "gray";
                //this.style.backgroundColor = "gray";
            })
    
            li.addEventListener('mouseout', (evento) => {
                evento.target.style.backgroundColor = "white";
            })
        })
    
    
        let links = document.getElementsByTagName('a');
        for (let i = 0; i < links.length; i++) {
            links[i].addEventListener('click', test1)
        }
    
        let email = document.querySelector('#email'); */
    /* email.addEventListener('keyup', (event) => {
        console.log(event.key)
        console.log(event.keyCode);
        if(event.key == 'Enter'){
            alert("Enviado datos");
        }
    }) */

    /*  email.addEventListener('keypress', (evento) => {
         console.log(evento.keyCode);
         if (evento.keyCode >= 57 && evento.keyCode <= 48) {
             evento.returnValue = false;
         }
     })
 
     let child = document.querySelector('#child');
     child.parentNode.addEventListener('click', (event) => {
         event.target.remove()
     }) */

    window.addEventListener('mousemove', (evento) => {
        console.log(window.screen.width);
        console.log(window.screen.height);
        let div = document.querySelector('div');
        const { x, y } = evento;
        div.style.position = "absolute";
        div.style.top = (y - 50) + "px";
        div.style.left = (x - 50) + "px";
        div.style.borderRadius = "100%";
        div.style.background = "url(https://picsum.photos/id/237/100/100)"
    })

}


function test1(e) {
    e.preventDefault();
    console.log("a1")
    e.target.removeEventListener('click', test1);
}

function saludo(event) {
    console.log(event);
    const { target } = event;
    console.log(target);
    target.style.backgroundColor = "red";
    target.id = "div"
}

function saludo2(event) {
    console.log(event);
    console.log("Otro evento");
}


let date = new Date();
date.getFullYear();

let text = "Hola hoy estamos a " + date.getFullYear();
console.log(text);