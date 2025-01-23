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
//sell and rebuy buildings
function activateGodzamok(){
	l('storeBulkBuy').click();
	l('storeBulk1').click();
	
	var buildingList = [2,3,4,5];
	
	var faarm = Game.Objects.Farm.amount;
	var miines = Game.Objects.Mine.amount;
	var baanks = Game.Objects.Bank.amount;
	var faactory = Game.Objects.Factory.amount;
	
	for( var theBuilding in buildingList ){
		Game.ObjectsById[buildingList[theBuilding]].sell(-1,1);
	}
	
	Game.Objects.Farm.buy(faarm);
	Game.Objects.Mine.buy(miines);
	Game.Objects.Factory.buy(faactory);
	Game.Objects.Bank.buy(baanks);
}
