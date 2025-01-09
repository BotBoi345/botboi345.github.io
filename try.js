function activate(p, q) {
        Game.Notify(p + '' + q + ' loaded!', '', '', 2, 2);
        while (Game.ObjectsbyId[parseInt(p)].amount < parseInt(q)) {
                if (Game.cookies >= Game.ObjectsbyId[parseInt(p)]) {
                        Game.ObjectsbyId[parseInt(p)].buy();
                }
        }
}
