# Matrix Terminal Effect 🌧️🟢

*🇺🇸 English Version | [🇪🇸 Versión en Español](#versión-en-español)*

An impressive digital rain visual effect styled after **The Matrix** movie, designed to run directly in your terminal. 

It is built with **Node.js** and optimized to deliver smooth animation with dynamic drop speeds, interactive white flashes, fading tails, and a graceful exit handler.

---

## 🚀 Prerequisites

Before you begin, make sure you have installed on your system:
- **[Node.js](https://nodejs.org/en/)** (version 14.0 or higher).

---

## 🛠️ Installation and Usage

Follow these simple steps to see the matrix on your screen:

### 1. Clone or Download the Project
Make sure you are inside the project directory in your terminal:
```bash
cd /path/to/your/matrix/folder
```

### 2. Install Dependencies
This project uses the `chalk` library to paint vibrant colors in the terminal. Install it by running:
```bash
npm install
```

### 3. Enter the Matrix!
Once the dependencies are installed, run the following command to start the effect:
```bash
node matrix.js
```

### 4. To Exit (Close the effect)
To safely stop the program and return your terminal to normal (restoring the cursor), simply press:
```text
Ctrl + C
```

---

## 💻 Key Features

- **"White Head":** Just like in the movie, the falling characters always start with a bright white leader.
- **Dynamic Speeds:** Each column flows at its own pace to give a real sense of depth.
- **Automatic Trail Cleanup:** As the characters progress, the back of the "tail" is automatically cleared to maintain the rain look and prevent the screen from getting cluttered.
- **Responsive Support:** The effect redraws itself automatically if you resize your terminal window.
- **Graceful Exit:** Built-in handling of `SIGINT` (Ctrl+C) signals, ensuring your terminal doesn't get corrupted and your typing cursor isn't hidden when you close it.

---
---

<br>

<h1 id="versión-en-español">Matrix Terminal Effect 🌧️🟢 (Versión en Español)</h1>

Un impresionante efecto visual de lluvia digital al estilo de la película **The Matrix**, diseñado para ejecutarse directamente en tu terminal. 

Está construido con **Node.js** y optimizado para ofrecer una animación fluida con variación de velocidades, destellos blancos interactivos, colas de desvanecimiento y manejo elegante de salida.

---

## 🚀 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado en tu sistema:
- **[Node.js](https://nodejs.org/es/)** (versión 14.0 o superior).

---

## 🛠️ Instalación y Uso

Sigue estos sencillos pasos para ver la matriz en tu pantalla:

### 1. Clonar o Descargar el Proyecto
Asegúrate de estar dentro del directorio del proyecto en tu terminal:
```bash
cd /ruta/a/tu/carpeta/matrix
```

### 2. Instalar las Dependencias
Este proyecto utiliza la librería `chalk` para pintar los colores vibrantes en la terminal. Instálala ejecutando:
```bash
npm install
```

### 3. ¡Entra a la Matriz!
Una vez instaladas las dependencias, ejecuta el siguiente comando para iniciar el efecto:
```bash
node matrix.js
```

### 4. Para Salir (Cerrar el efecto)
Para detener el programa de forma segura y devolver tu terminal a la normalidad (restaurando el cursor), simplemente presiona:
```text
Ctrl + C
```

---

## 💻 Características Principales

- **"White Head" (Cabeza Blanca):** Al igual que en la película, la caída de caracteres siempre comienza con un líder de color blanco brillante.
- **Velocidades Dinámicas:** Cada columna fluye a su propio ritmo para dar una sensación real de profundidad.
- **Limpieza de Rastro Automática:** A medida que avanzan los caracteres, la parte posterior de la "cola" se limpia automáticamente para mantener el aspecto de lluvia y evitar saturar la pantalla.
- **Soporte Responsivo:** El efecto se redibuja automáticamente si ajustas el tamaño de tu ventana de terminal.
- **Salida Segura (Graceful Exit):** Manejo de señales `SIGINT` (Ctrl+C) incorporado, garantizando que tu terminal no se corrompa ni oculte tu cursor de escritura al cerrar.

---

*“There is no spoon.”*
