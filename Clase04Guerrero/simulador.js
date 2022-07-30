const plan = (a,b,c) => a + b + c
let flag = false;


function basico(){
    let cuotas = parseInt (prompt("Ingresa cantidad a meses a diferir"))
    let inscripcion = 300
    let mantenimientoAnual= 599 
    let contratoAnual= 3588

    let precioFinal = ((plan(inscripcion,mantenimientoAnual,contratoAnual))/cuotas).toFixed(2)
        if(cuotas === 1){
            alert("Su pago de contado es" + " " + "$" + precioFinal)
            console.log("Su pago de contado es" + " " + "$" + precioFinal)
        } else if (cuotas === 6){
            alert("Su pago diferido a 6 meses es" + " " + "$" + precioFinal + "/mes")
            console.log("Su pago diferido a 6 meses es" + " " + "$" + precioFinal + "/mes")
        } else if (cuotas === 12){
            alert("Su pago diferido a 12 meses es" + " " + "$" + precioFinal + "/mes")
            console.log("Su pago diferido a 12 meses es" + " " + "$" + precioFinal + "/mes")
        } else if (cuotas !== 1 || 6 || 12){
            alert("Ingresa cantidad de plazos a diferir: 1 Pago de contado, 6 Meses, 12 Meses")
            console.log("Ingresa cantidad de plazos a diferir<br> 1 Pago de contado <br> 6 Meses <br> 12 Meses")            
        }

}

function premium(){
    let cuotas = parseInt (prompt("Ingresa cantidad a meses a diferir"))
    let inscripcion = 0
    let mantenimientoAnual= 599
    let contratoAnual= 5988

    let precioFinal = ((plan(inscripcion,mantenimientoAnual,contratoAnual))/cuotas).toFixed(2)
    if(cuotas === 1){
        alert("Su pago de contado es" + " " + "$" + precioFinal)
        console.log("Su pago de contado es" + " " + "$" + precioFinal)
    } else if (cuotas === 6){
        alert("Su pago diferido a 6 meses es" + " " + "$" + precioFinal + "/mes")
        console.log("Su pago diferido a 6 meses es" + " " + "$" + precioFinal + "/mes")
    } else if (cuotas === 12){
        alert("Su pago diferido a 12 meses es" + " " + "$" + precioFinal + "/mes")
        console.log("Su pago diferido a 12 meses es" + " " + "$" + precioFinal + "/mes")
    } else if (cuotas !== 1 || 6 || 12){
        alert("Ingresa cantidad de plazos a diferir: 1 Pago de contado, 6 Meses, 12 Meses")
        console.log("Ingresa cantidad de plazos a diferir<br> 1 Pago de contado <br> 6 Meses <br> 12 Meses")
    }
}