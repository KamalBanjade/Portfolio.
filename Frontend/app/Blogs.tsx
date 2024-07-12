import React, { useState, useRef, useEffect } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import './line.css';

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

    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
            setExpandedBlog(null);
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [expandedBlog]);

    const blogs = [
        {
            id: 1,
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
            title: 'The Duality of Twilight',
            description: `As day fades with whispers, in dusk's embrace,
The sky, evening's hues, paints with grace.
Some find solace in twilight's warm light,
While others face shadows and fears at night.

Sunset ignites dreams anew, whispering tales,
Yet doubts creep in as daylight pales.
Gratitude hides in trials, leaves entwined,
In dusk's quiet, where longing grieves.

Mental battles and fears lie in twilight,
Stories of courage and gold in the night.
Reflections on what's lost as day turns night,
Hopes and fears meet in evening light.

The silence of dusk, a soothing shroud,
For some, serene peace; others, a cloud.
Walking 'tween hope and despair, twilight's fold,
Human care's there, warm and cold.

As night descends, calm or fright we see,
Some find peace in night, others yearn for plea.
In twilight’s embrace, shadows and hopes race,
In the sky's blue, human hues in twilight's space.`
        }
    ];

    return (
        <div className="max-w-auto mx-auto sm:mx-auto md:mx-8 lg:mx-10 xl:mx-12 2xl:mx-16 bg-gradient-to-r from-[#0a192f] to-[#0a192f] hover:to-[#12233d] rounded-lg p-6 md:p-10 shadow-xl relative transition duration-500 ease-in-out transform hover:translate-y-2" id="blogs">
            <section className="flex flex-col sm:flex-row justify-center items-center space-y-8 sm:space-y-0 sm:space-x-8 md:space-x-10">
                <div className="flex-1">
                    <div className="line-container mb-6">
                        <div className="line start"></div>
                        <h2 className="text-[#64ffda] text-3xl md:text-4xl font-bold title">
                            <div className='text-center lg:text-left sm:text-center'>
                                <span className="text-white">Blogs</span>
                            </div>
                        </h2>
                        <div className="line end"></div>
                    </div>
                    <p className="text-[#8892b0] mb-2 leading-relaxed text-xs sm:text-base md:text-md pl-7">
                        Explore a curated collection of my favorite poems.
                    </p>
                    <div className="h-4" />
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center">
                        {blogs.map(blog => (
                            <div
                                key={blog.id}
                                ref={el => {
                                    sectionRefs.current[blog.id] = el;
                                }}
                                className={`bg-gradient-to-r from-[#12233d] to-[#0a192f] rounded-lg p-4 sm:p-6 shadow-lg relative transition duration-500 ease-in-out transform hover:scale-105 hover:bg-gradient-to-r hover:from-[#0e1a32] hover:to-[#12233d] ${expandedBlog === blog.id ? 'h-auto' : 'h-[18rem] sm:h-[19rem] md:h-[35rem] lg:h-[22rem]'} mx-w-auto w-full `}
                            >
                                <h3 className="text-[#64ffda] text-center text-lg sm:text-xl lg:text-xl font-bold mb-4">{blog.title}</h3>
                                <div className="text-[#ccd6f6] pb-10 poem-text" style={{ position: 'relative' }}>
                                    <p className={`leading-relaxed text-xs sm:text-base md:text-sm mb-4 ${expandedBlog === blog.id ? '' : 'clamped-text'}`} style={{ whiteSpace: 'pre-line' }}>
                                        {blog.description}
                                    </p>
                                    <div className="button-container" onClick={() => toggleExpand(blog.id)}>
                                        <span className="text-[#64ffda] mr-2 text-xs sm:text-sm">
                                            {expandedBlog === blog.id ? 'Read Less' : 'Read More'}
                                        </span>
                                        <div className="p-1 bg-transparent hover:bg-[#0a192f] text-[#64ffda] rounded-full border border-[#64ffda] transition duration-300 ease-in-out transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#64ffda]">
                                            {expandedBlog === blog.id ? <FaChevronUp /> : <FaChevronDown />}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </section>
            <style jsx>{`
  .poem-text {
    font-family: 'Roboto Slab', Roboto, sans-serif;
    color: #e6e6e6;
    padding: 15px 20px;
    border-radius: 5px;
    border-left: 4px solid #64ffda;
    line-height: 1.5;
    background: #0a192f;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: background 0.3s ease, color 0.3s ease, box-shadow 0.3s ease;
    position: relative;
}

.poem-text:hover {
    background: #12233d;
    color: #ffffff;
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
}

.clamped-text {
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
}

@media (max-width: 768px) {
    .clamped-text {
        -webkit-line-clamp: 7;
    }
}

@media (min-width: 769px) {
    .clamped-text {
        -webkit-line-clamp: 9;
    }
}

.button-container {
    margin-top: 1rem; 
    text-align: right;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    cursor: pointer;
}

            `}</style>
        </div>
    );
};

export default Blogs;
