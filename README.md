<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>Alerta de segurança</title>
<link rel="stylesheet" href="style.css">
</head>
<body>

<main class="card" id="alert">
  <div class="icon">⚠️</div>
  <h1>Ameaça detectada!</h1>
  <p>Foi encontrado um possível trojan neste dispositivo. Analisando arquivos…</p>
  <div class="bar"><div id="fill"></div></div>
  <p id="status">Escaneando… 0%</p>
  <ul id="threats"></ul>
  <div class="row">
    <button class="primary" id="remove">Remover ameaças</button>
    <button class="secondary" id="ignore">Ignorar</button>
  </div>
</main>

<main class="card hidden" id="reveal">
  <div class="icon">😄</div>
  <h1>Pegadinha! Nenhum vírus foi encontrado.</h1>
  <p>Esta página é só uma brincadeira e não instalou nem leu nada no seu dispositivo.</p>
  <p><strong>Como reconhecer um alerta falso de verdade:</strong></p>
  <ul class="tips">
    <li>• Sites não conseguem escanear o seu computador.</li>
    <li>• Alertas com contagem regressiva ou som alto querem te assustar.</li>
    <li>• Se pedir para ligar para um “suporte” ou baixar um programa, é golpe.</li>
    <li>• Na dúvida, feche a aba e use o antivírus que você já tem instalado.</li>
  </ul>
  <div class="row">
    <button class="primary" id="again">Ver de novo</button>
  </div>
</main>

<script src="script.js"></script>
</body>
</html>

(function () {
  var alertBox = document.getElementById('alert');
  var reveal = document.getElementById('reveal');
  var fill = document.getElementById('fill');
  var status = document.getElementById('status');
  var list = document.getElementById('threats');
  var threats = ['Trojan.Pegadinha.A', 'Worm.Zoeira.Win32', 'Adware.FalsoTotal.B'];
  var timer = null;

  function start() {
    document.body.classList.remove('safe');
    reveal.classList.add('hidden');
    alertBox.classList.remove('hidden');
    list.innerHTML = '';
    var p = 0, shown = 0;
    clearInterval(timer);
    timer = setInterval(function () {
      p += 2;
      fill.style.width = p + '%';
      status.textContent = 'Escaneando… ' + p + '%';
      if (p >= 25 * (shown + 1) && shown < threats.length) {
        var li = document.createElement('li');
        li.textContent = '⚠ ' + threats[shown++];
        list.appendChild(li);
      }
      if (p >= 100) { clearInterval(timer); showReveal(); }
    }, 120);
  }

  function showReveal() {
    clearInterval(timer);
    alertBox.classList.add('hidden');
    reveal.classList.remove('hidden');
    document.body.classList.add('safe');
  }

  document.getElementById('remove').onclick = showReveal;
  document.getElementById('ignore').onclick = showReveal;
  document.getElementById('again').onclick = start;
  start();
})();

