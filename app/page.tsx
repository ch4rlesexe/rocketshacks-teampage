"use client";

import { Users, Code, Award, PiggyBank, Calendar, Github, Linkedin, Twitter } from "lucide-react";

const teams = [
  {
    name: "Marketing",
    icon: Users,
    description: "Crafting our brand story and reaching the stars with innovative campaigns.",
    members: Array(5).fill({
      name: "Open Position",
      role: "Team Member",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      about: "We're looking for passionate individuals to join our marketing team and help shape the future of RocketHacks.",
      skills: ["Marketing", "Communication", "Creativity"],
      social: { linkedin: "#" }
    })
  },
  {
    name: "Judging and Prizes",
    icon: Award,
    description: "Evaluating innovations and rewarding excellence in our hackathon projects.",
    members: Array(5).fill({
      name: "Open Position",
      role: "Team Member",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      about: "Join our judging panel to help identify and reward the most innovative projects at RocketHacks.",
      skills: ["Evaluation", "Technical Knowledge", "Fair Assessment"],
      social: { linkedin: "#" }
    })
  },
  {
    name: "Development",
    icon: Code,
    description: "Building the digital infrastructure that powers our cosmic journey.",
    members: Array(5).fill({
      name: "Open Position",
      role: "Team Member",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      about: "We're seeking talented developers to help create and maintain our hackathon platform.",
      skills: ["Programming", "Problem Solving", "Innovation"],
      social: { github: "#", linkedin: "#" }
    })
  },
  {
    name: "Sponsorship and Finance",
    icon: PiggyBank,
    description: "Managing resources and building partnerships to fuel our mission.",
    members: Array(5).fill({
      name: "Open Position",
      role: "Team Member",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      about: "Looking for individuals with a passion for building relationships and managing resources.",
      skills: ["Partnership Building", "Financial Planning", "Negotiation"],
      social: { linkedin: "#" }
    })
  },
  {
    name: "Event Coordination",
    icon: Calendar,
    description: "Orchestrating seamless experiences that inspire innovation.",
    members: Array(5).fill({
      name: "Open Position",
      role: "Team Member",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      about: "Join us in creating unforgettable hackathon experiences through meticulous planning and execution.",
      skills: ["Event Planning", "Logistics", "Team Coordination"],
      social: { linkedin: "#" }
    })
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0F29] text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0F29] to-[#1A1F3F] opacity-90" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center" />
        </div>
        
        <div className="relative px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="flex justify-center mb-8">
              <Users className="h-20 w-20 text-[#FFD700] animate-pulse" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl bg-gradient-to-r from-[#FFD700] to-[#4169E1] text-transparent bg-clip-text">
              Meet Our Teams
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              The brilliant minds behind RocketHacks working together to launch the next generation of innovation.
            </p>
          </div>
        </div>
      </div>

      {/* Teams Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {teams.map((team) => (
          <div key={team.name} className="mb-20">
            <div className="flex items-center mb-8">
              <team.icon className="h-10 w-10 text-[#4169E1]" />
              <h2 className="ml-4 text-3xl font-bold text-[#FFD700]">{team.name}</h2>
            </div>
            <p className="text-xl text-gray-300 mb-12">{team.description}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.members.map((member, index) => (
                <div
                  key={index}
                  className="bg-[#1A1F3F] rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#FFD700]/10"
                >
                  <div className="aspect-w-16 aspect-h-9 relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="object-cover w-full h-64"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A1F3F] to-transparent" />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-[#FFD700] mb-1">{member.name}</h3>
                    <p className="text-[#4169E1] font-medium mb-4">{member.role}</p>
                    <p className="text-gray-300 mb-4">{member.about}</p>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-[#FFD700] mb-2">Skills</h4>
                      <div className="flex flex-wrap gap-2">
                        {member.skills.map((skill, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 text-sm bg-[#252A4F] text-[#4169E1] rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex space-x-4">
                      {member.social.github && (
                        <a href={member.social.github} className="text-gray-400 hover:text-[#FFD700]">
                          <Github className="h-5 w-5" />
                        </a>
                      )}
                      {member.social.linkedin && (
                        <a href={member.social.linkedin} className="text-gray-400 hover:text-[#FFD700]">
                          <Linkedin className="h-5 w-5" />
                        </a>
                      )}
                      {member.social.twitter && (
                        <a href={member.social.twitter} className="text-gray-400 hover:text-[#FFD700]">
                          <Twitter className="h-5 w-5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}