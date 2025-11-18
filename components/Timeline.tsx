
import React from 'react';
import { useFadeIn } from '../hooks/useFadeIn';
import { TIMELINE_EVENTS } from '../constants';
import { TimelineEvent } from '../types';

const Timeline: React.FC = () => {
    const [sectionRef, isVisible] = useFadeIn<HTMLDivElement>();

    return (
        <section ref={sectionRef} id="timeline" className={`py-20 px-6 md:px-12 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="container mx-auto">
                <h2 className="text-4xl md:text-5xl font-dancing text-center text-[#D9A5A0] mb-12">Our Journey Together</h2>
                <div className="relative wrap overflow-hidden p-10 h-full">
                    <div className="absolute left-1/2 -ml-px h-full border-2 border-dashed border-[#FFC1D6]"></div>

                    {TIMELINE_EVENTS.map((event: TimelineEvent, index) => (
                        <div key={index} className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? 'flex-row-reverse left-timeline' : 'right-timeline'}`}>
                            <div className="order-1 w-5/12"></div>
                            <div className="z-20 flex items-center order-1 bg-[#FFC1D6] shadow-xl w-8 h-8 rounded-full">
                                <span className="mx-auto font-semibold text-lg text-white animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ffc1d6]/75"></span>
                                <span className="relative inline-flex rounded-full h-8 w-8 bg-[#D9A5A0]"></span>
                            </div>
                            <div className={`order-1 ${index % 2 === 0 ? 'bg-[#FFDFEB]' : 'bg-white'} rounded-lg shadow-xl w-5/12 px-6 py-4 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-x-0' : index % 2 === 0 ? 'opacity-0 translate-x-10' : 'opacity-0 -translate-x-10'}`} style={{transitionDelay: `${index * 150}ms`}}>
                                <h3 className="mb-3 font-bold text-[#D9A5A0] text-xl">{event.title}</h3>
                                <p className="text-sm leading-snug tracking-wide text-gray-600 font-quicksand">{event.description}</p>
                                <time className="text-xs text-pink-400 font-bold mt-2 block">{event.year}</time>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Timeline;
