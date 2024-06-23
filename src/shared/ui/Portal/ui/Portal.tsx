import { FC, ReactNode } from 'react';
import { createPortal } from 'react-dom';

type PortalProps = {
	children?: ReactNode;
	element?: HTMLElement;
};

export const Portal: FC<PortalProps> = ({
	children,
	element = document.body,
}): JSX.Element => {
	return createPortal(children, element);
};
