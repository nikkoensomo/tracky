import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signupService } from '../../services/authService';
import type { RegisterFormData, RegisterFormError } from '../../types/auth.types';
import { LoaderCircle } from 'lucide-react';
import SubmitFormButton from '../buttons/SubmitFormButton';

type RegisterFormProps = {
    onSuccess: () => void;
}

const RegisterForm = ({ onSuccess }: RegisterFormProps) => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState<RegisterFormData>({
        username: '',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [formErrors, setFormErrors] = useState<RegisterFormError>({
        username: '',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        general: '',
    });

    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setFormErrors({ ...formErrors, [e.target.name]: "" });
    }

    const validate = () => {
        const newErrors: RegisterFormError = {};

        if (!formData.username.trim()) {
            newErrors.username = "Username is required."
        }

        if (!formData.firstName.trim()) {
            newErrors.firstName = "First name is required."
        }

        if (!formData.lastName.trim()) {
            newErrors.lastName = "Last name is required."
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required."
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Enter a valid email.";
        }

        if (!formData.password) {
            newErrors.password = "Password is required."
        } else if (formData.password.length < 8) {
            newErrors.password = "Password should be at least 8 characters"
        }

        if (!formData.confirmPassword) {
            newErrors.confirmPassword = "Please confirm your password."
        } else if (formData.confirmPassword !== formData.password) {
            newErrors.confirmPassword = "Passwrods do not match."
        }

        return newErrors;
    }

    const handleSubmit = async () => {
        const newErrors: RegisterFormError = validate();

        if (Object.keys(newErrors).length > 0) {
            setFormErrors(newErrors);
            return;
        }

        try {
            setIsLoading(true);

            const { confirmPassword, ...dataToSend } = formData;
            const data = await signupService(dataToSend);

            localStorage.setItem('token', data.token);

            onSuccess();
            navigate('/dashboard-page');
        } catch (error) {
            setFormErrors({
                ...formErrors,
                general: error instanceof Error ? error.message : 'Something went wrong'
            });
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <>
            <div className="flex flex-col gap-4 px-6">
                {formErrors.general && <p className="text-red-500 text-xs">{formErrors.general}</p>}
                <div className="flex flex-col">
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        placeholder="Username"
                        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-teal-700"
                    />
                    {formErrors.username && <p className="ml-1 mt-1 text-red-500 text-xs">{formErrors.username}</p>}
                </div>

                <div className="flex flex-col">
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="First Name"
                        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-teal-700"
                    />
                    {formErrors.username && <p className="ml-1 mt-1 text-red-500 text-xs">{formErrors.username}</p>}
                </div>

                <div className="flex flex-col">
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Last Name"
                        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-teal-700"
                    />
                    {formErrors.username && <p className="ml-1 mt-1 text-red-500 text-xs">{formErrors.username}</p>}
                </div>

                <div className="flex flex-col">
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-teal-700"
                    />
                    {formErrors.email && <p className="ml-1 mt-1 text-red-500 text-xs">{formErrors.email}</p>}
                </div>

                <div className="flex flex-col">
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Password"
                        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-teal-700"
                    />
                    {formErrors.password && <p className="ml-1 mt-1 text-red-500 text-xs">{formErrors.password}</p>}
                </div>

                <div className="flex flex-col">
                    <input
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        placeholder="Confirm Password"
                        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-teal-700"
                    />
                    {formErrors.confirmPassword && <p className="ml-1 mt-1 text-red-500 text-xs">{formErrors.confirmPassword}</p>}
                </div>

                <SubmitFormButton
                    onClick={handleSubmit}
                    label={isLoading ? (
                        <>
                            Signing up...
                            <LoaderCircle className="animate-spin" size={20} />
                        </>
                    ) : (
                        'Sign Up'
                    )}
                />
            </div>
        </>
    );
}

export default RegisterForm;