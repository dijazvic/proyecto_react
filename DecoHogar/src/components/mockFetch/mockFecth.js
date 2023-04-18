let productos = [
    {
      id: "1",
      nombre: "Ventana linea herrero",
      precio: 10000,
      imagen: "./src/components/img/mock/linea_herrero.jpg",
      stock: 8,
      categoria: "Ventanas",
    },
    {
      id: "2",
      nombre: "Cortina black out",
      precio: 7000,
      imagen: "./src/components/img/mock/cortina_black_out.jpg",
      stock: 10,
      categoria: "Cortinas",
    },
    {
      id: "3",
      nombre: "Puerta placa",
      precio: 20000,
      imagen: "./src/components/img/mock/puerta_placa.jpg",
      stock: 5,
      categoria: "Puertas",
    },
    {
      id: "4",
      nombre: "Ventana linea modena",
      precio: 23000,
      imagen: "./src/components/img/mock/linea_modena.jpg",
      stock: 4,
      categoria: "Ventanas",
    },
    {
      id: "5",
      nombre: "Cortinas sun screen",
      precio: 18000,
      imagen: "./src/components/img/mock/cortina_sun_screen.jpg",
      stock: 8,
      categoria: "Cortinas",
    },
    {
      id: "6",
      nombre: "Puerta doble chapa",
      precio: 32000,
      imagen: "./src/components/img/mock/puerta_doble.jpg",
      stock: 3,
      categoria: "Puertas",
    },
]
  
  export let mockFetch = (id) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(id ? productos.find( prod => prod.id === id) : productos);
      }, 1000);
    });
  };