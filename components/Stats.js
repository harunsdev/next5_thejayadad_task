"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaUser, FaTasks } from "react-icons/fa";

const Stats = () => {
  const [stats, setStats] = useState(null);
  useEffect(() => {
    axios.get("/api/stats").then((response) => {
      setStats(response.data);
    });
  }, []);
  if (!stats) {
    return <div className="text-center">Loading Stats...</div>;
  }

  const Stats = () => {};
  return (
    <section className="px-4">
      <h2 className="text-2xl mt-4 mb-4"> Database Stats</h2>
      <div className="flex justify-between gap-4 mx-auto px-4">
        <div className="p-4 rounded-lg">
          <div className="flex items-center mb-2">
            <FaUser className="text-xl text-orange-500 mr-2" />
            <p className="text-lg font-semi-bold mr-2">Total Users</p>
            <p>{stats.userCount}</p>
          </div>
        </div>
        <div className="p-4 rounded-lg">
          <div className="flex items-center mb-2">
            <FaTasks className="text-xl text-orange-500 mr-2" />
            <p className="text-lg font-semi-bold mr-2">Total</p>
            <p>{stats.totalTaskCount}</p>
          </div>
        </div>
        <div className="p-4 rounded-lg">
          <div className="flex items-center mb-2">
            <FaTasks className="text-xl text-orange-500 mr-2" />
            <p className="text-lg font-semi-bold mr-2">Open</p>
            <p>{stats.openTaskCount}</p>
          </div>
        </div>
        <div className="p-4 rounded-lg">
          <div className="flex items-center mb-2">
            <FaTasks className="text-xl text-orange-500 mr-2" />
            <p className="text-lg font-semi-bold mr-2">Closed</p>
            <p>{stats.closeTaskCount}</p>
          </div>
        </div>
        <div className="p-4 rounded-lg">
          <div className="flex items-center mb-2">
            <FaTasks className="text-xl text-orange-500 mr-2" />
            <p className="text-lg font-semi-bold mr-2">Progress</p>
            <p>{stats.progressTaskCount}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
