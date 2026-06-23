import chalk from 'chalk';

const chars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノ0123456789';

// Tamaño del terminal
let width = process.stdout.columns;
let height = process.stdout.rows;

// Estado de cada columna
let columns = [];

function initColumns() {
  columns = Array(width).fill().map(() => {
    return {
      y: Math.floor(Math.random() * height * -1), // Empezar arriba de la pantalla al azar
      speed: Math.floor(Math.random() * 3) + 1,   // Velocidad entre 1 y 3 (menor es más rápido)
      length: Math.floor(Math.random() * 20) + 10 // Longitud de la cola entre 10 y 30
    };
  });
}

initColumns();

// Colores usando Chalk
const colorHead = chalk.white;
const colorTail1 = chalk.hex('#00ff00');
const colorTail2 = chalk.hex('#00cc00');
const colorTail3 = chalk.hex('#006600');
const colorTail4 = chalk.hex('#003300');

// Oculta el cursor
process.stdout.write('\x1b[?25l');

// Devuelve un caracter aleatorio
const randomChar = () => chars[Math.floor(Math.random() * chars.length)];

// Limpia pantalla
const clear = () => {
  process.stdout.write('\x1b[2J');
  process.stdout.write('\x1b[0f');
};

// Función auxiliar para imprimir un caracter en coordenadas específicas (1-indexed)
const printAt = (x, y, str) => {
  if (y >= 1 && y <= height && x >= 1 && x <= width) {
    process.stdout.write(`\x1b[${y};${x}H${str}`);
  }
};

let frame = 0;

// Dibuja el efecto
function draw() {
  frame++;
  
  for (let x = 0; x < width; x++) {
    let col = columns[x];
    
    // Solo actualizar basado en la velocidad de la columna
    if (frame % col.speed !== 0) continue;

    // Borrar el final de la cola antes de mover
    printAt(x + 1, col.y - col.length, ' ');

    // Mover hacia abajo
    col.y++;

    // Dibujar la cabeza blanca
    printAt(x + 1, col.y, colorHead(randomChar()));

    // Dibujar el primer nivel de la cola (verde brillante)
    printAt(x + 1, col.y - 1, colorTail1(randomChar()));

    // Efecto de desvanecimiento en el medio de la cola
    let mid1 = col.y - Math.floor(col.length * 0.25);
    printAt(x + 1, mid1, colorTail2(randomChar()));
    
    let mid2 = col.y - Math.floor(col.length * 0.5);
    printAt(x + 1, mid2, colorTail3(randomChar()));

    let mid3 = col.y - Math.floor(col.length * 0.75);
    printAt(x + 1, mid3, colorTail4(randomChar()));

    // Si la cola completa salió de la pantalla, reiniciar la gota
    if (col.y - col.length > height) {
      col.y = 0;
      col.speed = Math.floor(Math.random() * 3) + 1;
      col.length = Math.floor(Math.random() * 20) + 10;
    }
  }
}

// Detecta cambio de tamaño
process.stdout.on('resize', () => {
  width = process.stdout.columns;
  height = process.stdout.rows;
  initColumns();
  clear();
});

// Ejecuta el efecto
clear();
const intervalId = setInterval(draw, 30); // Ciclo general más rápido para fluidez

// Manejo elegante de salida para restaurar el cursor
const handleExit = () => {
  clearInterval(intervalId);
  process.stdout.write('\x1b[?25h'); // Muestra el cursor
  process.stdout.write('\x1b[2J\x1b[0f'); // Limpia pantalla al salir
  process.exit(0);
};

process.on('exit', handleExit);
process.on('SIGINT', handleExit); // Maneja Ctrl+C
process.on('SIGTERM', handleExit);
process.on('uncaughtException', (err) => {
  process.stdout.write('\x1b[?25h');
  console.error(err);
  process.exit(1);
});
