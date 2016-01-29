import test from 'tape'

import tokenize from '../lib/tokenizer'

test('Tokenizes a basic string', (t) => {
  const tokenizeMe = 'Tokenize me, fool!'

  const tokenizedList = tokenize(tokenizeMe)

  t.equal(tokenizedList.length, 3, 'It gets the list of 3 words.')
  t.equal(tokenizedList[0], 'tokenize', 'It downcases the words.')
  t.equal(tokenizedList[2], 'fool', 'It the correct last word.')

  t.end()
})
