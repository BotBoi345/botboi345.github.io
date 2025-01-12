function activate(p, q) {
        Game.Notify(`Buying ${Game.ObjectsById[p].dname}s till ${q}`, '', '', 2, 2);
        while (Game.ObjectsById[p].amount < q) {
                if (Game.cookies >= Game.ObjectsById[p].bulkPrice) {
                        Game.ObjectsById[p].buy();
                }
        }
}
