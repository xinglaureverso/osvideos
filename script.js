function abrirVideo(nome) {
  const player = document.getElementById("player");
  player.src = `videos/${nome}`;
  player.play();
}
