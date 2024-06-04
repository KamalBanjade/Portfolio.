import React, { useState, useRef, useEffect } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Blogs: React.FC = () => {
    const [expandedBlog, setExpandedBlog] = useState<number | null>(null);
    const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

    const toggleExpand = (blogId: number) => {
        setExpandedBlog(expandedBlog === blogId ? null : blogId);
    };

    const truncateText = (text: string, isExpanded: boolean) => {
        const lines = text.split('\n');
        if (isExpanded || lines.length <= 8) {
            return text;
        }
        return lines.slice(0, 8).join('\n') + '...';
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (expandedBlog !== null) {
            const currentRef = sectionRefs.current[expandedBlog];
            if (currentRef && !currentRef.contains(event.target as Node)) {
                setExpandedBlog(null);
            }
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [expandedBlog]);

    const blogs = [
        {
            id: 1,
            title: 'Sunset',
            description: `As the day gently fades with whispered sighs,
And the sky in evening's colors lies,
Some find solace in twilight's warm embrace,
While others grapple with a different face.

The sky, a canvas of vibrant hue,
A reminder for some of their deep blues,
Dreams unfulfilled, aspirations astray,
In sunset's glow, they silently sway.

Yearning for connection, warmth, and light,
Amidst the crowd, feeling lost in the fight,
The sunset's beauty sparks dreams anew,
Yet doubts creep in, tearing at what's true.

Gratitude, a virtue, hard to find,
Beneath beauty, life's trials entwined,
Loneliness lurking in shadows near,
In dusk's embrace, longing is clear.

Mental battles hidden, fears untold,
In twilight's quiet, they take hold,
Entwining with sunset's warm embrace,
Revealing stories in shared grace.`
        },
        {
            id: 2,
            title: 'Sailing Life\'s Shifting Seas',
            description: `In a bustling Nepal Yatayat shuttle's gleam,
I glimpsed a girl, lost in a texting stream.
In a group "Best Friend Forever", her voice found sway,
A moment shared, life's ballet, in its play.

In my mind's vast expanse, a thought took flight,
"Does 'forever' truly endure, or vanish from sight?"
Memories danced, like reels of old,
In groups we typed, our stories told.

"Best Fellows Forever," our joyful decree,
Sharing laughs, memes, in harmonious spree.
Intentions pure, to brighten each day,
Through giggles and grins, troubles kept at bay.

But time sweeps on, change its constant call,
In memories, we cherish, life's rise and fall.
From laughter-filled moments, to life's grand quest,
We journey together, in trial and test.

In today's whirlwind, schedules tight and grand,
Seeking purpose, in life's shifting sand.
No blame to assign, for the natural drift,
As priorities shift, and perspectives lift.

Good memories sacrificed, as new paths we tread,
A bittersweet choice, life's dance we wed.
Yet, let's not forget, those moments so free,
For they shape who we are, in life's grand decree.`
        },
        {
            id: 3,
            title: 'A Determined Quest',
            description: `Far away from my parents' embrace, I chase my dreams,
In a lonely city, where no bloodlines gleam.
Demotivation washes over me in a sudden wave,
But I rise above, determined to be brave.

Pollution fills the air, obscuring the sky,
Yet I find solace in nature's gentle sigh.
Academic stress and homesickness weigh me down,
But I seek strength within, wearing resilience as a crown.

In this foreign realm, I stand tall and strong,
Creating my own path amidst the throng.
With dreams as my compass, I defy the strife,
Navigating the challenges that define my life.

Though far from my parents' arms, love transcends,
As I forge connections with newfound friends.
Through trials and hurdles, I'll persevere,
For my dreams, I'll fight with unwavering cheer.

So in this lonely city, I'll carve my own way,
Embracing challenges, come what may.
With determination as my guiding light,
I'll overcome obstacles, shining bright.`
        }
    ];

    return (
        <div className="max-w-6xl mx-auto bg-gradient-to-r from-[#0a192f] to-[#0a192f] hover:to-[#1a2f4f] rounded-lg p-4 sm:p-6 md:p-8 shadow-xl relative transition duration-500 ease-in-out transform hover:scale-100 hover:translate-y-1" id="blogs">
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
                        {blogs.map(blog => (
                            <div
                                key={blog.id}
                                ref={el => {
                                    sectionRefs.current[blog.id] = el;
                                }}
                                className={`bg-gradient-to-r from-[#112240] to-[#0a192f] rounded-lg p-4 sm:p-6 shadow-xl relative transition duration-500 ease-in-out transform hover:scale-105 hover:bg-gradient-to-r hover:from-[#0e1a32] hover:to-[#112240] ${expandedBlog === blog.id ? 'h-auto' : 'h-[21rem] sm:h-[24rem] lg:h-[26rem]'} sm:mx-8 lg:mx-auto max-w-md`}
                            >
                                <h3 className="text-[#64ffda] text-center text-lg sm:text-xl lg:text-xl font-bold mb-4">{blog.title}</h3>
                                <div className="text-[#ccd6f6] pb-10">
                                    <p className="text-sm mb-4" style={{ whiteSpace: 'pre-line' }}>
                                        {truncateText(blog.description, expandedBlog === blog.id)}
                                    </p>
                                    <div className="absolute right-0 bottom-0 mb-4 mr-4 sm:mr-5 flex flex-col items-center cursor-pointer" onClick={() => toggleExpand(blog.id)}>
                                        <span className="text-[#64ffda] mb-1 text-xs">
                                            {expandedBlog === blog.id ? 'Read Less' : 'Read More'}
                                        </span>
                                        <div className="p-2 bg-transparent hover:bg-[#0a192f] text-[#64ffda] rounded-full border border-[#64ffda] transition duration-300 focus:outline-none focus:ring-2 focus:ring-[#64ffda]">
                                            {expandedBlog === blog.id ? <FaChevronUp /> : <FaChevronDown />}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blogs;
