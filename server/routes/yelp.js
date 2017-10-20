const express = require('express');
const yelp = require('yelp-fusion');

const router = express.Router();

router.get('/yelp', (req, res) => {

    const client = yelp.client('k7Q22BV_LCYKMqRbq-e7fXpg51OQY8LTkzZ0ZDWp2W67bIG3AeCOEPrffR9-n7omBWpQHWfzaqTGJeMcejgYBzlijKlqNVS29Zbs8vTpXgY7ZVTphaWWxqmZjiPIWXYx');
    console.log(req.query);
    client.search({
        term:'Four Barrel Coffee',
        location: 'san francisco, ca'
      }).then(response => {
        /*console.log(response.jsonBody);*/
      }).catch(e => {
        console.log(e);
      });

  res.status(200).send("Yelp search")
})

module.exports = router;