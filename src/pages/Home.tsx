import { Banner, English, WhyChoose } from '../assets/images/index'


const Home = () => {
    return (
        <>
            <div style={{ backgroundImage: `url("${Banner}")` }}
                className={`relative overflow-hidden bg-cover bg-no-repeat p-12 text-center min-h-[740px] `} >
                <div className=' flex justify-start mt-48'>
                    <div className='w-1/2'>

                    </div>
                    <div className='w-1/2  justify-center items-center'>
                        <h1 className='text-6xl text-white'>Secure It Services  </h1>
                        <h2>What Is your purpose </h2>

                    </div>

                </div>


            </div>

            <div className=' flex justify-center '>
                <div className='w-1/2 flex p-20 gap-5 justify-center'>
                    <div className='bg-red-500 py-20 px-20 rounded-xl'>
                        <h1 className='text-2xl '>Digital Marketing  </h1>
                    </div>
                    <div className='bg-green-500 py-20 px-10 rounded-xl'>
                        <h1 className='text-2xl '>Web & Mobile Application </h1>

                    </div>
                </div>
                <div className='w-1/2 flex p-20 gap-5 '>
                    <div className='bg-red-500 rounded-xl py-20 px-10'>
                        <h1 className='text-2xl '>Serch Engine Optomization</h1>
                    </div>
                    <div className='bg-green-500 py-20 px-10 rounded-xl'>
                        <h1 className='text-2xl '> Google PPC & GMB Services </h1>

                    </div>

                </div>




            </div>
            <div className=' flex justify-start '>
                <div className='w-1/2'>

                    <img src={English} alt="Image" className='rounded-xl' />;

                </div>
                <div className='w-1/2  justify-center items-center px-10'>
                    <h2 className='text-xl'>About </h2>
                    <h1 className='text-5xl mt-4'>Secure It Services  </h1>
                    <p className='text-justify mt-4'>WordPress 6.2 is available to assist you if you want to advance your website. WordPress has improved its features and functionality with its most recent edition, giving webmasters more options. We will examine the new features and enhancements added in WordPress 6.2 and how they can open up fresh possibilities for the success of your website in this comprehensive tutorial.
                        The improved block editing experience in WordPress 6.2 is one of its strengths. With considerable updates, the block editor, often known as Gutenberg, has become even more user-friendly and straightforward. You can easily create aesthetically appealing and interesting content with a variety of block options, including text, photos, videos, galleries, and more. One of the highlights of WordPress 6.2 is the enhanced block editor experience.
                    </p>

                    <button className='px-10 py-3 bg-black text-white mt-10 rounded-md'> Read More </button>
                </div>

            </div>

            <div className=' flex justify-start '>

                <div className=' justify-center items-center text-center'>

                    <img src={Banner} alt="Image" />;

                </div>

            </div>
            <div className=' flex justify-start '>
                <div className='w-1/2 pl-10' >
                    <h2 className='text-xl'>Why Choose Us!</h2>
                    <h1 className='text-4xl mt-2'>why Choose Sds-Technologies? </h1>
                    <p className='text-justify mt-4'>WordPress 6.2 is available to assist you if you want to advance your website. WordPress has improved its features and functionality with its most recent edition, giving webmasters more options. We will examine the new features and enhancements added in WordPress 6.2 and how they can open up fresh possibilities for the success of your website in this comprehensive tutorial.
                        The improved block editing experience in WordPress 6.2 is one of its strengths. With considerable updates, the block editor, often known as Gutenberg, has become even more user-friendly and straightforward. You can easily create aesthetically appealing and interesting content with a variety of block options, including text, photos, videos, galleries, and more. One of the highlights of WordPress 6.2 is the enhanced block editor experience.
                    </p>
                    <p className='text-justify mt-4'>WordPress has improved its features and functionality with its most recent edition, giving webmasters more options. We will examine the new features and enhancements added in WordPress 6.2 and how they can open up fresh possibilities for the success of your website in this comprehensive tutorial.
                        You can easily create aesthetically appealing and interesting content with a variety of block options, including text, photos, videos, galleries, and more. One of the highlights of WordPress 6.2 is the enhanced block editor experience.
                    </p>

                </div>
                <div className='w-1/2  justify-center items-center text-center'>
                    <img src={WhyChoose} alt="Image" />;

                </div>

            </div>


        </>

    )
}

export default Home
