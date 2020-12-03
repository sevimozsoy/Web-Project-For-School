
module.exports.anaSayfa = function (req, res) {
    res.render('mekanlar-liste',
        {
            'baslik': 'Anasayfa',
            'sayfaBaslik': {
                'siteAd': 'Mekan32',
                'aciklama': 'Isparta civarındaki mekanları keşfedin!'
            },
            'mekanlar': [
                {
                    'ad': 'Starbucks',
                    'adres': 'Centrum Garden',
                    'puan': '5',
                    'imkanlar': ['kahve', 'çay', 'pasta'],
                    'mesafe':'10km'
                },
                {
                    'ad': 'Gloria Jeans',
                    'adres': 'Iyaş AVM',
                    'puan': '3',
                    'imkanlar': ['kahve', 'çay', 'pasta'],
                    'mesafe': '11km'
                },
                {
                    'ad': 'Sessiz Kafe',
                    'adres': 'Çarşı',
                    'puan': '4',
                    'imkanlar': ['kahve', 'çay', 'pasta'],
                    'mesafe': '20km'
                },
                {
                    'ad': 'Dipnot Kütüphane',
                    'adres': 'Modernevler',
                    'puan': '5',
                    'imkanlar': ['kahve', 'çay', 'pasta'],
                    'mesafe': '1km'
                },
                {
                    'ad': 'Kaan Fırın',
                    'adres': 'Bahçelievler',
                    'puan': '3',
                    'imkanlar': ['kahve', 'çay', 'pasta'],
                    'mesafe': '15km'
                }

            ],
            'footer':'Sevim Selin ÖZSOY',
        });
};

module.exports.mekanBilgisi = function (req, res) {
    res.render('mekan-detay', {
        'baslik': 'Mekan Bilgisi',
        'sayfaBaslik': 'Starbucks',
        'mekanBilgisi': {
            'ad': 'Starbucks',
            'adres': 'Centrum Garden',
            'puan': 3,
            'imkanlar': ['Kahve', 'Pasta', 'Kek'],
            'koordinatlar': {
                'enlem': 37.781885,
                'boylam':30.566034
            },
            'saatler': [
                {
                    'gunler': 'Pazartesi-Cuma',
                    'acilis': '7:00',
                    'kapanis': '23:00',
                    'kapali': false,
                },
                {
                    'gunler': 'Cumartesi',
                    'acilis': '9:00',
                    'kapanis': '22:30',
                    'kapali': false,
                },
                {
                    'gunler': 'Pazar',
                    'kapali':true
                }
            ],
            'yorumlar': [{
                'yorumYapan': 'Steve Jobs',
                'puan': 3,
                'tarih': '31 Aralık 2020',
                'yorumMetni':'Meh :('
            }
            ]            
        },
        'footer': 'Sevim Selin ÖZSOY'
    });
};


module.exports.yorumEkle = function (req, res) {
    res.render('yorum-ekle', { title: 'Yorum Ekle' });
};

