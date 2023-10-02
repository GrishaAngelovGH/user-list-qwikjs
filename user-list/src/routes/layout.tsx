import { component$, Slot, useStyles$ } from "@builder.io/qwik";

import bootstrapStyles from "./node_modules/bootstrap/dist/css/bootstrap.min.css?inline";

export default component$(() => {
  useStyles$(bootstrapStyles)

  return (
    <>
      <main>
        <Slot />
      </main>
    </>
  )
})