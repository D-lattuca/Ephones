class Iphone {
    constructor(precio, modelo, id, imagen, detalles){
        this.precio = precio
        this.modelo = modelo
        this.id = id
        this.imagen = imagen
        this.detalles = detalles
    }
}

const iPhone7 = new Iphone((300),("Iphone 7"),("001"),('iPhone 7_Black_Front_800.png'),(""))
const iPhone8 = new Iphone((300),("Iphone 8"),("002"),(""),("Details"))
const iPhone8Plus = new Iphone((300),("Iphone 8 Plus"),("003"),(""),("Details"))
const iPhoneX = new Iphone((300),("Iphone X"),("004"),(""),("Details"))
const iPhoneXS = new Iphone((300),("Iphone XS"),("005"),(""),("Details"))
const IPhone11 = new Iphone((600),('Iphone 11'),('006'),(""),("Details"))

let Iphones = [iPhone7,iPhone8,iPhone8Plus,iPhoneX,iPhoneXS,IPhone11]

let productosEnCarrito = []
if(localStorage.getItem("carrito")){
    productosEnCarrito = JSON.parse(localStorage.getItem("carrito"))
}else{
    //Entra por primera -- setear el array el original
    console.log("Seteando el array carrito por primera vez")
    localStorage.setItem("carrito", JSON.stringify(productosEnCarrito))
}


localStorage.setItem("Iphones",Iphones)
localStorage.setItem("Iphones", JSON.stringify(Iphones));





let divProductos = document.getElementById("Telefonos")
let modalBody = document.getElementById("modal-body")


function mostrarCatalogo(array){
    divProductos.innerHTML = ""
    for(let IphonesL of array){
        let IphoneC = document.createElement("div")
        IphoneC.innerHTML = `<div id="${IphonesL.id}" class="card " style="width: 18rem;">
                                    <img class="card-img-top" style="height: 200px;"src="../Images/${IphonesL.imagen}" alt="${IphonesL.modelo} de GirPhones">
                                    <div class="card-body">
                                        <h4 class="card-title">${IphonesL.modelo}</h4>
                                        <p>Detalles: ${IphonesL.detalles}</p>
                                        <p class="">Precio: ${IphonesL.precio} USD</p>
                                    <button id="${IphonesL.id}" class="btn btn-primary">Mas Informacion</button>
                                    </div>
    </div>`
    divProductos.appendChild(IphoneC)
}
}

mostrarCatalogo(Iphones)