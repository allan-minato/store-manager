const salesModelMock = [
  {
    id: 1,
    date: '2023-05-02T20:25:49.000Z',
    sale_id: 1,
    product_id: 1,
    quantity: 5
  },
  {
    id: 1,
    date: '2023-05-02T20:25:49.000Z',
    sale_id: 1,
    product_id: 2,
    quantity: 10
  },
  {
    id: 2,
    date: '2023-05-02T20:25:49.000Z',
    sale_id: 2,
    product_id: 3,
    quantity: 15
  }
];

const salesModelMockById = [
   {
    id: 1,
    date: '2023-05-02T20:25:49.000Z',
    sale_id: 1,
    product_id: 1,
    quantity: 5
  },
   {
    id: 1,
    date: '2023-05-02T20:25:49.000Z',
    sale_id: 1,
    product_id: 2,
    quantity: 10
  }
]

module.exports = {
  salesModelMock,
  salesModelMockById,
};