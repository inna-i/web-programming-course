import { NavLink } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodeBranch, faUser, faUsers, faLink } from '@fortawesome/free-solid-svg-icons';

const menuItems = [{
    label: 'Repositories',
    icon: faCodeBranch,
    path: '/repositories'
}, {
    label: 'Followers',
    icon: faUsers,
    path: '/followers'
}, {
    label: 'Subscribtions',
    icon: faLink,
    path: '/subscribtions'
}, {
    label: 'About',
    icon: faUser,
    path: '/about'
}] 

export default function SideMenu() {

	return (
		<ul>
			{menuItems.map((item, index) => (
                <li key={`menu-item-${index}`} className="nav-item">
                    <NavLink className="nav-link" to={item.path}>
                        <i className="nav-icon">
                            <FontAwesomeIcon icon={item.icon} />
                        </i>
                        {item.label}
                    </NavLink>
                </li>
            ))}
		</ul>
	)
}