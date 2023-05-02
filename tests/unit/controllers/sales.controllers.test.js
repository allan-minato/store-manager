const { expect } = require("chai");
const sinon = require("sinon");

const salesController = require("../../../src/controllers/sales.controller");
const salesServices = require("../../../src/services/sales.services");
const connection = require("../../../src/models/connection");
const { salesControllerMock, salesControllerByIdMock } = require('./mock/sales.controller.mock');


describe("Sucess case", () => {
  afterEach(() => sinon.restore());
  it("Get all sales", async () => {
    sinon.stub(salesServices, 'getSales').resolves([salesControllerMock]);

    const res = {
        status: sinon.stub().returnsThis(),
        json: sinon.stub().returns(),
      };

      const req = {};

      await salesController.getSales(req, res);

      expect(res.status).to.be.calledWith(200);
      expect(res.json).to.be.calledWith([salesControllerMock]);
  });

  it("Get sales by id", async () => {
    sinon.stub(salesServices, 'getSalesById').resolves([salesControllerByIdMock]);

    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub().returns(),
    };

    const req = {
      params: {
        id: 1,
      },
    };

    await salesController.getSalesById(req, res);


    expect(res).to.be.an("object");
    expect(res.status).to.be.calledWith(200);
  });
});

describe("Fail case", () => { 
 it("Get sales by id without data", async () => {
   sinon
     .stub(salesServices, "getSalesById")
     .resolves([]);

   const res = {
     status: sinon.stub().returnsThis(),
     json: sinon.stub().returns(),
   };

   const req = {
     params: {
       id: 777,
     },
   };

   await salesController.getSalesById(req, res);

    expect(res.status).to.have.been.calledWith(404);

    expect(res.json).to.have.been.calledWith({
      message: "Sale not found",
    });
 });
});
