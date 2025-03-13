import { Sequelize } from 'sequelize';
import configDatabase from '../config/database';

import User from '../app/models/User';
import Product  from '../app/models/Product';
import Category from '../app/models/Category';

const models = [User, Product, Category];

class Database {
	constructor() {
		this.init();
		this.mongo();
	}

	init() {
		this.connection = new Sequelize(configDatabase);
		models
		.map((model) => model.init(this.connection))
		.map(
			// biome-ignore lint/complexity/useOptionalChain: <explanation>
			(model) => model.associate && model.associate(this.connection.models),
		);
	}

	mongo() {}
}

export default new Database();
