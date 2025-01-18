Game.Notify(`AutoBuy Loaded!`, `AutoBuy has been loaded successfully.`, [10,6], 2, 2);
function activate(p, q) {
        try {
                Game.Notify(`AutoBuy Started`,`Buying ${Game.ObjectsById[p].dname}s till ${q}`,[2,6],2,2); 

                const buy = setInterval(autobuy, 500);

                function autobuy() {
                        if (Game.ObjectsById[p].amount >= q) {
                                clearInterval(buy); 
                                Game.Notify(`Done!`,'','',2,2); 
                        }
                        else {
                                Game.ObjectsById[p].buy(); 
                        }
                }
        }
        catch(err) {
                Game.Notify(`Error Occured`, `${err.message}. Try Again...`, [16,5], 2, 2);
        }
}
