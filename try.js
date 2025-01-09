function activate(p, q) {
        var i = Game.ObjectsbyId[parseInt(p)].amount;
        Game.Notify(p + '' + q + ' loaded!', '', '', 2, 2);
        while (i < q) {
                if (Game.cookies >= i) {
                        Game.ObjectsbyId[p].buy();
                }
                else {
                        break;
                }
        }
}
