import { component$, useOn, $ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

interface NavbarProps {
  brand: string;
  links: { title: string, href: string }[]
}

export const Navbar = component$((props: NavbarProps) => {
  useOn(
    "qvisible",
    $(() => import("bootstrap")),
  );

  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <Link class="navbar-brand" href={"/"}>
            {props.brand}
          </Link>
          <ul class="navbar-nav mx-auto mb-2 mb-lg-0 me-0">
            {
              props.links.map((v, i) => (
                <li key={i} class="nav-item">
                  <Link class="nav-link" href={v.href}>
                    {v.title}
                  </Link>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </nav>
  );
});
