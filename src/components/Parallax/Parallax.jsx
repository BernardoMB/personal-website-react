import { useState } from 'react';
import styles from './Parallax.module.css'
import styled from 'styled-components'

const IMAGES = [
    "https://media.lmpm.website/uploads/sites/18/2023/07/Untitled-design-2023-08-10T093341.090.png",
    "https://cms.accuweather.com/wp-content/uploads/2017/05/sunset.jpg?w=1024",
    "https://upload.wikimedia.org/wikipedia/commons/5/58/Sunset_2007-1.jpg",
    "https://www.popsci.com/uploads/2018/12/10/QKOPUFKJMVV7JE2YNBCV2FILFQ.jpg?auto=webp"
];

const IMAGE_DURATION = 3

const Image = styled.div`
    animation: ${styles['crossFade']} ${(props) => {
        return props.totalimages * IMAGE_DURATION
    }}s infinite;
    & p {
        color: red; /* This will target all child p elements of Image */
    }
`

export function Parallax({
    firstName,
    alias,
    lastName,
    arrowDownSvg,
    theme,
    appBackgroundColor = 'white',
    ...props // Forwarded props
}) {
    let [count, setCount] = useState(0);
    setTimeout(() => {
        let element = document.querySelector('#parallax-container')
        //console.log('Child nodes', element.parentElement.childNodes)
        element.parentElement.childNodes.forEach((sibiling) => {
            if (sibiling.style && sibiling.id !== 'parallax-container') {
                sibiling.style.backgroundColor = appBackgroundColor
            }
        })
    }, 0);
    return (
        <>
            <link href="https://fonts.googleapis.com/css?family=Montserrat:400|Josefin+Sans:regular|Lato:300|Pathway+Gothic+One:regular|Pinyon+Script:regular" rel="stylesheet" type="text/css"></link>
            <div {...props}></div>
            <section id="parallax-container" className={styles['parallax-container']}>
                <div className={styles['parallax']}>
                    <div className={`${styles['parallax-element']}`}>
                        <div className={`${styles['crossfade-wrapper']} ${styles['fadein-on-page-load']}`}>
                            {IMAGES.map((img, index) => {
                                const animationDelay = (((index + 1) * IMAGE_DURATION - IMAGES.length) * -1) + IMAGES.length * IMAGE_DURATION - IMAGE_DURATION -1
                                const style = {backgroundImage: `url(${img})`, animationDelay: animationDelay + 's' }
                                return <Image key={index} 
                                    className={`${styles['fixed-background-image']}`} 
                                    style={style}
                                    totalimages={IMAGES.length}>
                                </Image>
                            })}
                            <div className={styles['background-image-overlay']}></div>
                        </div>
                    </div>
                    <div className={styles['parallax-content']}>
                        <div className={styles['card']}>
                            <div className={styles['card-container']}>
                                <div className={styles['artist-name']}>
                                    {alias} {lastName}
                                </div>
                                <div className={styles["instructions"]}>
                                    <div className={styles["instructions-text"]}>scroll to browse site</div>
                                    <div className={styles['arrow']}>
                                        {/* Don't include images like this because they may not work when the site is deployed*/}
                                        {/* <img src='src/assets/arrow-down.svg'/> */}
                                        {/* Import the image using a relative file path */}
                                        {/* <img src={arrowDownSvg} /> */}
                                        {/* A third option is to use just the svg code directly in the template */}
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M41.5,158c0-4.45,1.11-8.9,4.45-12.23a16.12,16.12,0,0,1,23.35,0L257.22,333.7,445.14,145.78a16.51,16.51,0,1,1,23.35,23.35l-199,199a16.12,16.12,0,0,1-23.35,0l-200.15-199A14.28,14.28,0,0,1,41.5,158Z"></path></svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}