const { Rating } = require('../models/models');
const ApiError = require('../error/ApiError');

class RatingController {
  async create(req, res) {
    const { rate, userId, deviceId } = req.body;
    const rating = await Rating.create({ rate, userId, deviceId });
    return res.json(rating);
  }

  async getAll(req, res) {
    const ratings = await Rating.findAll();
    return res.json(ratings);
  }

  // async delete(req, res) {
  //   const { id } = req.body;
  //   await Brand.destroy({ where: { id } });
  //   return res.json({ massage: `Brand id=${id} was destroyed` });
  // }
}

module.exports = new RatingController();
