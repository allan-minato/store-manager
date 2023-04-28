const chai = require("chai");
const sinon = require("sinon");
const sinonChai = require("sinon-chai");

const { expect } = chai;
chai.use(sinonChai);

const productsController = require("../../../src/controllers/products.controller");
const productsServices = require("../../../src/services/products.services");
const productsModel = require('../../../src/models/products.model');
const { productsMock, productsByIdMock } = require("./mock/products.controller.mock.js");

describe("Products Controller test", () => {
  afterEach(() => sinon.restore());
  describe("Sucess case", () => {
    it("getProducts with data", async () => {
      sinon.stub(productsServices, "getProducts").resolves([
        [
          {
            id: 1,
            name: "Martelo de Thor",
          },
        ],
      ]);

      const res = {
        status: sinon.stub().returnsThis(),
        json: sinon.stub().returns(),
      };

      const req = {};

      const result = await productsServices.getProducts();

      await productsController.getProducts(req, res);

      expect(result).to.be.an("array");
      expect(result).to.have.length(1);
      expect(result).to.deep.equal([
        [
          {
            id: 1,
            name: "Martelo de Thor",
          },
        ],
      ]);
    });
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
        sinon.stub(productsModel, "getProductsById").resolves(productsByIdMock);
        await productsController.getProductsById(req, res);
        expect(res.status).to.be.calledWith(200);
        expect(res.json).to.be.calledWith(productsByIdMock);
      });
  });
  describe("Fail case", () => {
  
    it("getProductsById without data", async () => {
        const res = {};
        const req = {
          params: { id: 4 },
        };

        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns();

        sinon
          .stub(productsServices, "getProductsById")
          .resolves({ type: 404, message: { message: 'Product not found' } });

        await productsController.getProductsById(req, res);

        // expect(res.status).to.have.been.calledWith(404);

        
    expect(res.status).to.have.been.calledWith(404);

    expect(res.json).to.have.been.calledWith({ message: "Product not found" });
    });
  });
});


// { type: 404, message: { message: 'Product not found' } }