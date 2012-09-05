(function ($) {
	$.fn.validar_form = function(){
		// Para o formulário prosseguir, está variável deve sair daqui intocável
		valido = true;
		tooltip_msg = "";
		// Validação simples: campos não podem estar vazios
		this.find("[data-required='required']").each(function(){
			if($(this).val() == ""){
				valido = false;
				tooltip_msg = "Este campo deve ser preenchido"
				$(this).addClass("invalido");
			} else {
				$(this).removeClass("invalido");
			}
		});

		// Validações via REGEXP
		validations = {
			email: /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
		}

		this.find("[data-validation]").each(function(){
			validation = validations[$(this).attr("data-validation")];
			if($(this).val().match(validation) == null || $(this).val() == ""){
				valido = false;
				$(this).addClass("invalido");
				tooltip_msg = "Este campo está inválido"
			} else {
				$(this).removeClass("invalido");
			}
		});

		if(!valido) $(".invalido").first().tooltip(tooltip_msg, "validation-notice", {time: 2});

		return valido;
	}
})(jQuery);
