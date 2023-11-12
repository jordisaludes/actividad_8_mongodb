const InmueblesModel = require('../models/inmueble.model');

const checkInmuebleId = async (req, res, next) => {
  const { inmuebleId } = req.params;
  try {
    const inmueble = await InmueblesModel.findById(inmuebleId);
    if (!inmueble) {
      return res.json({ fatal: 'El inmueble no existe' });
    }
    next();
  } catch (error) {
    res.json({ fatal: error.message });
  }
};

const checkFields = (req, res, next) => {
  if (req.body.piso && isNaN(parseInt(req.body.piso))) {
    return res.json({ fatal: 'El piso no tiene valor numérico' });
  }
  if (req.body.extension && isNaN(parseFloat(req.body.extension))) {
    return res.json({ fatal: 'La extensión no es un valor numérico' });
  }
  if (
    req.body.numero_habitaciones &&
    isNaN(parseInt(req.body.numero_habitaciones))
  ) {
    return res.json({
      fatal: 'El número de habitaciones no es un valor numérico',
    });
  }
  if (req.body.alquilado && typeof req.body.alquilado !== 'boolean') {
    return res.json({ fatal: 'Alquilado debe tener asignado true o false' });
  }
  if (req.body.mail_contacto) {
    const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,6}$/;
    if (!regex.test(req.body.mail_contacto)) {
      return res.json({ fatal: 'La dirección de e-mail no es válida' });
    }
  }
  next();
};

module.exports = { checkInmuebleId, checkFields };
