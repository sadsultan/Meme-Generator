import React from 'react';
import './Meme.css';

export default function Meme(){
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        memeImage: "http://i.imgflip.com/1bij.jpg"
    });

    const [allMemes, setAllMemes] = React.useState([]);

    React.useEffect(() => {
        async function getMeme() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemes(data.data.memes)
        }
        getMeme()
    }, [])

    function newMeme(){
        const num = Math.floor(Math.random() * allMemes.length);
        const newUrl = allMemes[num].url;
        setMeme(prev => ({
                ...prev,
                memeImage: newUrl
            })
        )
    }

    function handleChange(event){
        const {name, value} = event.target;
        setMeme( prev =>({
                ...prev,
                [name]: value
            })
        )
    }

    return(
        <main>
            <div className='form'>
                <input type="text" placeholder='Top Text' className='form-input' 
                name='topText'
                value={meme.topText}
                onChange={handleChange}/>

                <input type="text" placeholder='Bottom Text' className='form-input' 
                name='bottomText'
                value={meme.bottomText}
                onChange={handleChange}/>

                <button type="button" className='form-button' onClick={newMeme}>Get a new meme image</button>
            </div>

            <div className='meme'>
                <img className='meme-img' src={meme.memeImage}/>
                <h2 className='top-text'>{meme.topText}</h2>
                <h2 className='bottom-text'>{meme.bottomText}</h2>
            </div>
        </main>
    )
}