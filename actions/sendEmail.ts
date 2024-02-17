"use server";

import ContactFormEmail from "@/components/email";
import { getErrorMessage, validateString } from "@/lib/utils";
import React from "react";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formaData: FormData) => {
    const senderEmail = formaData.get('senderEmail');
    const message = formaData.get('message');

    if(!validateString(senderEmail, 500)) {
        return {
            error: "Invalid email",
        }
    }

    if(!validateString(message, 5000)) {
        return {
            error: "Invalid message",
        }
    }


    let data;
    try {
        data = await resend.emails.send({
            from: "Contact from <onboarding@resend.dev>",
            to: "nikhillohar2297@gmail.com",
            subject: "Contact from portfolio",
            reply_to: senderEmail,
            react: React.createElement(ContactFormEmail, {
                message: message,
                senderEmail: senderEmail,
            }),
        });
    }catch(err) {
        return {
            error : getErrorMessage(err),
        }
    }

    return { data };
}