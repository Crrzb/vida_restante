const btn_calcular = document.getElementById('btn_calcular');
btn_calcular.addEventListener('click',calcular_semanas);


const input_fecha = document.getElementById("fecha_nacimiento");
input_fecha.addEventListener('change',obtener_fecha);
let fecha_nacimiento,fecha_actual;
fecha_hoy()

// let p = document.getElementById('navegador')
// p.innerText = navigator.platform
// console.log(navigator)

// if(){
//     alert('SAFARI')
// }



// p.innerText = navigator.userAgent







function obtener_fecha(){
    fecha_hoy()
    fecha_nacimiento = input_fecha.value;
    btn_calcular.disabled=false;
}

function fecha_hoy(){
    if(navigator.platform != 'iPhone'){
        document.getElementById('formato').innerText = 'Formato: mm-dd-aaaa'

        fecha_actual = new Date().toLocaleDateString();
        let mes = fecha_actual.split('/')[0]
        mes.length == 1 ? mes='0'+mes : mes
        let dia = fecha_actual.split('/')[1]
        dia.length==1 ? dia='0'+dia : dia
        let año = fecha_actual.split('/')[2]
        fecha_actual = año+'-'+mes+'-'+dia

    }else{
        //ES IPHONE
        document.getElementById('formato').innerText = 'Formato: dd-mm-aaaa'
        fecha_actual = new Date().toLocaleDateString();
        let mes = fecha_actual.split('/')[1]
        mes.length == 1 ? mes='0'+mes : mes
        let dia = fecha_actual.split('/')[0]
        dia.length==1 ? dia='0'+dia : dia
        let año = fecha_actual.split('/')[2]
        fecha_actual = año+'-'+mes+'-'+dia
    }

    

    
}

function calcular_semanas(){
    console.log('Fecha de nacimiento: '+fecha_nacimiento)
    // alert('Fecha de nacimiento: '+fecha_nacimiento)
    console.log('Fecha actual: '+fecha_actual);
    // alert('Fecha actual: '+fecha_actual)

    console.log('Dias transcurridos este año: '+dias_transcurridos_fecha_actual())

    console.log('Dias transcurridos del año de nacimiento: '+dias_transcurridos_año_nacimiento())

    console.log('Dias transcurridos desde el nacimiento hasta terminar año: '+dias_restantes_del_año_nacimiento())

    console.log('Años completos restantes entre año actual y año de nacimiento: '+años_completos_vividos())

    console.log('Dias totales en los años vividos completos '+dias_en_años_completos_vividos())

    console.log('Dias totales desde nacimiento hasta fecha actual: '+dias_totales_desde_nacimiento())

    console.log('Semanas totales vividas desde nacimiento: '+semanas_desde_nacimiento())


    //console.log('Real: ',semanas_desde_nacimiento(),' Floor: ',Math.floor(dias_totales_desde_nacimiento() / 7),' Round: ',Math.round(dias_totales_desde_nacimiento() / 7))

    window.location.href = '/vida_restante/semanas.html#'+num_semana_ancla()+'?s='+Math.floor(semanas_desde_nacimiento());
    
}

function semanas_desde_nacimiento(){
    return dias_totales_desde_nacimiento() / 7;
}

function num_semana_ancla(){
    return Math.floor(semanas_desde_nacimiento() - 90);
}


function años_completos_vividos(){
    let año_actual = fecha_actual.split('-')[0]
    año_actual = parseInt(año_actual) - 1

    let año_nacimiento = fecha_nacimiento.split('-')[0]
    año_nacimiento = parseInt(año_nacimiento) - 1;

    return (año_actual - año_nacimiento) - 1;
}

function dias_totales_desde_nacimiento(){
    return dias_en_años_completos_vividos() + dias_transcurridos_fecha_actual() + dias_restantes_del_año_nacimiento();
}

function dias_en_años_completos_vividos(){
    return años_completos_vividos() * 365
}

//2023-03-07
function dias_transcurridos_fecha_actual(){
    const año = fecha_actual.split('-')[0]
    const mes = fecha_actual.split('-')[1]
    const dia = fecha_actual.split('-')[2]
    

    let dias_hasta_mes = dias_transcurridos_hasta_mes(parseInt(mes)-1)

    return dias_hasta_mes + parseInt(dia);

}

function dias_transcurridos_año_nacimiento(){
    const mes = fecha_nacimiento.split('-')[1]
    const dia = fecha_nacimiento.split('-')[2]
    

    let dias_hasta_mes = dias_transcurridos_hasta_mes(parseInt(mes)-1)

    return dias_hasta_mes + parseInt(dia);
}

function dias_restantes_del_año_nacimiento(){
    return 365 - dias_transcurridos_año_nacimiento();
}

function dias_transcurridos_hasta_mes(mes){
    let total_dias = 0;
    for(let i= 1;i<mes+1;i++){
        total_dias = total_dias + dias_mes(i);
    }

    return total_dias

}

function dias_mes(mes){ 
    let dias;
    const dias_mes = [
        [01,31],
        [02,28],
        [03,31],
        [04,30],
        [05,31],
        [06,30],
        [07,31],
        [08,31],
        [09,30],
        [10,31],
        [11,30],
        [12,31],

    ]

    dias_mes.map(m => {
        if(m[0] === mes){
            dias = m[1]
            return
        }
    })

    return dias;
}





