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
  async put(req, res) {}
  async delete(req, res) {}
}

module.exports = new LoadController();
