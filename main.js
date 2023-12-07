let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #ff5475;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #f57c34;">Construyo proyectos en Frontend y trabajo en el mundo de STEM.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
