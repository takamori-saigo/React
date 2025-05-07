import { useEffect, useCallback } from 'react';

interface ModalInteractionProps {
	isVisible: boolean;
	onVisibilityChange?: () => void;
	modalContainerRef: React.RefObject<HTMLElement>;
}

export const ModalInteractionHandler = ({ 
	isVisible, 
	onVisibilityChange, 
	modalContainerRef 
}: ModalInteractionProps) => {
	const handleOutsideClick = useCallback((event: MouseEvent) => {
		const clickedElement = event.target;
		const isClickOutsideModal = clickedElement instanceof Node && 
			!modalContainerRef.current?.contains(clickedElement);

		if (isClickOutsideModal && isVisible) {
			onVisibilityChange?.();
		}
	}, [isVisible, onVisibilityChange, modalContainerRef]);

	useEffect(() => {
		window.addEventListener('mousedown', handleOutsideClick);
		return () => window.removeEventListener('mousedown', handleOutsideClick);
	}, [handleOutsideClick]);
};
