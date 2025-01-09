function activate(p, q) {
        Game.Notify(p + '' + q + ' loaded!', '', '', 2, 2);
        while (Game.ObjectsbyId[p].amount < q) {
                if (Game.cookies >= Game.ObjectsbyId[p]) {
                        Game.ObjectsbyId[p].buy();
                }
        }
}
