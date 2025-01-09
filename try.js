function activate(p, q) {
        Game.Notify(p + '' + q + ' loaded!', '', '', 2, 2);
        try {
                while (Game.ObjectsbyId[p].amount < q) {
                        if (Game.cookies >= Game.ObjectsbyId[p]) {
                                Game.ObjectsbyId[p].buy();
                        }
                }
        }
        catch(err) {
                Game.Notify('Error', err.message, '', 2, 2);
        }
}
