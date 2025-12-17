import React from "react"

function Skills() {
    const skills = [
        "WordPress", "Godot", "Elementor", "Node.js", "JavaScript", "Next.js",
        "CSS", "Java", "C#", "HTML", "React.js", "Git", "Python", "GitHub",
        "Figma", "MySQL", "Microsoft Excel"
    ]

    return (
        <section className="py-20 bg-gradient-to-br from-purple-800 to-purple-900">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center text-white mb-12">⚡ Tech Stack</h2>
                <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
                    {skills.map((skill, index) => (
                        <span key={index} className="px-6 py-3 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-full font-semibold hover:bg-white hover:text-purple-800 hover:scale-110 transition-all duration-300 cursor-default shadow-lg">
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills
