//lista de items
const lista = [
    {
        id: 1,
        titulo: "pack 1",
        categoria: "fotos",
        precio: 15,
        img: "../backIndex.jpg",
        desc: "descripcion del pack",
    },
    {
        id: 2,
        titulo: "pack 2",
        categoria: "fotos",
        precio: 15,
        img: ".src/img/backIndex.jpg",
        desc: "descripcion del pack",
    },
    {
        id: 3,
        titulo: "pack 3",
        categoria: "fotos",
        precio: 15,
        img: ".src/img/backIndex.jpg",
        desc: "descripcion del pack",
    },
    {
        id: 4,
        titulo: "pack 4",
        categoria: "fotos",
        precio: 15,
        img: ".src/img/backIndex.jpg",
        desc: "descripcion del pack",
    },
    {
        id: 5,
        titulo: "pack 5",
        categoria: "fotos",
        precio: 15,
        img: ".src/img/backIndex.jpg",
        desc: "descripcion del pack",
    },
    {
        id: 6,
        titulo: "pack 6",
        categoria: "fotos",
        precio: 15,
        img: ".src/img/backIndex.jpg",
        desc: "descripcion del pack",
    },
    {
        id: 7,
        titulo: "pack 7",
        categoria: "videos",
        precio: 15,
        img: ".src/img/backIndex.jpg",
        desc: "descripcion del pack",
    },
    {
        id: 8,
        titulo: "pack 8",
        categoria: "videos",
        precio: 15,
        img: ".src/img/backIndex.jpg",
        desc: "descripcion del pack",
    },
    {
        id: 9,
        titulo: "pack 9",
        categoria: "videos",
        precio: 15,
        img: ".src/img/backIndex.jpg",
        desc: "descripcion del pack",
    },
    {
        id: 10,
        titulo: "pack 10",
        categoria: "videos",
        precio: 15,
        img: ".src/img/backIndex.jpg",
        desc: "descripcion del pack",
    },
    {
        id: 11,
        titulo: "pack 11",
        categoria: "videos",
        precio: 15,
        img: ".src/img/backIndex.jpg",
        desc: "descripcion del pack",
    },
    {
        id: 12,
        titulo: "pack 12",
        categoria: "videos",
        precio: 15,
        img: ".src/img/backIndex.jpg",
        desc: "descripcion del pack",
    },
];
const sectionCenter = document.querySelector('.section-center');
const filterBtns = document.querySelector('filter-btn');



//carga de items
window.addEventListener('DOMContentLoaded', () => {
    mostrarListaPacks(lista);
});

//filtrado de items
filterBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        console.log(e.currentTarget.dataset)
    })
    
});



function mostrarListaPacks(listaPacks){
    let mostrarLista = listaPacks.map((item)=>{
        
        return `<article class="menu-item">
                <img src=${item.img} class="photo" alt="producto">
                <div class="item-info">
                    <header>
                        <h4>${item.titulo}</h4>
                        <h4 class="price">$${item.precio}</h4>
                    </header>
                    <p>
                        ${item.desc}
                    </p>
                </div>
                </article>`;
    });

    mostrarLista = mostrarLista.join("");
    sectionCenter.innerHTML = mostrarLista;
}