const products = [
  {
    name: "Camara de fotos",
    image: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg",
    description:
      "La cámara digital ofrece una calidad de imagen excepcional con un sensor de alta resolución y un rendimiento sobresaliente incluso en condiciones de poca luz. Su diseño ergonómico y liviano facilita un manejo cómodo durante largas sesiones de fotografía. Ideal tanto para profesionales como para aficionados que buscan capturar cada detalle con precisión, cuenta con grabación en alta definición, conectividad Wi-Fi/Bluetooth y múltiples modos de disparo automáticos y manuales. Perfecta para retratos, paisajes o fotografía urbana.",
    price: 70,
    countInStock: 8,
    rating: 4.5,
    numReview: 4.5,
  },

  {
    name: "Smartphone",
    image: "https://images.pexels.com/photos/47261/pexels-photo-47261.jpeg",
    description:
      "Smartphone moderno con un diseño elegante y pantalla de alta resolución que ofrece colores vivos y una experiencia visual inmersiva. Equipado con un potente procesador y amplia capacidad de almacenamiento, garantiza un rendimiento fluido incluso con múltiples aplicaciones abiertas. Su cámara de alta definición captura fotos y videos nítidos en cualquier situación, mientras que la batería de larga duración asegura autonomía durante todo el día. Compatible con las últimas versiones de Android y conectividad 5G para máxima velocidad.",
    price: 150,
    countInStock: 2,
    rating: 4,
    numReview: 4,
  },

  {
    name: "Televisor",
    image: "https://images.pexels.com/photos/6976094/pexels-photo-6976094.jpeg",
    description:
      "Televisor LED de bajo consumo y diseño compacto, ideal para dormitorios o espacios pequeños. Ofrece buena calidad de imagen y sonido, entradas HDMI y USB, y funcionamiento sencillo e intuitivo.",
    price: 30,
    countInStock: 0,
    rating: 4,
    numReview: 2,
  },
  {
    name: "Zapatillas deportivas nike",
    image:
      "https://cdn.pixabay.com/photo/2016/11/19/18/06/feet-1840619_1280.jpg",
    description:
      "Zapatillas deportivas diseñadas para maximizar el confort y el rendimiento. Su suela ligera con amortiguación avanzada reduce el impacto en cada paso, mientras que el tejido transpirable mantiene tus pies frescos durante el ejercicio. Perfectas para correr, entrenar o realizar actividades de alto rendimiento.",
    price: 80,
    countInStock: 10,
    rating: 4,
    numReview: 5,
  },
  {
    name: "Teclado para computadora",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Computer_keyboard_ES_layout.svg/1200px-Computer_keyboard_ES_layout.svg.png",
    description:
      "Teclado ergonómico y compacto diseñado para ofrecer comodidad y eficiencia en el uso diario. Sus teclas silenciosas y de respuesta rápida facilitan la escritura y la navegación, mientras que su diseño elegante se adapta a cualquier escritorio. Compatible con múltiples sistemas operativos y fácil de instalar mediante conexión USB.",
    price: 20,
    countInStock: 4,
    rating: 4,
    numReview: 2.5,
  },
  {
    name: "Monitor",
    image:
      "https://aws-obg-image-lb-3.tcl.com/content/dam/brandsite/product/monitor/24g54/id/1-02.png?t=1755153898130&w=800&webp=true&dpr=2.625&rendition=1068",
    description:
      "Monitor gaming con resolución Full HD/2K/4K y tasa de refresco de 144Hz para una experiencia fluida y sin interrupciones. Sus colores vibrantes y tiempo de respuesta rápido garantizan imágenes nítidas en cada partida. Incluye tecnología FreeSync/G-Sync para eliminar el tearing y mejorar el rendimiento en juegos.",
    price: 200,
    countInStock: 1,
    rating: 4,
    numReview: 4.5,
  },
  {
    name: "Campera azul",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/012/003/399/small/winter-outfit-clothes-png.png",
    description:
      "Campera azul confeccionada con materiales de alta calidad, cómoda y resistente. Su diseño moderno y versátil permite combinarla con diferentes estilos, mientras que el cierre frontal y los bolsillos prácticos ofrecen funcionalidad y confort. Ideal para uso diario y para protegerse del viento y el frío.",
    price: 78,
    countInStock: 3,
    rating: 4,
    numReview: 3.5,
  },
  {
    name: "Pantalón jean",
    image:
      "https://acdn-us.mitiendanube.com/stores/887/995/products/image-photoroom-png-photoroom-2023-03-23t140232-1361-8f96ff5118d3d8944a16795910690230-1024-1024.png",
    description:
      "Pantalón jean confeccionado con mezclilla de alta calidad, duradero y cómodo. Su diseño clásico y versátil lo hace perfecto para combinar con distintos estilos y ocasiones. Incluye bolsillos funcionales y cierre frontal con botón y cremallera, ofreciendo comodidad y practicidad para el uso diario.",
    price: 45,
    countInStock: 4,
    rating: 4,
    numReview: 1,
  },
  {
    name: "Camara de fotos",
    image: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg",
    description:
      "La cámara digital ofrece una calidad de imagen excepcional con un sensor de alta resolución y un rendimiento sobresaliente incluso en condiciones de poca luz. Su diseño ergonómico y liviano facilita un manejo cómodo durante largas sesiones de fotografía. Ideal tanto para profesionales como para aficionados que buscan capturar cada detalle con precisión, cuenta con grabación en alta definición, conectividad Wi-Fi/Bluetooth y múltiples modos de disparo automáticos y manuales. Perfecta para retratos, paisajes o fotografía urbana.",
    price: 70,
    countInStock: 8,
    rating: 4.5,
    numReview: 4.5,
  },

  {
    name: "Smartphone",
    image: "https://images.pexels.com/photos/47261/pexels-photo-47261.jpeg",
    description:
      "Smartphone moderno con un diseño elegante y pantalla de alta resolución que ofrece colores vivos y una experiencia visual inmersiva. Equipado con un potente procesador y amplia capacidad de almacenamiento, garantiza un rendimiento fluido incluso con múltiples aplicaciones abiertas. Su cámara de alta definición captura fotos y videos nítidos en cualquier situación, mientras que la batería de larga duración asegura autonomía durante todo el día. Compatible con las últimas versiones de Android y conectividad 5G para máxima velocidad.",
    price: 150,
    countInStock: 2,
    rating: 4,
    numReview: 4,
  },

  {
    name: "Televisor",
    image: "https://images.pexels.com/photos/6976094/pexels-photo-6976094.jpeg",
    description:
      "Televisor LED de bajo consumo y diseño compacto, ideal para dormitorios o espacios pequeños. Ofrece buena calidad de imagen y sonido, entradas HDMI y USB, y funcionamiento sencillo e intuitivo.",
    price: 30,
    countInStock: 0,
    rating: 4,
    numReview: 2,
  },
  {
    name: "Zapatillas deportivas nike",
    image:
      "https://cdn.pixabay.com/photo/2016/11/19/18/06/feet-1840619_1280.jpg",
    description:
      "Zapatillas deportivas diseñadas para maximizar el confort y el rendimiento. Su suela ligera con amortiguación avanzada reduce el impacto en cada paso, mientras que el tejido transpirable mantiene tus pies frescos durante el ejercicio. Perfectas para correr, entrenar o realizar actividades de alto rendimiento.",
    price: 80,
    countInStock: 10,
    rating: 4,
    numReview: 5,
  },
  {
    name: "Teclado para computadora",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Computer_keyboard_ES_layout.svg/1200px-Computer_keyboard_ES_layout.svg.png",
    description:
      "Teclado ergonómico y compacto diseñado para ofrecer comodidad y eficiencia en el uso diario. Sus teclas silenciosas y de respuesta rápida facilitan la escritura y la navegación, mientras que su diseño elegante se adapta a cualquier escritorio. Compatible con múltiples sistemas operativos y fácil de instalar mediante conexión USB.",
    price: 20,
    countInStock: 4,
    rating: 4,
    numReview: 2.5,
  },
  {
    name: "Monitor",
    image:
      "https://aws-obg-image-lb-3.tcl.com/content/dam/brandsite/product/monitor/24g54/id/1-02.png?t=1755153898130&w=800&webp=true&dpr=2.625&rendition=1068",
    description:
      "Monitor gaming con resolución Full HD/2K/4K y tasa de refresco de 144Hz para una experiencia fluida y sin interrupciones. Sus colores vibrantes y tiempo de respuesta rápido garantizan imágenes nítidas en cada partida. Incluye tecnología FreeSync/G-Sync para eliminar el tearing y mejorar el rendimiento en juegos.",
    price: 200,
    countInStock: 1,
    rating: 4,
    numReview: 4.5,
  },
  {
    name: "Campera azul",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/012/003/399/small/winter-outfit-clothes-png.png",
    description:
      "Campera azul confeccionada con materiales de alta calidad, cómoda y resistente. Su diseño moderno y versátil permite combinarla con diferentes estilos, mientras que el cierre frontal y los bolsillos prácticos ofrecen funcionalidad y confort. Ideal para uso diario y para protegerse del viento y el frío.",
    price: 78,
    countInStock: 3,
    rating: 4,
    numReview: 3.5,
  },
  {
    name: "Pantalón jean",
    image:
      "https://acdn-us.mitiendanube.com/stores/887/995/products/image-photoroom-png-photoroom-2023-03-23t140232-1361-8f96ff5118d3d8944a16795910690230-1024-1024.png",
    description:
      "Pantalón jean confeccionado con mezclilla de alta calidad, duradero y cómodo. Su diseño clásico y versátil lo hace perfecto para combinar con distintos estilos y ocasiones. Incluye bolsillos funcionales y cierre frontal con botón y cremallera, ofreciendo comodidad y practicidad para el uso diario.",
    price: 45,
    countInStock: 4,
    rating: 4,
    numReview: 1,
  },
];

module.exports = products;
