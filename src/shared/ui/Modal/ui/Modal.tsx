import { FC, useCallback, useEffect, useRef, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Modal.module.scss';
import { Portal } from 'shared/ui/Portal';

type ModalProps = {
	className?: string;
	children?: React.ReactNode;
	isOpen?: boolean;
	onClose?: () => void;
};

export const Modal: FC<ModalProps> = ({
	className,
	children,
	isOpen,
	onClose,
}) => {
	const [isClosing, setIsClosing] = useState(false);
	const timerRef = useRef<ReturnType<typeof setTimeout>>();

	const closeModalHandler = () => {
		if (onClose) {
			onClose();
			setIsClosing(true);
			timerRef.current = setTimeout(() => {
				onClose();
				setIsClosing(false);
			}, 300);
		}
	};

	const onKeyDown = useCallback(
		(e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				closeModalHandler();
			}
		},
		[closeModalHandler]
	);

	useEffect(() => {
		if (isOpen) {
			window.addEventListener('keydown', onKeyDown);
		}

		return () => {
			clearTimeout(timerRef.current);
			window.removeEventListener('keydown', onKeyDown);
		};
	}, [isOpen, onKeyDown]);

	const mods: Record<string, boolean> = {
		[styles.opened]: isOpen,
		[styles.isClosing]: isClosing,
	};

	return (
		<Portal>
			<div className={classNames(styles.Modal, mods, [className])}>
				<div className={styles.overlay} onClick={closeModalHandler}>
					<div className={styles.content} onClick={e => e.stopPropagation()}>
						<button onClick={closeModalHandler}>X</button>
						{children}
					</div>
				</div>
			</div>
		</Portal>
	);
};
