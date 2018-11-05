const { client } = require('./connector')

async function asyncMutationAdvantage(array) {
  return Promise.all(array.map(async advantage => {
    await client.request(createAdvantageMutation(advantage))
  }))
}

function createAdvantageMutation(advantage) {
  return `mutation {
    createAdvantage (
      name: "${advantage.name}"
      description: "${advantage.description}"
    ) {
      id
    }
  }`
}

module.exports = {
  asyncMutationAdvantage
}