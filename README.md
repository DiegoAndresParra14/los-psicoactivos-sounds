# 🎵 MusicStream – Digital Music Store

 MusicStream es una **tienda digital de música** donde los usuarios pueden explorar álbumes, reproducir canciones, agregarlas al carrito y completar una compra.

 El proyecto simula el flujo completo de una **plataforma de compra de música digital**, incluyendo reproductores individuales para cada canción.

 Este proyecto fue desarrollado como práctica de **HTML y CSS modular**, aplicando organización de estilos, componentes reutilizables y diseño estructurado.

---

# 📸 Vista general del proyecto

## 🏪 Storefront (Home)

 En la página principal los usuarios pueden explorar los álbumes disponibles en la tienda.

 Características:

    - Visualización de álbumes
    - Cards con portada, artista y precio
    - Acceso al detalle del álbum
    - Navegación principal del sitio

### Captura

![Store](assets/readme/store.png)

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

![Album Detail](assets/readme/album-detail.png)

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

![Player](assets/readme/player.png)

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

![Cart](assets/readme/cart.png)

---

# 💳 Checkout

 En la página de checkout el usuario puede completar el proceso de compra.

 Incluye:

    - resumen de la orden
    - cálculo de impuestos
    - precio total
    - botón de pago seguro

### Captura

 ![Checkout](assets/readme/checkout.png)

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

 ![Success](assets/readme/success.png)

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

### Base
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

### Views
 La carpeta contiene estilos específicos por página:

    - store
    - player
    - checkout

---

#  Tecnologías utilizadas

 Tecnologías usadas en el proyecto:

    - **HTML5**
    - **CSS3**
    - **Flexbox**
    - **CSS Grid**
    - **Responsive Design**

---

# Objetivo del proyecto

 El objetivo fue desarrollar una **interfaz completa de e-commerce musical**, aplicando:

    - arquitectura CSS modular
    - componentes reutilizables
    - diseño de interfaces
    - navegación estructurada entre páginas

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