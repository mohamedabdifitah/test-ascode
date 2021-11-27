import SettingsIcon from '@mui/icons-material/Settings';
import {MdColorLens} from "react-icon/md";
import NotificationsIcon from '@mui/icons-material/Notifications';
import {Avatar,AvatarGroup} from '@material-ui/core';
/*
import Avatar from '@mui/material/';
*/
/*
 *
 * ****export All the  menus Avaialbe in Ascode Software *****
 *
 */
 var menu = [
	{
		"name":"Setting",
		"icon":SettingsIcon,
		"onclick":"hh"


	},
	{
		"name":"Theme",
		"icon":MdColorLens,
		"onclick":"hh"
	},
	{
		"name":"Notification",
		"icon":NotificationsIcon,
		"onclick":"hh"

	},
	{
		"name":"Status",
		"icon":Avatar,
		/*
		"icon":{
			"parent":AvatarGroup,
			"child":Avatar

		},
		*/
		"onclick":"hh"

	}

]

export default menu
