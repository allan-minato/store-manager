const chai = require("chai");
const sinon = require("sinon");
const sinonChai = require("sinon-chai");

const { expect } = chai;
chai.use(sinonChai);

const productsController = require("../../../src/controllers/products.controller");
const productsServices = require("../../../src/services/products.services");
const { productsMock } = require("./mock/products.controller.mock");

describe("Products Controller test", () => {
  afterEach(() => sinon.restore());
  describe("Sucess case", () => {
    it("getProducts with data", async () => {
      sinon.stub(productsServices, "getProducts").resolves(productsMock);

      const res = {
        status: sinon.stub().returnsThis(),
        json: sinon.stub().returns(),
      };

      const req = {};

      await productsController.getProducts(req, res);

      expect(res.status).to.be.calledWith(200);

      expect(res.json).to.be.calledWith(productsMock);
    });
  });
  describe("getProductsById test", () => {
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
      sinon.stub(productsServices, "getProductsById").resolves(productsMock[0]);
      await productsController.getProductsById(req, res);
      expect(res.status).to.be.calledWith(200);
      expect(res.json).to.be.calledWith(productsMock[0]);
    });
    it("getProductsById without data", async () => {
      const res = {};
      const req = {
        params: { id: 3 },
      };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon
        .stub(productsServices, "getProductsById")
        .resolves({ message: "Product not found" });

      await productsController.getProductsById(req, res);

      expect(res.json).to.have.been.calledWith({
        message: "Product not found",
      });
    });
  });
});
