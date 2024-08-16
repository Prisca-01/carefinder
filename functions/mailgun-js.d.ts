declare module 'mailgun-js' {
  interface MailgunOptions {
    apiKey: string;
    domain: string;
  }

  interface MessageData {
    from: string;
    to: string | string[];
    subject: string;
    text: string;
  }

  interface MailgunMessages {
    send(data: MessageData): Promise<void>;
  }

  interface Mailgun {
    messages(): MailgunMessages;
  }

  interface MailgunConstructor {
    new (options: { apiKey: string; domain: string }): Mailgun;
  }

  const mailgun: MailgunConstructor;
  export default mailgun;
}
