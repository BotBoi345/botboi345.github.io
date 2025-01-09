function activate(p, q) {
        var i = p;
        var j = q;
        Game.Notify(i + '' + j + ' loaded!', '', '', 2, 2);
        while (Game.ObjectsbyId[i].amount < j) {
                if (Game.cookies >= Game.ObjectsbyId[i]) {
                        Game.ObjectsbyId[i].buy();
                }
        }
}
