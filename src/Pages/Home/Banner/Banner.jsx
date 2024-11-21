import img1 from '../../../assets/images/banner/1.jpg'
import img2 from '../../../assets/images/banner/2.jpg'
import img3 from '../../../assets/images/banner/3.jpg'
import img4 from '../../../assets/images/banner/4.jpg'
import img5 from '../../../assets/images/banner/5.jpg'
import img6 from '../../../assets/images/banner/6.jpg'


const Banner = () => {
    return (
        <div className="carousel w-full h-[600px]">
            {/* SLide 1 */}
            <div id="slide1" className="carousel-item relative w-full">
                <img
                    src={img1}
                    className="w-full rounded-xl" />
                {/* banner text */}
                <div className="absolute bottom-0 left-0  gap-5 h-full flex items-center
                    bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] rounded-xl ">
                    <div className='text-white space-y-8 w-[550px] pl-24'>
                        <h2 className='text-6xl font-bold leading-[74px]'>Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                        <div className=''>
                            <button className="btn btn-primary mr-5">Discover Mor</button>
                            <button className="btn btn-outline text-white border-white">Latest Projects</button>
                        </div>
                    </div>
                </div>
                {/* slide change arrows */}
                <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end gap-5">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            {/* slide 2 */}
            <div id="slide2" className="carousel-item relative w-full">
                <img
                    src={img2}
                    className="w-full rounded-xl" />
                {/* banner text */}
                <div className="absolute bottom-0 left-0  gap-5 h-full flex items-center
                    bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] rounded-xl">
                    <div className='text-white space-y-8 w-[550px] pl-24'>
                        <h2 className='text-6xl font-bold leading-[74px]'>Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                        <div className=''>
                            <button className="btn btn-primary mr-5">Discover Mor</button>
                            <button className="btn btn-outline text-white border-white">Latest Projects</button>
                        </div>
                    </div>
                </div>
                                {/* slide change arrows */}
                <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end gap-5">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            {/* slide 3 */}
            <div id="slide3" className="carousel-item relative w-full">
                <img
                    src={img3}
                    className="w-full rounded-xl" />
                {/* banner text */}
                <div className="absolute bottom-0 left-0  gap-5 h-full flex items-center
                    bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] rounded-xl">
                    <div className='text-white space-y-8 w-[550px] pl-24'>
                        <h2 className='text-6xl font-bold leading-[74px]'>Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                        <div className=''>
                            <button className="btn btn-primary mr-5">Discover Mor</button>
                            <button className="btn btn-outline text-white border-white">Latest Projects</button>
                        </div>
                    </div>
                </div>
                 {/* slide change arrows */}
                <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end gap-5">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            {/* slide 4 */}
            <div id="slide4" className="carousel-item relative w-full">
                <img
                    src={img4}
                    className="w-full rounded-xl" />
                {/* banner text */}
                <div className="absolute bottom-0 left-0  gap-5 h-full flex items-center
                    bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] rounded-xl">
                    <div className='text-white space-y-8 w-[550px] pl-24'>
                        <h2 className='text-6xl font-bold leading-[74px]'>Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                        <div className=''>
                            <button className="btn btn-primary mr-5">Discover Mor</button>
                            <button className="btn btn-outline text-white border-white">Latest Projects</button>
                        </div>
                    </div>
                </div>
                 {/* slide change arrows */}
                <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end gap-5">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide5" className="btn btn-circle">❯</a>
                </div>
            </div>
            {/* slide 5 */}
            <div id="slide5" className="carousel-item relative w-full">
                <img
                    src={img5}
                    className="w-full rounded-xl" />
                {/* banner text */}
                <div className="absolute bottom-0 left-0  gap-5 h-full flex items-center
                    bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] rounded-xl">
                    <div className='text-white space-y-8 w-[550px] pl-24'>
                        <h2 className='text-6xl font-bold leading-[74px]'>Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                        <div className=''>
                            <button className="btn btn-primary mr-5">Discover Mor</button>
                            <button className="btn btn-outline text-white border-white">Latest Projects</button>
                        </div>
                    </div>
                </div>
                 {/* slide change arrows */}
                <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end gap-5">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide6" className="btn btn-circle">❯</a>
                </div>
            </div>
            {/* slide 6 */}
            <div id="slide6" className="carousel-item relative w-full">
                <img
                    src={img6}
                    className="w-full rounded-xl" />
                {/* banner text */}
                <div className="absolute bottom-0 left-0  gap-5 h-full flex items-center
                    bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] rounded-xl">
                    <div className='text-white space-y-8 w-[550px] pl-24'>
                        <h2 className='text-6xl font-bold leading-[74px]'>Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                        <div className=''>
                            <button className="btn btn-primary mr-5">Discover Mor</button>
                            <button className="btn btn-outline text-white border-white">Latest Projects</button>
                        </div>
                    </div>
                </div>
                 {/* slide change arrows */}
                <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end gap-5">
                    <a href="#slide5" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;