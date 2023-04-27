const { expect } = require("chai");
const sinon = require("sinon");

const productsController = require('../../../src/controllers/products.controller');
const productsServices = require('../../../src/services/products.services');
const { productsMock, productsByIdMock } = require("./mock/products.mock");

describe('Products Controller test', () => {
  afterEach(() => sinon.restore());
  describe('Sucess case', () => {
    it('getProducts with data', async () => { 
      sinon.stub(productsServices, 'getProducts').resolves(productsMock);

      const res = {
        status: sinon.stub().returnsThis(),
        json: sinon.stub().returns(),
      };

      const req = {};
      
      await productsController.getProducts(req, res);
        
      expect(res.status).to.be.calledWith(200);
        
      expect(res.json).to.be.calledWith(productsMock);
    })
    it("getProductsById with data", async () => {
      
      const req = {
        params: {
          id: 1,
        },
      };
      const res = {
        status: sinon.stub().returnsThis(),
        json: sinon.stub().returns(),
      };
     
      sinon.stub(productsServices, 'getProductsById').resolves(productsByIdMock);
      await productsController.getProductsById(req, res);
      expect(res.status).to.be.calledWith(200);
      expect(res.json).to.be.calledWith(productsByIdMock);
    });
  })
  describe('Fail case', () => { 
    it("getProductsById without data", async () => {
      const req = {
        params: {
          id: 4,
        },
      };
      const res = {
        status: sinon.stub().returnsThis(),
        json: sinon.stub().returns(),
      };

      sinon.stub(productsServices, 'getProducts').resolves(undefined);
      await productsController.getProductsById(req, res);
      expect(res.status).to.be.calledWith(404);
      expect(res.json).to.be.calledWith({ message: "Product not found" });
    });
  })
})