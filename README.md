# 🎵 MusicStream – Digital Music Store 🎵

 MusicStream es una **tienda digital de música** donde los usuarios pueden explorar álbumes, reproducir canciones, agregarlas al carrito y completar una compra.

 El proyecto simula el flujo completo de una **plataforma de compra de música digital**, incluyendo reproductores individuales para cada canción.

 Este proyecto fue desarrollado como práctica de **HTML y CSS modular**, aplicando organización de estilos, componentes reutilizables y diseño estructurado.

---
## Propósito del Diseño

 La página fue diseñada con el objetivo de representar una plataforma musical moderna, similar a servicios de streaming o tiendas digitales de música. El diseño busca ofrecer una interfaz clara, accesible y visualmente atractiva que permita al usuario navegar fácilmente entre diferentes secciones del sitio.

 Además, el proyecto busca demostrar buenas prácticas de estructura visual, organización de componentes y adaptabilidad en pantallas móviles y computadoras.
 Público Objetivo

 Esta plataforma esta dirigida a:

    - Personas interesadas en descubrir música nueva.
    - Usuarios que disfrutan explorar álbumes y artistas.
    - Oyentes que desean reproducir canciones desde una interfaz simple.
    - Personas que compran música digital o contenido relacionado con    artistas.
    - El público principal sería jóvenes y adultos entre 16 y 35 años, quienes suelen consumir música a través de plataformas digitales.

 Características Principales:

    - Interfaz moderna inspirada en plataformas de música.
    - Diseño adaptable para computador, tablet y móvil.
    - Sección de álbum con lista de canciones.
    - Reproductor de música fijo en la parte inferior.
    - Carrito de compra simulado para contenido musical.
    - Navegación clara mediante header y breadcrumbs.

# Objetivo del proyecto

 El objetivo fue desarrollar una **interfaz completa de e-commerce musical**, aplicando:

    - arquitectura CSS modular
    - componentes reutilizables
    - diseño de interfaces
    - navegación estructurada entre páginas
 
## 📸 Vista general del proyecto

## 🏪 Index

 En la página principal los usuarios pueden explorar los álbumes disponibles en la tienda.

 Características:

    - Visualización de álbumes
    - Cards con portada, artista y precio
    - Acceso al detalle del álbum
    - Navegación principal del sitio

### Captura

![Index](https://i.ibb.co/VpTCjYd9/index.png)
![Index responsive](https://i.ibb.co/yBhr7zcD/index-responsive.png)

---

# 🎧 Album Detail

 La página de detalle muestra información completa sobre un álbum específico.

 Incluye:

    - portada del álbum
    - nombre del artista
    - lista de canciones
    - botón para reproducir canciones
    - opción de añadir al carrito

### Captura

![Album Detail](https://i.ibb.co/MDGMcZ8n/album-detail.png)
![Album Detail Responsive](https://i.ibb.co/99jn25hj/album-detail-responsive.png)

---

# ▶️ Player (Reproductor de música)

 El proyecto incluye **10 reproductores de música**, uno para cada canción disponible.

 Cada reproductor permite:

    - reproducir la canción
    - pausar la reproducción
    - visualizar información del track
    - ver la portada del álbum

Esto simula la experiencia de un **reproductor musical inmersivo**.

### Captura

![Player](https://i.ibb.co/LzSv0yz3/player.png)
![Player Responsive](https://i.ibb.co/5W85Pcp5/player-responsive.png)


---

# 🎵 Canciones disponibles

El proyecto incluye **10 canciones con reproductores individuales**.

    1. Serenata Sin Mariachis — Doble Porción  
    2. Greatest Hits — Willie Colón  
    3. Echoes in Time - The wanderes
    4. Mon Laferte Vol. 1 - By Mon Laferte
    5. Grupo Niche: The Best - Grupo Niche
    6. Muerte - By canserbero
    7. Secretos - By José José
    8. Eterno - By Juan Gabriel
    9. Un Verano Sin Ti - By Bad Bunny

Cada canción tiene su **player independiente dentro del sistema**.

---

# 🛒 Cart (Carrito de compras)

 En esta página el usuario puede revisar los productos agregados al carrito.

 Funcionalidades:

    - visualizar álbumes añadidos
    - modificar cantidad
    - eliminar canciones
    - ver precios individuales
    - visualizar total del carrito

### Captura

![Cart](https://i.ibb.co/3mRYTx6m/cart.png)
![Cart Responsive](https://i.ibb.co/v4ZFKmqR/cart-responsive.png)

---

# 💳 Checkout

 En la página de checkout el usuario puede completar el proceso de compra.

 Incluye:

    - resumen de la orden
    - cálculo de impuestos
    - precio total
    - botón de pago seguro

### Captura

 ![Checkout](https://i.ibb.co/SDrqQCJF/checkout.png)
 ![Checkout Responsive](https://i.ibb.co/v4S8JQMh/checkout-responsive.png)

---

# ✅ Success Page

 Después de completar la compra, el usuario es redirigido a la página de confirmación.

 Aquí se muestra:

    - mensaje de compra exitosa
    - resumen de la orden
    - ID de la compra
    - botones de navegación

 Opciones disponibles:

    - ver historial de compras
    - volver a la tienda

### Captura

 ![Success](https://i.ibb.co/bgz0XqWj/success.png)
 ![Success Responsive](https://i.ibb.co/gZD3Hx18/success-responsive.png)

---

#  Flujo completo de la aplicación

 El flujo de navegación del usuario es el siguiente:

    1. Store (index.html)
    ↓
    2. Album Detail
    ↓
    3. Player
    ↓
    4. Add to Cart
    ↓
    5. Cart
    ↓
    6. Checkout
    ↓
    7. Success Page


---

# Arquitectura CSS

 El proyecto utiliza una **estructura CSS modular**.

### Main
 Contiene:

    - reset CSS
    - variables globales
    - tipografía
    - estilos base

---

###  Layout
 Define:

    - grid principal
    - header
    - sidebar
    - footer
    - distribución general del sitio

---

### Components
 Incluye componentes reutilizables como:

    - botones
    - cards
    - inputs
    - tablas
    - elementos interactivos

---

#  Tecnologías utilizadas

 Tecnologías usadas en el proyecto:

    - HTML5
    - CSS3
    - Flexbox
    - CSS Grid
    - Responsive Design

 Para el desarrollo de nuestro proyecto fue fundamental el uso de **Font Awesome**, ya que nos permitió integrar iconos de manera sencilla y eficiente dentro de la interfaz de la página. Gracias a esta biblioteca pudimos representar visualmente diferentes acciones del usuario, como reproducir música, navegar por el sitio, acceder a distintas secciones o identificar funciones específicas dentro del reproductor.

 El uso de estos iconos ayudó a mejorar la experiencia visual y la comprensión de la interfaz, haciendo que los elementos de la página fueran más intuitivos y fáciles de identificar. Además, al tratarse de una biblioteca muy utilizada en el desarrollo web, facilitó mantener un diseño moderno, limpio y adaptable a diferentes dispositivos.

 En conclusión, **Font Awesome fue una herramienta clave dentro del proyecto**, ya que permitió complementar el diseño de la página con iconografía clara y profesional, mejorando tanto la estética como la usabilidad de la plataforma.


---

# Aprendizajes

 Durante el desarrollo se aplicaron conceptos como:

    - organización de proyectos frontend
    - separación de estilos por módulos
    - creación de layouts complejos
    - diseño de interfaces modernas
    - simulación de flujo de compra digital

---

# Mejoras futuras

 Posibles mejoras para el proyecto:

    - agregar JavaScript para funcionalidad real
    - implementar reproductor funcional
    - sistema dinámico de carrito
    - integración con API de música
    - persistencia de datos con backend

---

# Autores
    - Jhon Reyes
    - Santiago Pabon
    - Diego Parra
