(function () {
	'use strict';
	var mysql = require('mysql');

	var user = require('./user.json');

	var customers = {
		name : 'customers',
		columns : ['id', 'name', 'lastName', 'cpf', 'rg', 'email', 'birthday', 'cel', 'tel']
	};

	var client = mysql.createConnection(user);

	client.connect();

	function dbsql() {};

	dbsql.prototype.validateCustomer = function (customer) {
		var is = true;
		customers.columns.forEach(function (row) {
			if (row !== "id" && !customer.hasOwnProperty(row)) {
				is = false;
			}
		});
		return is;
	};

	dbsql.prototype.generateCustomerQuery = function (customer) {
		var query = "INSERT INTO ";
		query = query + customers.name + "(";
		customers.columns.forEach(function (row) {
			query = query + row + ",";
		});
		query = query.substr(0, query.length - 1) + ") VALUES('', '";
		customers.columns.forEach(function (row) {
			if (row !== "id")
				query = query + customer[row] + "','";
		});
		query = query.substr(0, query.length - 2) + ");";
		return query;
	};

	dbsql.prototype.insertNewCustomer = function (customer) {
		if (this.validateCustomer(customer)) {
			try {
				client.query(this.generateCustomerQuery(customer));
			} catch (e) {
				throw new Error("Erro ao enviar query to database.");
			}	
			//console.log(this.generateCustomerQuery(customer));
		} else {
			throw new Error("Novo cliente não passou na validação.");
		}
	};

	module.exports = dbsql;
}).call(this);
