let semanas_vividas = window.location.href.split('=')[1];
semanas_vividas = parseInt(semanas_vividas)

let meses = Math.floor(semanas_vividas / 4);
const porcentaje = Math.floor((semanas_vividas / 3900)*100) ;
const id_ancla = window.location.href.split('#')[1];

const btn_meses = document.getElementById('btn_meses')
btn_meses.addEventListener('click',ver_meses)

const h1_semanas = document.getElementById('h1_semanas')
h1_semanas.innerText = 'Has usado '+semanas_vividas+' semanas de tu vida.'

const contenedor = document.getElementById('contenedor');

function ver_meses(){
    window.location.href = '/vida_restante/meses.html#'+(meses-90)+'?m='+meses
}

for(let i=0;i<semanas_vividas;i++){
    const cb = document.createElement('input');
    i == parseInt(id_ancla) ? cb.id = id_ancla : 0
    cb.type = 'checkbox'
    cb.classList.add('form-check-input','col-1')
    i == semanas_vividas-1 ? cb.classList.add('bg-success') : cb.classList.add('bg-primary','fs-7')
    cb.checked = true;
    cb.name = 's'+i+1
    cb.disabled = true;

    const lbl = document.createElement('label');
    lbl.classList.add('form-label-checked')
    i == semanas_vividas-1 ? lbl.classList.add('text-success') : lbl.classList.add('text-primary','fs-7')
    lbl.classList.add('fw-bold','col-1','me-3')
    lbl.for = cb.name
    lbl.innerText = i+1

    contenedor.append(cb)
    contenedor.append(lbl)
    
    
}

for(let i=semanas_vividas;i<3901;i++){
    const cb = document.createElement('input');
    cb.type = 'checkbox'
    cb.classList.add('form-check-input','col-1')
    cb.classList.add('fs-7')
    cb.checked = false;
    cb.name = 's'+i+1
    cb.disabled = true;

    const lbl = document.createElement('label');
    lbl.classList.add('form-label-checked')
    lbl.classList.add('text-primary','col-1')
    lbl.classList.add('fw-bold')
    lbl.classList.add('fs-7','me-3')
    lbl.for = cb.name
    lbl.innerText = i+1

    contenedor.append(cb)
    contenedor.append(lbl)
     
}



const bar_container = document.createElement('div')
bar_container.classList.add('progress')
bar_container.role = 'progressbar'

const bar = document.createElement('div')
bar.classList.add('progress-bar','progress-bar-striped','progress-bar-animated','px-1')
bar.style.width = porcentaje+'%'
bar.innerText = porcentaje+'%'

bar_container.append(bar)

const nav = document.getElementById('nav')
nav.append(bar_container)
