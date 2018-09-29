const Path = require('path')
const FS = require('fs')
const ParseGithubURL = require('parse-github-url')
module.exports = async (_, { lastRelease, nextRelease, options: { repositoryUrl } }) => {
  const { name } = ParseGithubURL(repositoryUrl)
  const last = lastRelease.version
  const next = nextRelease.version
  const path = {}
  path.pjs = Path.resolve(process.cwd(), 'package.json')
  path.readme = Path.resolve(process.cwd(), 'README.md')
  const pjs = JSON.parse(FS.readFileSync(path.pjs))
  const before = `[![${name}](https://img.shields.io/badge/version-${last}-blue.svg)](${pjs.repository.url})`
  const after = before.replace(last, next)
  const readme = FS.readFileSync(path.readme).toString()
  const lines = readme.split('\n')
  const count = lines ? lines.length : 0
  const first = count > 0 ? lines[0] : undefined
  if (!first) return
  const others = lines.slice(1)
  try {
    const updated = first.replace(before, after)
    const modified = [].concat([updated], others).join('\n')
    FS.writeFileSync(path.readme, modified)
    if (updated !== first) console.log(`new badge: ${after}`)
  }
  catch (error) { console.error(error) }
}
