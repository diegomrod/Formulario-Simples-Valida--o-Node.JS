(function() {
    'use strict';
    window.onload = function() {
        var formulario = document.querySelector("#formSimples");

        var Validador = (function() {
            var that = {};
            that.fieldsTypes = {
                    "textFormSimples" : "text",
                    "dataFormSimples" : "data",
                    "rgFormSimples" : "rg",
                    "cpfFormSimples" : "cpf",
                    "telFormSimples" : "tel",
                    "celFormSimples" : "cel",
                    "emailFormSimples" : "email"
            };

            that.obrigatoryFields = [ "nomeFormSimples", "sobrenomeFormSimples",
                                      "cpfFormSimples", "rgFormSimples", "emailFormSimples",
                                      "nascimentoFormSimples", "celFormSimples", "telFormSimples" ];

            that.typeMessages = {
                    "text" : "Texto Inválido!",
                    "data" : "Formato Inválido : 00/00/0000",
                    "rg" : "Formato Inválido : 000.000.000-0",
                    "cpf" : "Formato Inválido : 000.000.000-00",
                    "tel" : "Formato Inválido : (00)0000-0000",
                    "cel" : "Formato Inválido : (00)00000-0000",
                    "email" : "Formato Inválido : email@domain.com.br"
            };

            that.typePatterns = {
                    "text" : /[a-z,A-Z, ]/,
                    "data" : /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/,
                    "rg" : /^\d{3}\.\d{3}\.\d{3}-\d{1}$/,
                    "cpf" : /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
                    "tel" : /^\(\d{2}\)\d{4}-\d{4}$/,
                    "cel" : /^\(\d{2}\)\d{5}-\d{4}$/,
                    "email" : /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})$/
            };

            that.IS_VALIDATE = false;

            that.fields = {}; // Objeto que contem os campos e seus repectivos elementos

            // Gera um objeto que contem os campos para validação
            (function() {
                var inputs = document.getElementsByClassName('inputFormSimples');
                Array.prototype.forEach.call(inputs, function(e) {
                    if (e.className !== "") {
                        var classes = e.className.split(' ');
                        that.fields[e.name] = {};
                        that.fields[e.name].DOM = e;

                        //substitui os ifs e elseifs
                        classes
                        .forEach(function(c) {
                            if (that.fieldsTypes[c])
                                that.fields[e.name].type = that.fieldsTypes[c];
                        });

                        that.fields[e.name].alert = e.parentNode.parentNode.lastElementChild.lastElementChild;

                        //that.fields[e.name].alert.innerHTML = that.fields[e.name].type;
                    }
                });
            }).call(this);

            that.checkEmpty = function(e) {
                if (e.DOM.value === "") {
                    e.alert.innerHTML = "Campo Obrigatório!";
                    that.IS_VALIDATE = false;
                    return true;
                } else {
                    e.alert.innerHTML = "";
                    return false;
                }
            };

            that.validateField = function(e) {
                if (!(that.typePatterns[e.type]).test(e.DOM.value)) {
                    that.IS_VALIDATE = false;
                    e.alert.innerHTML = that.typeMessages[e.type];
                }
            };

            that.validateForm = function() {
                that.IS_VALIDATE = true;
                for ( var field in that.fields) {
                    if (that.obrigatoryFields
                            .lastIndexOf(that.fields[field].DOM.id) !== -1) {
                        if (that.checkEmpty(that.fields[field]))
                            continue;
                    }
                    that.validateField(that.fields[field]);
                }
            };

            return that;
        }).call(this);

        document.querySelector("#submitFormSimples").onclick = function() {
            Validador.validateForm();
            if (Validador.IS_VALIDATE)
                formulario.submit();
        };

    };
}).call(this);
