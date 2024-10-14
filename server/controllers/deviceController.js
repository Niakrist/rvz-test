const path = require("path");
const uuid = require("uuid");
const { Device, DeviceInfo } = require("../models/models.js");
const ApiError = require("../error/ApiError.js");

class DeviceController {
  async create(req, res, next) {
    try {
      let { name, price, loadId, rollingId, rowId, info } = req.body;
      const { img } = req.files;
      let fileName = uuid.v4() + ".jpg";
      img.mv(path.resolve(__dirname, "..", "static", fileName));

      const device = await Device.create({
        name,
        price,
        loadId,
        rollingId,
        rowId,
        img: fileName,
      });

      if (info) {
        info = JSON.parse(info);
        info.forEach((element) => {
          DeviceInfo.create({
            title: element.title,
            description: element.description,
            deviceId: device.id,
          });
        });
      }

      return res.json(device);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }
  async getAll(req, res) {
    let { loadId, rollingId, rowId, limit, page } = req.query;

    page = page || 1;
    limit = limit || 10;
    let offset = page * limit - limit;

    let devices;
    if (!loadId && !rollingId && !rowId) {
      devices = await Device.findAndCountAll({ limit, offset });
    }
    if (!loadId && !rollingId && rowId) {
      devices = await Device.findAndCountAll({
        where: { rowId },
        limit,
        offset,
      });
    }
    if (!loadId && rollingId && !rowId) {
      devices = await Device.findAndCountAll({
        where: { rollingId },
        limit,
        offset,
      });
    }
    if (!loadId && rollingId && rowId) {
      devices = await Device.findAndCountAll({
        where: { rollingId, rowId },
        limit,
        offset,
      });
    }
    if (loadId && !rollingId && !rowId) {
      devices = await Device.findAndCountAll({
        where: { loadId },
        limit,
        offset,
      });
    }
    if (loadId && !rollingId && rowId) {
      devices = await Device.findAndCountAll({
        where: { loadId, rowId },
        limit,
        offset,
      });
    }
    if (loadId && rollingId && !rowId) {
      devices = await Device.findAndCountAll({
        where: { loadId, rollingId },
        limit,
        offset,
      });
    }
    if (loadId && rollingId && rowId) {
      devices = await Device.findAndCountAll({
        where: { loadId, rollingId, rowId },
        limit,
        offset,
      });
    }

    return res.json(devices);
  }
  async getById(req, res) {
    const { id } = req.params;
    const device = await Device.findOne({
      where: { id },
      include: [{ model: DeviceInfo, as: "info" }],
    });

    return res.json(device);
  }
  async put(req, res) {
    const { id } = req.params;
    let { name, price, loadId, rollingId, rowId, info } = req.body;
    const { img } = req.files;
    let fileName = uuid.v4() + ".jpg";
    img.mv(path.resolve(__dirname, "..", "static", fileName));
    const device = await Device.findOne({ where: { id } });

    // Сюда добавить info
    if (info) {
      info = JSON.parse(info);
      info.forEach((element) => {
        DeviceInfo.create({
          title: element.title,
          description: element.description,
          deviceId: device.id,
        });
      });
    }

    // Сюда добавить info

    device.name = name;
    device.price = price;
    device.loadId = loadId;
    device.rollingId = rollingId;
    device.rowId = rowId;
    device.img = fileName;

    device.save();
    return res.json(device);
  }
  async delete(req, res) {
    const { id } = req.params;
    const device = await Device.findOne({ where: { id } });
    return res.json(device);
  }
}

module.exports = new DeviceController();
