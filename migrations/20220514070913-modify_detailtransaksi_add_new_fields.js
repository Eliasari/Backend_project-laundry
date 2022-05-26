'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn(
        'detailtransaksi', // table name
        'total_harga', // new field name
        {
          type: Sequelize.DOUBLE,
          allowNull: false,
        },
      ),
      queryInterface.addColumn(
        'detailtransaksi', // table name
        'total_bayar', // new field name
        {
          type: Sequelize.INTEGER(11),
          allowNull: true,
        },
      ),
    ]);
  },

  async down (queryInterface, Sequelize) {
   // logic for reverting the changes
   return Promise.all([
    queryInterface.removeColumn('detailtransaksi', 'total_harga'),
    queryInterface.removeColumn('detailtransaksi', 'total_bayar')
  ]);
},
};
