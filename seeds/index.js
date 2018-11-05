const { asyncMutationAdvantage } = require('./models/advantage')
const { asyncMutationCountry } = require('./models/country')
const { countries } = require('./data/area.json')
const { advantages } = require('./data/advantages.json')

console.log(advantages)

// exec mutations one by one
const exec = async () => {
  // await asyncMutationCountry(countries)
  await asyncMutationAdvantage(advantages)
}

// exec Seeds
exec()
