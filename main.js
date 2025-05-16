// Função para abrir imagem em modal
const modal = document.getElementById("modal");
const modalImg = document.getElementById("imgModal");
const closeModal = document.getElementById("closeModal");

// Adiciona evento de clique para todas as imagens do carrossel
const imagens = document.querySelectorAll(".carrossel img");

imagens.forEach(img => {
  img.addEventListener("click", function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
  });
});

// Fecha o modal ao clicar no X
closeModal.onclick = function() {
  modal.style.display = "none";
}

// Fecha o modal se clicar fora da imagem
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}