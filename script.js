/* ==========================================================
   🌻 DETALLE DE FLORES AMARILLAS
   Cambia estos datos para personalizarlo.
   ========================================================== */

const NOMBRE_DE_ELLA = "Damaris";
const TU_NOMBRE = "tu programador favorito";

// Cambiamos los nombres automáticamente
document.getElementById("nombreInicio").textContent = NOMBRE_DE_ELLA;
document.getElementById("nombreCarta").textContent = NOMBRE_DE_ELLA;
document.getElementById("firma").textContent = TU_NOMBRE;

const screens = {
  inicio: document.getElementById("inicio"),
  flores: document.getElementById("flores"),
  carta: document.getElementById("carta"),
  final: document.getElementById("final")
};

function mostrar(nombre) {
  Object.values(screens).forEach(s => s.classList.remove("active"));
  screens[nombre].classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.getElementById("btnFlores").addEventListener("click", () => {
  mostrar("flores");
  crearFlores();
  iniciarCorazones();

  setTimeout(() => {
    mostrarToast("🌻 Estas flores son para ti.");
  }, 1200);
});

document.getElementById("btnCarta").addEventListener("click", () => {
  mostrar("carta");
});

document.getElementById("btnSorpresa").addEventListener("click", () => {
  mostrar("final");
  lanzarCorazones();
});

document.getElementById("btnRepetir").addEventListener("click", () => {
  mostrar("flores");
  crearFlores();
  lanzarCorazones();
});

function crearFlores() {
  const contenedor = document.getElementById("flowers");
  contenedor.innerHTML = "";

  const cantidad = window.innerWidth < 600 ? 7 : 12;

  for (let i = 0; i < cantidad; i++) {
    const flower = document.createElement("div");
    flower.className = "flower";

    const left = 3 + Math.random() * 94;
    const scale = 0.55 + Math.random() * 0.65;
    const delay = Math.random() * 1.3;

    flower.style.left = `${left}%`;
    flower.style.transform = `scale(${scale})`;
    flower.style.animationDelay = `${delay}s`;

    flower.innerHTML = `
      <div class="head">
        <div class="petal"></div>
        <div class="petal"></div>
        <div class="petal"></div>
        <div class="petal"></div>
        <div class="petal"></div>
        <div class="petal"></div>
        <div class="petal"></div>
        <div class="petal"></div>
        <div class="center"></div>
      </div>
      <div class="leaf left"></div>
      <div class="leaf right"></div>
      <div class="stem"></div>
    `;

    contenedor.appendChild(flower);
  }
}

let heartInterval;

function iniciarCorazones() {
  clearInterval(heartInterval);

  heartInterval = setInterval(() => {
    const screen = document.getElementById("flores");

    if (!screen.classList.contains("active")) return;

    const heart = document.createElement("div");
    heart.className = "heart";
    heart.textContent = Math.random() > .5 ? "♥" : "♡";
    heart.style.left = `${5 + Math.random() * 90}%`;
    heart.style.bottom = `${5 + Math.random() * 20}%`;
    heart.style.animationDuration = `${4 + Math.random() * 4}s`;

    document.getElementById("hearts").appendChild(heart);

    setTimeout(() => heart.remove(), 8000);
  }, 700);
}

function lanzarCorazones() {
  for (let i = 0; i < 25; i++) {
    setTimeout(() => {
      const heart = document.createElement("div");
      heart.className = "heart";
      heart.textContent = i % 2 === 0 ? "♥" : "♡";
      heart.style.left = `${Math.random() * 100}%`;
      heart.style.bottom = `${Math.random() * 20}%`;
      heart.style.animationDuration = `${3 + Math.random() * 3}s`;
      document.body.appendChild(heart);

      setTimeout(() => heart.remove(), 7000);
    }, i * 90);
  }
}

function mostrarToast(texto) {
  const toast = document.getElementById("toast");
  toast.textContent = texto;
  toast.classList.add("show");

  setTimeout(() => toast.classList.remove("show"), 3000);
}

// Efecto de entrada
window.addEventListener("load", () => {
  setTimeout(() => mostrarToast("💛 Hice esto pensando en ti."), 1200);
});
