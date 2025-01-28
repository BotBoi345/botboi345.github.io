Game.Notify('autoGodzamok loaded!', '', '', 2, 2);

var godzamokInterval = setInterval(setGodzamokInterval, 200);

function setGodzamokInterval(){
	if(Game.hasGod('ruin')){
		if( (
			Game.hasBuff('Elder frenzy') || Game.hasBuff('Dragon Harvest') || 
			Game.hasBuff('Click frenzy') || Game.hasBuff('Cursed finger') || 
			Game.hasBuff('Dragonflight') || Game.hasBuff('Fervent adoration') || 
			Game.hasBuff('Congregation') || Game.hasBuff('Righteous cataclysm') || 
			Game.hasBuff('Ore vein') || Game.hasBuff('Luxuriant harvest') || 
			Game.hasBuff('Manabloom') || Game.hasBuff('Delicious lifeforms') || 
			Game.hasBuff('Juicy profits') || Game.hasBuff('High-five') || 
			Game.hasBuff('Breakthrough') || Game.hasBuff('Oiled-up') || 
			Game.hasBuff('Golden ages') || Game.hasBuff('Extra cycles') || 
			Game.hasBuff('Solar flare') || Game.hasBuff('Winning streak') || 
			Game.hasBuff('Macrocosm') || Game.hasBuff('Refactoring') || 
			Game.hasBuff('Cosmic nursery') || Game.hasBuff('Brainstorm') ||
			Game.hasBuff('Deduplication') || Game.hasBuff('Lab Disaster') 
		) && !Game.hasBuff('Devastation')
		){
			activateGodzamok();
		}
	}
}

//sell and rebuy buildings for click frenzy
function activateGodzamok(){
	if(Game.hasGod('ruin')){
		var numCurrentBuilding = Game.ObjectsById[0].amount;
		
		l('storeBulkSell').click();
		l('storeBulkMax').click();
		Game.ObjectsById[0].buy();

		// rebuy all buildings
		l('storeBulkBuy').click();
		l('storeBulk1').click();
		Game.ObjectsById[0].buy(numCurrentBuilding);
	}
}
	
// Activates godzamok continuously
function passiveGodzamok(){
	var passive = setInterval(function() {
		if (Game.hasGod('ruin') && !Game.hasBuff('Devastation')) {
			var numCurrentBuilding = Game.ObjectsById[2].amount;
		
			l('storeBulkSell').click();
			l('storeBulkMax').click();
			Game.ObjectsById[2].buy();

			// rebuy all buildings
			l('storeBulkBuy').click();
			l('storeBulk1').click();
			Game.ObjectsById[2].buy(numCurrentBuilding);
		}
	}, 100);

	function Press(e) {
		var ee = e.which;
		var l = String.fromCharCode(ee).toLowerCase();
		if (l == '/') {
			clearInterval(passive);
		}
	}
			
	document.onkeypress = Press;
}
