import { component$, useStore, useTask$ } from "@builder.io/qwik";

import User from "~/components/user/user";

interface User {
  id: string;
  name: string;
}

export default component$(() => {
  const store = useStore({ users: [] as User[] })

  // - useTask$ is commonly used for performing work on component initialization or when a state changes.

  useTask$(async () => {
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