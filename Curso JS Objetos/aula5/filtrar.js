const clientes = require("./clientes.json");

function filtrarApsSemComplemento(clientes) {
    return clientes.filter((cliente) => {
        return (cliente.endereco.apartamento &&
            !cliente.endereco.hasOwnProperty("complemento")
        );
    });
};

const filtrados = filtrarApsSemComplemento(clientes);

console.log(filtrados);