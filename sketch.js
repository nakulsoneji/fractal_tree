function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(0);
  stroke(255, 255, 255);
  drawingContext.shadowBlur = 10;
  drawingContext.shadowColor = 'white';
}

let angle = 0;

function draw_tree(branches, startx, starty, angle, add_angle, len, levels, current = 1) {
  let new_startx = startx + Math.cos(angle) * len;
  let new_starty = starty - Math.sin(angle) * len;
  
  if (current == 1) {stroke('#ff6961');}
  if (current == 2) {stroke('#ffb480');}
  if (current == 3) {stroke('#f8f38d');}
  if (current == 4) {stroke('#42d6a4');}
  if (current == 5) {stroke('#08cad1');}
  if (current == 6) {stroke('#59adf6');}
  if (current == 7) {stroke('#9d94ff');}
  if (current == 8) {stroke('#c780e8');}
  
  
  line(startx, starty, new_startx, new_starty);

  len = len / 1.6180339887;
  
  if (current >= levels) {return;}
  
  let start;
  
  if (branches % 2 == 0) {
    start = angle - (add_angle / 2) - add_angle * (branches / 2 - 1);
  }
  
  else if (branches % 2 == 1) {
    start = angle - add_angle * ((branches - 1) / 2);
  }

  for (let i = 0; i < branches; i++) {
    draw_tree(branches, new_startx, new_starty, start + i * add_angle, add_angle, len, levels, current + 1);
  }

}

function draw() {
  background(0);
  draw_tree(8, window.innerWidth / 2, window.innerHeight - 100, 90 * (Math.PI/180), angle * (Math.PI/180), 200, 4);
  angle++;
}
