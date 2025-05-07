import { RadioGroup } from '../radio-group';
import { Separator } from '../separator';
import { ModalInteractionHandler } from './atributs/ModalInteractionHandler';
import { ArrowButton } from '../../components/arrow-button';
import { Button } from '../../components/button';
import { Text } from '../../components/text';
import { Select } from '../../components/select';
import { FormEvent, useRef, useState } from 'react';
import clsx from 'clsx';
import styles from './ArticleParamsForm.module.scss';
import {OptionType, backgroundColors, contentWidthArr, defaultArticleState, fontColors, fontFamilyOptions, fontSizeOptions} from 'src/constants/articleProps';

type ArticleParams = {
	currentStyles: typeof defaultArticleState;
	setCurrentStyles: React.Dispatch<React.SetStateAction<typeof defaultArticleState>>;
	resetStyles: () => void;
	applyStyles: () => void;
};

export const ArticleParamsForm = ({
	currentStyles,
	setCurrentStyles,
	resetStyles,
	applyStyles,
}: ArticleParams) => {
	const [isOpen, setOpen] = useState(false);

	const toggleFormVisibility  = () => {
		setOpen((prevOpen) => !prevOpen);
	};

	const handleFontFamilyChange  = (value: OptionType) => {
		setCurrentStyles({ ...currentStyles, fontFamilyOption: value });
	};

	const handleFontSizeChange  = (value: OptionType) => {
		setCurrentStyles({ ...currentStyles, fontSizeOption: value });
	};

	const handleChangeFontColor = (value: OptionType) => {
		setCurrentStyles({ ...currentStyles, fontColor: value });
	};

	const handleChangeBackgroundColor = (value: OptionType) => {
		setCurrentStyles({ ...currentStyles, backgroundColor: value });
	};

	const handleContentWidthChange  = (value: OptionType) => {
		setCurrentStyles({ ...currentStyles, contentWidth: value });
	};

	const formRef = useRef<HTMLFormElement | null>(null);

	ModalInteractionHandler({
		isVisible: isOpen,
		onVisibilityChange: toggleFormVisibility,
		modalContainerRef: formRef,
	});

	return (
		<>
			<ArrowButton onClick={() => !isOpen && toggleFormVisibility ()} isOpen={isOpen} />
			<aside
				className={clsx(styles.container, {
					[styles.container_open]: isOpen,
				})}>
				<form
					className={styles.form}
					ref={formRef}
					onSubmit={(e: FormEvent) => e.preventDefault()}>
					<Text as={'h2'} size={31} weight={800} uppercase={true}>
						Задайте параметры
					</Text>
					<Select
						selected={currentStyles.fontFamilyOption}
						options={fontFamilyOptions}
						placeholder='Выберите шрифт'
						title='шрифт'
						onChange={handleFontFamilyChange }
					/>
					<RadioGroup
						name='fontSize'
						options={fontSizeOptions}
						selected={currentStyles.fontSizeOption}
						title='размер шрифта'
						onChange={handleFontSizeChange }
					/>
					<Select
						selected={currentStyles.fontColor}
						options={fontColors}
						placeholder='Выберите цвет'
						title='цвет шрифта'
						onChange={handleChangeFontColor}
					/>
					<Separator />
					<Select
						selected={currentStyles.backgroundColor}
						options={backgroundColors}
						placeholder='Выберите цвет'
						title='цвет фона'
						onChange={handleChangeBackgroundColor}
					/>
					<Select
						selected={currentStyles.contentWidth}
						options={contentWidthArr}
						placeholder='Выберите ширину'
						title='ширина контента'
						onChange={handleContentWidthChange }
					/>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' onClick={resetStyles} />
						<Button title='Применить' type='submit' onClick={applyStyles} />
					</div>
				</form>
			</aside>
		</>
	);
};
