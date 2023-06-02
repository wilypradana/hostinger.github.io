const button = document.querySelector('button[aria-controls="mobile-menu"]');
const hamburgerIcon = document.querySelector('.hamburger-icon');
const closeIcon = document.querySelector('.close-icon');
const menu = document.querySelector('#mobile-menu');

button.addEventListener('click', () => {
  const isExpanded = button.getAttribute('aria-expanded') === 'true';
  button.setAttribute('aria-expanded', !isExpanded);
  hamburgerIcon.classList.toggle('hidden');
  closeIcon.classList.toggle('hidden');
  menu.classList.toggle('hidden');
});


function hitungWaktu(targetTanggal) {
  // Menghitung selisih antara waktu sekarang dan target tanggal dalam detik
  const selisih = Math.floor((targetTanggal - new Date()) / 1000);

  // Menghitung jumlah hari, jam, menit, dan detik dari selisih waktu
  const hari = Math.floor(selisih / 86400);
  const jam = Math.floor((selisih / 3600) % 24);
  const menit = Math.floor((selisih / 60) % 60);
  const detik = Math.floor(selisih % 60);

  // Memasukkan nilai hari, jam, menit, dan detik ke dalam elemen HTML yang sesuai
  
  document.getElementById("jamNilai").innerHTML = String(jam).padStart(2, "0");
  document.getElementById("menitNilai").innerHTML = String(menit).padStart(2, "0");
  document.getElementById("detikNilai").innerHTML = String(detik).padStart(2, "0");
}

// Memanggil fungsi hitungWaktu dengan target tanggal yang ditentukan
const targetTanggal = new Date("june 2, 2023 03:34:30");
setInterval(() => hitungWaktu(targetTanggal), 1000);





const carousel = document.querySelector(".carousel");
const inner = document.querySelector(".carousel-inner");
const slides = document.querySelectorAll(".carousel-item");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let slideIndex = 0;
let slideCount = slides.length;

// Set initial slide
slides[slideIndex].classList.add("active");

// Next button click handler
nextBtn.addEventListener("click", () => {
  slides[slideIndex].classList.remove("active");
  slideIndex = (slideIndex + 1) % slideCount;
  slides[slideIndex].classList.add("active");
  inner.style.transform = `translateX(-${slideIndex * 100}%)`;
});

// Previous button click handler
prevBtn.addEventListener("click", () => {
  slides[slideIndex].classList.remove("active");
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  slides[slideIndex].classList.add("active");
  inner.style.transform = `translateX(-${slideIndex * 100}%)`;
});