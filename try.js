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
                
                const buyten = setInterval(buybuy, 1000);

                function buybuy() {
                        var buildingList = [19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0];
                        for (let theBuilding in buildingList) {
                                Game.buyBulk = 100;
                                if (Game.cookies >= Game.ObjectsById[buildingList[theBuilding]].bulkPrice) {
                                        Game.ObjectsById[buildingList[theBuilding]].buy();
                                }
                        }
                        for (let theBuilding in buildingList) {
                                Game.buyBulk = 10;
                                if (Game.cookies >= Game.ObjectsById[buildingList[theBuilding]].bulkPrice) {
                                        Game.ObjectsById[buildingList[theBuilding]].buy();
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
