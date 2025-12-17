import * as React from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import Navbar from "../components/Navbar";
import { posts } from "../posts";
import Post from "../components/Post";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />


        <TanStackRouterDevtools />
        <Outlet />
      </div>
  );
  
}
