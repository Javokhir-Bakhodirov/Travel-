let elQuestion = prompt("Summani kiriting");

let planeTicketPrice = 500;
let hotelPrice = 250;
let joyPrice = 120;

let dollar = 11000.34;
let euro = 12354.03;

let totalTravelPrice =
	planeTicketPrice * dollar + hotelPrice * dollar + joyPrice * euro;

if (elQuestion >= totalTravelPrice) {
	console.log("Oq yo'l yaxshi dam olib keling ");
} else {
	console.log("Azgina sabr qiling");
}
