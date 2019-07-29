const Octokit = require('@octokit/rest')
const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN
})
const writeGood = require('write-good')
var fs = require('fs')

lint_lists = [
    {
        id: 'cool gadgets cover page',
        path: '../../cool-gadgets/README.md'
    }
]

/*
octokit.issues.create({
  owner: 'tianhaoz95',
  repo: 'developer-note',
  title: 'test',
  body: 'test 1'
})
.then((res) => {
    console.log(res)
})
.catch((err) => {
    console.log('error!')
    console.log(err)
})
*/

function postReport(report) {
    return new Promise((resolve, reject) => {

    })
}

function lintFile(fileMeta) {
    return new Promise((resolve, reject) => {
        let filename = fileMeta.path
        let fileId = fileMeta.id
        fs.readFile(filename, 'utf8', function(err, contents) {
            if (err) {
                reject(err)
            }
            let suggestions = writeGood(contents);
            postReport(suggestions)
            .then((res) => {
                resolve(res)
            })
            .catch((err) => {
                reject(err)
            })
        })
    })
}

