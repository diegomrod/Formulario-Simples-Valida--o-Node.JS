(function () {
	'use strict';
	function Customer() {};

	Customer.prototype.setName = function (name) {
		if (name && typeof name === "string") {
			var reg = /[a-z,A-Z, ]/;
			if (reg.test(name) && name.length < 50) {
				this.name = name.toString();
			} else {
				throw new Error("Nome inválido para inscrever no banco de dados.");
			}
		} else {
			throw new Error("Tipo inválido.");
		}
	};

	Customer.prototype.setLastName = function (lastName) {
		if (lastName && typeof lastName === "string") {
			var reg = /[a-z,A-Z, ]/;
			if (reg.test(lastName) && lastName.length < 50) {
				this.lastName = lastName.toString();
			} else {
				throw new Error("Sobrenome inválido para inscrever no banco de dados.");
			}
		} else {
			throw new Error("Tipo inválido.");
		}
	};

	Customer.prototype.setCPF = function (cpf) {
		if (cpf && typeof cpf === "string") {
			var reg = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
			if (reg.test(cpf) && cpf.length < 15) {
				this.cpf = cpf.toString();
			} else {
				throw new Error("CPF inválido para inscrever no banco de dados.");
			}
		} else {
			throw new Error("Tipo inválido.");
		}
	};

	Customer.prototype.setRG = function (rg) {
		if (rg && typeof rg === "string") {
			var reg = /^\d{3}\.\d{3}\.\d{3}-\d{1}$/;
			if (reg.test(rg) && rg.length < 14) {
				this.rg = rg.toString();
			} else {
				throw new Error("RG inválido para inscrever no banco de dados.");
			}
		} else {
			throw new Error("Tipo inválido.");
		}
	};

	Customer.prototype.setEmail = function (email) {
		if (email && typeof email === "string") {
			var reg = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})$/;
			if (reg.test(email) && email.length < 70) {
				this.email = email.toString();
			} else {
				throw new Error("E-mail inválido para inscrever no banco de dados.");
			}
		} else {
			throw new Error("Tipo inválido.");
		}
	};

	Customer.prototype.setBirthday = function (date) {
		if (date && typeof date === "string") {
			var reg = /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/;
			if (reg.test(date) && date.length < 11) {
				this.nascimento = date.toString();
			} else {
				throw new Error("Nascimento inválido para inscrever no banco de dados.");
			}
		} else {
			throw new Error("Tipo inválido.");
		}
	};

	Customer.prototype.setCel = function (cel) {
		if (cel && typeof cel === "string") {
			var reg = /^\(\d{2}\)\d{5}-\d{4}$/;
			if (reg.test(cel) && cel.length < 15) {
				this.cel = cel.toString();
			} else {
				throw new Error("Número do celular inválido para inscrever no banco de dados.");
			}
		} else {
			throw new Error("Tipo inválido.");
		}
	};

	Customer.prototype.setTel = function (tel) {
		if (tel && typeof tel === "string") {
			var reg = /^\(\d{2}\)\d{4}-\d{4}$/;
			if (reg.test(tel) && tel.length < 14) {
				this.tel = tel.toString();
			} else {
				throw new Error("Número do telefone inválido para inscrever no banco de dados.");
			}
		} else {
			throw new Error("Tipo inválido.");
		}
	};

	module.exports = Customer;

}).call(this);
