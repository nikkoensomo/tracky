export type RegisterFormData = {
    email: string;
    password: string;
    confirmPassword: string;
};

export type RegisterPayload = Omit<RegisterFormData, 'confirmPassword'>;

export type LoginFormData = {
    email: string;
    password: string;
}


// ERRORS
export type RegisterFormError = {
    email?: string;
    password?: string;
    confirmPassword?: string;
    general?: string;
}

export type LoginFormError = {
    email?: string;
    password?: string;
    confirmPassword?: string;
    general?: string;
}