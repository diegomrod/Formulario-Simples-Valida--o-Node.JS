(function () {
	'use strict';
	var Customer = require('../src/customer.js');

	module.exports = (function () {
		var msg = "Hello World";

		return function (req, res) {
			var newCustomer = new Customer();

			// Campos Obrigatórios
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
			}

			res.write("Nome : " + newCustomer.name 
				+ "\nSobrenome : " + newCustomer.lastName 
				+ "\nCPF : " + newCustomer.cpf
				+ "\nRG : " + newCustomer.rg 
				+ "\nE-mail : " + newCustomer.email
				+ "\nNascimento : " + newCustomer.nascimento
				+ "\nCelular : " + newCustomer.cel
				+ "\nTelefone : " + newCustomer.tel);
			res.end();
		};
	}).call(this);

}).call(this);
