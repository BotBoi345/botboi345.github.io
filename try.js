function activate(p, q) {
        Game.Notify(p + '' + q + ' loaded!', '', '', 2, 2);
        var i = Game.ObjectsById[p].displayName;
        while (Game.i.bought < q) {
                if (Game.cookies >= Game.i.bulkPrice) {
                        Game.i.buy();}
                else {break;}}}
