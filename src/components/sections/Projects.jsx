import {RevealOnScroll} from '../RevealOnScroll';

export const Projects = () => {
    return <section 
    id="projects" 
    className="min-h-screen flex items-center justify-center py-20">

<RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <div className="p-6 rounded-xl border border-white/10 
                hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                    <h3 className="text-xl font-bold mb-2">Lee Fashions Website</h3>
                    <p className="text-gray-400 mb-4">
                        Website I personally made for a tailor that
                        helps them receiving orders directly to Whatsapp and displays
                        some of her designs.
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {["HTML/CSS", "JavaScript" ].map((tech, key)=> (
                            <span 
                            key={key}
                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                            ">
                                    {tech}
                            </span>
                        ))}
                    </div>

                    <div className="flex justify-between items-center">
                        <a href="https://leefashions.netlify.app" 
                        className="text-blue-400 hover:text-blue-300 transition-colors my-4"> 
                        View Project 
                        </a>
                    </div>
                </div>
                <div className="p-6 rounded-xl border border-white/10 
                hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                    <h3 className="text-xl font-bold mb-2">Emmtary Electrical Website</h3>
                    <p className="text-gray-400 mb-4">
                        Website for an electrician where they receive messages from website to
                        their Whatsapp and also where they showoff their work
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {["React", "Bootstrap" , "JavaScript" ].map((tech, key)=> (
                            <span 
                            key={key}
                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                            ">
                                    {tech}
                            </span>
                        ))}
                    </div>

                    <div className="flex justify-between items-center">
                        <a href="https://emmtary.netlify.app" 
                        className="text-blue-400 hover:text-blue-300 transition-colors my-4"> 
                        View Project 
                        </a>
                    </div>
                </div>

                <div className="p-6 rounded-xl border border-white/10 
                hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                    <h3 className="text-xl font-bold mb-2">TAR News Fetch</h3>
                    <p className="text-gray-400 mb-4">
                        A website that fetches news using an API and displays th trending ones
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {["React", "Bootstrap", "Typescript", "API Intergration" ].map((tech, key)=> (
                            <span 
                            key={key}
                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                            ">
                                    {tech}
                            </span>
                        ))}
                    </div>

                    <div className="flex justify-between items-center">
                        <a href="#" 
                        className="text-blue-400 hover:text-blue-300 transition-colors my-4"> 
                        View Project 
                        </a>
                    </div>
                </div>
                <div className="p-6 rounded-xl border border-white/10 
                hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                    <h3 className="text-xl font-bold mb-2">VISION</h3>
                    <p className="text-gray-400 mb-4">
                        An AI personally for high scholers that uses loads of university programs data
                        and advices students on the program suitable and perfect for them.
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {["Mongo DB", "React", "Node.js", "Python" ].map((tech, key)=> (
                            <span 
                            key={key}
                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                            ">
                                    {tech}
                            </span>
                        ))}
                    </div>

                    <div className="flex justify-between items-center">
                        <a href="#" 
                        className="text-blue-400 hover:text-blue-300 transition-colors my-4"> 
                        View Project 
                        </a>
                    </div>
                </div>
            </div>
        </div>

</RevealOnScroll>
    </section>
}