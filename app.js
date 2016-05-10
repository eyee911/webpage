var main = function() {
$(.button).click(function() {
	var totalWeight = $(".form-control").val();
	totalWeight = (totalWeight-45)/2;
	var fortyFive = Math.floor(totalWeight/45); 
	$('<li>').text(fortyFive).prependTo(".weights");
	var thirtyFive = fortyFive % 45;

	});
}

$(document).ready(main);