import React, { useState } from 'react';

const Blogs: React.FC = () => {
    const [expanded1, setExpanded1] = useState(false);
    const [expanded2, setExpanded2] = useState(false);
    const [expanded3, setExpanded3] = useState(false);

    const toggleExpansion1 = () => {
        setExpanded1(!expanded1);
        setExpanded2(false);
        setExpanded3(false);
    };

    const toggleExpansion2 = () => {
        setExpanded2(!expanded2);
        setExpanded1(false);
        setExpanded3(false);
    };

    const toggleExpansion3 = () => {
        setExpanded3(!expanded3);
        setExpanded1(false);
        setExpanded2(false);
    };


    return (
        <div className="max-w-6xl mx-auto bg-gradient-to-r from-[#0a192f] to-[#0a192f] hover:to-[#1a2f4f] rounded-lg p-4 sm:p-6 md:p-8 shadow-2xl relative transition duration-500 ease-in-out transform hover:scale-100 hover:translate-y-1" id="blogs">
            <section className="flex flex-col sm:flex-row justify-center items-start space-y-6 sm:space-y-0 sm:space-x-6 md:space-x-8">
                <div className="flex-1">
                    <h2 className="text-[#64ffda] text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
                    <div className='text-center sm:text-left'>
                        <span className="text-white">Blogs</span>
                        </div>
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                        Explore a curated collection of my favorite poems.
                    </p>
                    <div className="h-6" />
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                        {/* Box 1 */}
                        <div className={`bg-gradient-to-r from-[#112240] to-[#0a192f] rounded-lg p-4 sm:p-6 shadow-xl relative transition duration-500 ease-in-out transform hover:scale-105 hover:bg-gradient-to-r hover:from-[#0e1a32] hover:to-[#112240] ${expanded1 ? 'h-auto' : 'h-[21rem] sm:h-[24rem] lg:h-[26rem]'} sm:mx-8 lg:mx-auto max-w-md`}>
                            <h3 className="text-[#64ffda] text-center text-lg sm:text-xl lg:text-xl font-bold mb-4">Sunset</h3>
                            <div className="text-[#ccd6f6] pb-10">
                                <p className="text-sm mb-4">
                                    As the day gently fades with whispered sighs, <br />
                                    And the sky in evening's colors lies, <br />
                                    Some find solace in twilight's warm embrace, <br />
                                    While others grapple with a different face.
                                </p>
                                <p className="text-sm mb-4">
                                    The sky, a canvas of vibrant hue, <br />
                                    A reminder for some of their deep blues, <br />
                                    Dreams unfulfilled, aspirations astray, <br />
                                    In sunset's glow, they silently sway.
                                </p>
                                {expanded1 ? (
                                    <>
                                        <p className="text-sm mb-4">
                                            Yearning for connection, warmth, and light, <br />
                                            Amidst the crowd, feeling lost in the fight, <br />
                                            The sunset's beauty sparks dreams anew, <br />
                                            Yet doubts creep in, tearing at what's true.
                                        </p>
                                        <p className="text-sm mb-4">
                                            Gratitude, a virtue, hard to find, <br />
                                            Beneath beauty, life's trials entwined, <br />
                                            Loneliness lurking in shadows near, <br />
                                            In dusk's embrace, longing is clear.
                                        </p>
                                        <p className="text-sm mb-4">
                                            Mental battles hidden, fears untold, <br />
                                            In twilight's quiet, they take hold, <br />
                                            Entwining with sunset's warm embrace, <br />
                                            Revealing stories in shared grace.
                                        </p>
                                        <button
                                            className="absolute right-0 bottom-0 mb-4 mr-4 sm:mr-5 px-4 sm:px-5 py-2 bg-transparent hover:bg-[#0a192f] hover:text-teal-500 font-semibold text-[#64ffda] rounded-md border border-[#64ffda] transition duration-300 focus:outline-none focus:ring-2 focus:ring-[#64ffda]"
                                            onClick={toggleExpansion1}
                                        >
                                            View Less
                                        </button>
                                    </>
                                ) : (
                                    <button
                                        className="absolute right-0 bottom-0 mb-4 mr-4 sm:mr-5 px-4 sm:px-5 py-2 bg-transparent hover:bg-[#0a192f] hover:text-teal-500 font-semibold text-[#64ffda] rounded-md border border-[#64ffda] transition duration-300 focus:outline-none focus:ring-2 focus:ring-[#64ffda]"
                                        onClick={toggleExpansion1}
                                    >
                                        continue..
                                    </button>
                                )}
                            </div>
                        </div>

                        {/* Box 2 */}
                        <div className={`bg-gradient-to-r from-[#112240] to-[#0a192f] rounded-lg p-4 sm:p-6 shadow-xl relative transition duration-500 ease-in-out transform hover:scale-105 hover:bg-gradient-to-r hover:from-[#0e1a32] hover:to-[#112240] ${expanded2 ? 'h-auto' : 'h-[21rem] sm:h-[24rem] lg:h-[26rem]'} sm:mx-8 lg:mx-auto max-w-md`}>
                            <h3 className="text-[#64ffda] text-center text-lg sm:text-xl lg:text-xl font-bold mb-4">Sailing Life's Shifting Seas.</h3>
                            <div className="text-[#ccd6f6] pb-10">
                                <p className="text-sm mb-4">
                                    In a bustling Nepal Yatayat shuttle's gleam, <br />
                                    I glimpsed a girl, lost in a texting stream.<br />
                                    In a group "Best Friend Forever", her voice found sway,<br />
                                    A moment shared, life's ballet, in its play.
                                </p>
                                <p className="text-sm mb-4">
                                    In my mind's vast expanse, a thought took flight,<br />
                                    "Does 'forever' truly endure, or vanish from sight?"<br />
                                    Memories danced, like reels of old,<br />
                                    In groups we typed, our stories told.
                                </p>
                                {expanded2 ? (
                                    <>
                                        <p className="text-sm mb-4">
                                            "Best Fellows Forever," our joyful decree,<br />
                                            Sharing laughs, memes, in harmonious spree.<br />
                                            Intentions pure, to brighten each day,<br />
                                            Through giggles and grins, troubles kept at bay.
                                        </p>
                                        <p className="text-sm mb-4">
                                            But time sweeps on, change its constant call,<br />
                                            In memories, we cherish, life's rise and fall.<br />
                                            From laughter-filled moments, to life's grand quest,<br />
                                            We journey together, in trial and test.
                                        </p>
                                        <p className="text-sm mb-4">
                                            In today's whirlwind, schedules tight and grand,<br />
                                            Seeking purpose, in life's shifting sand.<br />
                                            No blame to assign, for the natural drift,<br />
                                            As priorities shift, and perspectives lift.
                                        </p>
                                        <p className="text-sm mb-4">
                                            Good memories sacrificed, as new paths we tread,<br />
                                            A bittersweet choice, life's dance we wed.<br />
                                            Yet, let's not forget, those moments so free,<br />
                                            For they shape who we are, in life's grand decree.
                                        </p>
                                        <button
                                            className="absolute right-0 bottom-0 mb-4 mr-4 sm:mr-5 px-4 sm:px-5 py-2 bg-transparent hover:bg-[#0a192f] hover:text-teal-500 font-semibold text-[#64ffda] rounded-md border border-[#64ffda] transition duration-300 focus:outline-none focus:ring-2 focus:ring-[#64ffda]"
                                            onClick={toggleExpansion2}
                                        >
                                            View Less
                                        </button>
                                    </>
                                ) : (
                                    <button
                                        className="absolute right-0 bottom-0 mb-4 mr-4 sm:mr-5 px-4 sm:px-5 py-2 bg-transparent hover:bg-[#0a192f] hover:text-teal-500 font-semibold text-[#64ffda] rounded-md border border-[#64ffda] transition duration-300 focus:outline-none focus:ring-2 focus:ring-[#64ffda]"
                                        onClick={toggleExpansion2}
                                    >
                                        continue..
                                    </button>
                                )}
                            </div>
                        </div>

                        {/* Box 3 */}
                        <div className={`bg-gradient-to-r from-[#112240] to-[#0a192f] rounded-lg p-4 sm:p-6 shadow-xl relative transition duration-500 ease-in-out transform hover:scale-105 hover:bg-gradient-to-r hover:from-[#0e1a32] hover:to-[#112240] ${expanded3 ? 'h-auto' : 'h-[21rem] sm:h-[24rem] lg:h-[26rem]'} sm:mx-8 lg:mx-auto max-w-md`}>
                            <h3 className="text-[#64ffda] text-center text-lg sm:text-xl lg:text-xl font-bold mb-4">A Determined Quest.</h3>
                            <div className="text-[#ccd6f6] pb-10">
                                <p className="text-sm mb-4">
                                    Far away from my parents' embrace, I chase my dreams, <br />
                                    In a lonely city, where no bloodlines gleam.<br />
                                    Demotivation washes over me in a sudden wave,<br />
                                    But I rise above, determined to be brave.
                                </p>
                                <p className="text-sm mb-4">
                                    Pollution fills the air, obscuring the sky,<br />
                                    Yet I find solace in nature's gentle sigh. <br />
                                    Academic stress and homesickness weigh me down,<br />
                                    But I seek strength within, wearing resilience as a crown.
                                </p>
                                {expanded3 ? (
                                    <>
                                        <p className="text-sm mb-4">
                                            In this foreign realm, I stand tall and strong,<br />
                                            Creating my own path amidst the throng.<br />
                                            With dreams as my compass, I defy the strife,<br />
                                            Navigating the challenges that define my life.
                                        </p>
                                        <p className="text-sm mb-4">
                                            Though far from my parents' arms, love transcends,<br />
                                            As I forge connections with newfound friends.<br />
                                            Through trials and hurdles, I'll persevere,<br />
                                            For my dreams, I'll fight with unwavering cheer.
                                        </p>
                                        <p className="text-sm mb-4">
                                            So in this lonely city, I'll carve my own way,<br />
                                            Embracing challenges, come what may.<br />
                                            With determination as my guiding light,<br />
                                            I'll overcome obstacles, shining bright.
                                        </p>
                                        <button
                                            className="absolute right-0 bottom-0 mb-4 mr-4 sm:mr-5 px-4 sm:px-5 py-2 bg-transparent hover:bg-[#0a192f] hover:text-teal-500 font-semibold text-[#64ffda] rounded-md border border-[#64ffda] transition duration-300 focus:outline-none focus:ring-2 focus:ring-[#64ffda]"
                                            onClick={toggleExpansion3}
                                        >
                                            View Less
                                        </button>
                                    </>
                                ) : (
                                    <button
                                        className="absolute right-0 bottom-0 mb-4 mr-4 sm:mr-5 px-4 sm:px-5 py-2 bg-transparent hover:bg-[#0a192f] hover:text-teal-500 font-semibold text-[#64ffda] rounded-md border border-[#64ffda] transition duration-300 focus:outline-none focus:ring-2 focus:ring-[#64ffda]"
                                        onClick={toggleExpansion3}
                                    >
                                        continue..
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    );
};
export default Blogs;