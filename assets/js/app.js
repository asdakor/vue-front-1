console.log("estamos usando vanilla js")



const { createApp, ref } = Vue

createApp({
    setup() {
        
        const message = ref('USANDO VUE con CDN')
        return {
            message
        }
    }
}).mount('#app')

createApp({
    setup() {
        const categorias = ref(["Hombre", "Mujer", "Niño"])
        const marcas = ref(["Adidas", "Nike", "Puma"])
        return {
            marcas,categorias
        }
    }
}).mount('#nav')


