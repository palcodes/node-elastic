const AppSearchClient = require('@elastic/app-search-node')
const hostIdentfier = 'host-rm76oz'
const apiKey = 'private-frkqju3d1x8uxnbciqqry3mu'

const client = new AppSearchClient(hostIdentfier, apiKey)

const engineName = 'ewe-search'
const query = 'specs'
const searchFields = { title: {}, description: {}, category: {}, amount: {}, image: {} }
const resultFields = { title: { raw: {} }, description: { raw: {} }, category: { raw: {} }, amount: { raw: {} }, }
const options = { search_fields: searchFields, result_fields: resultFields }

client
    .search(engineName, query, options)
    .then(response => console.log(response))
    .catch(error => console.log(error.errorMessages))

// client
//     .getEngine(engineName)
//     .then(response => console.log(response))
//     .catch(error => console.log(error.errorMessages))