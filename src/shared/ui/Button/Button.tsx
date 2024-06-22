import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import cls from './Button.module.scss';

export enum ThemeButton {
	CLEAR = 'clear',
	OUTLINE = 'outline',
	BACKGROUND = 'background',
	BACKGROUND_INVERTED = 'backgroundInverted',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = props => {
	const { className, children, theme, ...otherProps } = props;

	return (
		<button
			type='button'
			className={classNames(cls.Button, { [cls[theme]]: true }, [className])}
			{...otherProps}
		>
			{children}
		</button>
	);
};
