'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class transaksi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.detailtransaksi,{
        foreignKey: "id_transaksi",
      })
      this.belongsTo(models.outlet,{
        foreignKey: "id_outlet",
      })
      this.belongsTo(models.member,{
        foreignKey: "id_member",
      })
      this.belongsTo(models.user,{
        foreignKey: "id_user",
      })
    }
  }
  transaksi.init({
    id_transaksi: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    id_outlet: {
      type: DataTypes.INTEGER,
      primaryKey: true},
    kode_invoice: DataTypes.STRING,
    id_member: {
      type: DataTypes.INTEGER,
      primaryKey: true},
    tgl: DataTypes.DATE,
    batas_waktu: DataTypes.DATE,
    tgl_bayar: DataTypes.DATE,
    biaya_tambahan: DataTypes.INTEGER,
    diskon: DataTypes.DOUBLE,
    pajak: DataTypes.INTEGER,
    status: {
      type: DataTypes.ENUM,
      values: ['baru','proses','selesai','diambil']
    },
    dibayar: {
      type: DataTypes.ENUM,
      values: ['dibayar','belum_dibayar']
    },
    id_user: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'transaksi',
    tableName: 'transaksi'
  });
  return transaksi;
};