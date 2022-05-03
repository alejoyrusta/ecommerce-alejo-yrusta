const pedido = fetch("https://fakestoreapi.com/products")

pedido
    .then((respuestaPedido)=>{
        const productos = respuestaPedido.json()
        return productos
    })
    .then((respuestaConFormato)=>{
        console.log(respuestaConFormato)
    })
    .catch((err)=>{
        console.log(err)
    })

export default pedido