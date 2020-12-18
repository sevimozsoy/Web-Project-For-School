var mongoose = require('mongoose');
var Mekan = mongoose.model('mekan');
const cevapOlustur = function (res, status, content) {
    res
        .status(status)
        .json(content);
};
const mekanlariListele = function (req, res) {
    cevapOlustur(res, 200, { "durum": "basarili" });
}
const mekanEkle = function (req, res) {
    cevapOlustur(res, 200, { "durum": "basarili" });
}
const mekanGetir = function (req, res) {
    if (req.params && req.params.mekanid) {
        Mekan.findById(req.params.mekanid)
            .exec(
                function (hata, mekan) {
                    if (!mekan) {
                        cevapOlustur(res, 404, { "durum": "mekanid bulunmadi" });
                    }
                    else if (hata) {
                        cevapOlustur(res, 404, hata);
                        return;
                    }
                    cevapOlustur(res, 200, mekan);
                }
            );
    }
    else
    cevapOlustur(res, 400, { "durum": "istekte mekanid yok" });
}
const mekanGuncelle = function (req, res) {
    cevapOlustur(res, 200, { "durum": "basarili" });
}
const mekanSil = function (req, res) {
    cevapOlustur(res, 200, { "durum": "basarili" });
}
module.exports = {
    mekanlariListele,
    mekanEkle,
    mekanGetir,
    mekanGuncelle,
    mekanSil
};