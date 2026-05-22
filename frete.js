const axios = require('axios');

/**
 * 
 * @param {string} param 
 * @returns {Promise<any>}
 */
const axiosSolution = (param) => axios.get(`https://viacep.com.br/ws/${param}/json/`);

/**
 * 
 * @param {string} cep 
 * @returns {Promise<number | 'CEPINV'>}
 */
export async function calculoDoCep(cep) {
    return __calculoDoCep(cep, axiosSolution);
}

/**
 * 
 * @param {string} cep 
 * @param {function (string): Promise<object>} solveViaCep 
 * @returns {Promise<number | 'CEPINV'>}
 */
export async function __calculoDoCep(cep, solveViaCep) {
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