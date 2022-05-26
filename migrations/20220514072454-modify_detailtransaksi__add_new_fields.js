'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn(
        'detailtransaksi', // table name
        'kembalian', // new field name
        {
          type: Sequelize.DOUBLE,
          allowNull: true,
        },
      ),
    ]);
  },

  async down (queryInterface, Sequelize) {
    // logic for reverting the changes
   return Promise.all([
    queryInterface.removeColumn('detailtransaksi', 'kembalian')
  ]);
},
};
