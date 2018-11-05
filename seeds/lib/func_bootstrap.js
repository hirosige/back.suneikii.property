const { asyncMutationAdvantage } = require('../models/advantage')
const { asyncMutationCountry } = require('../models/country')
const { asyncMutationProvider } = require('../models/provider')
const { asyncMutationPostCategory } = require('../models/post_category')

module.exports = {
  asyncMutationAdvantage,
  asyncMutationCountry,
  asyncMutationProvider,
  asyncMutationPostCategory
}