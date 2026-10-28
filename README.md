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

