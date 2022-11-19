const dtSwitch = document.querySelector('.toggle input[type="checkbox"]');
const temaActual = localStorage.getItem('theme');

if (temaActual) {
    document.documentElement.setAttribute('data-theme', temaActual);
  
    if (temaActual === 'dark') {
        dtSwitch.checked = true;
    }
}

function cambiarTema(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
    else {        document.documentElement.setAttribute('data-theme', 'light');
          localStorage.setItem('theme', 'light');
    }    
}

dtSwitch.addEventListener('change', cambiarTema, false);


