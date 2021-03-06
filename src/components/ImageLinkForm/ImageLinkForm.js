import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = ( {onInputChange, onButtonSubmit} ) => {
	return (
	<div>
		<p className= 'f3'>
			{'This Face Recognition App will detect faces in your pictures. Give it a try!'}
		</p>
		<div className='center'>
			<div className='form pa4 br3 shadow-5 center'>
				<input className= 'f4 pa2 w-70 bn center' type='text' onChange={onInputChange} />
				<button 
					className= 'w-30 grow f4 link ph3 pv2 dib bn bg-gold' 
					onClick={onButtonSubmit}
				>Detect</button>
			</div>
		</div>
	</div>
	);
}

export default ImageLinkForm;