import React from 'react'

const NavigationDots = ({ active }) => {
	return (
		<div className='app__navigation'>
			{['Home', 'About Me', 'My Work', 'My Skills', 'Testimonials', 'Contact Me'].map((item, index) => (
	              <a 
		              href={`#${item}`} 
		              key={item + index}
		              className='app__navigation-dot'
		              style={active === item ? { backgroundColor: '#313BAC' } : { }}
	              />
	        ))}
		</div>
	)
}

export default NavigationDots;