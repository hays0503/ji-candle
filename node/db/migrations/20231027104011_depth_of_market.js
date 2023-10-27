/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
	return knex.schema.createTable("depth_of_market", function (table) {
		table.increments("id");
		table.string("ticket").notNullable().comment("Название инструмента");
		table.dateTime("time").notNullable().comment("Время");
		table.integer("open").notNullable().comment("Цена открытия");
		table.integer("close").notNullable().comment("Цена закрытие");
		table.integer("high").notNullable().comment("Локальный максимум");
		table.integer("low").notNullable().comment("Локальный минимум");
		table.json("dow").notNullable().comment("Стакан продаж");
	});
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
	return knex.schema.dropTableIfExists("depth_of_market");
};
