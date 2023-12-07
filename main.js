let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #3d52d5;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #3d52d5;">UX/UI designer con conocimientos en HTML y CSS.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
