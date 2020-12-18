var mongoose = require('mongoose');
var dbURI = 'mongodb://localhost/Mekan32';
mongoose.connect(dbURI, { useNewUrlParser: true });

mongoose.connection.on('connected', function () {
    console.log('Mongoose' + dbURI +
        'adresindeki veritabanina baglanildi\n');
});

mongoose.connection.on('error', function (err) {
    console.log('Mongoose baglanti hatasi\n:' + err);
});

mongoose.connection.on('disconnected', function () {
    console.log('Mongoose baglantisi kesildi\n');
});

kapat = function (msg, callback) {
    mongoose.connection.close(function () {
        console.log('Mongoose kapatildi\n' + msg);
        callback();
    });
};

process.once('SIGUSR2', function () {
    kapat('nodemon kapatildi\n', function () {
        process.kill(process.pid, 'SIGUSR2');
    });
});

process.on('SIGINT', function () {
    kapat('Uygulama kapatildi\n', function () {
        process.exit(0);
    });
});

process.on('SIGTERM', function () {
    kapat('heroku kapatildi\n', function () {
        process.exit(0);
    });
});

require('./mekansema');