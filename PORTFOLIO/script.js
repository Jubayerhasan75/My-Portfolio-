const { createElement, useEffect } = React;
const { render } = ReactDOM;

const projects = [
  {
    name: "Johan'S Hub Ecommerce MERN",
    link: "https://johan-s-hub-ecommerce-mern.vercel.app/",
    desc: "A full-stack MERN e-commerce platform built for a T-shirt business. A complete admin panel with full CRUD operations for products and orders."
  },
  {
    name: "WorkFlow App",
    link: "http://workflow-app.lovestoblog.com/",
    desc: "WorkFlow is a premium, minimal, and highly efficient daily task management application."
  },
  {
    name: "School Website",
    link: "https://github.com/Jubayerhasan75/School_Website",
    desc: "A complete School Management System for Shishu Bidya Niketon, featuring an admin dashboard, student & teacher management, and notice board, built with PHP and MySQL."
  },
  {
    name: "কি হতো যদি?",
    link: "https://ki-hoto-jodi.vercel.app/",
    desc: "A Bengali web app to calculate habit impact."
  }
];

function Button({ href, icon, text }) {
  useEffect(() => {
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }, []);

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
  return createElement(
    "main",
    {},
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
          createElement(Button, { href: "mailto:jubayerhasanrohan@gmail.com", icon: "mail", text: "Email" }),
          createElement(Button, { href: "https://www.linkedin.com/in/jubayer-hasan-196088267/", icon: "linkedin", text: "LinkedIn" }),
          createElement(Button, { href: "https://www.facebook.com/jubayer.hasan.982/", icon: "facebook", text: "Facebook" }),
          createElement(Button, { href: "https://github.com/Jubayerhasan75", icon: "github", text: "GitHub" })
        )
      ),
      createElement("div", { className: "header-right" },
        createElement("img", { src: "assets/developer.png", alt: "Developer", className: "dev-img" })
      )
    ),
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
