const AppSearchClient = require('@elastic/app-search-node')
const hostIdentfier = 'host-rm76oz'
const apiKey = 'search-vw7g7m2ks2gisqce4qr5xb6c'

const client = new AppSearchClient(hostIdentfier, apiKey)

const engineName = 'ewe-search'
const query = 'handbags'
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