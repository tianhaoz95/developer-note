var argument_parser = require('minimist');

var file_walker = require('./src/file_walker.js');

var entry_point = () => {
    var arguments = argument_parser(process.argv.slice(2));
    var root_checker_path = arguments['p'];
    file_walker(root_checker_path, (err, results) => {
        if (err) throw err;
        console.log(results);
    });
}

entry_point();