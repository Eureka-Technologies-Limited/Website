import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Server, Layers } from "lucide-react";
import { Computer, Bug } from "lucide-react";

export default function LogBugPage() {
  const useCases = [
    {
      title: "Product & Platform Teams",
      text: "Track bugs, incidents, and regressions across fast-moving codebases while keeping discussions, decisions, and timelines in one place.",
    },
    {
      title: "Startups & Small Teams",
      text: "Lightweight structure without heavyweight process — LogBug gives visibility and accountability without slowing teams down.",
    },
    {
      title: "Engineering Organizations",
      text: "Maintain a clear historical record of issues, resolutions, and ownership as teams and systems scale.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-darkBlue via-blue-950 to-zinc-950 text-white">
      <Navbar />

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-28">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
          LogBug
        </h1>
        <p className="mt-8 max-w-3xl text-[#A8B0C2] text-lg leading-relaxed">
          LogBug is a developer-first bug tracking and team workflow platform
          designed to improve collaboration and observability from the ground up.
          Offering incident tracking and team communication features, LogBug helps
          development teams stay aligned, resolve issues faster, and maintain a
          clear record of project history — all without the noise and overhead of
          traditional tools.
        </p>

        <div className="mt-10 flex">
          <Button
            disabled
            className="cursor-not-allowed opacity-80 flex items-center gap-2"
          >
            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
            In Active Development
          </Button>
        </div>

        {/**
        <div className="mt-10 flex gap-4">
          <Button>
            Get Started <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
          <Button variant="outline">View Documentation</Button>
        </div>
        */}
      </section>

      {/* What is LogBug */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <Card className="bg-white/5 border-white/10">
          <CardContent className="p-10">
            <h2 className="text-3xl font-semibold mb-6">What Is LogBug?</h2>
            <p className="text-[#A8B0C2] leading-relaxed max-w-4xl">
              LogBug is a developer-first bug tracking and team workflow platform
              designed to improve collaboration and observability from the ground
              up — keeping issues, conversations, and history tied together so
              teams can move faster with less noise.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Core Principles */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-semibold mb-12 text-center">
          Core Design Principles
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          <Card className="bg-white/5 border-white/10">
            <CardContent className="p-6">
              <Computer className="w-8 h-8 text-[#f39e3c] mb-4" />
              <h3 className="font-semibold mb-2">Developer First</h3>
              <p className="text-sm text-[#A8B0C2]">
                Designed with developers in mind — prioritising clarity, control,
                and reliability over flashy features or unnecessary overhead.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10">
            <CardContent className="p-6">
              <Layers className="w-8 h-8 text-[#f39e3c] mb-4" />
              <h3 className="font-semibold mb-2">Modular Core</h3>
              <p className="text-sm text-[#A8B0C2]">
                Built around clear interfaces so workflows, integrations, and UI
                experiences can evolve independently.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10">
            <CardContent className="p-6">
              <Bug className="w-8 h-8 text-[#f39e3c] mb-4" />
              <h3 className="font-semibold mb-2">Faster Resolutions</h3>
              <p className="text-sm text-[#A8B0C2]">
                Streamlined workflows and strong visibility help teams resolve
                issues faster and stay aligned.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10">
            <CardContent className="p-6">
              <Server className="w-8 h-8 text-[#f39e3c] mb-4" />
              <h3 className="font-semibold mb-2">Scales Naturally</h3>
              <p className="text-sm text-[#A8B0C2]">
                Structure that scales with your team and projects — without
                forcing heavy process or adding complexity as you grow.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-semibold mb-12 text-center">
          Key Capabilities
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-white/5 border-white/10 hover:-translate-y-3 ease-in-out duration-300">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">Incident Tracking</h3>
              <p className="text-sm text-[#A8B0C2]">
                Capture bugs and incidents with full context, ownership, and
                timelines so teams can respond quickly and consistently.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10 hover:-translate-y-3 ease-in-out duration-300">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">Team Communication</h3>
              <p className="text-sm text-[#A8B0C2]">
                Keep discussions tied directly to issues so decisions and
                reasoning never get lost across tools.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10 hover:-translate-y-3 ease-in-out duration-300">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">Project History</h3>
              <p className="text-sm text-[#A8B0C2]">
                Build a searchable record of issues, fixes, and lessons learned —
                a durable source of truth for the team.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* What LogBug Is Not */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <Card className="bg-white/5 border-white/10">
          <CardContent className="p-10">
            <h2 className="text-3xl font-semibold mb-6">What LogBug Is Not</h2>
            <ul className="space-y-4 text-[#A8B0C2]">
              <li>
                • Not a bloated tracker overloaded with unrelated project
                management features
              </li>
              <li>
                • Not a noisy notification system that fragments communication
                and context
              </li>
              <li>
                • Not a tool that hides critical details behind rigid workflows
                and unnecessary ceremony
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Use Cases */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-semibold mb-12">Where LogBug Fits Best</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {useCases.map((item, i) => (
            <Card
              key={i}
              className="bg-white/5 border-white/10 hover:-translate-y-3 ease-in-out duration-300"
            >
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-[#A8B0C2]">{item.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Roadmap */}
      <section className="max-w-4xl mx-auto px-6 py-24 text-center">
        <h2 className="text-3xl font-semibold mb-6">The Road Ahead</h2>
        <p className="text-[#A8B0C2] leading-relaxed">
          LogBug is actively evolving. Planned capabilities include incident
          timelines, cross-project visibility, configurable workflows, and deeper
          observability integrations — all designed to remain optional,
          composable, and developer-controlled.
          <br />
          <br />
          Every feature is built to enhance clarity and collaboration without
          introducing unnecessary complexity or noise.
        </p>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 py-24 text-center">
        <h2 className="text-3xl font-semibold mb-6">
          Built for Teams Who Care About Software Quality
        </h2>
        <p className="text-[#A8B0C2] mb-8 max-w-2xl mx-auto">
          LogBug is for developers and teams who value clear communication,
          shared ownership, and reliable systems. It’s designed to help teams
          understand what went wrong, why it happened, and how to prevent it —
          without drowning in process or tools.
        </p>

        {/**
        <Button>
          Start Exploring LogBug <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
        */}
        <Button
          disabled
          className="cursor-not-allowed opacity-80 flex items-center gap-2 mx-auto"
        >
          <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
          In Active Development
        </Button>
      </section>

      <Footer />
    </div>
  );
}
