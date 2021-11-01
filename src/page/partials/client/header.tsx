import React, { useState } from 'react'
import { RiAdminFill } from 'react-icons/ri';
import { FaSignInAlt } from 'react-icons/fa';
import { Select, MenuItem } from "@mui/material";
import { Link, RouteChildrenProps, withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { formStateUser } from 'redux/user/stateUser';
import Topic from './component/topic/topic';
import Upload from './component/upload/upload';
import { Logout } from "redux/user/actionUser";
//
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Menu from '@material-ui/core/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';

interface HeaderClient extends RouteChildrenProps {

}
const useStyles = makeStyles((theme) => ({
	grow: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		display: 'none',
		[theme.breakpoints.up('sm')]: {
			display: 'block',
		},
	},
	search: {
		position: 'relative',
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, 0.15),
		'&:hover': {
			backgroundColor: fade(theme.palette.common.white, 0.25),
		},
		marginRight: theme.spacing(2),
		marginLeft: 0,
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			marginLeft: theme.spacing(3),
			width: 'auto',
		},
	},
	searchIcon: {
		padding: theme.spacing(0, 2),
		height: '100%',
		position: 'absolute',
		pointerEvents: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		color: "aqua"
	},
	inputRoot: {
		color: '#b3ffff',
	},
	inputInput: {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('md')]: {
			width: '24rem',
		},
	},
	sectionDesktop: {
		display: 'none',
		[theme.breakpoints.up('md')]: {
			display: 'flex',
		},
	},
	sectionMobile: {
		display: 'flex',
		[theme.breakpoints.up('md')]: {
			display: 'none',
		},
	},
}));
const HeaderClient: React.FC<HeaderClient> = ({ ...props }) => {
  const state = useSelector<{ user: any }>(state => state.user) as formStateUser;
  const dispatch = useDispatch();
  const logOut = () => {
    dispatch(Logout());
    // props.history.replace('/signin');
  }
  const checkAdmin = () => {
    return (state.user.role >= 1) ? (
      <MenuItem value={20}>
        <Link to="/admin" className="link"><RiAdminFill className="_icon" /> Admin</Link>
      </MenuItem>
    ) : null
  }
  const checkUser = () => {
    return (
      <>
        <MenuItem value={10}>
          <span className="link" onClick={logOut}><FaSignInAlt className="_icon" />Sign out</span>
        </MenuItem>
        {checkAdmin()}
        <MenuItem value={10}>
          <Link to="/overview" className="link"><FaSignInAlt className="_icon" />Main Profile</Link>
        </MenuItem>
      </>
    )
  }
  const checkGuest = () => {
    return (
      <>
        <MenuItem value={10} onClick={handleMenuClose}>
          <Link to="/signin" className="link"><FaSignInAlt className="_icon" />Sign in</Link>
        </MenuItem>
      </>
    )
  }
  const classes = useStyles();
	const [anchorEl, setAnchorEl] = useState(null);
	const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

	const isMenuOpen = Boolean(anchorEl);
	const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

	const handleProfileMenuOpen = (event: any) => {
		setAnchorEl(event.currentTarget);
	};

	const handleMobileMenuClose = () => {
		setMobileMoreAnchorEl(null);
	};

	const handleMenuClose = () => {
		setAnchorEl(null);
		handleMobileMenuClose();
	};

	const handleMobileMenuOpen = (event: any) => {
		setMobileMoreAnchorEl(event.currentTarget);
	};

	const menuId = 'primary-search-account-menu';
	const renderMenu = (
		<Menu
			anchorEl={anchorEl}
			anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
			id={menuId}
			keepMounted
			transformOrigin={{ vertical: 'top', horizontal: 'right' }}
			open={isMenuOpen}
			onClose={handleMenuClose}
		>
            {(state.user && state.token) ? checkUser() : checkGuest()}
		</Menu>
	);
  const mobileMenuId = 'primary-search-account-menu-mobile';
	const renderMobileMenu = (
		<Menu
			anchorEl={mobileMoreAnchorEl}
			anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
			id={mobileMenuId}
			keepMounted
			transformOrigin={{ vertical: 'top', horizontal: 'right' }}
			open={isMobileMenuOpen}
			onClose={handleMobileMenuClose}
		>
			<MenuItem>
				<IconButton aria-label='show 4 new mails' color='inherit'>
					<Upload/>
				</IconButton>
				<div>Upload</div>
			</MenuItem>
			<MenuItem>
				<IconButton
					aria-label='show 11 new notifications'
					color='inherit'
				>
					<Topic/>
				</IconButton>
				<div>Topic</div>
			</MenuItem>
			<MenuItem onClick={handleProfileMenuOpen}>
				<IconButton
					aria-label='account of current user'
					aria-controls='primary-search-account-menu'
					aria-haspopup='true'
					color='inherit'
				>
					<AccountCircle />
				</IconButton>
				<div>Profile</div>
			</MenuItem>
		</Menu>
	);
  return (
	<div className="header_ui">
	<AppBar position='static' style={{background: "#222f44"}}>
		<Toolbar>
			<div className={classes.search}>
				<div className={classes.searchIcon}>
					<SearchIcon />
				</div>
				<InputBase
					placeholder='Nhập tên bài hát, nghệ sĩ hoặc MV...'
					classes={{
						root: classes.inputRoot,
						input: classes.inputInput,
					}}
					inputProps={{ 'aria-label': 'search' }}
				/>
			</div>
			<div className={classes.grow} />
			<div className={classes.sectionDesktop}>
				<IconButton
					aria-label='show 4 new mails'
					color='inherit'
				>
					<Upload />
       
				</IconButton>
				<IconButton
					aria-label='show 18 new notifications'
					color='inherit'
				>
					 <Topic />
				</IconButton>
				<IconButton
					edge='end'
					aria-label='account of current user'
					aria-controls={menuId}
					aria-haspopup='true'
					onClick={handleProfileMenuOpen}
					color='inherit'
				>
					<AccountCircle />
				</IconButton>
			</div>
			<div className={classes.sectionMobile}>
				<IconButton
					aria-label='show more'
					aria-controls={mobileMenuId}
					aria-haspopup='true'
					onClick={handleMobileMenuOpen}
					color='inherit'
				>
					<MoreIcon />
				</IconButton>
			</div>
		</Toolbar>
	</AppBar>
	{renderMobileMenu}
	{renderMenu}
</div>
  )
}

export default withRouter(HeaderClient as any)