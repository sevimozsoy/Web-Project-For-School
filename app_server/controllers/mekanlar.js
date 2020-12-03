
module.exports.anaSayfa = function (req, res) {
    res.render('mekanlar-liste', { title: 'Anasayfa' });
};

module.exports.mekanBilgisi = function (req, res) {
    res.render('mekan-detay', { title: 'Mekan Bilgisi' });
};


module.exports.yorumEkle = function (req, res) {
    res.render('yorum-ekle', { title: 'Yorum Ekle' });
};

