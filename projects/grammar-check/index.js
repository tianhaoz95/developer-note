var fs = require('fs');
var path = require('path');
var argument_parser = require('minimist');

var walk = (dir, done) => {
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

var entry_point = () => {
    var arguments = argument_parser(process.argv.slice(2));
    var root_checker_path = arguments['p'];
    walk(root_checker_path, (err, results) => {
        if (err) throw err;
        console.log(results);
    });
}

entry_point();