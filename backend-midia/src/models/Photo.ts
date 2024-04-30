import Sequelize from 'sequelize';

const connection = require('../database/connection');

const Photo = connection.define('photo', {
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