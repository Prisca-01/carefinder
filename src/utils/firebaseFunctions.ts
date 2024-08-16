import { functions, httpsCallable } from './firebaseClient';

export const callSendHospitalShareEmail = async (
  recipientEmail: string,
  hospitalId: string,
): Promise<any> => {
  const sendHospitalShareEmail = httpsCallable(
    functions,
    'sendHospitalShareEmail',
  );

  try {
    const result = await sendHospitalShareEmail({ recipientEmail, hospitalId });
    return result.data;
  } catch (error) {
    console.error('Error calling Firebase function:', error);
    throw error;
  }
};