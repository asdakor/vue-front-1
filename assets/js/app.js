console.log("estamos usando vanilla js")



const { createApp, ref } = Vue

createApp({
    setup() {
        // Declarar zapatillas como una referencia reactiva (ref)
        const zapatillas = ref([])

        // Función asíncrona para cargar datos
        const fetchZapatillas = async () => {
            try {
                const response = await fetch('zapatillas.json')
                const data = await response.json()
                // Asignar el resultado a la referencia reactiva
                zapatillas.value = data
            } catch (error) {
                console.log(error)
            }
        }

        // Llamar a la función asíncrona
        fetchZapatillas()

        // Declarar otro mensaje como referencia reactiva
        const message = ref('USANDO VUE con CDN')

        return {
            message,
            zapatillas
        }
    }
}).mount('#app')

createApp({
    setup() {
        const categorias = ref(["Hombre", "Mujer", "Niño"])
        const marcas = ref(["Adidas", "Nike", "Puma"])
        return {
            marcas, categorias
        }
    }
}).mount('#nav')


const barraLateral = document.querySelector(".barra-lateral");
const menu = document.querySelector(".menu");
const main = document.querySelector("main");

menu.addEventListener("click",()=>{
    barraLateral.classList.toggle("max-barra-lateral");
    if(barraLateral.classList.contains("max-barra-lateral")){
        menu.children[0].style.display = "none";
        menu.children[1].style.display = "block";
    }
    else{
        menu.children[0].style.display = "block";
        menu.children[1].style.display = "none";
    }
    if(window.innerWidth<=320){
        barraLateral.classList.add("mini-barra-lateral");
        main.classList.add("min-main");
        spans.forEach((span)=>{
            span.classList.add("oculto");
        })
    }
});

palanca.addEventListener("click",()=>{
    let body = document.body;
    body.classList.toggle("dark-mode");
    body.classList.toggle("");
    circulo.classList.toggle("prendido");
});

cloud.addEventListener("click",()=>{
    barraLateral.classList.toggle("mini-barra-lateral");
    main.classList.toggle("min-main");
    spans.forEach((span)=>{
        span.classList.toggle("oculto");
    });
});