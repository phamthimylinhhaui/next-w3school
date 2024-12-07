'use client';

import { Button, ButtonProps } from '@mui/material';
import { useRouter } from 'next/navigation';
import { generatePath, RouteParams } from '@/config/routes';

interface NavigationButtonProps extends Omit<ButtonProps, 'onClick'> {
  to: string;
  params?: RouteParams;
}

export default function NavigationButton({ to, params, ...props }: NavigationButtonProps) {
  const router = useRouter();

  return (
    <Button
      {...props}
      onClick={() => router.push(generatePath(to, params))}
    />
  );
}
