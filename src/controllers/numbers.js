import * as utils from '../utils/utils.js';

export const getPrimeNumber = (request, response)  => {
    try{
        const { base } = request.params;
        const value = Number(base);

        if (isNaN(value)) {
            throw new Error('Valor no válido para la ejecución.')
        }

        if (!Number.isInteger(value)) {
            throw new Error('El valor debe ser un número entero.')
        }

        if (value < 2) {
            throw new Error('El valor debe ser mayor o igual a 2.')
        }

        const listPrimeNumbers = []
        for (let i = value; i >= 2; i--) {
            if (utils.validPrime(i)) {
                listPrimeNumbers.push(String(i));
            }
        }

        return response.json({
            primeNumbers: listPrimeNumbers.join(',')
        })
    }
    catch (e){
        const statusCode = 409
        response.statusCode = statusCode;
        return response.json({
            statusCode,
            message: e.message
        })
    }
}

