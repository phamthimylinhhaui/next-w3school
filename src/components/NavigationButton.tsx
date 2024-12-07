'use client';

import { Button, ButtonProps } from '@mui/material';
import { useRouter } from 'next/navigation';

interface NavigationButtonProps extends Omit<ButtonProps, 'onClick'> {
  href: string;
}

export default function NavigationButton({ href, ...props }: NavigationButtonProps) {
  const router = useRouter();

  return (
    <Button
      {...props}
      onClick={() => router.push(href)}
    />
  );
}
