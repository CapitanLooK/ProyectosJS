//lista de items
const lista = [
    {
        id: 1,
        titulo: "mirror",
        categoria: "photos",
        precio: 15,
        img: "src/img/mirror.jpg",
        desc: "36 sexy pics",
    },
    { 
        id: 2,
        titulo: "st. valentine",
        categoria: "photos",
        precio: 18,
        img: "src/img/stValentine.jpg",
        desc: "48 full nude pics",
    },
    {
        id: 3,
        titulo: "jacuzzi",
        categoria: "photos",
        precio: 22,
        img: "src/img/jacuzzi.jpg",
        desc: "26 pics full nude",
    },
    {
        id: 4,
        titulo: "nun",
        categoria: "photos",
        precio: 18,
        img: "src/img/nun.jpg",
        desc: "70 sexy pics HD",
    },
    {
        id: 5,
        titulo: "hail succubus",
        categoria: "photos",
        precio: 14,
        img: "src/img/hailSuccubus.jpg",
        desc: "26 sexy pics, topless",
    },
    {
        id: 6,
        titulo: "baby doll",
        categoria: "photos",
        precio: 12,
        img: "src/img/babyDoll.jpg",
        desc: "30 pics soft HD",
    },
    {
        id: 7,
        titulo: "sailor porn",
        categoria: "videos",
        precio: 15,
        img: "src/img/sailor.jpg",
        desc: "strip dance, toples",
    },
    {
        id: 8,
        titulo: "sinner",
        categoria: "videos",
        precio: 23,
        img: "src/img/sinner.jpg",
        desc: "strip dance, full nude, masturbation",
    },
    {
        id: 9,
        titulo: "pentagram",
        categoria: "photos",
        precio: 18,
        img: "src/img/pentagram.jpg",
        desc: "25 sexy pics",
    },
    {
        id: 10,
        titulo: "sailor b!tch",
        categoria: "videos",
        precio: 12,
        img: "src/img/sailorBitch.jpg",
        desc: "17 sexy pics",
    },
    {
        id: 11,
        titulo: "booty shake",
        categoria: "videos",
        precio: 10,
        img: "src/img/booty.jpg",
        desc: "2 min full nude twerk video",
    },
    {
        id: 12,
        titulo: "cucumber",
        categoria: "videos",
        precio: 32,
        img: "src/img/cucumber.jpg",
        desc: "cucumber masturbation",
    },

    {
        id: 13,
        titulo: "toy",
        categoria: "combo",
        precio: 20,
        img: "src/img/toy.jpg",
        desc: "10 pics, nude, 1 shor video",
    },
    {
        id: 14,
        titulo: "hail satan",
        categoria: "combo",
        precio: 32,
        img: "src/img/hailSatan.jpg",
        desc: "10 pics full nude, 15 min video",
    },
    {
        id: 15,
        titulo: "dark sunday",
        categoria: "combo",
        precio: 16,
        img: "src/img/darkSunday.jpg",
        desc: "10 pics full nude, 2 minutos video strip dance",
    },
    {
        id: 16,
        titulo: "soft",
        categoria: "combo",
        precio: 18,
        img: "src/img/soft.jpg",
        desc: "24 soft pics, 1 video",
    },
    {
        id: 17,
        titulo: "evening",
        categoria: "combo",
        precio: 18,
        img: "src/img/evening.jpg",
        desc: "9 sexy pics, 1 short video",
    },
    {
        id: 18,
        titulo: "student",
        categoria: "combo",
        precio: 20,
        img: "src/img/student.jpg",
        desc: "36 sexy pics, 1 strip dance video",
    },
    {
        id: 19,
        titulo: "mistress",
        categoria: "combo",
        precio: 15,
        img: "src/img/mistress.jpg",
        desc: "25 sexy pics, 1 short video",
    },
    {
        id: 20,
        titulo: "blow job + sex",
        categoria: "videos",
        precio: 25,
        img: "src/img/bj.jpg",
        desc: "1 12min BJ video, 1 12min sex video",
    },
    {
        id: 21,
        titulo: "cybergoth",
        categoria: "videos",
        precio: 32,
        img: "src/img/cyber.jpg",
        desc: "1 cybergoth masturbation video",
    },
];
const sectionCenter = document.querySelector('.section-center');
const container = document.querySelector('.btn-container')



//carga de items
window.addEventListener('DOMContentLoaded', () => {
    mostrarListaPacks(lista);
    mostrarListaBotones();
});


function mostrarListaPacks(listaPacks){
    let mostrarLista = listaPacks.map((pack)=>{
        
        return `<article class="lista-pack">
                <img src=${pack.img} class="photo" alt="producto">
                <div class="pack-info">
                    <header>
                        <h4>${pack.titulo}</h4>
                        <h4 class="precio">$${pack.precio}</h4>
                    </header>
                    <p>
                        ${pack.desc}
                    </p>
                </div>
                </article>`;
    });

    mostrarLista = mostrarLista.join("");
    sectionCenter.innerHTML = mostrarLista;
}

function mostrarListaBotones(){
    const categorias = lista.reduce( (valores, lista) => {
        if(!valores.includes(lista.categoria)){
            valores.push(lista.categoria);
        }
        return valores;  
    },
    ['all']
    );
    const categoriaBtns = categorias.map((categoria) => {
        return `
        <button class="filter-btn" type="button" data-id=${categoria}>${categoria}</button>
        `
    })
    .join("");
    container.innerHTML = categoriaBtns;
    const filterBtns = container.querySelectorAll('.filter-btn');
    //filtrado de items
    filterBtns.forEach( (btn) => {
        btn.addEventListener("click", (e) => {
           const categoria = e.currentTarget.dataset.id;
           const listaCategoria = lista.filter((listaPack) => {
           
            if(listaPack.categoria === categoria){
                return listaPack;
            }
            });
           
           if(categoria === "all"){
               mostrarListaPacks(lista);
           } else {
               mostrarListaPacks(listaCategoria);
           }
    
        });
    });
};