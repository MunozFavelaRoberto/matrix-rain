import chalk from 'chalk';

const chars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノ0123456789';

let width = process.stdout.columns;
let height = process.stdout.rows;

let drops = Array(width).fill().map(() => Math.floor(Math.random() * height));

const greenShades = [
  chalk.hex('#00ff00'),
  chalk.hex('#00cc00'),
  chalk.hex('#009900'),
  chalk.hex('#006600'),
  chalk.hex('#003300'),
  chalk.hex('#001a00'),
];

process.stdout.write('\x1b[?25l');

const randomChar = () => chars[Math.floor(Math.random() * chars.length)];

const clear = () => {
  process.stdout.write('\x1b[2J');
  process.stdout.write('\x1b[0f');
};

function draw() {
  for (let x = 0; x < width; x++) {
    let y = drops[x];

    for (let i = 0; i < greenShades.length; i++) {
      const row = y - i;
      if (row < 0 || row >= height) continue;

      process.stdout.write(`\x1b[${row};${x}H`);
      process.stdout.write(greenShades[i](randomChar()));
    }

    if (y > height + greenShades.length && Math.random() > 0.95) {
      drops[x] = 0;
    } else {
      drops[x]++;
    }
  }
}

process.stdout.on('resize', () => {
  width = process.stdout.columns;
  height = process.stdout.rows;
  drops = Array(width).fill().map(() => Math.floor(Math.random() * height));
  clear();
});

clear();
setInterval(draw, 50);

process.on('exit', () => {
  process.stdout.write('\x1b[?25h');
});
