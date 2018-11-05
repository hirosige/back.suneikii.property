const { client } = require('./connector')

async function asyncMutationProvider(array) {
  return Promise.all(array.map(async provider => {
    await client.request(createProviderMutation(provider))
  }))
}

function createProviderMutation(provider) {
  return `mutation {
    createProvider (
      name: "${provider.name}"
      introduction: "${provider.name}"
      siteUrl: "${provider.name}"
      address: "${provider.name}"
      tel: "${provider.name}"
      fax: "${provider.name}"
      certificate: "${provider.name}"
      workingTime: "${provider.name}"
      holidays: "${provider.name}"
    ) {
      id
    }
  }`
}

module.exports = {
  asyncMutationProvider
}