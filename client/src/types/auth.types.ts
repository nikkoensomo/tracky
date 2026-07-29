export type RegisterFormData = {
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
};

export type RegisterPayload = Omit<RegisterFormData, 'confirmPassword'>;