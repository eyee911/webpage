var main = function() {
$('.button').click(function() {
	var totalWeight = $(".form-control").val();
	totalWeight = (totalWeight-45)/2;
	var fortyFive = Math.floor(totalWeight/45); 
	var thirtyFive = Math.floor((totalWeight - fortyFive * 45)/35);
	var twentyFive = Math.floor((totalWeight - (fortyFive * 45) - (thirtyFive * 35))/25);
	var ten = Math.floor((totalWeight - (fortyFive * 45) - (thirtyFive * 35) - (twentyFive * 25))/10);
	var five = Math.floor((totalWeight -  (fortyFive * 45) - (thirtyFive * 35) - (twentyFive * 25) - (ten * 10))/5);
	var twoHalf = Math.floor((totalWeight - (fortyFive * 45) - (thirtyFive * 35) - (twentyFive * 25) - (ten * 10) - (five * 5))/2.5);
	$('<li>').text(fortyFive + " 45 plates").prependTo(".weights");
	$('<li>').text(thirtyFive + " 35 plates").prependTo(".weights");
	$('<li>').text(twentyFive + " 25 plates").prependTo(".weights");	
	$('<li>').text(ten + " 10 plates").prependTo(".weights");
	$('<li>').text(five + " 5 plates").prependTo(".weights");
	$('<li>').text(twoHalf + " 2.5 plates").prependTo(".weights");

	
});
}

$(document).ready(main);