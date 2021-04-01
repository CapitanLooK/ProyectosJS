//lista de items
const lista = [
    {
        id: 1,
        titulo: "pack 1",
        categoria: "photos",
        precio: 15,
        img: "../backIndex.jpg",
        desc: "descripcion del pack",
    },
    {
        id: 2,
        titulo: "pack 2",
        categoria: "photos",
        precio: 15,
        img: ".src/img/backIndex.jpg",
        desc: "descripcion del pack",
    },
    {
        id: 3,
        titulo: "pack 3",
        categoria: "photos",
        precio: 15,
        img: ".src/img/backIndex.jpg",
        desc: "descripcion del pack",
    },
    {
        id: 4,
        titulo: "pack 4",
        categoria: "photos",
        precio: 15,
        img: ".src/img/backIndex.jpg",
        desc: "descripcion del pack",
    },
    {
        id: 5,
        titulo: "pack 5",
        categoria: "photos",
        precio: 15,
        img: ".src/img/backIndex.jpg",
        desc: "descripcion del pack",
    },
    {
        id: 6,
        titulo: "pack 6",
        categoria: "photos",
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
const container = document.querySelector('.btn-container')



//carga de items
window.addEventListener('DOMContentLoaded', () => {
    mostrarListaPacks(lista);
    mostrarListaBotones();
});


function mostrarListaPacks(listaPacks){
    let mostrarLista = listaPacks.map((pack)=>{
        
        return `<article class="menu-item">
                <img src=${pack.img} class="photo" alt="producto">
                <div class="item-info">
                    <header>
                        <h4>${pack.titulo}</h4>
                        <h4 class="price">$${pack.precio}</h4>
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