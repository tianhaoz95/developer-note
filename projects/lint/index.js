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

fs.readFile('../../README.md', 'utf8', function(err, contents) {
    console.log(contents);
})

function lint_file(file_list) {
    return new Promise((resolve, reject) => {

    })
}