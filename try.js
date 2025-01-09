function activate(p, q) {
        var i = Game.ObjectsbyId[p].amount;
        Game.Notify(p + '' + q + ' loaded!', '', '', 2, 2);
        while (i < q) {
                if (Game.cookies >= i) {
                        Game.ObjectsbyId[p].buy();
                }
        }
}
