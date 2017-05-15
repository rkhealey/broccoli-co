import validate from 'validate.js';

export default(values) => {
  const constraints = {
    name: {
      presence: true,
      length: { minimum: 3 },
    },
    email: {
      presence: true,
      email: true,
    },
    confirmEmail: {
      presence: true,
      equality: 'email',
    },
  };

  const errors = validate(values, constraints);

  return errors;
};
