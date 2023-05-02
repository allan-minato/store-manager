const salesServicesMock = [
  {
    saleId: 1,
    date: '2023-05-02T20:25:49.000Z',
    productId: 1,
    quantity: 5
  },
  {
    saleId: 1,
    date: '2023-05-02T20:25:49.000Z',
    productId: 2,
    quantity: 10
  },
  {
    saleId: 2,
    date: '2023-05-02T20:25:49.000Z',
    productId: 3,
    quantity: 15
  }
];

const salesServicesByIdMock = [
  { date: '2023-05-02T20:25:49.000Z', quantity: 5, productId: 1 },
  { date: '2023-05-02T20:25:49.000Z', quantity: 10, productId: 2 }
]

module.exports = {
  salesServicesMock,
  salesServicesByIdMock,
};