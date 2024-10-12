const sequelize = require("../db.js");
const { DataTypes } = require("sequelize");

const User = sequelize.define("user", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
  role: { type: DataTypes.STRING, defaultValue: "USER" },
});
const Basket = sequelize.define("basket", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const BasketDevice = sequelize.define("basket_device", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const Device = sequelize.define("device", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  price: { type: DataTypes.INTEGER },
  img: { type: DataTypes.STRING, allowNull: false },
});

const Rolling = sequelize.define("rolling", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
});

const Row = sequelize.define("row", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
});

const Load = sequelize.define("load", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
});

const DeviceInfo = sequelize.define("device_info", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.STRING, allowNull: false },
});

const RollingRow = sequelize.define("rolling_row", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const RollingLoad = sequelize.define("rolling_load", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const RowLoad = sequelize.define("row_load", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

User.hasOne(Basket);
Basket.belongsTo(User);

Basket.hasMany(BasketDevice);
BasketDevice.belongsTo(Basket);

Rolling.hasMany(Device);
Device.belongsTo(Rolling);

Row.hasMany(Device);
Device.belongsTo(Row);

Load.hasMany(Device);
Device.belongsTo(Load);

Device.hasMany(BasketDevice);
BasketDevice.belongsTo(Device);

Device.hasMany(DeviceInfo, { as: "info" });
DeviceInfo.belongsTo(Device);

Rolling.belongsToMany(Row, { through: RollingRow });
Row.belongsToMany(Rolling, { through: RollingRow });

Rolling.belongsToMany(Load, { through: RollingLoad });
Load.belongsToMany(Rolling, { through: RollingLoad });

Row.belongsToMany(Load, { through: RowLoad });
Load.belongsToMany(Row, { through: RowLoad });

module.exports = {
  User,
  Basket,
  BasketDevice,
  Rolling,
  Row,
  Load,
  Device,
  DeviceInfo,
  RollingRow,
  RollingLoad,
  RowLoad,
};
