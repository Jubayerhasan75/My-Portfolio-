const { createElement, useEffect } = React;
const { render } = ReactDOM;

const projects = [
  {
    name: "Hospital Management System",
    link: "https://github.com/Jubayerhasan75/Hospital-management-System",
    desc: "A full-stack MERN hospital system with patient, doctor, and admin modules, appointment & billing features."
  },
  {
    name: "DNA Sequence Simulation",
    link: "https://github.com/Jubayerhasan75/DNA-Sequence-Simulation",
    desc: "Digital simulation using Proteus to demonstrate logic gates and DNA sequencing mechanisms."
  },
  {
    name: "Coffeeshop Management System",
    link: "https://github.com/Jubayerhasan75/Coffeeshop-Management-System",
    desc: "C-based terminal project that handles orders, menus, and staff-side controls for a coffee shop."
  },
  {
    name: "Pharmacy Management System",
    link: "https://github.com/Jubayerhasan75/Pharmacy-Management",
    desc: "A Java console application for managing pharmacy stock, search, sales, and billing using OOP."
  }
];

function Button({ href, icon, text }) {
  return createElement(
    "a",
    {
      href,
      target: "_blank",
      rel: "noopener noreferrer",
      className: "button-outline"
    },
    createElement("i", { "data-lucide": icon, className: "w-4 h-4" }),
    text
  );
}

function Portfolio() {
  useEffect(() => {
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }, []);

  return createElement(
    "main",
    {},
    // Header
    createElement(
      "section",
      { className: "header" },
      createElement(
        "div",
        { className: "header-left" },
        createElement("div", { className: "avatar" },
          createElement("img", { src: "assets/bg.jpg", alt: "Jubayer Hasan" })
        ),
        createElement("h1", null, "Hi, I'm Jubayer Hasan"),
        createElement("p", null, "Full-stack developer passionate about building beautiful and functional websites."),
        createElement("div", { className: "button-group" },
          createElement(Button, { href: "mailto:2022-60-042@std.ewubd.edu", icon: "mail", text: "Email" }),
          createElement(Button, { href: "https://www.linkedin.com/in/jubayer-hasan-196088267/", icon: "linkedin", text: "LinkedIn" }),
          createElement(Button, { href: "https://www.facebook.com/jubayer.hasan.982/", icon: "facebook", text: "Facebook" }),
          createElement(Button, { href: "https://github.com/Jubayerhasan75", icon: "github", text: "GitHub" })
        )
      ),
      createElement("div", { className: "header-right" },
        createElement("img", { src: "assets/developer.png", alt: "Developer", className: "dev-img" })
      )
    ),

    // Projects
    createElement("section", { className: "projects" },
      createElement("h2", null, "Projects"),
      createElement("div", { className: "project-grid" },
        projects.map((proj, i) =>
          createElement("div", { key: i, className: "card" },
            createElement("h3", null, proj.name),
            createElement("p", null, proj.desc),
            createElement("a", { href: proj.link, className: "view-btn", target: "_blank" }, "View Project")
          )
        )
      )
    ),

// Side-by-side Qualifications & Skills (no card box)
createElement("section", { className: "qual-skill-section" },
  createElement("div", { className: "qs-column" },
    createElement("h2", null, "Qualifications"),
    createElement("a", { href: "education.html", className: "view-btn" }, "View Qualifications")
  ),
  createElement("div", { className: "qs-column" },
    createElement("h2", null, "Skills"),
    createElement("a", { href: "skills.html", className: "view-btn" }, "View Skills")
  )
)


  );
}

render(createElement(Portfolio), document.getElementById("root"));
