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
  async getCategory(req, res) {}
  async put(req, res) {}
  async delete(req, res) {}
}

module.exports = new RowController();
