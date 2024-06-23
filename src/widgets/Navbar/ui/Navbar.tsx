import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';
import { Modal } from 'shared/ui/Modal';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { useCallback, useState } from 'react';

interface NavbarProps {
	className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
	const { t } = useTranslation();
	const [isAuthModal, setIsAuthModal] = useState<boolean>(false);

	const onToggleModal = useCallback(() => {
		setIsAuthModal(prev => !prev);
	}, []);

	return (
		<div className={classNames(cls.Navbar, {}, [className])}>
			<Button
				theme={ThemeButton.OUTLINE}
				className={cls.links}
				onClick={onToggleModal}
			>
				{t('Войти')}
			</Button>
			<Modal isOpen={isAuthModal} onClose={onToggleModal}></Modal>
		</div>
	);
};
