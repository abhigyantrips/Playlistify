import { Metadata } from 'next';

import LoginPageClient from '@/app/(auth)/page.client';

export const metadata: Metadata = {
  title: 'Login',
};

export default function LoginPage() {
  return <LoginPageClient />;
}
