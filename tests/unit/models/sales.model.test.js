const { expect } = require("chai");
const sinon = require("sinon");

const salesModel = require("../../../src/models/sales.model");
const connection = require("../../../src/models/connection");
const { salesModelMock, salesModelMockById } = require("./mock/sales.model.mock");

describe('Sucess case', () => {
  afterEach(() => sinon.restore());
  it('Get all sales', async () => {
    sinon.stub(connection, "execute").resolves([salesModelMock]);

    const result = await salesModel.getSales();
          expect(result).to.be.an("array");
          expect(result).to.have.length(3);
  })

  it("Get sales by id", async () => {
      sinon.stub(connection, "execute").resolves([salesModelMockById]);

      const result = await salesModel.getSalesById();
      expect(result).to.be.an("array");
      expect(result).to.have.length(2);
    }); 
    
});