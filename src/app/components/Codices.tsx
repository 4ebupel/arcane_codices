"use client";

import { useState } from "react";
import { useEffect } from "react";
import { getUsers } from "../api/getUsers";
import { TeamMemberCard } from "./TeamMemberCard";
import { User } from "../types/User";

export default function Codices() {
    const [teamMembers, setTeamMembers] = useState<User[]>([]);

    useEffect(() => {
        getUsers().then(setTeamMembers);
    }, []);

    return (
      <div className="min-h-screen bg-background">
        <main className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-12">The Arcane Codices</h1>
            <div className="space-y-6">
              {teamMembers.map((member, index) => (
                <TeamMemberCard key={index} {...member} />
              ))}
            </div>
          </div>
        </main>
      </div>
    )
  }