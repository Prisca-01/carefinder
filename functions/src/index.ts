import * as functions from 'firebase-functions';
import Mailgun from 'mailgun-js'; // Import Mailgun as a constructor

const mg = new Mailgun({
  apiKey: functions.config().mailgun.key,
  domain: functions.config().mailgun.domain,
});

export const sendHospitalShareEmail = functions.https.onCall(
  async (requestData) => {
    const { recipientEmail, hospitalId } = requestData;
    if (!recipientEmail || !hospitalId) {
      throw new functions.https.HttpsError(
        'invalid-argument',
        'The function must be called with "recipientEmail" and "hospitalId" arguments.',
      );
    }

    const link = `https://carefinder-aa4.com/hospitals/${hospitalId}`;

    const subject = 'Check out this hospital!';

    const text = `Hello,
I found this hospital and thought you might be interested.
You can view more details here: ${link}
Best,
Carefinder`;

    const emailData = {
      from: 'your-email@yourdomain.com',
      to: recipientEmail,
      subject,
      text,
    };

    try {
      await mg.messages().send(emailData);
      return { success: true };
    } catch (error) {
      console.error('Error sending email:', error);
      throw new functions.https.HttpsError('internal', 'Unable to send email.');
    }
  },
);
