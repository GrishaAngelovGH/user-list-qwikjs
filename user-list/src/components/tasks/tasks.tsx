import { component$, useStore, useVisibleTask$ } from "@builder.io/qwik";

interface Task {
  id: string;
  title: string;
  description: string;
}

export default component$(() => {
  const store = useStore({ tasks: [] as Task[] })

  useVisibleTask$(async () => {
    try {
      const res = await fetch("http://localhost:3100/tasks")
      const tasks = await res.json()
      store.tasks = [...tasks]
    } catch (err) {
      console.log(err)
    }
  })

  return (
    <>
      <h1 class="text-center m-0">Tasks</h1>

      <div class="row g-0 justify-content-center">
        <div class="col-md-7">
          <div class="accordion" id="accordionExample">
            {
              store.tasks.map((v, i) => (
                <div key={v.id} class="accordion-item">
                  <h2 class="accordion-header">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${i}`} aria-expanded="true" aria-controls={`collapse${i}`}>
                      {v.title}
                    </button>
                  </h2>
                  <div id={`collapse${i}`} class={`accordion-collapse collapse ${i === 0 ? 'show' : ''}`} data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      <p>ID: {v.id}</p>
                      <p>Description: {v.description}</p>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
})