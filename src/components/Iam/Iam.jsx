
import { Phrase, Phrase2 } from "../Phrase"
import './Iam.css'

export function Iam({phrases, personalInfo}) {
    return (
        <div className='iam'>
            <div className='iam-container'>
                <div className='top'>
                <div className='left'>
                    <div>Img goes here!!!</div>
                    <div>hhhhey</div>
                </div>
                <div className='right'>
                    <div>I am {personalInfo.alias}</div>
                    <Phrase2 phrase='Photographer of all love, colors and cultures.'></Phrase2>
                    <Phrase {...phrases[1]}></Phrase>
                    <Phrase2 {...phrases[2]}></Phrase2>
                </div>
                </div>
                <div className='bottom'>
                <div className='left'>
                    <div>
                    Central Pennsylvania based
                    </div>
                    <div>Photographer</div>
                </div>
                <div className='right'>
                    <div className='navigate-element' onClick={() => {
                    alert('Implement navigation')
                    }}>
                    Go to know more
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}
