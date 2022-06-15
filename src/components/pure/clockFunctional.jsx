import React, {useState,useEffect} from 'react';

const ClockFunctional = () => {

    const usuario = {
        fecha: new Date(),
        edad: 0,
        nombre: 'Martín',
        apellidos: 'San José'
    } 

    const [reloj,setReloj]= useState(usuario);

    useEffect(() => {
        console.log("comprobando componente");
        
        return () => {
            setInterval(() => {
                tick();
            }, 1000);

        };
    },[]);


    // tick(){
    //     this.setState((prevState) => {
    //        let edad = prevState.edad +1;
    //        return {
    //           ...prevState,
    //           fecha: new Date(),
    //           edad
    //        }
    //     });
    // }

    const tick = () => {
        console.log("modificando tick");
        let edad = reloj.edad +1;
        setReloj({
            ...reloj,
            fecha: new Date(),
            edad
        })
        console.log("el objeto reloj tiene : ", reloj);
    }

    return (
        <div>
            <h2>
            Hora Actual:
            {` ${reloj.fecha.getHours()}:${reloj.fecha.getMinutes()}:${reloj.fecha.getSeconds()}`}
            </h2>
            <h3>{reloj.nombre} {reloj.apellidos}</h3>
            <h1>Edad: {reloj.edad}</h1>
        </div>
    );
}

export default ClockFunctional;
