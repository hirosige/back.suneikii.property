const algoliasearch = require('algoliasearch')

const algolia = algoliasearch(
  process.env.ALGOLIA_APP_ID,
  process.env.ALGOLIA_API_KEY,
)

const index = algolia.initIndex(process.env.ALGOLIA_INDEX_NM)

export default event => {
  const { email } = event.data.User.node

  console.log(event)

  index.addObjects([{
    email
  }], (err, content) => {
    if (err) {
      console.log(err)
      return false
    }
  })

  console.log(event.data.User.node)

  return true
}
