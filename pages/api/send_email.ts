import { NextApiHandler, NextApiRequest } from 'next';
import sgMail from '@sendgrid/mail';

const handler: NextApiHandler = async (req, res) => {
	try {
		const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;

		if (!SENDGRID_API_KEY) {
			return res.status(500).json({ error: 'Internal error. Bad api key config.' });
		}

		sgMail.setApiKey(SENDGRID_API_KEY);

		const { subject, body } = req.body;

		const msg = {
			to: 'leetanson@gmail.com',
			from: 'tansonlee02@gmail.com',
			subject,
			text: body,
		};

		await sgMail.send(msg);
		return res.status(200).json({ message: 'ok' });
	} catch (e) {
		console.log('error sending email', e);
		return res.status(500).json({ error: e });
	}
};

export default handler;
