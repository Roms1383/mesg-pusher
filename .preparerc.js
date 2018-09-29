const Path = require('path')
const FS = require('fs')
const ParseGithubURL = require('parse-github-url')
module.exports = async (_, { lastRelease, nextRelease, options: { repositoryUrl }, }) => {
  const { name } = ParseGithubURL(repositoryUrl)
  const last = lastRelease.version
  const next = nextRelease.version
  const path = Path.resolve(process.cwd(), 'README.md')
  const before = `[![${name}](https://img.shields.io/badge/version-${last}-blue.svg)](${repositoryUrl})`
  const after = before.replace(last, next)
  console.log(`before: ${before}`)
  console.log(`> after: ${after}`)
  const file = FS.readFileSync(path).toString()
  const lines = file.split('\n')
  const count = lines ? lines.length : 0
  const first = count > 0 ? lines[0] : undefined
  if (!first) return
  const others = lines.slice(1)
  try {
    const updated = first.replace(before, after)
    const modified = [].concat([updated], others).join('\n')
    FS.writeFileSync(path, modified)
  }
  catch (error) { console.error(error) }
}
