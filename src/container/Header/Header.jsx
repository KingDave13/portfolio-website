import React from 'react';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import { AppWrap } from '../../wrapper';
import './Header.css';

const scaleVariants = {
	whileInView: {
		scale: [0, 1],
		opacity: [0, 1],
		transition: {
			duration: 1,
			ease: 'easeInOut'
		}
	}
}


const Header = () => {
	return (
		<div className='app__header app__flex'>
			<motion.div 
			whileInView={{ x: [-100, 0], opacity: [0, 1]}}
			transition={{ duration: 0.5 }}
			className='app__header-info'
			>
				<div className='app__header-badge'>
					<div className='badge-cmp app__flex'>
						<span>👋</span>
						<div style={{ marginLeft: 20 }}>
							<p className='p-text'>Hello, I am</p>
							<h1 className='head-text'>David</h1>
						</div>
					</div>

					<div className='tag-cmp app__flex'>
						<p className='p-text'>Full Stack Developer</p>
						<p className='p-text'><span className='small'>(mostly <span className='exc'>PERN</span> stack)</span></p><br/>
						<p className='p-text'>Graphic/Motion/Brand Designer</p>
						<p className='p-text'><span className='small'>and whatever else <span className='exc'>I</span>'m called</span></p>
					</div>
				</div>
			</motion.div>

			<motion.div whileInView={{ opacity: [0, 1]}}
			transition={{ duration: 0.5, delayChildren: 0.5 }}
			className='app__header-img'
			>
				<img src={images.profile} alt='profile_bg' />
				<motion.img 
				whileInView={{ scale: [0, 1]}}
				transition={{ duration: 0.5, ease: 'easeInOut' }}
				src={images.circle} alt='profile_circle'
				className='overlay_circle'
				/>
			</motion.div>

			<motion.div
			variant={scaleVariants}
			whileInView={scaleVariants.whileInView}
			className='app__header-circles'
			>
				{[images.node, images.react, images.postgres].map((circle, index) => (
					<div className='circle-cmp app__flex' key={`circle-${index}`}>
						<img src={circle} alt='circle' />
					</div>
				))}
			</motion.div>
		</div>
	)
}

export default AppWrap(Header, 'Home');