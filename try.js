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

        function sleep(ms) {
                return new Promise(resolve => setTimeout(resolve, ms));
        }

        // second function
        async function buy10(s) {
                if (s !== 0) {s = 1; }
                
                Game.Notify(`BuyAll Started`,`Buying All Buildings I Can!`,[2,6],2,2);
                
                const buying = setInterval(buyall, 2100);

                async function buyall() {
                        
                        const buildingList = [19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0];
                                
                        buildingList.forEach(checkbuy);
                                
                        async function checkbuy(value) {
                                l('storeBulkBuy').click();
                                l('storeBulk1').click();
                                
                                if (Game.cookies >= Game.ObjectsById[value].bulkPrice) {
                                        Game.ObjectsById[value].buy();
                                        Game.Notify(`Bought ${Game.ObjectsById[value].dname}s`,'','',1,1);
                                }
                                await sleep(50);
                        }

                        if (i == s) {
                                Game.Notify(`BuyAll Stopped`,`Stopped Buying All Buildings I Can!`,[2,6],5,5);
                                clearInterval(buying);
                        }
                        else {
                                i++;
                        }
                }
        }
}
catch(err) {
        Game.Notify(`Error Occured`, `${err.message}. Try Again...`, [16,5], 2, 2);
}
