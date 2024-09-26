const countdownElement = document.getElementById('countdown');
const passwordInput = document.getElementById('password');
const loginForm = document.getElementById('loginForm');

// Fecha de cuenta atrás
const countDownDate = new Date("October 1, 2024 00:00:00").getTime();

// Frase fija para la contraseña (no se asigna al input)
const fixedPassword = "Amo el color de tus ojos";

// URL de redirección
const redirectUrl = "https://sites.google.com/view/los-pequeos-detalles/p%C3%A1gina-principal";

// Actualiza la cuenta atrás cada segundo
const x = setInterval(function() {
  const now = new Date().getTime();
  const distance = countDownDate - now;

  // Calcula días, horas, minutos y segundos
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Muestra la cuenta atrás
  countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}, 1000);

// Maneja el envío del formulario
loginForm.addEventListener('submit', function(event) {
  event.preventDefault();

  if (passwordInput.value === fixedPassword) {
    window.location.href = redirectUrl;
  } else {
    alert('Contraseña incorrecta');
  }
});
 
