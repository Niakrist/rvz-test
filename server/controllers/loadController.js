const { Load } = require("../models/models.js");
const ApiError = require("../error/ApiError.js");

class LoadController {
  async create(req, res) {
    const { name } = req.body;
    const load = await Load.create({ name });
    return res.json(load);
  }
  async getAll(req, res) {
    const loads = await Load.findAll();
    return res.json(loads);
  }
  async getCategory(req, res) {}
  async put(req, res) {
    const { id } = req.params;
    const { name } = req.body;
    const load = await Load.findOne({ where: { id } });
    load.name = name;
    await load.save();
    return res.json(load);
  }
  async delete(req, res) {
    const { id } = req.params;
    const load = await Load.destroy({ where: { id } });
    return res.json(load);
  }
}

module.exports = new LoadController();
