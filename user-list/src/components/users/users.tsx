import { component$, useStore, useVisibleTask$ } from "@builder.io/qwik";

import User from "~/components/user/user";

interface User {
  id: string;
  name: string;
}

export default component$(() => {
  const store = useStore({ users: [] as User[] })

  /*
    Sometimes a task needs to run only on the browser and after rendering,
    in that case, you should use useVisibleTask$().
    The useVisibleTask$() is similar to useTask$() but it only runs on the browser
    and after initial rendering. useVisibleTask$() registers a hook to be executed
    when the component becomes visible in the viewport, it will run at least once in the browser,
    and it can be reactive and re-execute when some tracked state changes.
  */
  useVisibleTask$(async () => {
    try {
      const res = await fetch("http://localhost:3100/users")
      const users = await res.json()
      store.users = [...users]

    } catch (err) {
      console.log(err)
    }
  })

  return (
    <>
      <h1 class="text-center m-0">Users</h1>

      <div class="row g-0 justify-content-center">
        <div class="col-md-5">
          {
            store.users.map(v => (
              <User key={v.id} id={v.id} name={v.name} />
            ))
          }
        </div>
      </div>
    </>
  )
})