
export const profileView = (req, res) => {
	res.render('profile', {
		user: {
			name: 'Andrey',
			age: 42
		}
	})
}
			
			
			