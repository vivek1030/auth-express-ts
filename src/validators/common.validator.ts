// Validator Signup
export const SignupValidator = {
  username: {
    type: String,
    required: true,
    length: { min: 5, max: 32 },
    match: /^[A-Za-z0-9]*$/,
    message: {
      match: "Username contain only alphanumeric no special character allowed",
    },
  },
  email: {
    type: String,
    required: true,
    match: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
    message: {
      match: "Email must be valid",
    },
  },
  password: {
    type: String,
    required: true,
    length: { min: 8, max: 32 },
    message: {
      length: "Password length must have minimum 8 character",
      required: "Password is required.",
    },
  },
};

// Validator Login
export const LoginValidator = {
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    message: {
      required: "Password field is blank",
    },
  },
};
