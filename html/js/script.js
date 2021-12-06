let cta = document.querySelector(".cta-wrap");
let cta2 = document.querySelector(".cta-wrap-2");
let cuadrado = document.querySelector(".cuadrado");
let rectangulo = document.querySelector(".rectangulo");
let explosion = document.querySelector(".explosion");
let letras = document.querySelector(".letras");
let galleta = document.querySelector(".galleta");
let galleta2 = document.querySelector(".galleta_2");
let baldeContenedor = document.querySelector(".balde-contenedor");
let balde = document.querySelector(".balde");
let baldeAgua = document.querySelector(".balde-agua");

//Desaparición del CTA
gsap.to (cta, { display: 'none', y:'0%',x:'0%', delay: 1.5 } );
gsap.to (cta2, { display: 'none' } );

//Animación del cuadrado y el rectangulo
gsap.to (cuadrado, {display: 'block', opacity: 1, y:'30%', x:'0%', duration:0.5, delay: 2 } );
gsap.to (rectangulo, {display: 'block', opacity: 1, y:'250%', x:'0%', duration:0.5 , delay: 2 } );
gsap.to (cuadrado, {display: 'block', opacity: 1, y:'-30%', x:'0%', duration:0.5, delay: 2.5 } );
gsap.to (rectangulo, {display: 'block', opacity: 1, y:'291%', x:'0%',duration:0.5, delay: 2.5 } );
gsap.to (cuadrado, {display: 'block', opacity: 1, y:'200%', x:'0%', duration:0.5, delay: 3 } );
gsap.to (rectangulo, {display: 'block', opacity: 1, y:'55%', x:'0%', duration:0.5, delay: 3 });

//Desaparición del cuadrado y el rectangulo
gsap.to (cuadrado, { display: 'none', delay: 3} );
gsap.to (rectangulo, { display: 'none', delay:3} );

//Aparición de la explosión
gsap.to (explosion, {display: 'block', opacity: 1, duration: 2.5, x:'0%', delay: 3.5} );
gsap.to (letras, {display: 'block', opacity: 1, y:'-200%', x:'0%', duration:0.5, delay: 3.5} );
gsap.to ('.rayo', {display: 'block', opacity: 1, y:'-200%', x:'0%', duration:0.5, delay: 3.5} );
gsap.to ('.rayo-container-1', {display: 'block', opacity: 1, y:'0%', x:'0%', duration:0.5, delay: 3.5} );
gsap.to ('.rayo-container-2', {display: 'block', opacity: 1, y:'0%', x:'0%', duration:0.5, delay: 3.5} );
gsap.to ('.rayo-container-3', {display: 'block', opacity: 1, y:'0%', x:'0%', duration:0.5, delay: 3.5} );
gsap.to ('.rayo-container-4', {display: 'block', opacity: 1, y:'0%', x:'0%', duration:0.5, delay: 3.5} );
gsap.to ('.rayo-container-5', {display: 'block', opacity: 1, y:'0%', x:'0%', duration:0.5, delay: 3.5} );
gsap.to ('.rayo-container-6', {display: 'block', opacity: 1, y:'0%', x:'0%', duration:0.5, delay: 3.5} );



TweenMax.to(explosion, 0.1, {x:"+=20", yoyo:true, repeat:5, delay: 3.7});
TweenMax.to(explosion, 0.1, {x:"-=20", yoyo:true, repeat:5, delay: 3.7});
TweenMax.to(letras, 0.1, {x:"+=20", yoyo:true, repeat:5, delay: 3.7});
TweenMax.to(letras, 0.1, {x:"-=20", yoyo:true, repeat:5, delay: 3.7});
TweenMax.to('.rayo', 0.1, {x:"+=20", yoyo:true, repeat:5, delay: 3.7});
TweenMax.to('.rayo', 0.1, {x:"-=20", yoyo:true, repeat:5, delay: 3.7});


//Ver este segmento

//Desarición de la explosión
gsap.to (explosion, { display: 'none', duration: 2, delay: 5.5 } );
gsap.to ('.explosion', { display: 'none', delay: 4 } );
gsap.to ('.nube', { display: 'none', delay: 4 } );
gsap.to ('.letras', { display: 'none', delay: 4 } );
gsap.to ('.rayo', { display: 'none', delay: 4 } );
gsap.to ('.rayo-container-1', { display: 'none', delay: 4 } );
gsap.to ('.rayo-container-2', { display: 'none', delay: 4 } );
gsap.to ('.rayo-container-3', { display: 'none', delay: 4 } );
gsap.to ('.rayo-container-4', { display: 'none', delay: 4 } );
gsap.to ('.rayo-container-5', { display: 'none', delay: 4 } );
gsap.to ('.rayo-container-6', { display: 'none', delay: 4 } );

//Aparición de las galletas
gsap.to (galleta, { display: 'flex', opacity:1, duration: 0.5, x:'0%', delay: 4.5} );
gsap.to (galleta, { display: 'block', opacity:1, duration: 0.5,y:'-75%', x:'0%', delay: 5.5} );
gsap.to (galleta2, { display: 'block', opacity:1, duration: 0.5,y:'75%', x:'0%', delay: 5.5} );
gsap.to (galleta2, { display: 'block', opacity:1, duration: 0.5,y:'0%', x:'0%', delay: 6} );
gsap.to (galleta, { display: 'block', opacity:1, duration: 0.5,y:'0%', x:'0%', delay: 6} );
gsap.to (galleta2, { display: 'none', delay: 6.1 } );
gsap.to (galleta, { display: 'block', opacity:1, duration: 1,y:'400%', x:'0%', delay: 6.5} );
gsap.to ('.galletas', { display: 'none', opacity:0, delay: 7} );

//Aparición del balde
gsap.to (baldeContenedor, {display: 'none', opacity: 1,y:'50%', x:'0%', duration:2, delay: 7.5 } );
gsap.to (balde, {display: 'block', opacity: 1,y:'50%', x:'0%', delay: 7 } );
gsap.to (baldeAgua, {display: 'block', opacity: 0,y:'50%', x:'0%', delay: 7 } );
//gsap.to (baldeAgua, {display: 'block', opacity: 1,y:'50%', x:'0%', duration:100, delay: 8 } );
gsap.to (baldeAgua, {display: 'block', opacity: 1,y:'50%', x:'0%', delay: 8 } );
gsap.to (baldeContenedor, {display: 'block', opacity: 1,y:'-30%', x:'0%', duration:2, delay: 8 } );
gsap.to ('.bolas', {display: 'block', opacity: 1,y:'0%', x:'0%', duration:1, delay: 9 } );
gsap.to ('.bola-container-1', {display: 'block',position: 'absolute', opacity: 1,top: '1px', x:'0%', duration:1, delay: 10 } );
gsap.to ('.bola-container-1', {display: 'block', opacity: 1,top: '345px', x:'0%', duration:6, delay: 10.5 } );
gsap.to ('.bola-container-2', {display: 'block',position: 'absolute', opacity: 1,top: '1px', x:'0%', duration:4, delay: 11 } );
gsap.to ('.bola-container-2', {display: 'block', opacity: 1,top: '345px', x:'0%', duration:6, delay: 11 } );
gsap.to ('.bola-container-3', {display: 'block',position: 'absolute', opacity: 1,top: '1px', x:'0%', duration:6, delay: 10 } );
gsap.to ('.bola-container-3', {display: 'block', opacity: 1,top: '345px', x:'0%', duration:6, delay: 10 } );
gsap.to ('.bola-container-4', {display: 'block',position: 'absolute', opacity: 1,top: '1px', x:'0%', duration:1.5, delay: 12 } );
gsap.to ('.bola-container-4', {display: 'block', opacity: 1,top: '345px', x:'0%', duration:6, delay: 12 } );
gsap.to ('.bola-container-5', {display: 'block',position: 'absolute', opacity: 1,top: '1px', x:'0%', duration:5, delay: 12.5 } );
gsap.to ('.bola-container-5', {display: 'block', opacity: 1,top: '345px', x:'0%', duration:6, delay: 12.5 } );
gsap.to ('.bola-container-6', {display: 'block',position: 'absolute', opacity: 1,top: '1px', x:'0%', duration:1.5, delay: 11 } );
gsap.to ('.bola-container-6', {display: 'block', opacity: 1,top: '345px', x:'0%', duration:6, delay: 11 } );

gsap.to (baldeContenedor, {display: 'none', opacity: 1,y:'-100%', x:'0%', delay: 18 } );

gsap.to (cta, { display: 'none', delay: 18 } );
gsap.to (cta2, { display: 'flex', y:'0%',x:'0%', duration: 2, delay: 19 } );
gsap.to (cta2, { display: 'none', y:'0%',x:'0%', delay: 22 } );
gsap.to ('.cta-boton', { display: 'block', delay: 23 } );
gsap.to (cta, { display: 'flex', y:'0%',x:'0%', delay: 23 } );









