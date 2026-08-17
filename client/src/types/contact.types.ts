export type ContactFormData = {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    concern: string;
}

export type ContactFormErrors = {
    firstName?: string;
    lastName?: string;
    email?: string;
    phoneNumber?: string;
    concern?: string;
    general?: string;
}