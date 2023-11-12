const InmueblesModel = require('../models/inmueble.model');

// GET /api/inmuebles
const getAllInmuebles = async (req, res) => {
  try {
    const inmuebles = await InmueblesModel.find();
    res.json(inmuebles);
  } catch (error) {
    res.json({ fatal: error.message });
  }
};

// GET /api/inmuebles/:id
const getInmuebleById = async (req, res) => {
  try {
    const { inmuebleId } = req.params;
    const inmueble = await InmueblesModel.findById(inmuebleId);
    res.json(inmueble);
  } catch (error) {
    res.json({ fatal: error.message });
  }
};

// POST /api/inmuebles
const createInmueble = async (req, res) => {
  try {
    const result = await InmueblesModel.create(req.body);
    res.json(result);
  } catch (error) {
    res.json({ fatal: error.message });
  }
};

// PUT /api/inmuebles/:inmuebleId
const updateInmueble = async (req, res) => {
  try {
    const { inmuebleId } = req.params;
    const result = await InmueblesModel.findByIdAndUpdate(
      inmuebleId,
      req.body,
      { new: true }
    );
    res.json(result);
  } catch (error) {
    res.json({ fatal: error.message });
  }
};

// DELETE /api/inmuebles/:inmuebleId
const deleteInmueble = async (req, res) => {
  try {
    const { inmuebleId } = req.params;
    const result = await InmueblesModel.findByIdAndDelete(inmuebleId);
    res.json(result);
  } catch (error) {
    res.json({ fatal: error.message });
  }
};

module.exports = {
  getAllInmuebles,
  getInmuebleById,
  createInmueble,
  updateInmueble,
  deleteInmueble,
};
