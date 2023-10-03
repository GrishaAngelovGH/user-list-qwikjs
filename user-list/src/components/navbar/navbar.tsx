import { component$ } from "@builder.io/qwik";

import { Navbar } from "~/components/bootstrap/navbar";

export default component$(() => (
  <Navbar
    brand="User List"
    links={[
      { title: "Users", href: "/" },
      { title: "Tasks", href: "/tasks" }
    ]}
  />
))