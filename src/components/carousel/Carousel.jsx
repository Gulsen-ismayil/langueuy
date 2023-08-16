import { useCallback,useState,useEffect } from 'react'
import { slideShowList } from '../../data'
import './Carousel.css'

function Carousel() {
    const [activeIndex, setActiveIndex] = useState(0)

    const next = useCallback(() => {
      const nextIndex = (activeIndex + 1) % slideShowList.length
      setActiveIndex(nextIndex)
    },[activeIndex])

    useEffect(() => {
        const intervalId = setInterval(() => {
            next()
        },4000)
        return () => clearInterval(intervalId)
    },[activeIndex,next])

    const renderedSlide = slideShowList.map((slide,index) => {
        return (
            <div key={slide.id} className='carousel-item' >
                <div className="slide-image">
                    <img src={slide.picture} alt={slide.title} />
                </div>
            </div>
        )
    })

    return (
        <div className="carousel">
            <div className="carousel-inner">{renderedSlide}</div>
        </div>
    )
}

export default Carousel