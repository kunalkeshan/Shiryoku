/**
 * How to Use Dialog
 */

// Dependencies
import React, { FC, PropsWithChildren, useState } from 'react';
import { Link } from 'react-router-dom';

import {
	Dialog,
	DialogTitle,
	Stepper,
	Step,
	StepLabel,
	Box,
	Button,
	Typography,
	styled,
} from '@mui/material';

import TagsGif from '../../../assets/howToUse/tags.gif';
import SearchGif from '../../../assets/howToUse/search.gif';
import ShareGif from '../../../assets/howToUse/share.gif';
import RoadmapsGif from '../../../assets/howToUse/roadmaps.gif';
import Counter from './Counter';

interface DialogProps extends PropsWithChildren {
	open: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const steps = [
	{
		image: TagsGif,
		label: 'Sort resources using Tags',
		text: 'Use tags to sort the specific resources that you are looking for. When needed, use the "Clear Tags" button to clear all selected tags.',
	},
	{
		image: SearchGif,
		label: 'Search for Resources',
		text: "Search for resources based on the name, description and tags associated to it. Clear the search when you're done searching.",
	},
	{
		image: ShareGif,
		label: 'Share and visit resource',
		text: 'Use the "Copy the URL to your clipboard" to share the URL directly, or visit the website, the GitHub repo (if open source) and share it optionally where you need to.',
	},
	{
		image: RoadmapsGif,
		label: 'Use Roadmaps',
		text: 'Roadmaps is an organized approach to Resources. Share the roadmap with others, and use it to follow a structured learning path.',
	},
];

const HowToUseDialog: FC<DialogProps> = ({ open, setOpen }) => {
	const [activeStep, setActiveStep] = useState(0);
	const [skipped, setSkipped] = useState(new Set<number>());

	const isStepOptional = (step: number) => {
		return step === 10;
	};

	const isStepSkipped = (step: number) => {
		return skipped.has(step);
	};

	const handleNext = () => {
		let newSkipped = skipped;
		if (isStepSkipped(activeStep)) {
			newSkipped = new Set(newSkipped.values());
			newSkipped.delete(activeStep);
		}

		setActiveStep((prevActiveStep) => prevActiveStep + 1);
		setSkipped(newSkipped);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const handleSkip = () => {
		if (!isStepOptional(activeStep)) {
			// You probably want to guard against something like this,
			// it should never occur unless someone's actively trying to break something.
			throw new Error("You can't skip a step that isn't optional.");
		}

		setActiveStep((prevActiveStep) => prevActiveStep + 1);
		setSkipped((prevSkipped) => {
			const newSkipped = new Set(prevSkipped.values());
			newSkipped.add(activeStep);
			return newSkipped;
		});
	};

	const handleReset = () => {
		setActiveStep(0);
	};

	const handleClose = () => {
		setOpen(false);
		setActiveStep(0);
		setSkipped(new Set<number>());
	};

	return (
		<Dialog onClose={handleClose} open={open}>
			<DialogTitle>How to Use?</DialogTitle>
			<Box sx={{ width: '100%', padding: '1em' }}>
				<Stepper activeStep={activeStep}>
					{steps.map((step, index) => {
						const stepProps: { completed?: boolean } = {};
						const labelProps: {
							optional?: React.ReactNode;
						} = {};
						if (isStepOptional(index)) {
							labelProps.optional = (
								<Typography variant='caption'>
									Optional
								</Typography>
							);
						}
						if (isStepSkipped(index)) {
							stepProps.completed = false;
						}
						return (
							<Step key={step.label} {...stepProps}>
								<StepLabel {...labelProps}>
									{step.label}
								</StepLabel>
							</Step>
						);
					})}
				</Stepper>
				{activeStep === steps.length ? (
					<React.Fragment>
						<Box sx={{ display: 'flex', flexDirection: 'column' }}>
							<img
								src='/logo512.png'
								alt='Shiryoku'
								style={{
									width: '30%',
									height: 'auto',
									margin: '1em auto',
								}}
							/>
							<Typography sx={{ mt: 2, mb: 1 }}>
								You've successfully seen how to use{' '}
								<b>Shiryoku</b>.
								<p>
									If there's any issues with the app, feel
									free to <Link to='/contact'>contact</Link>{' '}
									and improve this project
								</p>
							</Typography>
							<Counter />
						</Box>
						<Box
							sx={{
								display: 'flex',
								flexDirection: 'row',
								pt: 2,
							}}
						>
							<Box sx={{ flex: '1 1 auto' }} />
							<Button onClick={handleReset}>Reset</Button>
							<Button onClick={handleClose}>Close</Button>
						</Box>
					</React.Fragment>
				) : (
					<React.Fragment>
						{steps.map((step, index) => (
							<HowToUseInfo
								key={index}
								sx={{
									...(activeStep === index && {
										display: 'flex',
									}),
								}}
							>
								<img
									src={step.image}
									alt={step.label}
									loading='lazy'
								/>
								<Typography
									variant='body1'
									width='80%'
									mx='auto'
								>
									{step.text}
								</Typography>
							</HowToUseInfo>
						))}
						<Box
							sx={{
								display: 'flex',
								flexDirection: 'row',
								pt: 2,
							}}
						>
							<Button
								color='inherit'
								disabled={activeStep === 0}
								onClick={handleBack}
								sx={{ mr: 1 }}
							>
								Back
							</Button>
							<Box sx={{ flex: '1 1 auto' }} />
							{isStepOptional(activeStep) && (
								<Button
									color='inherit'
									onClick={handleSkip}
									sx={{ mr: 1 }}
								>
									Skip
								</Button>
							)}
							<Button onClick={handleNext}>
								{activeStep === steps.length - 1
									? 'Finish'
									: 'Next'}
							</Button>
						</Box>
					</React.Fragment>
				)}
			</Box>
		</Dialog>
	);
};

const HowToUseInfo = styled(Box)({
	display: 'none',
	width: '100%',
	alignItems: 'center',
	justifyContent: 'center',
	flexDirection: 'column',

	img: {
		width: '80%',
		margin: '1em auto',
		borderRadius: '4px',
	},
});

export default HowToUseDialog;
