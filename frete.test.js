const frete = require("./frete.js")

it('deve calcular frete de 20 para PE', async () => {
    const vrFrete = await frete.__calculoDoCep('123', (__) => Promise.resolve({ data: { uf: 'PE'}}))
    expect(vrFrete).toBe(20)
})