const AppSearchClient = require('@elastic/app-search-node')
const hostIdentfier = 'host-rm76oz'
const apiKey = 'private-frkqju3d1x8uxnbciqqry3mu'

const client = new AppSearchClient(hostIdentfier, apiKey)

// ---- Retrieve Documents ---- 
const engineName = 'ewe-search'
const documentIds = ['jk101003pq', 'jk101001lm']
client
    .getDocuments(engineName, documentIds)
    .then(response => console.log(response))
    .catch(error => console.log(error.errorMessages))

// ----- Get Engine ------ 
// const engineName = 'ewe-search'
// client
//   .getEngine(engineName)
//   .then(response => console.log(response))
//   .catch(error => console.log(error.errorMessages))

console.log("Program will wait for requests now.")