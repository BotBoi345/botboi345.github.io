Game.Notify(`AutoBuy Loaded!`, `AutoBuy has been loaded successfully.`, [10,6], 2, 2);
function activate(p, q) {
        try {
                Game.Notify(`AutoBuy Started`,`Buying ${Game.ObjectsById[p].dname}s till ${q}`,[2,6],2,2); 

                function buy() {
                        if (Game.ObjectsById[p].amount >= q) {
                                clearInterval(buy); 
                        }
                        Game.ObjectsById[p].buy;
                }
        
                const buy = setInterval(buy, 1000);
        
                Game.Notify(`Done!`,'','',2,2);
        }
        catch(err) {
                Game.Notify(`Error Occured`, `${err.message}. Try Again...`, [16,5], 2, 2);
        }
}
