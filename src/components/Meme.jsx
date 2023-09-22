import React from 'react';
import PropTypes from 'prop-types';
import './Meme.css';

export default function Meme(){
    const [meme, changeMeme] = React.useState('www.google.com/meme.jpg');

    function newMeme(){
        changeMeme(() => `www.google.com/meme${Math.floor(Math.random() * 8)}.jpg`)
    }

    return(
        <main>
            <div className='form'>
                <input type="text" placeholder='Top Text' className='form-input' />
                <input type="text" placeholder='Bottom Text' className='form-input' />
                <button type="button" className='form-button' onClick={newMeme}>Get a new meme image 🖼</button>
            </div>
            <MemeImage meme={meme} />
        </main>
    )
}

function MemeImage(props){
    console.log(props.meme);
    if (!props.meme) throw new Error('Error in finding meme');
    console.log(props.meme);
    return(
        <a href={props.meme} target='_blank' rel='noopener noreferrer'>
            <img src={props.meme} alt='meme' className='meme-image' />
        </a>
    )

}

// Could be avoided with typescript :( 
MemeImage.propTypes = {
    meme: PropTypes.string.isRequired
}