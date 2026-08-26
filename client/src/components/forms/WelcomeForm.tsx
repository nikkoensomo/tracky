import { useState } from 'react';
import { toast } from 'sonner';
import { createUserNicknameService } from '../../services/userService';
import type { WelcomeFormData, WelcomeFormError } from '../../types/user.types';
import { LoaderCircle } from 'lucide-react';
import ConfirmButton from '../buttons/reusable/ConfirmButton';
import CancelButton from '../buttons/reusable/CancelButton';

type WelcomeFormProps = {
    onSuccess: () => void;
    onLater: () => void;
}

const WelcomeForm = ({ onSuccess, onLater }: WelcomeFormProps) => {
    const [formData, setFormData] = useState<WelcomeFormData>({
        nickname: ''
    });

    const [errors, setErrors] = useState<WelcomeFormError>({
        nickname: '',
        general: '',
    });

    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: '' });
    }

    const validate = () => {
        const newErrors: WelcomeFormError = {};

        if (!formData.nickname.trim()) {
            newErrors.nickname = "Please input your nickname."
        }

        return newErrors;
    }

    const handleSubmit = async () => {
        const newErrors: WelcomeFormError = validate();

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        try {
            setIsLoading(true);

            const payload = await createUserNicknameService(formData);

            console.log(payload);
            toast.success('Nickname created successfully!');
            onSuccess();
        } catch (error) {
            setErrors({
                ...errors,
                general: error instanceof Error ? error.message : 'Unknown error'
            });

            toast.error('Failed to create nickname.');
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <>
            <div className="flex flex-col gap-6">
                <input
                    type="text"
                    name="nickname"
                    value={formData.nickname}
                    onChange={handleChange}
                    placeholder="Nickname"
                    className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-teal-700"
                />

                <div className="flex justify-end items-center space-x-4">
                    <ConfirmButton
                        onClick={handleSubmit}
                        isDisabled={isLoading}
                        label={isLoading ? (
                            <>
                                Submitting...
                                <LoaderCircle className="animate-spin" size={20} />
                            </>
                        ) : (
                            'Submit'
                        )}
                    />

                    <CancelButton
                        onClick={onLater}
                        label='Maybe later'
                    />
                </div>
            </div>
        </>
    )
}

export default WelcomeForm;