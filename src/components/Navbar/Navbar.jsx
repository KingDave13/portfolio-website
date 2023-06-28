import React, { useState } from 'react';
import './Navbar.css';
import { images } from '../../constants';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

const Navbar = () => {
	const [toggle, setToggle] = useState(false);

	return (
		<nav className='app__navbar'>
			<div className='app__navbar-logo'>
				<img className='image' src={images.logo} alt='logo' />
			</div>
			<ul className='app__navbar-links'>
				{[ 'Home', 'About Me', 'My Work', 'My Skills', 'Contact Me'].map((item) => (
					<li className='listed app__flex p-text' key={`link-${item}`}>
						<div className='item'/>
						<a className='navanchor' href={`#${item}`}>{item}</a>
					</li>
				))}
			</ul>

			<div className='app__navbar-menu'>
				<HiMenuAlt4 onClick={() => setToggle(true)}/>

				{toggle && (
		          <motion.div
		            whileInView={{ x: [300, 0] }}
		            transition={{ duration: 0.85, ease: 'easeOut' }}
		          >
		            <HiX onClick={() => setToggle(false)} />
		            <ul>
		              {['Home', 'About Me', 'My Work', 'My Skills', 'Contact Me'].map((item) => (
		                <li key={item}>
		                  <a href={`#${item}`} onClick={() => setToggle(false)}>
		                    {item}
		                  </a>
		                </li>
		              ))}
		            </ul>
		          </motion.div>
		        )}
			</div>
		</nav>
	)
}

export default Navbar; 