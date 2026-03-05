import React from 'react'

interface AuthFormProps {
    type: "login" | "signup";
    userRole: "patient" | "doctor";
}

function AuthForm({ type, userRole }: AuthFormProps) {
    return (
        <div>

        </div>
    )
}

export default AuthForm
