const AppSearchClient = require('@elastic/app-search-node')
const hostIdentfier = 'host-rm76oz'
const apiKey = 'search-vw7g7m2ks2gisqce4qr5xb6c'

const client = new AppSearchClient(hostIdentfier, apiKey)

// ---- Retrieve Documents ---- 
const engineName = 'ewe-search'
const documentIds = ['jk101003pq', 'jk101001lm']
client
    .getDocuments(engineName, documentIds)
    .then(response => console.log(response))
    .catch(error => console.log(error.errorMessages))
