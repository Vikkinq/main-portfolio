document.addEventListener("DOMContentLoaded", () => {
  const btnStudies = document.getElementById("btnStudies");
  const btnWork = document.getElementById("btnWork");
  const btnOrgs = document.getElementById("btnOrgs");
  const list = document.getElementById("experienceList");

  // ---- Data -------------------------------------------------------------
  const STUDIES = [
    {
      date: "September 2020 - July 2025",
      title: "University of San Agustin - Iloilo",
      subtitle: "Bachelor of Science in Computer Engineering",
      logo: "assets/san-ag.png",
    },
    {
      date: "June 2018 - March 2020",
      title: "Filamer Christian University",
      subtitle: "Senior High School",
      logo: "https://fcu.neolms.com.au/files/42318/FCU.png?lmsauth=68a3d282a7d073ee5dacf0f1b2bfb9b263c7164a",
    },
    {
      date: "June 2014 - May 2018",
      title: "Faith Christian Academy",
      subtitle: "Junior High School",
      logo: "assets/svg/step-by-step.svg",
    },
  ];

  const WORK = [
    {
      date: "June 2024 - August 2024",
      title: "Experts Academy",
      subtitle: "Network Technical Support - Internship",
      logo: "assets/svg/experts-academy.svg",
    },
  ];

  // NEW: ORGS / CLUBS -----------------------------------------------------
  const ORGS = [
    {
      date: "2024 – 2025",
      title: "ACES — Augustinian Computer Engineering Society",
      subtitle: "4th Year Representative",
      logo: "assets/svg/aces.svg",
    },
    {
      date: "2022 – 2025",
      title: "ICpEP — Institute of Computer Engineers of the Philippines",
      subtitle: "Member",
      logo: "assets/ICpEP.jpg",
    },
    {
      date: "2024",
      title: "Capture the Flag (National)",
      subtitle: "Placed ~100th out of 600+ Teams",
      logo: "assets/uctf.png",
    },
    {
      date: "2021 - 2022",
      title: "GDSC — Google Developer Student Club",
      subtitle: "Member",
      logo: "assets/svg/gdsc.svg",
    },
  ];

  // ---- Render + Tab styling --------------------------------------------
  function renderTimeline(items) {
    // 64px circle -> center at 32px -> left-8
    const line = '<span class="pointer-events-none absolute left-8 top-0 bottom-0 w-px bg-white/20"></span>';

    const lis = items
      .map(
        (it, i) => `
    <li class="relative ${i < items.length - 1 ? "mb-6" : ""} pl-24">
      <!-- avatar wrapper (64px; even size) -->
      <span class="absolute left-0 top-1/2 -translate-y-1/2 grid place-items-center
                   w-16 h-16 rounded-full overflow-hidden border border-white/30 bg-white shrink-0">
        <img
          src="${it.logo}"
          alt="${it.title} logo"
          class="block w-full h-full object-contain p-1.5"
          decoding="async" loading="lazy"
        />
      </span>

      <div class="text-xs text-white/60">${it.date}</div>
      <h3 class="text-base font-semibold">${it.title}</h3>
      <p class="text-sm text-white/80">${it.subtitle}</p>
    </li>
  `
      )
      .join("");

    list.innerHTML = line + lis;
  }

  function applyActive(active) {
    const all = [btnStudies, btnWork, btnOrgs];
    all.forEach((btn) => {
      if (!btn) return;
      if (btn === active) {
        btn.classList.add("bg-white", "text-base-700");
        btn.classList.remove("text-white/80");
      } else {
        btn.classList.remove("bg-white", "text-base-700");
        btn.classList.add("text-white/80");
      }
    });
  }

  function show(tab) {
    if (tab === "studies") {
      applyActive(btnStudies);
      renderTimeline(STUDIES);
    } else if (tab === "work") {
      applyActive(btnWork);
      renderTimeline(WORK);
    } else {
      applyActive(btnOrgs);
      renderTimeline(ORGS);
    }
  }

  // ---- Events -----------------------------------------------------------
  btnStudies.addEventListener("click", () => show("studies"));
  btnWork.addEventListener("click", () => show("work"));
  btnOrgs.addEventListener("click", () => show("orgs"));

  // initial state
  show("studies");
});
