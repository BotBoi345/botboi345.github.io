function activate(p, q) {
        Game.Notify(p + q + ' loaded!', '', '', 2, 2);
        setInterval(buy, 500);
        function buy() {
                try {
                        for (let i = 0; i != q, i++) {
                                if Game.cookies >= Game.ObjectsbyId[p] {
                                        Game.ObjectsbyId[p].buy();
                                }
                        }
                }
                catch(err) {
                        Game.Notify('Error', 'An error has occured. try again', '', 2, 2);
                }
        }
}
