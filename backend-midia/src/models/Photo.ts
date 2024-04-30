import Sequelize from 'sequelize';

const database = require('../database/connection');

const Photo = database.define('photo', {
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true,
	},
	photo: {
		type: Sequelize.STRING,
		allowNull: false,
	}
})

module.exports = Photo;