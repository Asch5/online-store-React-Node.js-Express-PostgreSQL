const { Brand } = require("../models/models");
const ApiError = require("../error/ApiError");

class BrendController {
  async create(req, res) {
    const { name } = req.body;
    const brand = await Brand.create({ name });
    return res.json(brand);
  }

  async getAll(req, res) {
    const brands = await Brand.findAll();
    return res.json(brands);
  }

  async delete(req, res) {
    const { id } = req.body;
    await Brand.destroy({ where: { id } });
    return res.json({ massage: `Brand id=${id} was destroyed` });
  }
}

module.exports = new BrendController();
