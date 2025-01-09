function activate(p, q) {
        var j = parseInt(p);
        var i = Game.ObjectsbyId[j].amount;
        Game.Notify(p + '' + q + ' loaded!', '', '', 2, 2);
        while (i < q) {
                if (Game.cookies >= i) {
                        Game.ObjectsbyId[p].buy();
                }
        }
}
