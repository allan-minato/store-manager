const { expect } = require("chai");
const sinon = require("sinon");

const salesServices = require("../../../src/services/sales.services");
const connection = require("../../../src/models/connection");
const { salesServicesMock, salesServicesByIdMock } = require('./mock/sales.services.mock')


describe("Sucess case", () => {
  afterEach(() => sinon.restore());
  it("Get all sales", async () => {
    sinon.stub(connection, "execute").resolves([salesServicesMock]);

    const result = await salesServices.getSales();
    expect(result).to.be.an("array");
    expect(result).to.have.length(3);
  });

  it("Get sales by id", async () => {
    sinon.stub(connection, "execute").resolves([salesServicesByIdMock]);

    const result = await salesServices.getSalesById();
    expect(result).to.be.an("array");
    expect(result).to.have.length(2);
  });
});
