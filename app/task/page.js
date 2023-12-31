"use client";

import NewTask from "@/components/NewTask";
import Stats from "@/components/Stats";
import TaskList from "@/components/TaskList";
import { useSession } from "next-auth/react";

import React from "react";

const Task = () => {
  const { data: session, status } = useSession();
  if (status !== `authenticated`) {
    return <p className="text-center">Not Authorized</p>;
  }
  return (
    <section className="mx-auto max-w-screen-xl py-6">
      <NewTask />
      <div className="flex items-center">
        <Stats />
      </div>
      <TaskList />   
    </section>
  );
};

export default Task;
