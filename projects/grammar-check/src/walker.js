var fs = require('fs');
var path = require('path');

module.exports = walk = (dir, done) => {
    var results = [];
    fs.readdir(dir, (err, list) => {
        if (err) {
            return done(err);
        }
        var pending = list.length;
        if (!pending) {
            return done(null, results);
        }
        list.forEach((file) => {
            file = path.resolve(dir, file);
            fs.stat(file, (err, stat) => {
                if (stat && stat.isDirectory()) {
                    walk(file, (err, res) => {
                        results = results.concat(res);
                        pending = pending - 1;
                        if (!pending) {
                            done(null, results);
                        }
                    });
                } else {
                    results.push(file);
                    pending = pending - 1;
                    if (!pending) {
                        done(null, results);
                    }
                }
            });
        });
    })
}