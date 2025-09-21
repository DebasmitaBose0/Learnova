"use client";
import { Navbar } from "@/components/Navbar";
import DarkVeil from "@/components/ui-block/DarkVeil";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Target,
  Heart,
  Lightbulb,
  GraduationCap,
  Users,
  Sparkles,
  Award,
  Globe,
  BookOpen,
  TrendingUp,
  Calendar,
  Building2,
  User,
  Table,
  MemoryStickIcon,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { analytics } from "@/lib/firebaseConfig";
import { logEvent } from "firebase/analytics";

export default function AboutPage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (analytics) {
      logEvent(analytics, "page_view", { page: "about" });
    }
  }, []);

  const companyStats = [
    { number: "Upcoming", label: "Institution Partnerships", icon: BookOpen },
    { number: "Upcoming", label: "Student Tracking", icon: Users },
    { number: "70%", label: "Time Saved", icon: TrendingUp },
    { number: "98%", label: "Accuracy Rate", icon: Award },
  ];

  const teamMembers = [
    {
      name: "Prem Shaw",
      role: "Team Leader & Full-Stack Developer",
      initials: "PS",
      description:
        "Guides the team, manages development & deployment, and builds the Learnova platform end-to-end to ensure a seamless and impactful experience.",
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "Prashant Bhati",
      role: "Web Developer",
      initials: "PB",
      description:
        "Maintains Learnova’s web applications with a strong focus on performance and usability.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Polawar Pranav Shirish",
      role: "Frontend Developer",
      initials: "PP",
      description:
        "Designs intuitive and interactive user interfaces to deliver an engaging and accessible student experience.",
      color: "from-emerald-500 to-teal-500",
    },
    {
      name: "Abir Ghosh",
      role: "Machine Learning Specialist",
      initials: "AG",
      description:
        "Develops ML models and data-driven insights to personalize learning and optimize institutional performance.",
      color: "from-rose-500 to-pink-500",
    },
    {
      name: "Anuj Ram Shrivastava",
      role: "ML & Backend Developer",
      initials: "AR",
      description:
        "Works on backend systems and ML algorithms that power smart recommendations and advanced analytics in Learnova.",
      color: "from-indigo-500 to-violet-500",
    },
    {
      name: "Chandana S",
      role: "Testing & Documentation",
      initials: "CS",
      description:
        "Ensures reliability through rigorous testing and comprehensive documentation for the platform.",
      color: "from-amber-500 to-orange-500",
    },
  ];

  const milestones = [
    {
      year: "2019",
      title: "Company Founded",
      description:
        "Started with a vision to revolutionize educational administration",
    },
    {
      year: "2020",
      title: "First 50 Institutions",
      description:
        "Gained trust of early adopters across different educational sectors",
    },
    {
      year: "2022",
      title: "AI Integration",
      description:
        "Launched intelligent curriculum planning and predictive attendance analytics",
    },
    {
      year: "2024",
      title: "Global Expansion",
      description: "Reached 500+ institutions across 50+ countries worldwide",
    },
  ];

  return (
    <>
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <DarkVeil />

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute w-72 h-72 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl"
            style={{
              left: "10%",
              top: "20%",
              transform: `translateY(${scrollY * 0.1}px)`,
            }}
          />
          <div
            className="absolute w-96 h-96 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-full blur-3xl"
            style={{
              right: "10%",
              top: "40%",
              transform: `translateY(${scrollY * -0.1}px)`,
            }}
          />
        </div>
      </div>

      <div className="min-h-screen relative z-50">
        <Navbar />

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          {/* Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-transparent to-accent/20 blur-3xl" />

          <div className="relative max-w-5xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              About{" "}
              <span className="bg-gradient-to-r from-accent via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Learnova
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8">
              We’re reimagining educational administration with{" "}
              <span className="text-white font-semibold">
                intelligent technology
              </span>
              , giving institutions the tools to save time, simplify workflows,
              and focus on what matters most —{" "}
              <span className="text-accent font-semibold">student success</span>
              .
            </p>

            {/* CTA */}
            <div className="flex justify-center">
              <button
                onClick={() => {
                  const section = document.getElementById("impact");
                  section?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
                className="bg-gradient-to-r from-accent to-purple-500 text-white px-6 py-3 rounded-3xl hover:scale-105 transition-transform duration-300"
              >
                See Our Impact
              </button>
            </div>
          </div>
        </section>

        {/* Company Stats */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              {companyStats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-accent/30 transition-all duration-500 hover:scale-105">
                    <stat.icon className="w-8 h-8 text-accent mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-accent transition-colors duration-300">
                      {stat.number}
                    </div>
                    <p className="text-gray-400 font-medium group-hover:text-gray-300 transition-colors duration-300">
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          {/* Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-pink-800/20 blur-3xl" />

          <div className="relative max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Side - Story */}
              <div className="space-y-8">
                {/* Tag */}
                <div className="inline-flex items-center px-5 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full border border-purple-500/30 shadow-md">
                  <BookOpen className="w-5 h-5 text-purple-400 mr-2" />
                  <span className="text-purple-300 font-medium tracking-wide">
                    Our Story
                  </span>
                </div>

                {/* Heading */}
                <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
                  Born from{" "}
                  <span className="bg-gradient-to-r from-accent to-pink-400 bg-clip-text text-transparent">
                    Real Educational Challenges
                  </span>
                </h2>

                {/* Description */}
                <div className="space-y-5 text-gray-300 leading-relaxed text-lg">
                  <p>
                    Learnova began in{" "}
                    <span className="text-white font-semibold">2019</span>, when
                    a small group of students and developers noticed how much
                    time teachers were losing to routine paperwork and
                    attendance tracking.Instead of spending time teaching or
                    mentoring, educators were forced into repetitive manual
                    tasks. Institutions too lacked{" "}
                    <span className="text-white font-semibold">
                      efficient digital tools
                    </span>
                    to manage operations smoothly.
                  </p>

                  <p>
                    That’s where our mission started: to build{" "}
                    <span className="text-accent font-semibold">
                      simple, reliable, and intelligent solutions
                    </span>
                    that reduce workload, improve transparency, and give back
                    valuable time to teachers and students alike.
                  </p>
                </div>
              </div>

              {/* Right Side - Vision Card */}
              <div className="relative">
                <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-3xl p-10 border border-purple-500/20 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500">
                  <div className="text-center space-y-8">
                    <GraduationCap className="h-24 w-24 text-accent mx-auto animate-pulse" />
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-white">
                        Our Vision
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        To make educational administration{" "}
                        <span className="text-white font-semibold">
                          stress-free and transparent
                        </span>
                        . We aim to empower schools, colleges, and universities
                        with tools that save time, increase accuracy, and let
                        them focus on{" "}
                        <span className="text-accent font-semibold">
                          student growth and learning
                        </span>
                        .
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-purple-900/5 to-black/40" />

          <div className="max-w-7xl mx-auto relative">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-accent/20 to-purple-500/20 rounded-full border border-accent/30 mb-6">
                <Heart className="w-5 h-5 text-accent mr-2" />
                <span className="text-accent font-medium">Our Values</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                What Drives Us Forward
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our core values guide every decision and shape every feature we
                build.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Target,
                  title: "Efficiency",
                  description:
                    "We streamline workflows and reduce redundancy, giving educators more time to focus on teaching.",
                  gradient: "from-blue-500 to-cyan-500",
                },
                {
                  icon: Heart,
                  title: "Engagement",
                  description:
                    "Interactive and gamified experiences that motivate students and make learning enjoyable.",
                  gradient: "from-pink-500 to-rose-500",
                },
                {
                  icon: Lightbulb,
                  title: "Accessibility",
                  description:
                    "Designed for all schools, even in low-network areas, with affordable and easy-to-use solutions.",
                  gradient: "from-purple-500 to-violet-500",
                },
              ].map((value, index) => (
                <Card
                  key={index}
                  className="group bg-black/40 border-white/10 backdrop-blur-xl hover:border-accent/50 transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl hover:shadow-accent/25"
                >
                  <CardHeader className="text-center pb-4">
                    <div
                      className={`mx-auto w-20 h-20 bg-gradient-to-br ${value.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-500 relative overflow-hidden`}
                    >
                      <value.icon className="h-10 w-10 text-white relative z-10" />
                      <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                    <CardTitle className="text-white text-xl group-hover:text-accent transition-colors duration-500">
                      {value.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-500">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full border border-emerald-500/30 backdrop-blur-sm mb-6">
                <Users className="w-5 h-5 text-emerald-400 mr-2" />
                <span className="text-emerald-400 font-medium">Our Team</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Meet the Visionaries
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                The passionate educators and technologists driving Learnova's
                innovation and success.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <Card
                  key={index}
                  className="group bg-black/40 border-white/10 backdrop-blur-xl hover:border-accent/50 transition-all duration-700 hover:scale-[1.02]"
                >
                  <CardContent className="pt-8 text-center">
                    <div className="relative mb-6">
                      <div
                        className={`w-28 h-28 bg-gradient-to-br ${member.color} rounded-full flex items-center justify-center mx-auto group-hover:scale-105 transition-transform duration-500 relative overflow-hidden`}
                      >
                        <span className="text-3xl font-bold text-white relative z-10">
                          {member.initials}
                        </span>
                        <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>

                      {/* Stable floating badge */}
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent/80 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-75 group-hover:scale-100">
                        <Sparkles className="w-4 h-4 text-white" />
                      </div>
                    </div>

                    <h3 className="text-2xl font-semibold text-white mb-2 group-hover:text-accent transition-colors duration-500">
                      {member.name}
                    </h3>
                    <p className="text-accent font-medium mb-4 text-lg">
                      {member.role}
                    </p>
                    <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-500">
                      {member.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative" id="impact">
          <div className="max-w-7xl mx-auto relative">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-accent/20 to-purple-500/20 rounded-full border border-accent/30 backdrop-blur-sm mb-6">
                <Sparkles className="w-5 h-5 text-accent mr-2" />
                <span className="text-accent font-medium">Our Impact</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Transforming Education for Everyone
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Learnova empowers teachers, students, institutions, and parents
                with meaningful outcomes.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: User,
                  title: "Teachers",
                  description:
                    "Regain ~1 hour/day, enabling more focus on teaching and mentoring.",
                },
                {
                  icon: GraduationCap,
                  title: "Students",
                  description:
                    "Convert ~90+ hours/year from idle time into productive learning.",
                },
                {
                  icon: Building2,
                  title: "Institutions",
                  description:
                    "Improve attendance and engagement metrics, enhancing overall efficiency.",
                },
                {
                  icon: Users,
                  title: "Parents",
                  description:
                    "Gain transparent insights into their child’s attendance and activities, fostering trust.",
                },
              ].map((impact, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:border-accent/40 transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl hover:shadow-accent/25 text-center"
                >
                  <impact.icon className="w-12 h-12 text-accent mx-auto mb-6 group-hover:scale-110 transition-transform duration-500" />
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-accent transition-colors duration-500">
                    {impact.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-sm group-hover:text-gray-200 transition-colors duration-500">
                    {impact.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-3xl p-12 text-center border border-purple-500/20 backdrop-blur-sm">
              <Award className="h-16 w-16 text-accent mx-auto mb-6" />

              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Institution?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join the hundreds of educational institutions worldwide that
                trust Learnova to streamline their operations and enhance
                student outcomes.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href={"/auth"}>
                  <button className="px-8 py-4 bg-gradient-to-r from-accent to-purple-500 rounded-full text-white font-semibold hover:shadow-xl hover:shadow-accent/25 transition-all duration-300 hover:scale-105">
                    Get Started Today
                  </button>
                </Link>
                <Link href={"/contact"}>
                  <button className="px-8 py-4 bg-white/10 rounded-full text-white font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                    Contact Our Team
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
