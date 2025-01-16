Game.Notify(`AutoBuy Loaded!`, `AutoBuy has been loaded successfully.`, [10,6], 2, 2);
function activate(p, q) {
        Game.Notify(`AutoBuy Started`,`Buying ${Game.ObjectsById[p].dname}s till ${q}`,[2,6],2,2); 
        
        for (; Game.ObjectsById[p].amount < q && Game.cookies >= Game.ObjectsById[p].bulkPrice; ) {
                Game.ObjectsById[p].buy;
        }
        
        Game.Notify(`Done!`,'','',2,2);
}
