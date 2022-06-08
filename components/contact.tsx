import {
	Box,
	Button,
	Flex,
	FormControl,
	FormErrorMessage,
	FormHelperText,
	FormLabel,
	Heading,
	Input,
	Text,
	Textarea,
} from '@chakra-ui/react';
import { Field, FieldInputProps, Form, Formik, FormikProps } from 'formik';
import { RiSendPlaneFill } from 'react-icons/ri';

const Contact = () => {
	return (
		<Box id='contact'>
			<Heading mt='64px'>contact me</Heading>
			<Text mb={4}>
				Contact me directly through this form or reachout through LinkedIn or my email.
			</Text>
			<ContactForm />
		</Box>
	);
};

const ContactForm = () => {
	const validateFullName = (fullName: string) => {
		return !fullName ? 'Your full name is required' : undefined;
	};

	const validateEmail = (email: string) => {
		const emailRegex =
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return !email.toLowerCase().match(emailRegex) ? 'Your email is required' : undefined;
	};

	const validateMessage = (message: string) => {
		return !message ? 'A message is required' : undefined;
	};

	return (
		<Formik
			initialValues={{ fullName: '', email: '', message: '' }}
			onSubmit={(values, actions) => {
				setTimeout(() => {
					alert(JSON.stringify(values, null, 2));
					actions.setSubmitting(false);
				}, 1000);
				console.log(values);
			}}
		>
			{props => (
				<Form>
					<Flex
						direction={{
							base: 'column',
							md: 'row',
						}}
					>
						<Field name='fullName' validate={validateFullName}>
							{({ field, form }: any) => (
								<FormControl
									mr={{
										base: 0,
										md: 2,
									}}
									isInvalid={form.errors.fullName && form.touched.fullName}
								>
									<FormLabel htmlFor='fullName'>Full Name</FormLabel>
									<Input
										{...field}
										id='fullName'
										placeholder='Richard Hendricks'
									/>
									<FormErrorMessage>{form.errors.fullName}</FormErrorMessage>
								</FormControl>
							)}
						</Field>

						<Field name='email' validate={validateEmail}>
							{({ field, form }: any) => (
								<FormControl
									ml={{
										base: 0,
										md: 2,
									}}
									isInvalid={form.errors.email && form.touched.email}
								>
									<FormLabel htmlFor='email'>Email</FormLabel>
									<Input
										{...field}
										id='email'
										placeholder='richard.hendricks@piedpiper.com'
									/>
									<FormErrorMessage>{form.errors.email}</FormErrorMessage>
								</FormControl>
							)}
						</Field>
					</Flex>

					<Field name='message' validate={validateMessage}>
						{({ field, form }: any) => (
							<FormControl isInvalid={form.errors.message && form.touched.message}>
								<FormLabel htmlFor='message'>Message</FormLabel>
								<Textarea
									{...field}
									id='message'
									placeholder="Hi Tanson, I just saw your portfolio site. I'd love to have a coffee chat!"
								/>
								<FormErrorMessage>{form.errors.message}</FormErrorMessage>
							</FormControl>
						)}
					</Field>

					<Box textAlign='center'>
						<Button
							mt={4}
							colorScheme='blue'
							isLoading={props.isSubmitting}
							type='submit'
							px={16}
							rightIcon={<RiSendPlaneFill />}
							rounded='3xl'
						>
							Submit
						</Button>
					</Box>
				</Form>
			)}
		</Formik>
	);
};

export default Contact;
