function popToast(params) {
	if (!$("#toastParent").length) {
    	$("body").append("<div id=\"toastParent\"></div>");
	}
	var text = params["text"];
	var $toastNotif = $("<div class=\"duckToast\"><span class=\"toastText\">"+text+"</span></div>");
	if (params["clickRemove"]){$toastNotif.addClass('clickRemove')}
	if (params["timeOut"]) {var timeOut = params["timeOut"]}else{var timeOut = 2000}
	if (params["front"]){$toastNotif.prepend('<span class=\"toastFront\">'+params["front"]+'</span>')}
	$toastNotif.hide().prependTo("#toastParent").fadeIn("fast");
	setTimeout(function() {
	    $toastNotif.fadeOut(300, function(){
			$(this).remove();
		});
	}, timeOut);
}

$(document).on('click', '.duckToast.clickRemove', function() {
    $(this).fadeOut(300, function(){
		$(this).remove();
	});
});

