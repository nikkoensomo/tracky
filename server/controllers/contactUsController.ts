import { Resend } from "resend";
import type { Request, Response } from "express";
import type { IUser } from "../models/User.js";
import type { HydratedDocument } from "mongoose";

type AuthRequest = Request & {
    user?: HydratedDocument<IUser> | null;
}

export const sendContactMessage = async (req: AuthRequest, res: Response) => {
    try {
        const resend = new Resend(process.env.RESEND_API_KEY as string);

        const { firstName, lastName, email, phoneNumber, concern } = req.body;

        if (!firstName || !lastName || !email || !phoneNumber || !concern ) {
            return res.status(400).json({ message: 'Please input all required fields.' });
        }

        const emailResult = await resend.emails.send({
            from: 'Tracky Contact <onboarding@resend.dev>',
            to: [process.env.CONTACT_EMAIL as string],
            subject: `New message from ${firstName} ${lastName}`,
            html: `
                <p><strong>Name:</strong> ${firstName} ${lastName}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phoneNumber || 'N/A'}</p>
                <p><strong>Message:</strong></p>
                <p>${concern}</p>
            `
        });

        res.status(200).json({
            message: 'Email sent successfully',
            emailResult
        });
    } catch (error) {
        res.status(500).json({
            message: 'Server error.',
            error: error instanceof Error ? error.message : 'Unknown error'
        });
    }
}