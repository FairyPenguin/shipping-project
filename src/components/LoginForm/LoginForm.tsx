import styles from "./LoginForm.module.css"
import { useForm, isNotEmpty, isEmail } from '@mantine/form';
import { Button, Group, TextInput, PasswordInput, Box } from '@mantine/core';

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
        <Box component="form" maw={400} mx="auto" onSubmit={form.onSubmit(() => { })}>



            <TextInput
                label="Your email"
                placeholder="Your email"
                withAsterisk
                mt="md"
                {...form.getInputProps('email')}
            />

            <PasswordInput
                label="Password"
                withAsterisk
                mt="md"
                placeholder="Your password"

                {...form.getInputProps('password')}
            />


            <Group justify="flex-end" mt="md">
                <Button className={styles["button"]} type="submit">Login</Button>
            </Group>
        </Box>
    );
}