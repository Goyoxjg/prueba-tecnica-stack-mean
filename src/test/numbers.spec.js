import app from "../app";
import request from 'supertest';
import * as utils from '../utils/utils.js';

describe(' GET /', () => {
    it('Should respond with code 200', async () => {
        const response = await request(app).get('/').send();
        expect(response.statusCode).toBe(200)
    });

    it('Should respond "Serve is OK"', async () => {
        const response = await request(app).get('/').send();
        expect(response.body.result).toEqual(expect.stringContaining("Serve is OK"))
    })
});

describe('GET /api/numbers/prime/:num', () => {
    it('Should respond with code 200', async () => {
        const response = await request(app).get('/api/numbers/prime/15').send();
        expect(response.statusCode).toBe(200)
    });

    it('Should respond json format', async () => {
        const response = await request(app).get('/api/numbers/prime/7').send();
        expect(response.headers['content-type']).toEqual(expect.stringContaining("json"))
    });

    it('Should respond a list of numbers prime', async () => {
        const response = await request(app).get('/api/numbers/prime/9').send();
        let ok = true;
        response.body.primeNumbers
            .split(',')
            .forEach((num) => {
                if(!utils.validPrime(num)) {
                    ok = false;
                }
            })
        expect(ok).toBeTruthy();
    })

    it('Should respond a list like "7,5,3,2" if we give it number 7', async () => {
        const response = await request(app).get('/api/numbers/prime/7').send();
        expect(response.body.primeNumbers).toEqual('7,5,3,2')

    });

    it('Should respond with code 409, by Bad params', async () => {
        const response = await request(app).get('/api/numbers/prime/qwerty').send();
        expect(response.statusCode).toBe(409)
    });

    it('Should respond "El valor debe ser un número entero."', async () => {
        const response = await request(app).get('/api/numbers/prime/1.5').send();
        expect(response.body.message).toEqual(expect.stringContaining("El valor debe ser un número entero."))
    })

    it('Should respond "Valor no válido para la ejecución."', async () => {
        const response = await request(app).get('/api/numbers/prime/qwerty').send();
        expect(response.body.message).toEqual(expect.stringContaining("Valor no válido para la ejecución."))
    })

    it('Should respond "El valor debe ser mayor o igual a 2."', async () => {
        const response = await request(app).get('/api/numbers/prime/0').send();
        expect(response.body.message).toEqual(expect.stringContaining("El valor debe ser mayor o igual a 2."))
    })

    it('Should respond list of number in order descendant', async () => {
        const response = await request(app).get('/api/numbers/prime/6').send();
        const listDesc = response.body?.primeNumbers
            .split(',')
            .sort((a, b) => (b-a))
            .join(',');

        expect(response.body.primeNumbers).toEqual(listDesc);
    })
});
