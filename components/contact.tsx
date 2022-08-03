import {
	Box,
	Button,
	Flex,
	FormControl,
	FormErrorMessage,
	FormLabel,
	Heading,
	Input,
	Link,
	Text,
	Textarea,
	useColorModeValue,
} from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import { RiSendPlaneFill } from 'react-icons/ri';
import { useToast } from '@chakra-ui/react';

type FormData = {
	fullName: string;
	email: string;
	message: string;
};

const Contact = () => {
	const linkColor = useColorModeValue('blue.500', 'blue.200');

	const handleSubmit = (formData: FormData) => {
		fetch('https://tansonlee-emailer.herokuapp.com/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				subject: 'Personal Website: Contact Form Submission!',
				body: `Full Name: ${formData.fullName}\n\nEmail: ${formData.email}\n\nMesasge: ${formData.message}`,
			}),
		});
	};

	return (
		<Box id='contact'>
			<Heading mt='64px'>Contact Me</Heading>
			<Text>
				Feel free to contact me directly through this form or reachout through{' '}
				<Link
					href='https://www.linkedin.com/in/tansonlee/'
					isExternal
					color={linkColor}
					textDecoration='underline'
				>
					LinkedIn
				</Link>
				.
			</Text>
			<ContactForm handleSubmit={handleSubmit} />
		</Box>
	);
};

const ContactForm = ({ handleSubmit }: { handleSubmit: (formData: FormData) => void }) => {
	const toast = useToast();

	const validateFullName = (fullName: string) => {
		return !fullName.trim() ? 'Your full name is required' : undefined;
	};

	const validateEmail = (email: string) => {
		const emailRegex =
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return !email.trim().toLowerCase().match(emailRegex)
			? 'A valid email is required'
			: undefined;
	};

	const validateMessage = (message: string) => {
		return !message.trim() ? 'A message is required' : undefined;
	};

	return (
		<Formik
			initialValues={{ fullName: '', email: '', message: '' }}
			onSubmit={(values, actions) => {
				handleSubmit(values);
				setTimeout(() => {
					actions.setSubmitting(false);
					toast({
						title: 'Sucessfully Submitted!',
						description: "Thanks for reaching out! I'll contact you soon.",
						status: 'success',
						duration: 5000,
						isClosable: true,
						position: 'top',
					});
				}, 1000);
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
									mt={4}
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
									mt={4}
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
							<FormControl
								mt={4}
								isInvalid={form.errors.message && form.touched.message}
							>
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
