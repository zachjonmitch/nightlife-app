const express = require('express');
const yelp = require('yelp-fusion');

const router = express.Router();

router.post('/yelp', (req, res) => {

    const client = yelp.client('k7Q22BV_LCYKMqRbq-e7fXpg51OQY8LTkzZ0ZDWp2W67bIG3AeCOEPrffR9-n7omBWpQHWfzaqTGJeMcejgYBzlijKlqNVS29Zbs8vTpXgY7ZVTphaWWxqmZjiPIWXYx');
    console.log(req.body);
    client.search({
        term:'Bars',
        location: req.body.city
      }).then(response => {
        console.log(response.jsonBody);
        res.status(200).send(response.jsonBody);
      }).catch(e => {
        console.log(e);
      });
})

module.exports = router;