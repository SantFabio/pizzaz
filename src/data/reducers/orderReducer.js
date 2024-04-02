
import * as TodoConstants from "../actions/orderActions"

const initialState = [];

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case TodoConstants.ADD_ITEM:
      return [...state, action.payload];
    default:
      return state;
  }
};
export default orderReducer;

// export default pedidoReducer;
// const pedido1 = {
//     id: "id_do_pedido_1", // ID do documento no Firestore (pode ser gerado automaticamente)
//     cliente: {
//       nome: "João",
//       endereco: "Rua XYZ",
//       telefone: "123456789"
//     },
//     itens: [
//       { produtoId: "id_da_pizza", quantidade: 1, precoUnitario: 25.00 },
//       { produtoId: "id_da_bebida", quantidade: 2, precoUnitario: 5.00 }
//     ],
//     status: "em processamento",
//     dataHora: new Date() // Timestamp representando a data e hora do pedido
//   };
