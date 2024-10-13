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
  async put(req, res) {
    const { id } = req.params;
    const { name } = req.body;
    const rolling = await Rolling.findOne({ where: { id } });
    rolling.name = name;
    await rolling.save();
    return res.json(rolling);
  }
  async delete(req, res) {
    const { id } = req.params;
    const rolling = await Rolling.destroy({ where: { id } });
    return res.json(rolling);
  }
}

module.exports = new RollingController();
