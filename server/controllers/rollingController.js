const { Rolling } = require("../models/models.js");
const ApiError = require("../error/ApiError.js");

class RollingController {
  async create(req, res) {
    const { name } = req.body;
    const rolling = await Rolling.create({ name });
    return res.json(rolling);
  }
  async getAll(req, res) {
    const rollings = await Rolling.findAll();
    return res.json(rollings);
  }
  async getCategory(req, res) {}
  async put(req, res) {}
  async delete(req, res) {}
}

module.exports = new RollingController();
