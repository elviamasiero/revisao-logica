//Exemplo de criação de objetos compostos:

var pizza = {
    sabores      :['Portuguesa','Frango com catupry'],
    tamanho      : 'G',
    valor        : 60.0,
    bordaRecheada: true,
    complementos :['Ketchup','Maionese']
};
var pedido = {
    cliente       : 'Elvia Masiero',
    formaPagamento: 'Dinheiro',
    endereco      : 'Rua Adãozinho',
    taxaEntrega   : 4.00,
    telefone      : '(21)99999-8888',
    pizza         : pizza
};