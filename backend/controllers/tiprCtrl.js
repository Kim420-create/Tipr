let tipr = require("../models/tipr.model")

// POST : Create a new Tipr
exports.createTipr = (req, res) => {
    const newTipr = new tipr(req.body);
    newTipr.save().then(post => {
        if (post) {
            console.log(post);
            res.json(post)
        }
    })
}
// GET : get all tipr
exports.getTipr = (req, res) => {
    tipr.find({}).then(data => {
        res.json(data)
    })
};
// GET: get tipr by id
exports.getTiprbyId = (req, res) => {
    tipr.find({_id : req.params.id}).then(data => {
        res.json(data);
    })
}
// DELETE : delete tipr by id
exports.deleteById = (req, res) => {
    tipr.findByIdAndDelete({_id : req.params.id}).then(data => {
        res.json(data);
    })
}
// UPDATE : modify a tipr
exports.updateTipr = (req, res) => {
    tipr.findOneAndUpdate({_id : req.params.id}, req.body, {new : true}, function (err, post) {
        if (err) {
            console.log(err, req.method.req.originalUrl);
            return res.json({error : true});
        }
        res.json(post)
    })
}