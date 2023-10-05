import { component$ } from "@builder.io/qwik";

import images from "~/media"

export default component$((props: { id: string, name: string }) => {
  const image = images[props.name.split(' ').join('')]

  return (
    <div class="row g-0 mt-2 align-items-center border border-3 shadow rounded p-1">
      <div class="col-md-2">
        <img src={image} class="rounded" width={80} height={80} />
      </div>
      <div class="col-md-6">
        <h4 class="m-0">ID: {props.id}</h4>
        <h4 class="m-0">Name: {props.name}</h4>
      </div>
    </div>
  )
})