const furro_Imagen = document.getElementById('furro_Imagen');
const nik_Imagen = document.getElementById('nik_Imagen');
const chispa_Imagen = document.getElementById('chispa_Imagen');
const kaiser_Imagen = document.getElementById('kaiser_Imagen')

class Animal {
    constructor(nombre, tipo, vida, ataque_Hada, ataque_caca, ataque_Electrico, imagen, posx, posy) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.vida = vida;
        this.ataque_Hada = ataque_Hada;
        this.ataque_caca = ataque_caca;
        this.ataque_Electrico = ataque_Electrico;
        this.imagen = imagen.cloneNode(true);
        this.posx = posx;
        this.posy = posy;
        this.width = 5;
        this.height = 10;
    }
    calcular_Nodos() {
        return {
        x: this.posx * 5, 
        y: this.posy * 10
        };
    }
}

const furro = new Animal('Furro', 'Hada', 16 , 4, 2, 2, furro_Imagen, 4, 3);
const nik = new Animal('Nik', 'caca', 16 , 2, 4, 2, nik_Imagen, 4, 3);
const chispa = new Animal('Chispa', 'Electrico', 16, 2, 2, 4, chispa_Imagen, 4, 3);

const furro_Malo = new Animal('Furro Malo', 'Hada', 16 , 4, 2, 2, furro_Imagen, 4, 3);
const nik_Malo = new Animal('Nik Malo', 'caca', 16 , 2, 4, 2, nik_Imagen, 4, 3);
const chispa_Malo = new Animal('Chispa Malo', 'Electrico', 16 , 2, 2, 4, chispa_Imagen, 4, 3);

const kaiser = new Animal('Kaiser', 'Deidad', 40, 2, 2, 2, kaiser_Imagen, 17, 8);

const descanso = document.getElementById('descanso')
const menu_Trampa = document.getElementById('menu_Trampa');
const menu_Seleccion = document.getElementById('menu_Seleccion');
const menu_Mapa = document.getElementById('menu_Mapa');
const menu_Madrasos = document.getElementById('menu_Madrasos');
const menu_Madrasos_Background = document.getElementById('menu_Madrasos_Background');
const kaiser_Batalla = document.getElementById('kaiser_Batalla')
const contenedor_Animales = document.getElementById('contenedor_Animal');
const contenedor_Ataques = document.getElementById('contenedor_Ataques');
const body = document.getElementById('body');
const boton_Hada= document.getElementById('boton_Hada');
const boton_Caca= document.getElementById('boton_Caca')
const boton_Electrico= document.getElementById('boton_Electrico')
const vida_Jugador = document.getElementById('vida_Jugador')
const vida_Enemigo = document.getElementById('vida_Enemigo')

const anuncio = document.getElementById('anuncio')
const nombre_Bueno = document.getElementById('nombre_Bueno')
const nombre_Malo = document.getElementById('nombre_Malo')
const mensaje1 = document.getElementById('mensaje1')
const mensaje2 = document.getElementById('mensaje2')
const mensaje3 = document.getElementById('mensaje3')
const mensaje4 = document.getElementById('mensaje4')

const atrapado = document.getElementById('atrapado');
const liberado = document.getElementById('liberado');
const intro = document.getElementById('intro');
const menu_Musica = document.getElementById('menu_Musica');
const pop_Sonido = document.getElementById('animal_Pop');
const enter_Sonido = document.getElementById('enter_Sonido');
const ok_Sonido = document.getElementById('ok_Sonido');
const explosion_Sonido = document.getElementById('explosion');
const mapa_Musica = document.getElementById('mapa_Musica');
const pickup_Your_Partner = document.getElementById('pickup_Your_Partner');
const pickup = document.getElementById('pickup');
const error_Sonido = document.getElementById('error_Sonido');
const combate_Musica1 = document.getElementById('combate_Musica1');
const combate_Musica2 = document.getElementById('combate_Musica2');
const combate_Musica3 = document.getElementById('combate_Musica3');
const chingadazo_Sonido = document.getElementById('chingadazo');
const grito_Sonido = document.getElementById('grito');
const victoria_Musica = document.getElementById('victoria');
const derrota_Musica = document.getElementById('derrota');
const kaiser_Musica = document.getElementById('kaiser_Musica')
const final = document.getElementById('final')
const tenkiu = document.getElementById('tenkiu')

const san_letras = document.getElementById('san_Letra');
const mar_letras = document.getElementById('mar_Letra');
const cock_letras = document.getElementById('cock_Letra');
const boton_Listo = document.getElementById('boton_Listo');
const victoria_Img = document.getElementById('victoria_Img');
const ojo = document.getElementById('ojo')
const cargando = document.getElementById('cargando');
const ok = document.getElementById('ok');

contenedor_Animales.style.display = 'none';
menu_Mapa.style.display = 'none';
menu_Madrasos.style.display = 'none';
menu_Seleccion.style.display = 'none';
ojo.style.display = 'none'

let combate_Activo = false

/*el que guarda el pinche imput pa que no se me olvide*/
let animal_Select = null;
let animal_Enemigo = null;
/*No se como funciona pero detiene la ejecucion del codigo por un tiempo*/
const awanta_bara = (ms) => new Promise(resolve => setTimeout(resolve, ms));
/*Tampoco se que hace pero ayuda en la funcion de devolver un entero */
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function animal_Seleccionado(valor) {
    if (valor == 0) {
        animal_Select = furro;
        nombre_Bueno.textContent = "Minoria"
    } else if (valor == 1) {
        animal_Select = nik;
        nombre_Bueno.textContent = "Gordo Compu"
    } else if (valor == 2) {
        animal_Select = chispa;
        nombre_Bueno.textContent = "Mandilon"
    }
}



function get_animal_Enemigo() {
    if (easter_egg == 0) {
        animal_Enemigo = kaiser
        nombre_Malo.textContent = "Kaiser"
    }else{
        valor = getRandomInt(3)
        if (valor == 0) {
            animal_Enemigo = furro_Malo
            nombre_Malo.textContent = "Minoria"
        } else if (valor == 1) {
            animal_Enemigo = nik_Malo
            nombre_Malo.textContent = "Gordo Compu"
        } else if (valor == 2) {
            animal_Enemigo = chispa_Malo
            nombre_Malo.textContent = "Mandilon"
        }
    }
    
}

function randomizar_Posicion() {
    do {
        animal_Enemigo.posx = getRandomInt(16);
        animal_Enemigo.posy = getRandomInt(7);
    }while (animal_Enemigo.posx === animal_Select.posx && animal_Enemigo.posy === animal_Select.posy);
}

function dibujar_Animal() {
    const cordenadas = animal_Select.calcular_Nodos();
        animal_Select.imagen.style.left = cordenadas.x + "%";
        animal_Select.imagen.style.top = cordenadas.y + "%";
        animal_Select.imagen.style.width = animal_Select.width + "%";
        animal_Select.imagen.style.height = animal_Select.height + "%";
}

function dibujar_Enemigo() {
    const cordenadas = animal_Enemigo.calcular_Nodos();
        animal_Enemigo.imagen.style.left = cordenadas.x + "%";
        animal_Enemigo.imagen.style.top = cordenadas.y + "%";
        animal_Enemigo.imagen.style.width = animal_Enemigo.width + "%";
        animal_Enemigo.imagen.style.height = animal_Enemigo.height + "%";
}

let easter_egg = 1
async function iniciar_Juego() {
    menu_Madrasos.appendChild(contenedor_Ataques);
    menu_Madrasos.appendChild(victoria_Img);
    menu_Madrasos.appendChild(vida_Jugador);
    menu_Madrasos.appendChild(vida_Enemigo);
    enter_Sonido.play();
    menu_Trampa.style.transition = "background-color 2s ease, color 2s ease";
    menu_Trampa.style.backgroundColor = "white";
    await awanta_bara(3000);
    intro.play()
    body.style.background = "DarkRed";
    menu_Trampa.style.display = 'none';
    san_letras.style.display = 'inline-block';
    san_letras.classList.add("caida_Letras");
    await awanta_bara(1000)
    mar_letras.style.display = 'inline-block';
    mar_letras.classList.add("caida_Letras");
    await awanta_bara(1000)
    cock_letras.style.display = 'inline-block';
    cock_letras.classList.add("caida_Letras");
    await awanta_bara(2000)
    san_letras.classList.remove("caida_Letras");
    mar_letras.classList.remove("caida_Letras");
    cock_letras.classList.remove("caida_Letras");
    san_letras.classList.add("movimiento_Vivo");
    mar_letras.classList.add("movimiento_Vivo");
    cock_letras.classList.add("movimiento_Vivo");
    menu_Musica.play();
    await awanta_bara(2000)
    pickup_Your_Partner.play();
    contenedor_Animales.style.display = '';
    menu_Seleccion.style.display = '';
}

async function inicio_Mapa() {
    menu_Madrasos.style.display = 'none';
    kaiser_Batalla.style.display = 'none';
    ojo.style.display = 'none';
    if (easter_egg != 0) {
        mapa_Musica.play();
        cargando.classList.add("cargando_Ocultar");
        menu_Mapa.style.display = 'block';
        get_animal_Enemigo();
        animal_Select.imagen.style.position = "absolute"; 
        animal_Select.imagen.style.zIndex = "2";
        animal_Enemigo.imagen.style.position = "absolute"; 
        animal_Enemigo.imagen.style.zIndex = "1";
        menu_Mapa.appendChild(animal_Select.imagen);
        menu_Mapa.appendChild(animal_Enemigo.imagen);
        randomizar_Posicion();
        dibujar_Animal();
        dibujar_Enemigo();
        animal_Select.imagen.classList.add("personaje_Idle");
        animal_Enemigo.imagen.classList.add("personaje_Idle");
    }else {
        menu_Mapa.appendChild(ojo);
        menu_Mapa.appendChild(animal_Select.imagen);
        ojo.classList.add('erratico')
        cargando.classList.add("cargando_Ocultar");
        ojo.style.display = 'block';
        menu_Mapa.style.display = 'block';
        ojo.style.position = "absolute";
        animal_Select.imagen.style.position = "absolute";
        animal_Select.imagen.style.zIndex = "3";
        ojo.style.zIndex = "3";
        get_animal_Enemigo()
        dibujar_Animal();
        ojo.style.left = (kaiser.posx * 5) + "%"
        ojo.style.top = (kaiser.posy * 10) + "%"
        animal_Select.imagen.classList.add("personaje_Idle");
    }
}

function evaluar_Vida() {
    if (animal_Enemigo.vida <= 0) {
        combate_Activo = false;
        ganar()
    }else if (animal_Select.vida <= 0 ) {
        combate_Activo = false;
        perder()
    }
}

let porcentaje = 60.0
function reduccion_Vida(vida) {
    if (vida < 0) {
        porcentaje = 0
    }else if (easter_egg == 0 && kaiser_gana == false) {
        porcentaje = (vida*60)/40
    }else {
        porcentaje = (vida*60)/16
    }
}

async function preparar_Reinicio() {
    await awanta_bara(2000);
    randomizar_Posicion();
    animal_Select.width = 5
    animal_Select.height = 10
    animal_Select.posx = ultima_Posx
    animal_Select.posy = ultima_Posy
    vida_Bueno.style.width = '60%'
    vida_Malo.style.width = '60%'
    vida_Malo.style.backgroundColor = 'rgb(91, 228, 120)'
    vida_Bueno.style.backgroundColor = 'rgb(91, 228, 120)'
    contenedor_Ataques.style.display = 'none'
    vida_Jugador.style.display = 'none'
    vida_Enemigo.style.display = 'none'
    victoria_Img.style.display = 'none'
    boton_Hada.disabled = false;
    boton_Caca.disabled = false;
    boton_Electrico.disabled = false;
    if(easter_egg == 0) {
        kaiser_Batalla.appendChild(ojo);
        kaiser_Batalla.classList.remove("imagen_Zoom");
    }else {
        animal_Enemigo.imagen.parentNode.removeChild(animal_Enemigo.imagen)
        menu_Madrasos.classList.remove("imagen_Zoom");
    }
    easter_egg = getRandomInt(20)
    inicio_Mapa()
}

async function ganar() {
    if (easter_egg == 0) {
    kaiser_Musica.pause();
    kaiser_Musica.currentTime = 0; 
    liberado.play()
    animal_Enemigo.imagen.classList.add("desvanecer")
    await awanta_bara(3200);
    kaiser_Batalla.style.display = 'none'
    animal_Select.imagen.classList.remove("personaje_Idle");
    animal_Select.imagen.classList.remove("descanso_Idle");
    animal_Select.posx = 8
    dibujar_Animal()
    await awanta_bara(6000);
    descanso.style.display = 'block'
    descanso.appendChild(animal_Select.imagen);
    final.play()
    tenkiu.play()
    }else {
    combate_Musica1.pause()
    combate_Musica2.pause()
    combate_Musica3.pause()
    combate_Musica1.currentTime = 0; 
    combate_Musica2.currentTime = 0; 
    combate_Musica3.currentTime = 0; 
    grito_Sonido.play()
    animal_Enemigo.imagen.classList.add("desvanecer")
    await awanta_bara(2000);
    victoria_Musica.currentTime = 0; 
    victoria_Musica.play();
    await awanta_bara(5300);
    victoria_Img.style.display = 'block'
    victoria_Img.addEventListener('click', async function(event) {
        menu_Madrasos.classList.add("imagen_Zoom");
        await awanta_bara(2000);
        victoria_Musica.pause();
        animal_Enemigo.imagen.classList.remove("desvanecer")
        animal_Enemigo.width = 5;
        animal_Enemigo.height = 10;
        menu_Madrasos.style.display = 'none'
        preparar_Reinicio();
    });
    }
}

async function perder() {
    if (easter_egg == 0) {
    kaiser_Musica.pause();
    kaiser_Musica.currentTime = 0; 
    grito_Sonido.play()
    animal_Select.imagen.classList.add("desvanecer")
    await awanta_bara(3000);
    atrapado.play()
    await awanta_bara(10000);
    body.style.background = "white";
    kaiser_Batalla.classList.add("desvanecer")
    await awanta_bara(2000);
    window.close();
    }else {
    combate_Musica1.pause();
    combate_Musica2.pause();
    combate_Musica3.pause();
    combate_Musica1.currentTime = 0; 
    combate_Musica2.currentTime = 0; 
    combate_Musica3.currentTime = 0;
    grito_Sonido.play()
    animal_Select.imagen.classList.add("desvanecer")
    await awanta_bara(2000);
    derrota_Musica.currentTime = 0; 
    derrota_Musica.play();
    await awanta_bara(3000);
    menu_Madrasos.classList.add("imagen_Zoom");
    await awanta_bara(3000);
    animal_Enemigo.width = 5;
    animal_Enemigo.height = 10;
    derrota_Musica.pause();
    animal_Select.imagen.classList.remove("desvanecer")
    preparar_Reinicio();
    }
}

let kaiser_gana = false
async function recibir_Daño(foto) {
    if (easter_egg == 0) {
        kaiser_gana = false
    }
    chingadazo_Sonido.currentTime = 0; 
    chingadazo_Sonido.play();
    boton_Hada.disabled = true;
    boton_Caca.disabled = true;
    boton_Electrico.disabled = true;
    foto.classList.add("chingadazo");
    await awanta_bara(300);
    foto.classList.remove("chingadazo");
    evaluar_Vida()
    await awanta_bara(700);
    if (combate_Activo == true) {
        boton_Hada.disabled = false;
        boton_Caca.disabled = false;
        boton_Electrico.disabled = false;
    }
}

function cambiar_Color_Malo(porcent) {
 if (porcent <= 40 && porcent > 20 ) {
    vida_Malo.style.backgroundColor = 'rgb(255, 240, 34)'
 }else if (porcent < 20) {
    vida_Malo.style.backgroundColor = 'rgb(201, 0, 0)'
 }
}

function cambiar_Color_Bueno(porcent) {
    if (porcent <= 40 && porcent > 20 ) {
    vida_Bueno.style.backgroundColor = 'rgb(255, 240, 34)'
    }else if (porcent < 20) {
    vida_Bueno.style.backgroundColor = 'rgb(201, 0, 0)'
    }
}

async function ataque(ataque_Jug, ataque_Ene) {
    if (ataque_Jug == ataque_Ene){
        anuncio.textContent = "EMPATE"
        error_Sonido.currentTime = 0; 
        error_Sonido.play()
        boton_Hada.disabled = true;
        boton_Caca.disabled = true;
        boton_Electrico.disabled = true;
        await awanta_bara(1000);
        boton_Hada.disabled = false;
        boton_Caca.disabled = false;
        boton_Electrico.disabled = false;
    }
    /*-----------------------------------------------*/
    if (ataque_Jug == 0 && ataque_Ene == 1) {
        animal_Enemigo.vida -= animal_Select.ataque_Hada
        if(easter_egg == 0) {
            anuncio.textContent = "🧚 VS  𓋹 𓍹 𓎛 TU GANAS!!"
        }else {
            anuncio.textContent = "🧚 VS 💩 TU GANAS!!"
        }
        reduccion_Vida(animal_Enemigo.vida)
        vida_Malo.style.width = porcentaje + '%'
        cambiar_Color_Malo(porcentaje)
        await recibir_Daño(animal_Enemigo.imagen)
        /*-----------------------------------------------*/
    }else if (ataque_Jug == 0 && ataque_Ene == 2) {
        animal_Select.vida -= animal_Enemigo.ataque_Electrico
        if(easter_egg == 0) {
            anuncio.textContent = "🧚 VS 𓂏 𓄿 𓆡 TU PIERDES!!"
            kaiser_gana = true
        }else {
            anuncio.textContent = "🧚 VS ⚡ TU PIERDES!!"
        }
        reduccion_Vida(animal_Select.vida)
        vida_Bueno.style.width = porcentaje + '%'
        cambiar_Color_Bueno(porcentaje)
        await recibir_Daño(animal_Select.imagen)
        /*-----------------------------------------------*/
    }else if (ataque_Jug == 1 && ataque_Ene == 0) {
        animal_Select.vida -= animal_Enemigo.ataque_Hada
        if(easter_egg == 0) {
            anuncio.textContent = "💩 VS  𓃠 𓆈 𓅂 TU PIERDES!!"
            kaiser_gana = true
        }else {
            anuncio.textContent = "💩 VS 🧚 TU PIERDES!!"
        }
        reduccion_Vida(animal_Select.vida)
        vida_Bueno.style.width = porcentaje + '%'
        cambiar_Color_Bueno(porcentaje)
        await recibir_Daño(animal_Select.imagen)
        /*-----------------------------------------------*/
    }else if (ataque_Jug == 1 && ataque_Ene == 2) {
        animal_Enemigo.vida -= animal_Select.ataque_caca
        if(easter_egg == 0) {
            anuncio.textContent = "💩 VS 𓂏 𓄿 𓆡 TU GANAS!!"
        }else {
            anuncio.textContent = "💩 VS ⚡ TU GANAS!!"
        }
        reduccion_Vida(animal_Enemigo.vida)
        vida_Malo.style.width = porcentaje + '%'
        cambiar_Color_Malo(porcentaje)
        await recibir_Daño(animal_Enemigo.imagen)
        /*-----------------------------------------------*/
    }else if (ataque_Jug == 2 && ataque_Ene == 0) {
        animal_Enemigo.vida -= animal_Select.ataque_Electrico
        if(easter_egg == 0) {
            anuncio.textContent = "⚡ VS  𓃠 𓆈 𓅂 TU GANAS!!"
        }else {
            anuncio.textContent = "⚡ VS 🧚 TU GANAS!!"
        }
        reduccion_Vida(animal_Enemigo.vida)
        vida_Malo.style.width = porcentaje + '%'
        cambiar_Color_Malo(porcentaje)
        await recibir_Daño(animal_Enemigo.imagen)
        /*-----------------------------------------------*/
    }else if (ataque_Jug == 2 && ataque_Ene == 1) {
        animal_Select.vida -= animal_Enemigo.ataque_caca
        if(easter_egg == 0) {
            anuncio.textContent = "⚡ VS  𓃠 𓆈 𓅂 TU PIERDES!!"
        }else {
            anuncio.textContent = "⚡ VS 💩 TU PIERDES!!"
        }
        reduccion_Vida(animal_Select.vida)
        vida_Bueno.style.width = porcentaje + '%'
        cambiar_Color_Bueno(porcentaje)
        await recibir_Daño(animal_Select.imagen)
    }
}

let ataque_Jugador = null
let ataque_Enemigo = null

boton_Hada.addEventListener('click', async function(event) {
        ataque_Jugador = 0
        ataque_Enemigo = getRandomInt(3)
        await ataque(ataque_Jugador, ataque_Enemigo)
    });
boton_Caca.addEventListener('click', async function(event) {
        ataque_Jugador = 1
        ataque_Enemigo = getRandomInt(3)
        await ataque(ataque_Jugador, ataque_Enemigo)
    });
boton_Electrico.addEventListener('click', async function(event) {
        ataque_Jugador = 2
        ataque_Enemigo = getRandomInt(3)
        await ataque(ataque_Jugador, ataque_Enemigo)
    });

async function empezar_Kaiser(jugador, enemigo) {
    mapa_Musica.pause();
    animal_Enemigo.imagen.classList.add("kaiser_Idle");
    animal_Select.vida = 16
    animal_Enemigo.vida = 40
    kaiser_Batalla.appendChild(contenedor_Ataques);
    kaiser_Batalla.appendChild(vida_Jugador);
    kaiser_Batalla.appendChild(vida_Enemigo);
    contenedor_Ataques.style.display = 'block'
    vida_Jugador.style.display = ''
    vida_Enemigo.style.display = ''
    anuncio.textContent = "ELIJE UN ATAQUE!!"
    combate_Activo = true
    menu_Mapa.classList.add("imagen_Zoom");
    await awanta_bara(4000);
    mensaje1.classList.add('aparecer')
    mensaje1.style.display = ('block')
    await awanta_bara(4000);
    mensaje2.classList.add('aparecer')
    mensaje2.style.display = ('block')
    await awanta_bara(4000);
    mensaje3.classList.add('aparecer')
    mensaje3.style.display = ('block')
    await awanta_bara(4000);
    mensaje4.classList.add('erratico')
    mensaje4.style.display = ('block')
    await awanta_bara(1000);
    mensaje1.style.display = ('none')
    mensaje2.style.display = ('none')
    mensaje3.style.display = ('none')
    mensaje4.style.display = ('none')
    kaiser_Musica.play();
    kaiser_Batalla.appendChild(animal_Select.imagen);
    kaiser_Batalla.appendChild(animal_Enemigo.imagen);
    jugador.width = 15;
    jugador.height = 30;
    jugador.posx = 5;
    jugador.posy = 5;
    dibujar_Animal();
    kaiser.imagen.style.display = "block"
    menu_Mapa.style.display = "none";
    kaiser_Batalla.style.display = "block";
    await awanta_bara(100);
    menu_Mapa.classList.remove("imagen_Zoom");
}

let musica_Random = 0
async function empezar_Combate(jugador, enemigo) {
    animal_Select.vida = 16
    animal_Enemigo.vida = 16
    contenedor_Ataques.style.display = ''
    vida_Jugador.style.display = ''
    vida_Enemigo.style.display = ''
    anuncio.textContent = "ELIJE UN ATAQUE!!"
    combate_Activo = true
    mapa_Musica.pause();
    mapa_Musica.currentTime = 0;
    musica_Random = getRandomInt(3)
    if (musica_Random == 0) {
        combate_Musica1.play()
    }else if (musica_Random == 1){
        combate_Musica2.play()
    }else {
        combate_Musica3.play()
    }
    menu_Mapa.classList.add("imagen_Zoom");
    await awanta_bara(2000);
    menu_Madrasos.appendChild(animal_Select.imagen);
    menu_Madrasos.appendChild(animal_Enemigo.imagen);
    jugador.width = 15;
    jugador.height = 30;
    enemigo.width = 12.5;
    enemigo.height = 25;
    jugador.posx = 5;
    jugador.posy = 5;
    enemigo.posx = 12;
    enemigo.posy = 3;
    dibujar_Animal();
    dibujar_Enemigo();
    menu_Mapa.style.display = "none";
    menu_Madrasos.style.display = "block";
    transicion.classList.add("abrir");
    await awanta_bara(4000);
    transicion.classList.remove("abrir");
    menu_Mapa.classList.remove("imagen_Zoom");
}

let ultima_Posx = 0
let ultima_Posy = 0
function detectar_Colision(){
    if(easter_egg === 0 && animal_Select.posx == kaiser.posx && animal_Select.posy == kaiser.posy) {
        empezar_Kaiser(animal_Select, kaiser)
    }else if (animal_Select.posx == animal_Enemigo.posx && animal_Select.posy == animal_Enemigo.posy) {
        ultima_Posx = animal_Select.posx
        ultima_Posy = animal_Select.posy
        empezar_Combate(animal_Select, animal_Enemigo)
    }
}

let esta_Moviendose = false;
async function movimiento_Animal(mov) {
    animal_Select.imagen.classList.add("personaje_Idle");
    if (esta_Moviendose || combate_Activo) {
        return;
    }else{
    esta_Moviendose = true;
    if (mov === "mov_D") {
    animal_Select.posx += 1;
    } else if (mov === "mov_A") {
    animal_Select.posx -= 1;
    } else if (mov === "mov_W") {
    animal_Select.posy -= 1;
    } else if (mov === "mov_S") {
    animal_Select.posy += 1;
    }
    animal_Select.imagen.classList.add(mov);
    pickup.currentTime = 0;
    pop_Sonido.play()
    dibujar_Animal();
    await awanta_bara(500);
    animal_Select.imagen.classList.remove(mov);
    esta_Moviendose = false;
    }
    detectar_Colision();
}

window.addEventListener('keyup', function(event) {
    if (event.key === "W" || event.key === "w") {
        movimiento_Animal("mov_W");
    }
});

window.addEventListener('keyup', function(event) {
    if (event.key === "A" || event.key === "a") {
        movimiento_Animal("mov_A");
    }
});

window.addEventListener('keyup', function(event) {
    if (event.key === "S" || event.key === "s") {
        movimiento_Animal("mov_S");
    }
});

window.addEventListener('keyup', function(event) {
    if (event.key === "D" || event.key === "d") {
        movimiento_Animal("mov_D");
    }
});

menu_Trampa.addEventListener('click', iniciar_Juego);

contenedor_Animales.addEventListener('click', function(event) {
    pickup.currentTime = 0;
    pickup.play();
});

boton_Listo.addEventListener('click', async function(event) {
    if (animal_Select === null) {
        error_Sonido.play();
        return;
    }else {
        ok.classList.remove("ok_Ocultar");
        ok.style.position = "absolute";
        ok.style.left = "60%";
        ok.style.top = "70%";
        ok.style.transform = "translate(-50%, -50%)";
        ok.style.zIndex = 1
        ok.classList.add("caida_Ok");
        boton_Listo.disabled = true
        ok_Sonido.play();
        await awanta_bara(3000)
        body.style.background = "black";
        menu_Seleccion.style.display = 'none';
        san_letras.style.display = 'none';
        mar_letras.style.display = 'none';
        cock_letras.style.display = 'none';
        menu_Musica.pause();
        cargando.classList.remove("cargando_Ocultar");
        ok.classList.add("ok_Ocultar");
        await awanta_bara(10000)
        inicio_Mapa();
    }
});