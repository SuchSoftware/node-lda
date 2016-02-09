// Tests that we correct remove the first 7 lines from the state of the union
// files

import test from 'tape'

import loadStateOfTheUnionData from '../lib/loadStateOfTheUnionData'

test('Removes the first 7 lines from the SOTU files', (t) => {
  loadStateOfTheUnionData()
    .take(1)
    .each(document => {
      t.equal(
        document.indexOf('Fellow-Citizens')
      , 0
      , 'It correctly pulled out the metadata lines'
      )

      t.end()
    })
})
