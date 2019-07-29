const Octokit = require('@octokit/rest')
const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN
})
const writeGood = require('write-good')
var fs = require('fs')

fileList = [
    {
        id: 'cool gadgets cover page',
        root: '../../',
        path: 'cool-gadgets/README.md'
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
        octokit.issues.create({
            owner: 'tianhaoz95',
            repo: 'developer-note',
            title: report.title,
            body: report.content
        })
        .then((res) => {
            resolve(res)
        })
        .catch((err) => {
            reject(err)
        })
    })
}

function generateReport(result) {
    reportTitle = 'Language for ' + result.id
    comments = result.suggestions.map((suggestion) => {
        let index = suggestion.index
        let offset = suggestion.offset
        let reason = suggestion.reason
        let comment = '\n\n'
        comment += '[index: '
        comment += index.toString()
        comment += "]("
        comment += "https://github.com/tianhaoz95/developer-note/blob/master/"
        comment += result.path
        comment += "#L"
        comment += index.toString()
        comment += ")"
        comment += '\n'
        comment += 'offset: '
        comment += offset.toString()
        comment += '\n'
        comment += reason
        comment += '\n\n'
        return comment
    })
    reportSuggestions = comments.join('\n')
    let report = {
        title: reportTitle,
        content: reportSuggestions
    }
    return report
}

function lintFile(fileMeta) {
    return new Promise((resolve, reject) => {
        let filename = fileMeta.root + fileMeta.path
        let fileId = fileMeta.id
        fs.readFile(filename, 'utf8', function(err, contents) {
            if (err) {
                reject(err)
            }
            let suggestions = writeGood(contents);
            let result = {
                id: fileId,
                path: fileMeta.path,
                suggestions: suggestions
            }
            let report = generateReport(result)
            postReport(report)
            .then((res) => {
                resolve(res)
            })
            .catch((err) => {
                reject(err)
            })
        })
    })
}

function lintAll(fileList) {
    return new Promise((resolve, reject) => {
        Promise.all(fileList.map((fileMeta) => (
            lintFile(fileMeta)
        )))
        .then((res) => {
            resolve(res)
        })
        .catch((err) => {
            reject(err)
        })
    })
}

lintAll(fileList)
.then((res) => {
    console.log('Done!')
    console.log(res)
})
.catch((err) => {
    console.log('Error :(')
    console.log(err)
})