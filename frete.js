const axios = require('axios');

const axiosSolution = (param) => axios.get(`https://viacep.com.br/ws/${param}/json/`);

/**
 * 
 * @param {string} cep 
 * @returns {number | 'CEPINV'}
 */
export default async function calulaDoCep(cep) {
    return __calculoDoCep(cep, axiosSolution);
}

/**
 * 
 * @param {string} cep 
 * @param {function (string): Promise<object>} solveViaCep 
 */
export default async function __calculoDoCep(cep, solveViaCep) {
    const response = await solveViaCep(cep);
    
    if (response.data.erro) {
      return 'CEPINV';
    }
    const uf = response.data.uf;

    switch (uf) {
        case 'SP': return 5;
        case 'CE': return 40;
        default: return 20;
    }
}