export type User = {
    firstName?: string;
    lastName?: string;
    username?: string;
    nickname?: string;
    email: string;
}

export type WelcomeFormData = {
    nickname: string;
}

export type WelcomeFormError = {
    nickname?: string;
    general?: string;
}