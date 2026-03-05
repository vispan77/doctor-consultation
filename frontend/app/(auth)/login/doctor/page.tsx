import AuthForm from '@/components/auth/AuthForm';
import React from 'react'

export const metadata = {
  title: 'Doctor Login - MediCare+',
  description: 'Healthcare provider sign in to MediCare+ platform. Manage your practice and consultations.',
};

function page() {
  return (
    <div>
      <AuthForm type="login" userRole="doctor" />

    </div>
  )
}

export default page
