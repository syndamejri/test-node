const yup = require("yup");
const validate = async function (req, res, next) {
  const schema = yup.object().shape({
    name: yup.string().required(),
    matricule: yup.string().required(),
    score: yup.number().required(),
    status: yup.boolean().required(),
    email_user: yup.string().required(),
  });
  try {
    await schema.validate(req.body, {abortEarly:false});
    next();
  } catch (error) {
    console.log(error);
  }
};
module.exports = validate;
