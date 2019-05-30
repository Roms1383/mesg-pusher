module.exports = {
  extends: ['@semantic-release/github'],
  analyzeCommits: {
    releaseRules: [
      { type: ':art:', release: 'patch' },
      { type: ':zap:', release: 'patch' },
      { type: ':fire:', release: 'patch' },
      { type: ':bug:', release: 'patch' },
      { type: ':ambulance:', release: 'patch' },
      { type: ':sparkles:', release: 'minor' },
      { type: ':memo:', release: 'patch' },
      { type: ':rocket:', release: 'patch' },
      { type: ':lipstick:', release: 'patch' },
      { type: ':tada:', release: 'patch' },
      { type: ':white_check_mark:', release: 'patch' },
      { type: ':lock:', release: 'patch' },
      { type: ':apple:', release: 'patch' },
      { type: ':penguin:', release: 'patch' },
      { type: ':checkered_flag:', release: 'patch' },
      { type: ':robot:', release: 'patch' },
      { type: ':rotating_light:', release: 'patch' },
      { type: ':green_heart:', release: 'patch' },
      { type: ':arrow_down:', release: 'patch' },
      { type: ':arrow_up:', release: 'patch' },
      { type: ':pushpin:', release: 'patch' },
      { type: ':construction_worker:', release: 'patch' },
      { type: ':chart_with_upwards_trend:', release: 'patch' },
      { type: ':recycle:', release: 'patch' },
      { type: ':heavy_minus_sign:', release: 'patch' },
      { type: ':whale:', release: 'patch' },
      { type: ':heavy_plus_sign:', release: 'patch' },
      { type: ':wrench:', release: 'patch' },
      { type: ':globe_with_meridians:', release: 'patch' },
      { type: ':pencil2:', release: 'patch' },
      { type: ':rewind:', release: 'patch' },
      // { type: ':twisted_rightwards_arrows:', release: '' }, merging branch : should not trigger a release
      { type: ':package:', release: 'patch' },
      { type: ':alien:', release: 'patch' },
      { type: ':truck:', release: 'patch' },
      { type: ':boom:', release: 'major' },
      { type: ':bento:', release: 'patch' },
      { type: ':ok_hand:', release: 'patch' },
      { type: ':wheelchair:', release: 'patch' },
      { type: ':speech_balloon:', release: 'patch' },
      { type: ':card_file_box:', release: 'patch' },
      { type: ':loud_sound:', release: 'patch' },
      { type: ':mute:', release: 'patch' },
      { type: ':busts_in_silhouette:', release: 'patch' },
      { type: ':children_crossing:', release: 'patch' },
      { type: ':building_construction:', release: 'patch' },
      { type: ':iphone:', release: 'patch' },
      { type: ':clown_face:', release: 'patch' },
      // specific to gitmoji
      { type: ':green_apple:', release: 'patch' },
      // { type: ':bookmark:', release: '' }, // git tags : should not trigger a release
      // { type: ':construction:', release: '' }, // work in progress : should not trigger a release
      { type: ':hankey:', release: 'patch' },
      { type: ':page_facing_up:', release: 'patch' }, // license
      { type: ':bulb:', release: 'patch' },
      { type: ':beers:', release: 'patch' },
      { type: ':egg:', release: 'patch' },
      { type: ':see_no_evil:', release: 'patch' },
      { type: ':camera_flash:', release: 'patch' },
    ],
    parserOpts: {
      // gitmoji-cli does not currently support scope
      headerPattern: /^(:\w*:)\s((?:.*(?=\())|.*)(?:\(#(\d*)\))?/,
      // gitmoji-cli does not currently support scope
      headerCorrespondence: ['type', 'subject', 'ticket'],
      // apparently it was not inherited
      noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES', 'BREAKING'],
    },
  },
  assets: [
    'package.json',
    'yarn.lock',
    'CHANGELOG.md',
    'README.md'
  ],
  message:
    ':bookmark: Release ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
  prepare: [
    '@semantic-release/changelog',
    // automate module version update in README.md
    './.preparerc.js',
    '@semantic-release/npm',
    '@semantic-release/git',
  ],
  publish: ['@semantic-release/github', '@semantic-release/npm'],
  success: ['@semantic-release/github'],
  fail: ['@semantic-release/github'],
}
