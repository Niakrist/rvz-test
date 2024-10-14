const { Row } = require("../models/models.js");
const ApiError = require("../error/ApiError.js");

class RowController {
  async create(req, res) {
    const { name } = req.body;
    const row = await Row.create({ name });
    return res.json(row);
  }
  async getAll(req, res) {
    const rows = await Row.findAll();
    return res.json(rows);
  }
  // async getCategory(req, res) {}
  async put(req, res) {
    const { id } = req.params;
    const { name } = req.body;
    const row = await Row.findOne({ where: { id } });
    row.name = name;
    await row.save();
    return res.json(row);
  }
  async delete(req, res) {
    const { id } = req.params;
    const row = await Row.destroy({ where: { id } });
    return res.json(row);
  }
}

module.exports = new RowController();
