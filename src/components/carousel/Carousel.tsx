import { useState } from "react";

interface CarouselProps {
    items: string[]
}

const Carousel = ({ items }: CarouselProps) => {
    const [current, setCurrent] = useState<number>(0);

    const changeCurrent = (next: boolean) => {
        const newSlide = next ? current + 1 : current - 1;
        
        if(newSlide < items.length && newSlide >= 0) {
            setCurrent(newSlide);
        } else if(newSlide >= items.length) {
            setCurrent(0);
        } else {
            setCurrent(items.length - 1);
        }
    }
    return (
        <>
        <div className="carousel">
            <div className="carousel__container" style={{transform: `translateX(-${current * 100}%)`}}>
                {items.map((item) =>
                    <span className="carousel__item">
                        <img src={item} alt="" />
                    </span>
                )}
            </div>
        </div>
        <div className="controls">
            <i className='bx bxs-chevron-left' onClick={() => changeCurrent(false)} />
            <div className="controls__dots">
                {items.map((item, index) =>
                    <span className={`controls__dot ${current === index ? 'controls__dot--active' : ''}`} />
                )}
            </div>
            <i className='bx bxs-chevron-right' onClick={() => changeCurrent(true)} />
        </div>
        </>
    )
}

export default Carousel;