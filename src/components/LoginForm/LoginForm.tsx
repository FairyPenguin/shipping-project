import styles from "./LoginForm.module.css"
import { useForm, isNotEmpty, isEmail } from '@mantine/form';
import { Button, TextInput, PasswordInput, Box, Flex } from '@mantine/core';

export default function LoginForm() {
    const form = useForm({
        initialValues: {
            email: '',
            password: ''

        },

        validate: {
            email: isEmail('Invalid email'),
            password: isNotEmpty('Enter your password'),

        },
    });

    return (
        <Box component="form"
            // miw="300"
            // maw="400"
            mx="auto"
            onSubmit={form.onSubmit(() => { })}
            style={{ width: '100%' }}

        >

            <TextInput
                label="Your email"
                placeholder="Your email"
                withAsterisk
                pt="md"
                pb="md"
                size="lg"
                radius={10}

                {...form.getInputProps('email')}
                style={{ width: '100%' }}
            />

            <PasswordInput
                label="Password"
                withAsterisk
                pt="md"
                pb="md"
                placeholder="Your password"
                size="lg"
                radius={10}
                {...form.getInputProps('password')}
                style={{ width: '100%' }}

            />
            <p className={styles["forget__password__text"]}>
                <a
                    className={styles["forget__password__link"]}
                    href="">
                    forget password?
                </a>
            </p>


            <Flex

                justify="center"
                align="center"
                direction="column"
                pt="md"
            >
                <Button
                    className={styles["button"]}
                    type="submit"
                    miw={150}
                    mih={45}
                    radius={10}
                    mt="lg"
                >Log in
                </Button>

                <p className={styles["signup__text"]}>
                    Not a member?
                    <a
                        className={styles["signup__link"]}
                        href=""> Sign up</a>
                </p>

            </Flex>
        </Box>
    );
}


