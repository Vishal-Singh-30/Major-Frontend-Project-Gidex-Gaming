import React from 'react'
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import Button from './Button.jsx';
import { TiLocationArrow } from 'react-icons/ti';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger); // register ScrollTrigger



const Hero = () => {

    // useState to track the index of mini video which is playing currently
    const [currentIndex, setCurrentIndex] = useState(1);

    // useState to track if user has clicked ?
    const [hasClicked, setHasClicked] = useState(false);

    // useState for loading 
    const [isLoading, setIsLoading] = useState(true);

    // useState for number of video that has loaded Videos
    const [loadedVideos, setLoadedVideos] = useState(0);

    // create a varible for number of total video you want to play in mini player 
    const totalVideos = 4;

    // we need to create ref to target the mini player in which video will play
    // we use ref to target a specific element in the DOM
    const nextVideoRef = useRef(null);


    // function to handle video load
    const handleVideoLoad = () => {
        setLoadedVideos((prev) => prev + 1);
    }


    const upcomingVideoIndex = (currentIndex % totalVideos) + 1;

    // function to handle mini video player Click
    const handleMiniVdClick = () => {
        console.log("clicked")
        console.log(getVideoSrc(0))
        setHasClicked(true);
        setCurrentIndex(upcomingVideoIndex); // we will use modulo operation to loop the video index from 1 to 4.


    }


    // useEFFECT to know that the video has been loaded
    useEffect(()=>{
        if(loadedVideos === totalVideos-1){
            setIsLoading(false);
        }
    },[loadedVideos])


    // gsap animation for mini player zoom in zoom out effect.
    useGSAP(()=>{
        if(hasClicked){
            gsap.set('#next-video', {visibility: 'visible'})

            gsap.to('#next-video', {
                transformOrigin: 'center center',
                scale: 1,
                width: '100%',
                height: '100%',
                duration: 1,
                ease: 'power1.inOut',
                onStart:()=> nextVideoRef.current.play(),
                
            })
            gsap.from('#current-video', {
                transformOrigin: 'center center',
                scale: 0,
                duration: 1.5,
                ease: 'power1.inOut',
            })
        }
    }, {dependencies:  [currentIndex], revertOnUpdate: true}) // dependencies will run when currentIndex changes
    // revert to the start on update


    useGSAP(()=>{
        gsap.set('#video-frame', {
            clipPath: 'polygon(14% 0%, 72% 0%, 90% 90%, 0% 100%)',
            borderRadius: '0 0 40% 10%',

        })
        gsap.from('#video-frame', {
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            borderRadius: '0 0 0 0',
            ease: 'power1.inOut',
            scrollTrigger: {
                trigger: '#video-frame',
                start: 'center center',
                end: 'bottom center',
                scrub: true,
            }
        })
    })


    // function to get video src based on index
    const getVideoSrc = (index) => {
        return `/videos/hero-${index}.mp4`;
    }


    return (
        <div className='relative h-dvh w-screen overflow-x-hidden'>
            {isLoading && (
                <div className='flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-violet-50'>
                   <div className='three-body'>
                    <div className='three-body__dot'></div>
                    <div className='three-body__dot'></div>
                    <div className='three-body__dot'></div>
                    </div> 
                </div>
            )}
            <div id='video-frame' className='relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75' >
                <div>
                    <div className='mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg'>
                        <div onClick={handleMiniVdClick} className='origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100'>
                            <video ref={nextVideoRef} src={getVideoSrc(upcomingVideoIndex)} loop muted id='current-video' className='size-64 origin-center scale-150 object-cover object-center' 
                            onLoadedData={handleVideoLoad} />
                        </div>
                    </div>
                    <video ref={nextVideoRef} src={getVideoSrc(currentIndex)} loop muted id='next-video' 
                    className='absolute-center invisible absolute z-20 size-64 origin-center object-cover object-center' 
                    onLoadedData={handleVideoLoad}
                    />
                    {/* zoom in effect */}
                    <video src={getVideoSrc(currentIndex === totalVideos-1 ? 1 : currentIndex)}
                    autoPlay loop muted 
                    className='absolute left-0 top-0 size-full object-cover object-center'
                    onLoadedData={handleVideoLoad}
                    />
                </div>
                <h1 className='special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75'>V<b>A</b>L<b>O</b>RANT</h1>
                <div className='absolute left-0 top-0 z-40 size-full'>
                    <div className='mt-24 px-5 sm:px-10'>
                        <h1 className='special-font hero-heading text-blue-100'>GI<b>D</b>E<b>O</b>N<b>X</b></h1>
                        <p className='mb-5 max-w-72 font-robert-regular text-blue-100'>A 5v5 character-based tactical shooter <br />
                        DEFY THE LIMITS</p>
                        <Button src="https://youtu.be/e_E9W2vsRbQ?si=uy_yPkEO9tIGAS22" id='watch-trailer' title='Watch Trailer' leftIcon={<TiLocationArrow />} containerClass='!bg-yellow-300 flex-center gap-1 z-150'/>
                    </div>
                </div>
            </div>
            <h1 className='special-font hero-heading absolute bottom-5 right-5  text-black'>V<b>A</b>L<b>O</b>RANT</h1>
        </div>
    )
}

export default Hero