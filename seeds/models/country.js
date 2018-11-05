const { client } = require('./connector')

async function asyncMutationCountry(array) {
  return Promise.all(array.map(async country => {
    const res = await client.request(createCountryMutation(country))
    const countryId = res.createCountry.id

    if (typeof country.provinces !== 'undefined') {
      return Promise.all(country.provinces.map(async province => {
        const newProvince = {
          ...province,
          countryId,
        }

        const res = await client.request(createProvinceMutation(newProvince))
        const provinceId = res.createProvince.id

        if (typeof province.districts !== 'undefined') {
          return Promise.all(province.districts.map(async district => {
            const newDistrict = {
              ...district,
              provinceId,
            }

            const res = await client.request(createDistrictMutation(newDistrict))
            console.log(res)
          }))
        }
      }))
    }
  }))
}

function createCountryMutation(country) {
  return `mutation {
    createCountry (
      name: "${country.name}"
      code: "${country.code}"
      slug: "${country.slug}"
    ) {
      id
    }
  }`
}

function createProvinceMutation(province) {
  return `mutation {
    createProvince (
      name: "${province.name}"
      code: "${province.code}"
      slug: "${province.slug}"
      countryId: "${province.countryId}"
    ) {
      id
    }
  }`
}

function createDistrictMutation(district) {
  return `mutation {
    createDistrict (
      name: "${district.name}"
      code: "${district.code}"
      slug: "${district.slug}"
      provinceId: "${district.provinceId}"
    ) {
      id
    }
  }`
}

module.exports = {
  asyncMutationCountry
}