import { useState } from 'react';
import { toast } from 'sonner';
import type { ContactFormData, ContactFormErrors } from "../../types/contact.types";
import { sendContactMessageService } from '../../services/contactService';
import { LoaderCircle } from 'lucide-react';
import CreateButton from '../buttons/reusable/SubmitButton';

type ContactUsFormProps = {
    onSuccess: () => void;
}

const ContactUsForm = ({ onSuccess }: ContactUsFormProps ) => {
    const [formData, setFormData] = useState<ContactFormData>({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        concern: '',
    });

    const [errors, setErrors] = useState<ContactFormErrors>({
        firstName: '',
        lastName: '',
        email: '',
        concern: '',
        general: '',
    });

    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: '' });
    }

    const validate = () => {
        const newErrors: ContactFormErrors = {};

        if (!formData.firstName.trim()) {
            newErrors.firstName = "Please enter your first name."
        }

        if (!formData.lastName.trim()) {
            newErrors.lastName = "Please enter your last name."
        }

        if (!formData.email.trim()) {
            newErrors.email = "Please enter your email."
        }

        if (!formData.concern.trim()) {
            newErrors.concern = "Please enter your concern."
        }

        return newErrors;
    }

    const handleSubmit = async () => {
        const newErrors: ContactFormErrors = validate();

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        try {
            setIsLoading(true);

            const payload = await sendContactMessageService(formData);

            console.log(payload);
            toast.success('Message sent successfuly!');
            onSuccess();
        } catch (error) {
            setErrors({
                ...errors,
                general: error instanceof Error ? error.message : 'Unknown error.'
            });

            toast.error('Failed to send message.');
        } finally {
            setIsLoading(false);
        }
    } 

    return (
        <>
            <div className="grid gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            placeholder="First Name"
                            className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 text-sm text-zinc-900 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-teal-700"
                        />
                    </div>

                    <div>
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            placeholder="Last Name"
                            className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 text-sm text-zinc-900 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-teal-700"
                        />
                    </div>
                </div>

                <div>
                    <input
                        type="text"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 text-sm text-zinc-900 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-teal-700"
                    />
                </div>

                <div>
                    <input
                        type="tel"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        placeholder="Phone Number"
                        className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 text-sm text-zinc-900 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-teal-700"
                    />
                </div>

                <div>
                    <textarea
                        name="concern"
                        value={formData.concern}
                        onChange={handleChange}
                        placeholder="How can we help?"
                        rows={3}
                        className="mt-1 w-full resize-none rounded-md border border-gray-300 px-4 py-2 text-sm text-zinc-900 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-teal-700"
                    />
                </div>

                <CreateButton 
                    onClick={handleSubmit}
                    isDisabled={isLoading}
                    label={isLoading ? (
                        <>
                            <LoaderCircle className="animate-spin" size={20} />
                        </>
                    ) : (
                        'Submit'
                    )}
                />
            </div>
        </>
    )
}

export default ContactUsForm;