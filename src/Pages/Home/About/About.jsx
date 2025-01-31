import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
   
    return (
        <div>
            <div className="hero  h-[560px]">
                <div className="hero-content flex-col lg:flex-row ">
                    <div className='lg:w-1/2 relative h-full'>
                        <img
                            src={person}
                            className="w-3/4 rounded-lg shadow-2xl " />
                        <img
                            src={parts}
                            className="w-1/2 rounded-lg shadow-2xl absolute right-5 top-1/2
                            border-8 border-white
                            " />
                    </div>
                    <div className='w-1/2 space-y-4'>
                        <h3 className='text-[#FF3811] text-xl font-bold'>About Us</h3>
                        <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                        <p className="py-6">
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.
                        </p>
                        <p>the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                        <button className="btn btn-warning ">Get More Info</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;