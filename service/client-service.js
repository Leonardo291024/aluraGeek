const listaClientes = () => fetch('https://github.com/Leonardo291024/aluraGeek/perfil').then((respuesta) => respuesta.json());

const crearCliente = (nombre, email) =>{
    return fetch('https://github.com/Leonardo291024/aluraGeek/perfil',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nombre,
            email,
            id: uuid.v4()
        })
    })
}



export const clientServices ={
    listaClientes,
    crearCliente
}

