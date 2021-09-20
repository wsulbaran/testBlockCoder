# testBlockCoder

Simple overview of use/purpose.

## Descripción

Este proyecto registra las transacciones de un bloque de Ethereum  cuando es minado. Las transacciones,
se guardan en una base de datos de MongoDB, para luego ser consultada a traves una api.

## Getting Started
git clone https://github.com/wsulbaran/testBlockCoder.git
Previamente tener instalado MongoDB para el registro de datos.
### Instalación
Ir al repositorio clonado y ejecutar npm install --save
Crear una copia del archivo, cp .env.json.example .env.json
### Ejecución
npm run ts:watch
npm run server

### APIS

/api/transaction  POST
Cuerpo de la peticion 
{
    "filter":""  // example: address, blocknumber, hash
}

/api/transaction/address POST
{
    "origin":"to"   // example: "from" o "to"
    "address":""
}
## Autor

Wilfredo Sulbaran
