import * as yup from "yup";

export const SignupSchema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
    repeat_password: yup.string().required(),
}
);