const IndexEstudiantes = [{
  "nombre": "Escritorio",
  descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et ab sit commodi aperiam incidunt libero quisquam, harum ut tenetur corporis, quas molestias in? Exercitationem, asperiores!",
  precio: "$ 12.345",
  cantidad: 245,
  foto: "https://images.unsplash.com/photo-1579532170056-9b32d6d16a59?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8N3wyMzQ3ODQ4fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
},
{
  nombre: "Silla",
  descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et ab sit commodi aperiam incidunt libero quisquam, harum ut tenetur corporis, quas molestias in? Exercitationem, asperiores!",
  precio: "$ 12.345",
  cantidad: 245,
  foto: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hhaXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
},
{
  nombre: "Computador",
  descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et ab sit commodi aperiam incidunt libero quisquam, harum ut tenetur corporis, quas molestias in? Exercitationem, asperiores!",
  precio: "$ 12.345",
  cantidad: 245,
  foto: "https://images.unsplash.com/photo-1494173853739-c21f58b16055?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTl8MjM0Nzg0OHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
},
{
  nombre: "Computador",
  descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et ab sit commodi aperiam incidunt libero quisquam, harum ut tenetur corporis, quas molestias in? Exercitationem, asperiores!",
  precio: "$ 12.345",
  cantidad: 245,
  foto: "https://images.unsplash.com/photo-1494173853739-c21f58b16055?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTl8MjM0Nzg0OHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
},
];
// const f1 = "";
// const p1 = document.getElementById("app").innerHTML = `esto es un texto y una operacion ${3 + 5}`;
function Estudiante(IndexEstudiantes) {
return `<section class="Fila" id="app"></section>
<section class="Fila">
 <div class="Ficha-Estudiante">
     <div class="Header">
         <h1>Demo Estudiante</h1>
       <div class="Container-Picture">
       </div>
       <div class="Headersection">
           <ul>
               <li>
                 <img src="/íconos/github-fill.svg" alt=""> <a href=${IndexEstudiantes.nombre} class="txt-social" target="_blank">Github</a>
               </li>
               <li>
                 <img src="/íconos/magic-fill.svg" alt=""><a href="https://portafolio2710.neocities.org/" class="txt-social" class="txt-social" target="_blank">Neocities</a>
               </li>
               <li><img src="/íconos/mail-fill.svg" alt=""><abbr title="jeecheverri@correo.iue.edu.co"><a href="https://outlook.live.com/owa/" class="txt-social" target="_blank">Email</a></abbr>.</li>
               <li><img src="/íconos/whatsapp-fill.svg" alt=""><abbr title="+57 3102797471"><a href="#" class="txt-social" target="_blank">What'sApp</a></abbr>.</li>
           </ul>
       </div>
     </div>
     <div class="Section1">
       <div class="Activities">
           <h2 class="Title-activities">Actividades</h2>
       </div>
       <div class="Porcent1">
           <h2>% UI/UX</h2>
       </div>
       <div class="Porcent2">
           <h2><h2>% Dev</h2></h2>
       </div>
       <div class="Activity1"><a href="" class="txt-Activity" >Activity 1</a></div>
       <div class="Activity2"><a href="" class="txt-Activity" >Activity 2</a></div>
       <div class="Activity3"><a href="" class="txt-Activity" >Activity 3</a></div>
       <div class="Porcent-Number1">
           <h2>10%</h2>
       </div>
       <div class="Porcent-Number2">
         <h2>10%</h2>
       </div>
       <div class="Porcent-Number3">
         <h2>10%</h2>
       </div>
       <div class="Porcent-Number4">
         <h2>10%</h2>
       </div>
       <div class="Porcent-Number5">
         <h2>10%</h2>
       </div>
       <div class="Porcent-Number6">
         <h2>10%</h2>
       </div>
     </div>
     <div class="Section2">
       <div class="img1">
           <div class="i1">
               <img  class="html-icon" src="/íconos/html5-fill.svg" alt="">
           </div>
       </div>
       <div class="Img2">
         <div class="i2">
           <img  class="css-icon" src="/íconos/css3-fill.svg" alt="">
         </div>
       </div>
       <div class="Img3">
         <div class="i3">
           <img  class="javascript-icon" src="/íconos/bxl-javascript.svg" alt="">
         </div>
       </div>
       <div class="Img4">
         <div class="i4">
           <img  class="ui-icon" src="/íconos/quill-pen-fill.svg" alt="">
         </div>
       </div>
       <div class="img5">
         <div class="i5">
           <img  class="ux-icon" src="/íconos/coreos-fill.svg" alt="">
         </div>
       </div>
       <div class="img6">
         <div class="i6">
           <img  class="profileuser-icon" src="/íconos/map-pin-user-fill.svg" alt="">
         </div>
       </div>
     </div>
   </div>
 </section> 
 <script src="/Plantilla.js">
</script>`;
}
const p1 = (document.getElementById(
"app"
).innerHTML = `<h1>Productos Disponibles(${
IndexEstudiantes.length
}) </h1> ${IndexEstudiantes.map(plantilla).join("")} <p class="precio">Son ${
IndexEstudiantes.length
}productos que se han actualizado recientemente en el catalogo.</p><p class="cantidad">Verifique las actualizaciones periodicamente!!!</p><br>`);