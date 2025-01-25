Game.Notify('autoGodzamok loaded!', '', '', 2, 2);

var godzamokInterval = setInterval(setGodzamokInterval, 100);

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
	var buildingList = [0,2,3,4,5,0,0];
	if(Game.hasGod('ruin')){
		
		var zero = Game.ObjectsById[0].amount;
		var twoo = Game.ObjectsById[2].amount;
		var thre = Game.ObjectsById[3].amount;
		var four = Game.ObjectsById[4].amount;
		var five = Game.ObjectsById[5].amount;

		l('storeBulkSell').click();
		l('storeBulkMax').click();
		
		for( var theBuilding in buildingList ){
			Game.ObjectsById[buildingList[theBuilding]].sell(-1,1);
		}

		// rebuy all buildings
		l('storeBulkBuy').click();
		l('storeBulk100').click();
		Game.ObjectsById[0].buy(zero);
		Game.ObjectsById[2].buy(twoo);
		Game.ObjectsById[3].buy(thre);
		Game.ObjectsById[4].buy(four);
		Game.ObjectsById[5].buy(five);
	}
}
