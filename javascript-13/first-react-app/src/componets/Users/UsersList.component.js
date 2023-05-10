import React, { useEffect, useState } from 'react';
import './UsersList.css';

const URL = 'https://api.github.com/users';

function UserList(props) {
	const [data, setData] = useState([]);

	useEffect(() => {
	  fetch(URL)
        .then(res => res.json())
        .then(res => setData(res))
	  
	}, [])
	
	return (
		<div className="content">
			{data.map(user => (
                <div className="user" data-login={user.login}>
                <img src={user.avatar_url} alt="avatar" />
                <h2>{user.login}</h2>
            </div>
            ))}
		</div>
        

	)
}

export default UserList