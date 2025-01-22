Game.Notify(`AutoBuy Loaded!`, `AutoBuy has been loaded successfully.`, [10,6], 2, 2);
try {
        function activate(p, q) {
                Game.Notify(`AutoBuy Started`,`Buying ${Game.ObjectsById[p].dname}s till ${q}`,[2,6],2,2); 

                const buy = setInterval(autobuy, 500);

                function autobuy() {
                        if (Game.ObjectsById[p].amount >= q) {
                                clearInterval(buy); 
                                Game.Notify(`Done!`,'','',2,2); 
                        }
                        else {
                                if (Game.cookies >= Game.ObjectsById[p].bulkPrice) {
                                        Game.ObjectsById[p].buy();
                                }
                        }
                }
        }
        function buy10() {
                const buyten = setInterval(buybuy, 1000);

                function buybuy() {
                        for (i = 19; i != 0; i--) {
                                Game.buyBulk = 100;
                                if (Game.cookies >= Game.ObjectsById[i].bulkPrice) {
                                        Game.ObjectsById[i].buy;
                                }
                        }
                        for (i = 19; i != 0; i--) {
                                Game.buyBulk = 10;
                                if (Game.cookies >= Game.ObjectsById[i].bulkPrice) {
                                        Game.ObjectsById[i].buy;
                                }
                        }
                        Game.buyBulk = 1;
                }

                function stop() {
                        clearInterval(buybuy);
                }
        }
}
catch(err) {
        Game.Notify(`Error Occured`, `${err.message}. Try Again...`, [16,5], 2, 2);
}
