import { Box, Button, FormControl, FormLabel, Stack } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { useCookies } from "react-cookie";
import { useLoginMutation } from "../../../../app/api/apiSlice";
import { FormResult } from "../../FormResult/FormResult";
import { setCredentials } from "../../../../features/auth/slice/authSlice";
import { FormHeader } from "../../../../shared/ui/Forms/FormHeader/FormHeader";
import { validateLoginInput } from "../../../../shared/Validators";
import { loginInitialValues } from "../model/loginInitialValues";
import ErrorText from "../../../../shared/ui/Error/ErrorText";
import { UserLoginSchemaInterface } from "../../../../app/schemas/Auth";

export function LoginForm() {
    const [
        login,
        {
            isLoading: isLoadingLogin,
            error: errorLogin,
            isSuccess: isSuccessLogin,
        },
    ] = useLoginMutation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [cookies, setCookie] = useCookies(["authToken"]);

    const handleLoginClick = (response) => {
        const { accessToken, userDto } = response;

        setCookie("authToken", accessToken, {
            path: "/",
        });
        dispatch(
            setCredentials({
                accessToken,
                userDto,
            })
        );
        console.log(cookies);
    };

    let content = <></>;

    if (isLoadingLogin) {
        content = <>Login Loading ...</>;
    }

    if (errorLogin) {
        content = (
            <>
                <ErrorText
                    errorMessage={`An error has occured while logging in:`}
                />
                <ErrorText errorMessage={`${errorLogin}`} />
            </>
        );
        console.log(errorLogin);
    }

    if (isSuccessLogin) {
        content = (
            <FormResult headlineText="Login Success" bodyText="Welcome to ESI">
                <Link to="products">
                    <Button>Go To Products</Button>
                </Link>
            </FormResult>
        );
    } else {
        content = (
            <Stack spacing="8">
                <FormHeader />
                <Box
                    py={{ base: "0", sm: "8" }}
                    px={{ base: "4", sm: "10" }}
                    bg={{ base: "transparent", sm: "bg.surface" }}
                    boxShadow={{ base: "none", sm: "md" }}
                    borderRadius={{ base: "none", sm: "xl" }}
                >
                    <Stack spacing="6">
                        <Formik
                            initialValues={loginInitialValues}
                            validationSchema={validateLoginInput}
                            onSubmit={async (
                                values: UserLoginSchemaInterface,
                                actions
                            ) => {
                                try {
                                    const response = await login(
                                        values
                                    ).unwrap();
                                    handleLoginClick(response);
                                    actions.resetForm();
                                    navigate("/products");
                                } catch (err) {
                                    throw Error("Log In Error occured");
                                }
                            }}
                        >
                            {({ isSubmitting }) => (
                                <Form>
                                    <FormControl>
                                        <FormLabel>Email: </FormLabel>
                                        <Field
                                            type="text"
                                            name="email"
                                            className="signup-input"
                                        />
                                        <ErrorMessage
                                            name="email"
                                            component={`div`}
                                            className="error-message"
                                        />
                                    </FormControl>
                                    <FormControl>
                                        <FormLabel>Password</FormLabel>
                                        <Field
                                            type="password"
                                            name="password"
                                            className="signup-input"
                                        />
                                        <ErrorMessage
                                            name="password"
                                            component={`div`}
                                            className="error-message"
                                        />
                                    </FormControl>

                                    <Button
                                        mt={4}
                                        colorScheme="teal"
                                        isLoading={isLoadingLogin}
                                        disabled={isSubmitting}
                                        type="submit"
                                    >
                                        Log In
                                    </Button>
                                </Form>
                            )}
                        </Formik>
                    </Stack>
                </Box>
            </Stack>
        );
    }

    return content;
}
