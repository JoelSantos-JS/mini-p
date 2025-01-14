document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("toggle-animation");
    const animatedText = document.getElementById("animated-text");
    const countdownElement = document.getElementById("countdown");
  
    let isPlaying = true;
  
    // Função para alternar Play/Pause
    toggleButton.addEventListener("click", () => {
      if (isPlaying) {
        animatedText.style.animationPlayState = "paused";
        toggleButton.textContent = "▶ Play";
      } else {
        animatedText.style.animationPlayState = "running";
        toggleButton.textContent = "⏸ Pause";
      }
      isPlaying = !isPlaying;
    });
  
    // Função para atualizar o contador
    function updateCountdown() {
      const now = new Date();
      let next14 = new Date(now.getFullYear(), now.getMonth(), 14);
  
      // Se o próximo dia 14 já passou, avance para o mês seguinte
      if (now > next14) {
        next14.setMonth(next14.getMonth() + 1);
      }
  
      const diff = next14 - now;
  
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  
      countdownElement.textContent = `Próximo dia 14: ${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
  
    // Atualiza o contador a cada segundo
    setInterval(updateCountdown, 1000);
  
    // Chama a função para a inicialização
    updateCountdown();
  });
  