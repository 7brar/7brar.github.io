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
