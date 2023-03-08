let meses_vividos = window.location.href.split('=')[1]
meses_vividos = parseInt(meses_vividos)

// const btn_semanas = document.getElementById('btn_semanas')
// btn_semanas.addEventListener('click',ver_semanas)

let porcentaje = Math.floor((meses_vividos / (3900/4))*100) 
const id_ancla = window.location.href.split('#')[1];

const h1_meses = document.getElementById('h1_meses')
h1_meses.innerText = 'Has usado '+meses_vividos+' meses de tu vida.'

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



for(let i=0;i<meses_vividos;i++){
    const cb = document.createElement('input');
    i == parseInt(id_ancla) ? cb.id = id_ancla : 0
    cb.type = 'checkbox'
    cb.classList.add('form-check-input','col-1')
    i == meses_vividos-1 ? cb.classList.add('bg-success') : cb.classList.add('bg-primary','fs-7')
    cb.checked = true;
    cb.name = 's'+i+1
    cb.disabled = true;

    const lbl = document.createElement('label');
    lbl.classList.add('form-label-checked')
    i == meses_vividos-1 ? lbl.classList.add('text-success') : lbl.classList.add('text-primary','fs-7')
    lbl.classList.add('fw-bold','col-1','me-3')
    lbl.for = cb.name
    lbl.innerText = i+1

    contenedor.append(cb)
    contenedor.append(lbl)
    
    
}

for(let i=meses_vividos;i<(3900/4)+1;i++){
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