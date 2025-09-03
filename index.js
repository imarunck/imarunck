// Resume Projects Data
const projects = [
  {
    title: "Sri Raju Fonts GitHub Repository",
    date: "Aug-2025",
    desc: "Created an open-source repository to host and preserve the Sri Raju Kannada Fonts collection. The project provides digital specimens, previews, and structured documentation to ensure sustainable access for designers, researchers, and the Kannada digital community.",
    link: "https://github.com/imarunck/Sri-Raju-Fonts"
  },
  {
    title: "Contribution to fonts.sanchaya.net",
    date: "Feb-2025",
    desc: "Contributing to developing the website fonts.sanchaya.net by Sanchi Foundation as type Designer.",
    link: "http://fonts.sanchaya.net"
  },
  {
    title: "Nijasharana.com Website",
    date: "Jan-2025",
    desc: "Launched a website honouring 12th-century poet Ambigara Chowdayya. It features a biography, 272 Vachanas, and a gallery with visuals and animations to preserve and promote cultural heritage.",
    link: "http://nijasharana.com"
  },
  {
    title: "Bekkina Hadu 2D Animation",
    date: "Jul 2024",
    desc: "Bekkina Hadu is a Kannada 2D animated rhyme created by Arun C. Kallappanavar. Using his animation skills, he aimed to create something meaningful with this project.",
    link: ""
  },
  {
    title: "SmartNudi Fonts",
    date: "Nov-2023 To Apr 2024",
    desc: "SmartNudi Fonts are an improved version of Nudi-UNI Kannada Fonts. I contributed to this project, which Kannada Ganaka Parishat hosted.",
    link: ""
  },
  {
    title: "Haveri Nodu Part-1",
    date: "Jan 2024",
    desc: "Haveri Nodu is a book with visuals and notes about five places that define the heritage of the Haveri district.",
    link: ""
  },
  {
    title: "KANNADA FONT LIBRARY",
    date: "July 2023",
    desc: "The Kannada font library is a web directory containing all available fonts for the Kannada language. The idea is to bring all Kannada fonts under one website.",
    link: "https://kannadafontlibrary.in/"
  },
  {
    title: "ANCHU KANNADA FONT",
    date: "May 2023",
    desc: "The Anchu font is a free, open-source typeface designed specifically for the Kannada language. It conveys the digital world and pixel sharpness.",
    link: ""
  },
  {
    title: "UDYOGA MITRA APPLICATION",
    date: "2021",
    desc: "Udyoga Mitra is a Kannada job notification app, featuring push notifications for new job requirements provided by the administrator.",
    link: ""
  }
];

function renderProjects() {
  const track = document.querySelector('.carousel-track');
  if (!track) return;
  track.innerHTML = '';
  projects.forEach(proj => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.tabIndex = 0;
    card.innerHTML = `
      <h3>${proj.title}</h3>
      <p><strong>${proj.date}</strong></p>
      <p>${proj.desc}</p>
      ${proj.link ? `<p><a href="${proj.link}" target="_blank">View Project</a></p>` : ''}
    `;
    card.onclick = function() {
      if (proj.link) window.open(proj.link, '_blank');
    };
    track.appendChild(card);
  });
}

// Carousel sliding logic for desktop
function setupCarouselArrows() {
  const leftBtn = document.querySelector('.carousel-arrow.left');
  const rightBtn = document.querySelector('.carousel-arrow.right');
  const track = document.querySelector('.carousel-track');
  if (!leftBtn || !rightBtn || !track) return;

  // Only enable arrows on desktop
  function scrollByCard(direction = 1) {
    const card = track.querySelector('.project-card');
    if (!card) return;
    const cardWidth = card.offsetWidth + 16; // 16px gap
    track.scrollBy({ left: direction * cardWidth, behavior: 'smooth' });
  }

  leftBtn.addEventListener('click', () => scrollByCard(-1));
  rightBtn.addEventListener('click', () => scrollByCard(1));
}

document.addEventListener('DOMContentLoaded', () => {
  renderProjects();
  setupCarouselArrows();

  // Optional: Enable drag-to-scroll for desktop users (no scrollbar shown)
  const track = document.querySelector('.carousel-track');
  let isDown = false;
  let startX;
  let scrollLeft;

  if (track) {
    track.addEventListener('mousedown', (e) => {
      // Only desktop: window width >= 800px
      if (window.innerWidth < 800) return;
      isDown = true;
      track.classList.add('dragging');
      startX = e.pageX - track.offsetLeft;
      scrollLeft = track.scrollLeft;
    });
    track.addEventListener('mouseleave', () => {
      isDown = false;
      track.classList.remove('dragging');
    });
    track.addEventListener('mouseup', () => {
      isDown = false;
      track.classList.remove('dragging');
    });
    track.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - track.offsetLeft;
      const walk = (x - startX) * 2;
      track.scrollLeft = scrollLeft - walk;
    });
  }
});

// Inject Project Cards
function renderProjects() {
  const carousel = document.querySelector('.projects-carousel');
  if (!carousel) return;
  carousel.innerHTML = '';
  projects.forEach(proj => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.tabIndex = 0;
    card.innerHTML = `
      <h3>${proj.title}</h3>
      <p><strong>${proj.date}</strong></p>
      <p>${proj.desc}</p>
      ${proj.link ? `<p><a href="${proj.link}" target="_blank">View Project</a></p>` : ''}
    `;
    card.onclick = function() {
      if (proj.link) window.open(proj.link, '_blank');
    };
    carousel.appendChild(card);
  });
}




// Enable click-and-drag sliding for projects-carousel on desktop
document.addEventListener('DOMContentLoaded', () => {
  renderProjects();

  // Dropdown functionality
  document.querySelectorAll('.dropdown-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const content = this.nextElementSibling;
      document.querySelectorAll('.dropdown-content').forEach(dc => {
        if (dc !== content) dc.style.display = 'none';
      });
      content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
  });

  // Optional: Close dropdown on outside click (mobile friendly)
  document.addEventListener('click', e => {
    if (!e.target.classList.contains('dropdown-btn')) {
      document.querySelectorAll('.dropdown-content').forEach(dc => dc.style.display = 'none');
    }
  });

  // Click-and-drag functionality for desktop
  const carousel = document.querySelector('.projects-carousel');
  let isDown = false;
  let startX;
  let scrollLeft;

  // Only enable on desktop
  if (carousel && window.innerWidth >= 800) {
    carousel.addEventListener('mousedown', (e) => {
      isDown = true;
      carousel.classList.add('dragging');
      startX = e.pageX - carousel.offsetLeft;
      scrollLeft = carousel.scrollLeft;
    });
    carousel.addEventListener('mouseleave', () => {
      isDown = false;
      carousel.classList.remove('dragging');
    });
    carousel.addEventListener('mouseup', () => {
      isDown = false;
      carousel.classList.remove('dragging');
    });
    carousel.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - carousel.offsetLeft;
      const walk = (x - startX) * 2; // scroll-fast
      carousel.scrollLeft = scrollLeft - walk;
    });
  }
});


// Auto-update copyright year
document.addEventListener('DOMContentLoaded', () => {
  const footerYear = document.getElementById('footer-year');
  if (footerYear) {
    footerYear.textContent = new Date().getFullYear();
  }
});