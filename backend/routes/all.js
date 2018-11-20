const express = require('express');
const mdb = require('../mongoClient')


const router = express.Router({
    mergeParams: true
});


router.post('/', async function (req, res) {

})

router.get('/getProfiles', async function (req, res) {

    // Query the mongoDB
    const profiles = await mdb.get('profiles')

    
    // Fake response from the mongo database
    return res.status(200).json(profiles)
})

module.exports = router