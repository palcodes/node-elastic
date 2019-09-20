
// ------ Setting up Elastic --------
const AppSearchClient = require('@elastic/app-search-node')
const hostIdentfier = 'host-rm76oz'
const apiKey = 'private-frkqju3d1x8uxnbciqqry3mu'
const client = new AppSearchClient(hostIdentfier, apiKey)
const engineName = "ewe-search"


// ------ Setting up firebase ------
const firebaseConfig = {
    apiKey: "AIzaSyAidtyO1QHi6ALPqXiCnRqp3jpYUAvYvEo",
    authDomain: "elastic-ewe.firebaseapp.com",
    databaseURL: "https://elastic-ewe.firebaseio.com",
    projectId: "elastic-ewe",
    storageBucket: "elastic-ewe.appspot.com",
    messagingSenderId: "842121705987",
    appId: "1:842121705987:web:7da2409c6108e8ac2b2c36"
  };


const documents = [
    {
        title: 'Floor lamp',
        amount: '3600',
        category: 'Home Decor',
        description: 'classic black design, 5.3 inch tall',
        image: 'https://instagram.fbom2-1.fna.fbcdn.net/vp/80b955f4e118a777e2e5f273cb6a46c2/5E184D54/t51.2885-15/e15/p640x640/70365617_2435798676500149_7375802252903811177_n.jpg?_nc_ht=instagram.fbom2-1.fna.fbcdn.net&_nc_cat=101 640w,https://instagram.fbom2-1.fna.fbcdn.net/vp/956eb8b7b6dc3a4ca6cff806f177b11b/5E3406AC/t51.2885-15/e15/70365617_2435798676500149_7375802252903811177_n.jpg?_nc_ht=instagram.fbom2-1.fna.fbcdn.net&_nc_cat=101 750w,https://instagram.fbom2-1.fna.fbcdn.net/vp/956eb8b7b6dc3a4ca6cff806f177b11b/5E3406AC/t51.2885-15/e15/70365617_2435798676500149_7375802252903811177_n.jpg?_nc_ht=instagram.fbom2-1.fna.fbcdn.net&_nc_cat=101 1080w',
    },
    {
        title: 'Green Dress',
        amount: '5990',
        category: 'clothing',
        description: '1 month old, wore by a model for once, premium collection ZARA',
        image: 'https://instagram.fbom2-1.fna.fbcdn.net/vp/826694523df4318f604b2231fd4b84f1/5E05BF5C/t51.2885-15/sh0.08/e35/p640x640/70357512_165199457993643_6283847501323784947_n.jpg?_nc_ht=instagram.fbom2-1.fna.fbcdn.net&_nc_cat=103 640w,https://instagram.fbom2-1.fna.fbcdn.net/vp/065121124655437fbb5485fbd806e3a3/5E21DD5C/t51.2885-15/sh0.08/e35/p750x750/70357512_165199457993643_6283847501323784947_n.jpg?_nc_ht=instagram.fbom2-1.fna.fbcdn.net&_nc_cat=103 750w,https://instagram.fbom2-1.fna.fbcdn.net/vp/758be5b90f8247248b040bf0d6098489/5E047FAA/t51.2885-15/e35/70357512_165199457993643_6283847501323784947_n.jpg?_nc_ht=instagram.fbom2-1.fna.fbcdn.net&_nc_cat=103 1080w',
    },
]

client
    .indexDocuments(engineName, documents)
    .then(response => console.log(response))
    .catch(error => console.log(error))