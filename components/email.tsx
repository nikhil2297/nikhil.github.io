import { Body, Head, Heading, Html, Preview, Section, Tailwind, Container, Text, Hr } from '@react-email/components'
import React from 'react'

type ContactFormProps = {
    senderEmail : string,
    message : string
} 

export default function ContactFormEmail({ senderEmail, message } :  ContactFormProps) {
  return (
        <Html>
            <Head/>
            <Preview>New message from the portfolio</Preview>
            <Tailwind>
                <Body>
                    <Container><Section>

                        <Heading>Message from Contact form</Heading>
                        <Text>{message}</Text>
                        <Hr/>
                        <Text>Sender Email : {senderEmail}</Text>
                    </Section>

                    </Container>
                </Body>
            </Tailwind>
        </Html>   
    )
}
