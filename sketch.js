//variables
var radioMayor = 60;
var x = radioMayor;
var y = radioMayor;
var velocidadX = 2; 
var velocidadY = 3.5; 
var direccionX = 10; 
var direccionY = 10; 


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(200, 200, 255); // fondo celeste
    
  // cambia direcciónX
  x += velocidadX * direccionX;
  
  if ((x > width - radioMayor) ||(x < radioMayor)) {
    direccionX = -direccionX;
  }
  
  
  // cambia direcciónY
  y += velocidadY * direccionY;
  
  if ((y > height - radioMayor) ||(y < radioMayor)) {
    direccionY = -direccionY;
  }


  // console.log(mouseX, mouseY)
  push();
    // lineas del fondo
    stroke(x, y, 200);
    for (var i = 0; i < 400; i += 10) {
    line(i, 0, i, 400);
}
  pop();

  push();
  translate(direccionX, direccionY);
  // cuerpo del gato
  fill(255, 255, 255); // blanco
  ellipse(200, 250, 150, 200);

  //orejas
  triangle(152, 99, 154, 56, 172, 86);
  triangle(224, 85, 246, 58, 245, 95);

  // patas traseras
  fill(200, 200, 200); // gris claro
  rect(140, 320, 30, 100, 10);
  rect(210, 320, 30, 100, 10);

  // patas delanteras
  fill(200, 200, 200); // gris claro
  rect(150, 250, 30, 100, 10);
  rect(220, 250, 30, 100, 10);

  // cabeza del gato
  fill(255, 255, 255); // blanco
  ellipse(200, 150, 120, 140);

  // ojos
  fill(255, 200, 200); // rosa
  ellipse(165, 120, 50, 70);
  ellipse(235, 120, 50, 70);
  fill(0, 0, 0); // negro
  ellipse(180, 140, 20, y/5);
  ellipse(220, 140, 20, x/5);

  // nariz
  fill(255, 150, 150); // rosa claro
  ellipse(200, 165, 30, 30);

  // boca
  fill(direccionY, x, direccionX); // negro
  ellipse(200, 195, 40, 20);

  // bigotes
  push();
  translate(0, -15);
  stroke(direccionX, y, x); // negro
  strokeWeight(2);
  line(180, 190, 150, 195);
  line(180, 200, 150, 200);
  line(180, 210, 150, 205);
  line(220, 190, 250, 195);
  line(220, 200, 250, 200);
  line(220, 210, 250, 205);
  pop();
  pop();
  
  // lineas del fondo
  
}
