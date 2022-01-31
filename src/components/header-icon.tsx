import { IconButton } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import React from 'react';
import DropdownMenu from './header-menu';

const MenuIcon = (props : any) => {
	const {columnName,column, allColumns, toggleSortBy} = props;
	console.log('column', column);
	const [open, setOpen] = React.useState(false);
	const anchorRef = React.useRef<HTMLButtonElement>(null);

	const handleClose = (event: Event | React.SyntheticEvent) => {
		if (
			anchorRef.current &&
		anchorRef.current.contains(event.target as HTMLElement)
		) {
			return;
		}
  
		setOpen(false);
	};

	const handleToggle = () => {
		setOpen((prevOpen : any) => !prevOpen);
	};

	function handleListKeyDown(event: React.KeyboardEvent) {
		event.stopPropagation();
		if (event.key === 'Tab') {
			event.preventDefault();
			setOpen(false);
		} else if (event.key === 'Escape') {
			setOpen(false);
		}
	}

	return (
		<>
			<IconButton
				ref={anchorRef}
				id="composition-button"
				aria-controls={open ? 'composition-menu' : undefined}
				aria-expanded={open ? 'true' : undefined}
				aria-haspopup="true"
				onClick={handleToggle}
			>
				<KeyboardArrowDownIcon />
			</IconButton>
			<DropdownMenu 
				open = {open}
				anchorRef={anchorRef}
				handleClose = {handleClose}
				handleListKeyDown = {handleListKeyDown}
				allColumns = {allColumns}
				columnName = {columnName}
				column = {column}
				toggleSortBy={toggleSortBy}
			/>
		</>
	);
};

export default MenuIcon;
