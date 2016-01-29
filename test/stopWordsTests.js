import test from 'tape'

import removeStopWords from '../lib/stopWords'

test('It removes stop words', (t) => {
  const words = ["can't", "have", "a", "stopword"]

  const cleansedWords = removeStopWords(words)

  t.equal(cleansedWords.length, 1, 'It removed the stopwords.')
  t.equal(cleansedWords[0], 'stopword', 'It left the correct word')

  t.end()
})
