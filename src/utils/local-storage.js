function setUserLoggedIn(loggedIn) {
	localStorage.setItem('user', loggedIn ? 'true' : 'false');
}

function isUserLoggedIn() {
	const userString = localStorage.getItem('user');
	return userString === 'true';
}

export { setUserLoggedIn, isUserLoggedIn };
