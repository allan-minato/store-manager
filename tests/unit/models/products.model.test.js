const { expect } = require('chai');
const sinon = require('sinon');

const productsMoldel = require('../../../src/models/products.model');
const connection = require('../../../src/models/connection');
const { productsMock, productsByIdMock } = require('./mock/products.mock');

describe('Products Model tests', () => {
  afterEach(() => sinon.restore());
  describe('Sucess case', () => {
    it('Get all the products', async () => {
      sinon.stub(connection, 'execute').resolves(productsMock);
    
      const result = await productsMoldel.getProducts();
      expect(result).to.be.an('array');
      expect(result).to.have.length(3)
    })
    it("Get products by id", async () => {
      sinon.stub(connection, "execute").resolves(productsByIdMock);

      const result = await productsMoldel.getProductsById();
      expect(result).to.be.an("array");
      expect(result).to.have.length(1);
    });    
  })
  describe('Sucess case', () => { 
    it("get products without Data", async () => {
      sinon.stub(connection, "execute").resolves([[]]);

      const result = await productsMoldel.getProducts();
      expect(result).to.be.an("array");
      expect(result).to.have.length(0);
    });
    it("get products by id without Data", async () => {
      sinon.stub(connection, "execute").resolves([[]]);

      const result = await productsMoldel.getProductsById();
      expect(result).to.be.an("array");
      expect(result).to.have.length(0);
    });
  })
})

