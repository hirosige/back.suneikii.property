// func bootstraping
const {
  asyncMutationAdvantage,
  asyncMutationCountry,
  asyncMutationProvider,
  asyncMutationPostCategory
} = require('./lib/func_bootstrap')

// data bootstraping
const {
  countries,
  advantages,
  providers,
  postCategories
} = require('./lib/data_bootstrap')

// exec mutations one by one
const exec = async () => {
  // await asyncMutationCountry(countries)
  // await asyncMutationAdvantage(advantages)
  // await asyncMutationProvider(providers)
  await asyncMutationPostCategory(postCategories)
}

// exec Seeds
exec()
