const frete = require("./frete.js")

it('deve calcular frete de 20 para PE', async () => {
    const vrFrete = await frete.__calculoDoCep('123', (__) => Promise.resolve({ data: { uf: 'PE'}}))
    expect(vrFrete).toBe(20)
})

it('deve calcular frete de 40 para CE', async () => {
    const vrFrete = await frete.__calculoDoCep('123', (__) => Promise.resolve({ data: { uf: 'CE'}}))
    expect(vrFrete).toBe(40)
})

it('deve calcular frete de 5 para SP', async () => {
    const vrFrete = await frete.__calculoDoCep('123', (__) => Promise.resolve({ data: { uf: 'SP'}}))
    expect(vrFrete).toBe(5)
})

it("deve calcular 'CEPINV' caso a API retorne um erro", async () => {
    const vrFrete = await frete.__calculoDoCep('123', (__) => Promise.resolve({ data: { erro: 'erro'}}))
    expect(vrFrete).toBe('CEPINV')
})