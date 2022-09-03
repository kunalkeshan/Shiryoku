/**
 * Navigation Item
 */

import React, { FC, PropsWithChildren } from 'react';
import { useNavigate } from 'react-router-dom';

import {
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	styled,
} from '@mui/material';

interface NavigationItemProps extends PropsWithChildren {
	name: string;
	nav?: string;
	link?: string;
	icon?: any;
	currentPage: string;
	open: boolean;
}

const NavigationItem: FC<NavigationItemProps> = (props) => {
	const navigate = useNavigate();

	const buttonStyling =
		props?.nav && props?.nav === props.currentPage
			? {
					justifyContent: props.open ? 'initial' : 'center',
					backgroundColor: '#90caf9',
			  }
			: {
					justifyContent: props.open ? 'initial' : 'center',
			  };

	const iconStyling =
		props?.nav && props?.nav === props.currentPage
			? {
					mr: props.open ? 3 : 'auto',
					// TODO: Add icon styling later
			  }
			: {
					mr: props.open ? 3 : 'auto',
			  };

	const handleNavigate = ({ link, nav }: { link?: string; nav?: string }) => {
		if (link) {
			window.open(link, '_blank');
		} else {
			navigate(nav || '');
		}
	};

	return (
		<ListItem key={props.name} disablePadding sx={{ display: 'block' }}>
			<Button
				sx={buttonStyling}
				onClick={() =>
					handleNavigate({ link: props?.link, nav: props?.nav })
				}
			>
				<Icon sx={iconStyling}>{props.icon}</Icon>
				<ListItemText
					primary={props.name}
					sx={{ opacity: props.open ? 1 : 0 }}
				/>
			</Button>
		</ListItem>
	);
};

const Button = styled(ListItemButton)({
	minHeight: 48,
	px: 2.5,
});

const Icon = styled(ListItemIcon)({
	minWidth: 0,
	justifyContent: 'center',
});

export default NavigationItem;
