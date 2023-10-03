import { component$, Slot, useStyles$ } from "@builder.io/qwik";

import Navbar from "~/components/navbar/navbar";

import bootstrapStyles from "./node_modules/bootstrap/dist/css/bootstrap.min.css?inline";

export default component$(() => {
  useStyles$(bootstrapStyles)

  return (
    <>
      <Navbar />
      <main>
        <Slot />
      </main>
    </>
  )
})