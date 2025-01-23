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
                Game.Notify(`Buy10 Started`,`Buying All Buildings I Can!`,[2,6],2,2);
                
                const buyten = setInterval(buybuy, 10000);

                var i = 0;

                function buybuy() {
                        const buildingList = [19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0];
                        l('storeBulkBuy').click();
                        l('storeBulk1').click();
                        buildingList.forEach(buybuybuybuy);
                        function buybuybuybuy(value) {
                                 l('storeBulk10').click();
                                if (Game.cookies >= Game.ObjectsById[value].bulkPrice) {
                                        Game.ObjectsById[value].buy();
                                        Game.Notify(`Bought 10 ${Game.ObjectsById[value].dname}s`,``, ``,2,2);
                                }
                        }
                        l('storeBulk1').click();
                        i++;
                        if (i == 2) {
                                Game.Notify(`Buy10 Stopped`,`Stopped Buying All Buildings I Can!`,[2,6],2,2);
                                clearInterval(buyten);
                        }
                }
        }
}
catch(err) {
        Game.Notify(`Error Occured`, `${err.message}. Try Again...`, [16,5], 2, 2);
}
