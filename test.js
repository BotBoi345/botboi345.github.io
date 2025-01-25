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
		for( var theBuilding in buildingList ){
			var numCurrentBuilding = Game.ObjectsById[buildingList[theBuilding]].amount;

			if( numCurrentBuilding >= 100 ){
				l('storeBulkSell').click();
				l('storeBulkMax').click();
				Game.ObjectsById[buildingList[theBuilding]].sell(numCurrentBuilding);

				// rebuy all buildings
				l('storeBulkBuy').click();
				l('storeBulk100').click();
				Game.ObjectsById[buildingList[theBuilding]].buy(numCurrentBuilding);
			}
		}
	}
}
