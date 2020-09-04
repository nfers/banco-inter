import { ButtonHTMLAttributes } from 'react'
type ButtonVariant = 'secondary'; 

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &  {
	loading?: boolean;
	variant?: ButtonVariant;
	type?: 'submit' | 'reset' | 'button';
}
