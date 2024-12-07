// Função para calcular os dias, minutos e segundos desde 1 de setembro de 2023
function updateCountdown() {
  const startDate = new Date("2023-09-01T00:00:00");
  const now = new Date();
  const diff = now - startDate;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("countdown").textContent = 
    `${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos`;
}

// Atualizar a contagem a cada segundo
setInterval(updateCountdown, 1000);
