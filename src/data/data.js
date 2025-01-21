const products = [
  {
    id: "123d",
    name: "Body Lotion",
    price: 15000,
    stock: 20,
    category: "Cuerpo",
    image:
      "https://www.violettacosmeticos.com/media/catalog/product/cache/0122fc6ec3e1f8ad1d60a8c307d0be7f/1/0/100901-love-you-rainbow-body-lotion.jpg",
  },
  {
    id: 2,
    name: "Make up",
    price: 30000,
    stock: 10,
    category: "Rostro",
    image:
      "https://www.maybelline.es/-/media/project/loreal/brand-sites/mny/emea/iberic/tips-and-trends/productos-basicos-de-maquillaje/productos-basicos-de-maquillaje_0.jpg?la=es-es&h=349&w=624&rev=50d56cb1cf11407882d815e667fc3bbc&hash=2B10585742F38F4577E56E6F0BD5AEAE",
  },
  {
    id: 3,
    name: "Accesorios",
    price: 5000,
    stock: 40,
    category: "Accesorio",
    image:
      "https://img.freepik.com/fotos-premium/set-cosmeticos-maquillaje-moda-accesorios-moda-mujer_956920-31921.jpg",
  },
];

const getProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });
};

export { getProducts };
