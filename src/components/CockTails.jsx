import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { cocktailLists, mockTailLists } from '../constants/navLink';

const CockTails = () => {
  useGSAP(() => {
	const parallaxTimeline = gsap.timeline({
	 scrollTrigger: {
		trigger: '#cocktails',
		start: 'top 30%',
		end: 'bottom 80%',
		scrub: true,
	 }
	})
	
	parallaxTimeline
	 .from('#c-left-leaf', {
		x: -100, y: 100
	})
	 .from('#c-right-leaf', {
		x: 100, y: 100
	})
 })
 return (
	<section id="cocktails" className="noisy">
	 <img src="/images/cocktail-left-leaf.png" alt="l-leaf" id="c-left-leaf" className='absolute left-0 md:bottom-0 md:top-auto -top-20 md:w-fit w-1/3'/>
	 <img src="/images/cocktail-right-leaf.png" alt="r-leaf" id="c-right-leaf" />
	 
	 <div className="list">
		<div className="popular">
		 <h2>Most popular cocktails:</h2>
		 
		 <ul>
			{cocktailLists.map(({ name, country, detail, price }) => (
			 <li key={name}>
				<div className="md:me-28">
				 <h3>{name}</h3>
				 <p>{country} | {detail}</p>
				</div>
				<span>- {price}</span>
			 </li>
			))}
		 </ul>
		</div>
		
		<div className="loved">
		 <h2>Most loved mocktails:</h2>
		 
		 <ul>
			{mockTailLists.map(({ name, country, detail, price }) => (
			 <li key={name}>
				<div className="me-28">
				 <h3>{name}</h3>
				 <p>{country} | {detail}</p>
				</div>
				<span>- {price}</span>
			 </li>
			))}
		 </ul>
		</div>
	 </div>
	</section>
 )
}

export default CockTails