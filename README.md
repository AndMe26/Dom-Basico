# DOM Playground - Laboratorio de JavaScript

Este es un proyecto base diseñado para practicar la manipulación del Document Object Model (DOM) con JavaScript Vanilla. El objetivo es que completes la lógica necesaria en `src/js/main.js` para que cada sección sea funcional.

## 🚀 Guía de Ejercicios

### 1. Contador Interactivo
**Objetivo:** Practicar `addEventListener` y actualización de texto.
- Haz que el botón **+** incremente el número.
- Haz que el botón **-** decremente el número.
- Haz que el botón **Reset** ponga el contador en 0.
- *Reto extra:* Haz que el número cambie a color rojo si es menor a 0.

### 2. Gestión de Listas
**Objetivo:** Practicar `createElement`, `appendChild` y eliminación de nodos.
- Al escribir en el input y pulsar "Añadir", se debe crear un nuevo elemento `<li>` en la lista.
- Cada elemento de la lista debe incluir un botón para eliminarse a sí mismo.
- Limpia el input después de añadir una tarea.

### 3. Modo Oscuro (Toggle Tema)
**Objetivo:** Practicar `classList.toggle` y manipulación de texto de botones.
- Al pulsar el botón "Modo Oscuro", añade la clase `.dark-mode` al `body`.
- Actualiza el texto del botón: si el modo está activado debe decir "Modo Claro", de lo contrario "Modo Oscuro".

### 4. Inputs en Vivo y Atributos
**Objetivo:** Practicar eventos de `input` y cambio de atributos (`src`).
- Al escribir en el campo de nombre, actualiza el texto "Invitado" en tiempo real.
- Cambia el atributo `src` de la imagen de perfil usando la API de avatares: `https://ui-avatars.com/api/?name=TU_NOMBRE`.

---

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica.
- **CSS3**: Diseño moderno, Flexbox y Variables CSS.
- **JavaScript (ES6+)**: Lógica y manipulación del DOM.
- **Vite**: Herramienta de construcción (build tool) para un desarrollo ultra rápido.

## 💻 Instalación y Uso

Para ejecutar este proyecto localmente, sigue estos pasos:

1. **Clona el repositorio:**
   ```bash
   git clone <url-del-repositorio>
   ```

2. **Entra en la carpeta del proyecto:**
   ```bash
   cd BasicDOM
   ```

3. **Instala las dependencias:**
   ```bash
   npm install
   ```

4. **Inicia el servidor de desarrollo:**
   ```bash
   npm run dev
   ```

5. **Abre tu navegador en:** `http://localhost:5173`

---

## 📂 Estructura del Proyecto

- `index.html`: Estructura base del playground.
- `src/css/style.css`: Estilos y variables de modo oscuro.
- `src/js/main.js`: **¡Tu archivo de trabajo!** Aquí es donde debes escribir tu código.
- `public/`: Archivos estáticos como el favicon.

## ✒️ Autor

* **Javier Cómbita Téllez** - *Desarrollo Inicial* - [jcomte23](https://github.com/jcomte23)

## 📄 Licencia

Este proyecto está bajo la Licencia **MIT** - consulta el archivo [LICENSE](LICENSE) para más detalles.
