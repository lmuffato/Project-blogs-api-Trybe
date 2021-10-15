const { Categories } = require('../models');

const createNewCategory = async (req, res) => {
    const { name } = req.body;
    const { dataValues } = await Categories.create({ name });
    return res.status(201).json(dataValues);
};

module.exports = {
    createNewCategory,
};
