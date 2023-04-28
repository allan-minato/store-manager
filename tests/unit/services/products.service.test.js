const { expect } = require("chai");
const sinon = require("sinon");

const productsServices = require('../../../src/services/products.services')
const productsModel = require('../../../src/models/products.model');
const { productsMock, productsByIdMock } = require("./mock/products.mock");

describe('Products Service test', () => {
 
  afterEach(() => sinon.restore());
  describe('Sucess case', () => {
    it('getProducts with data', async () => {
sinon.stub(productsModel, 'getProducts').resolves([productsMock]);

const result = await productsServices.getProducts();

      expect(result).to.be.an("object");
      expect(result).to.contain.keys(["type", "message"]);
    })
   
   
    it("getProductsById with data", async () => {
      sinon.stub(productsModel, 'getProductsById').resolves([productsByIdMock]);

      const result = await productsServices.getProductsById();

      expect(result).to.be.an("object");
      expect(result).to.contain.keys(["type", "message"]);
    });
  })
  describe('Fail case', () => { 
    it("getProducts without data", async () => {
      sinon.stub(productsModel, "getProducts").resolves([]);

      const result = await productsServices.getProducts();

      expect(result).to.be.an("object");
      expect(result).to.contain.keys(["type", "message"]);;
    });
    it("getProductsById without data", async () => {
      sinon.stub(productsModel, "getProductsById").resolves();

      const result = await productsServices.getProductsById();

      expect(result).to.be.an("object");
      expect(result).to.contain.keys(["type", "message"]);
    });
  })
})