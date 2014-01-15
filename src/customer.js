(function () {
	'use strict';
	var Customer = require('../src/customer.js'),
		dbsql = require('../src/dbsql.js');

	module.exports = (function () {
		var msg = "Hello World";

		return function (req, res) {
			var newCustomer = new Customer();

			try {
				newCustomer.setName(req.body.nomeFormSimples);
				newCustomer.setLastName(req.body.sobrenomeFormSimples);
				newCustomer.setCPF(req.body.cpfFormSimples);
				newCustomer.setRG(req.body.rgFormSimples);
				newCustomer.setEmail(req.body.emailFormSimples);
				newCustomer.setBirthday(req.body.nascimentoFormSimples);
				newCustomer.setCel(req.body.celFormSimples);
				newCustomer.setTel(req.body.telFormSimples);
			} catch (e) {
				console.log(e.message);
				return;
			}

			try {
				var conn = new dbsql();
				conn.insertNewCustomer(newCustomer);
			} catch (e) {
				console.log(e.message);
				return;
			}

			res.write("Nome : " + newCustomer.name 
					+ "\nSobrenome : " + newCustomer.lastName 
					+ "\nCPF : " + newCustomer.cpf
					+ "\nRG : " + newCustomer.rg 
					+ "\nE-mail : " + newCustomer.email
					+ "\nNascimento : " + newCustomer.birthday
					+ "\nCelular : " + newCustomer.cel
					+ "\nTelefone : " + newCustomer.tel);
			res.end();
		};
	}).call(this);

}).call(this);
