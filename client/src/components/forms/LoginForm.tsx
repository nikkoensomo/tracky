import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginService } from '../../services/authService';
import type { RegisterFormError, LoginFormData, LoginFormError } from '../../types/auth.types';
import SubmitFormButton from '../buttons/SubmitFormButton';

type LoginFormProps = {
    onSuccess: () => void;
}

const LoginForm = ({ onSuccess }: LoginFormProps) => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState<LoginFormData>({
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState<RegisterFormError>({
        email: '',
        password: '',
        general: '',
    });

    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" });
    }

    const validate = () => {
        const newErrors: LoginFormError = {};

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

        return newErrors;
    }

    const handleSubmit = async () => {

        const newErrors: LoginFormError = validate();

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        try {
            setIsLoading(true);

            const data = await loginService(formData);
            console.log({
                message: 'Login success.',
                data
            });

            localStorage.setItem('token', data.token);

            onSuccess();
            navigate('/');
        } catch (error) {
            setErrors({
                ...errors,
                general: error instanceof Error ? error.message : 'Unknown error.'
            });
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <>
            <div className="flex flex-col gap-4 px-6">
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                />
                {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}

                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Password"
                    className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                />
                {errors.password && <p className="text-red-500 text-xs">{errors.password}</p>}

                <SubmitFormButton 
                    onClick={handleSubmit}
                    label='Login'
                />
            </div>
        </>
    )
}

export default LoginForm;