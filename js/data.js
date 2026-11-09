/* ==========================================================
   SEMUA ISI WEBSITE DIEDIT DI FILE INI. Tidak perlu ubah HTML.
   ========================================================== */
const D = {

  name: "Sasa",                       // GANTI nama lengkapmu (muncul di hero, About, kartu ID, footer)
  title: "JR. UI/UX · FRONT-END",     // tulisan kecil di kartu ID
  roles: ["Junior UI/UX Designer", "Junior Front-End Developer", "Data Analyst Enthusiast"],  // teks yang mengetik di hero

  /* ---------- FOTO DIRI ----------
     Taruh file di folder images/profile/
     normal = fotomu biasa (untuk kartu ID lanyard di Hero)
     about  = fotomu yang sudah di-remove background (khusus untuk About Me, format PNG transparan)
     venom  = versi Venom, muncul saat kartu ID diketuk / kursor diarahkan */
  photo: {
    normal: "images/profile/foto.jpeg",
    about: "images/profile/foto-about.png",
    venom: "images/profile/foto-venom.png"
  },

  /* ---------- SOCIAL LINKS (CONTACT) ---------- */
  links: [
    { label: "GitHub",    url: "https://github.com/Ssa4a" },
    { label: "Instagram", url: "https://instagram.com/khannsaa.a" },
    { label: "LinkedIn",  url: "https://www.linkedin.com/in/khansa-nailah-anjani" }
  ],

  /* ---------- EDUCATION & EXPERIENCE ----------
     logo = gambar logo kampus/sekolah di images/logos/  (kosongkan "" kalau belum ada) */
  education: [
    { name: "Telkom University Surabaya", sub: "Informatics", years: "2023 – present", logo: "images/logos/telu.png" },
    { name: "SMAN 1 Simpang Empat", sub: "Social Sciences", years: "2020 – 2023", logo: "images/logos/sma.png" }
  ],
  experience: [
    {
      name: "Bawaslu Provinsi Jawa Timur",
      sub: "UI/UX Intern & Front End",
      years: "Aug 2026 – Oct 2026",
      logo: "images/logos/bawaslu.jpg",
      showcase: {
        title: "Bawaslu Jawa Timur – UI/UX System Design, Front-End & Public Data Infographics",
        role: "UI/UX Designer & Front-End Developer Intern",
        period: "August 2026 – October 2026",
        scope: "Surabaya, East Java • Internal Tools & Official Media (@bawaslujatim)",
        mission: "Spearheaded internal workflow digitization, front-end development, and public data transparency during my internship at Bawaslu Jawa Timur. Designed and contributed to front-end development for 'Absensi Cleaner', an internal web tool that automates complex multi-source employee attendance reconciliation (fingerprint biometric exports, WFH forms, PNS & PPPK lists) to eliminate tedious manual payroll overhead. Additionally, translated dense public accounting data, voter statistics, and PPID metrics into high-engagement infographic carousels for the official @bawaslujatim channel.",
        skills: [
          "UI/UX Design",
          "Front-End Development",
          "Internal Tool Design",
          "Workflow Automation",
          "Data Visualization",
          "Infographic Design",
          "Visual Hierarchy & Layout",
          "Public Sector Branding",
          "Government Transparency Communication"
        ],
        highlights: [
          {
            label: "Front-End & UI/UX",
            value: "Designed system interfaces and developed front-end code for internal government web tools."
          },
          {
            label: "Internal Automation",
            value: "Replaced error-prone manual Excel attendance recaps with a 3-step automated reconciliation web app."
          },
          {
            label: "Public Engagement",
            value: "Published multi-part infographics on official @bawaslujatim social media channels (Instagram, X, Facebook, TikTok)."
          }
        ],
        series: [
          {
            title: "01. Internal System Design & Front-End: Absensi Cleaner",
            desc: "A web-based automation tool engineered to streamline civil servant attendance reconciliation. Previously, staff manually cross-referenced raw biometric fingerprint exports, Google Form WFH submissions, and official PNS/PPPK payroll lists. Absensi Cleaner automates data parsing, name matching, and report generation in a simple 3-step wizard.",
            items: [
              {
                src: "images/experience/bawaslu/absensi-cleaner.png",
                title: "Absensi Cleaner v2 – Upload & Preview/Matching Interface",
                desc: "Step 1 (Left): Multi-source upload for Fingerprint Excel, WFH Form, and PNS/PPPK templates. Step 2 (Right): Automated fuzzy name matching table with confidence scoring, 'Perlu Review' anomaly flags, and 1-click ZIP export.",
                wide: true
              }
            ]
          },
          {
            title: "02. Public Data Infographics: State Budget Realization Report (TA 2025 & 2026)",
            desc: "Visualizing comprehensive state budget realization (Pagu, Realisasi, Sisa Anggaran) across Bawaslu Jatim and 18 regional work units with clean donut chart proportions and key financial takeaways.",
            items: [
              {
                src: "images/experience/bawaslu/anggaran-1.jpg",
                title: "Slide 1/2: Laporan Realisasi Anggaran TA 2025 (96.08%)",
                desc: "Total realization breakdown (Rp 128.86B / 96.08%) comparing Management Support Program (94.22%) vs. Election Execution Program (99.36%)."
              },
              {
                src: "images/experience/bawaslu/anggaran-2.jpg",
                title: "Slide 2/2: Laporan Realisasi Anggaran Periode Jan-Agt 2026 (75.55%)",
                desc: "Mid-year budget realization monitoring across 7 non-independent work units with exact budget ceiling figures and remaining balances."
              }
            ]
          },
          {
            title: "03. Public Data Infographics: Election Programs & Management Activities Realization",
            desc: "Multi-slide Instagram carousel breaking down operational divisions including internal supervision, voter registry education (DPT), and data management.",
            items: [
              {
                src: "images/experience/bawaslu/program-1.jpg",
                title: "Slide 1/3: Realisasi Program & Kegiatan Bawaslu Jatim",
                desc: "Overall program activity execution status (75.55% / Rp 28.72 M) for the January - August 2026 period."
              },
              {
                src: "images/experience/bawaslu/program-2.jpg",
                title: "Slide 2/3: Rincian Realisasi Program Penyelenggaraan Pemilu Umum",
                desc: "Detailed proportional breakdown of election technical oversight (28.24%), participatory education (44.37%), and continuous DPT education (68.57%)."
              },
              {
                src: "images/experience/bawaslu/program-3.jpg",
                title: "Slide 3/3: Rincian Realisasi Program Dukungan Manajemen",
                desc: "Four-sector division chart: HR organization (78.80%), internal audit/supervision (58.64%), IT/data management (75.19%), and financial/asset management (75.77%)."
              }
            ]
          },
          {
            title: "04. Public Transparency: PPID Public Information Request Recapitulation",
            desc: "Public accountability carousel visualizing citizen information requests fulfilled under PPID Bawaslu Jatim, highlighting 100% resolution compliance, applicant gender ratio, processing durations, and applicant backgrounds.",
            items: [
              {
                src: "images/experience/bawaslu/ppid-1.jpg",
                title: "Slide 1/2: Rekapitulasi Data Permohonan Informasi PPID",
                desc: "Visualizing 100% information fulfillment rate, 50-50 gender ratio, and official Bawaslu mascot 'Wasri' customer service branding."
              },
              {
                src: "images/experience/bawaslu/ppid-2.jpg",
                title: "Slide 2/2: Jangka Waktu Pemberian Informasi & Profesi Pemohon",
                desc: "Bar chart illustrating request processing speed (1-6 working days) and demographic distribution (Students vs. Civil Servants / ASN)."
              }
            ]
          },
          {
            title: "05. Data Analytics Infographic: National Voter Distribution & East Java Insight",
            desc: "Comprehensive data visualization mapping voter demographics across all 38 provinces in Indonesia, highlighting East Java with 31.4M registered voters as the 2nd largest voting province nationwide.",
            items: [
              {
                src: "images/experience/bawaslu/pemilih-jatim.jpg",
                title: "National Voter Distribution (Jawa Timur #2 Nasional - 31.4M Pemilih)",
                desc: "National bar chart distribution of 203.05M voters with provincial highlight callout for East Java, featured monument illustration, and key demographic takeaway box.",
                wide: true
              }
            ]
          }
        ]
      }
    },
    {
      name: "Nortis AI Academy",
      sub: "UI/UX Intern",
      years: "Jul 2025 – Sep 2025",
      logo: "images/logos/nortis.png",
      showcase: {
        title: "Nortis AI Academy – EdTech Community Website Redesign",
        role: "UI/UX Design Intern",
        period: "July 2025 – September 2025",
        scope: "AI Education & Tech Community Platform",
        mission: "Contributed as a UI/UX Design Intern to the exploratory website redesign for Nortis AI Academy, an educational community platform dedicated to Artificial Intelligence literacy. Collaborated on the initial design phase, focusing on modernizing the landing page hero section, structuring community trust metrics (alumni, workshops, study jams), and improving program discovery navigation.",
        skills: [
          "UI/UX Design",
          "Landing Page Redesign",
          "Information Architecture",
          "Visual Hierarchy",
          "Design System Exploration",
          "EdTech Design"
        ],
        highlights: [
          {
            label: "Role Scope",
            value: "Contributed to exploratory UI/UX redesign assisting the design team on the core landing page."
          },
          {
            label: "Key Metrics",
            value: "Featured community milestones: 962+ Alumni, 14 Workshops, and 9+ Study Jams."
          },
          {
            label: "Visual Tone",
            value: "Modern AI tech aesthetic with deep forest green accents, high-contrast typography, and digital creator visuals."
          }
        ],
        series: [
          {
            title: "01. Educational Platform Landing Page Redesign",
            desc: "Redesigned the primary landing page interface to lower onboarding friction for aspiring AI enthusiasts. Emphasizes empowering copy ('Jangan cuma consume teknologi. Saatnya kamu yang create!'), social proof metrics, and clear dual CTAs for immediate program enrollment.",
            items: [
              {
                src: "images/experience/nortis/nortis-redesign.jpg",
                title: "Nortis AI Academy – Website Landing Page Hero Redesign",
                desc: "Hero section redesign featuring clean navigation, high-contrast typography, community proof points (962+ alumni, 14 workshops), dual action buttons ('Mulai' & 'Lihat Program'), and a visual showcase illustrating robotics, tech collaboration, and young digital creators.",
                wide: true
              }
            ]
          }
        ]
      }
    }
  ],

  /* ---------- SPOTIFY ----------
     Cara: buka playlist di Spotify > titik tiga > Share > Copy link.
     Dari link https://open.spotify.com/playlist/ABC123?si=xxx , ambil "ABC123" saja. */
  spotify: { playlistId: "4DRfqqOjxO6fplvFp54mIQ" },   // <-- TARUH ID PLAYLIST SPOTIFY DI SINI

  /* ---------- PROJECTS ----------
     image : taruh file di images/projects/ lalu tulis misal "images/projects/projek1.png"
     type  : "UI/UX" atau "Front-End"
     skills: UI/UX isi skill desainmu, Front-End isi teknologinya
     link  : link Figma / demo / GitHub (kosong = tombol Details tidak muncul) */
  projects: [
    {
      id: "livin-kos",
      title: "Livin Kos – Surabaya Boarding House Discovery & Rental Management App",
      type: "UI/UX Design",
      desc: "A dual-sided mobile platform connecting Surabaya boarding house owners with students and job seekers seeking trusted, verified, and affordable temporary housing.",
      image: "images/projects/dapur-kos.png",
      skills: [
        "Requirement Analysis",
        "User Research",
        "Competitor Analysis",
        "User Persona",
        "User Flow",
        "Wireframing",
        "UI Design",
        "Prototyping",
        "Usability Testing",
        "Design Iteration"
      ],
      link: "https://www.figma.com/proto/XUqBaSLyRlsmf2tbt4lvbA/DAPUR?node-id=131-1302&viewport=-1256%2C-1067%2C0.29&t=suHV19E4gksay9lJ-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=131%3A985&show-proto-sidebar=0&hide-ui=1&page-id=0%3A1",
      details: {
        role: "End-to-End UI/UX Designer & UX Researcher",
        scope: "Surabaya Area, East Java, Indonesia",
        platform: "Mobile Application (Figma Interactive Prototype)",
        targetUsers: "Boarding House (Kos) Owners & University Students / Young Professionals",
        problem: "In Surabaya, boarding house owners—primarily local independent landlords—lack dedicated and intuitive digital channels to market vacancies, manage tenant occupancy, and track rental payments. At the same time, students and relocating workers face immense friction discovering verified, nearby, and budget-friendly boarding houses, often relying on fragmented social media posts or physically wandering streets.",
        solution: "Livin Kos bridges this divide with an integrated dual-sided mobile ecosystem. For landlords, it provides a centralized management dashboard for listing rooms, managing tenant communication, and tracking payments. For tenants, it delivers a localized discovery portal with Surabaya district filters (Rungkut, Wonokromo, Gayungan, etc.), gender-specific room categories, transparent rates, and direct booking capabilities.",
        keyFeatures: [
          {
            title: "Landlord Operations Dashboard",
            desc: "Dedicated control center for boarding house owners to register room inventories, monitor active occupants, handle inquiries, and review transaction ledgers."
          },
          {
            title: "Surabaya District Discovery",
            desc: "Smart location filtering designed around Surabaya's premier university and commercial hubs, enabling newcomers to find housing close to their destinations."
          },
          {
            title: "Targeted Categorization & Transparent Pricing",
            desc: "Quick-filter chips for Popular, Newest, Female-Only, Male-Only, and Mixed accommodations with upfront monthly fees and verified amenities."
          },
          {
            title: "Direct In-App Communication & Booking",
            desc: "Streamlines tenant-landlord communication, eliminating fraudulent middlemen and ensuring safe rental agreements."
          }
        ],
        process: [
          {
            step: "01. Requirement Analysis",
            desc: "Gathered domain requirements to define essential features for both landlords (occupancy, payments) and students (location filtering, budget constraints)."
          },
          {
            step: "02. User Research",
            desc: "Conducted interviews with Surabaya college students and boarding house owners to identify real-world pain points in search and rental management."
          },
          {
            step: "03. Competitor Analysis",
            desc: "Analyzed regional property and rental apps to uncover unmet needs in local community discovery and payment tracking."
          },
          {
            step: "04. User Persona",
            desc: "Formulated dual archetypes: 'Ningsih' (a landlord needing simple property oversight) and 'Pou' (a student seeking safe, affordable accommodation)."
          },
          {
            step: "05. User Flow",
            desc: "Mapped intuitive user journeys for property listing, room discovery, filter refinement, and direct inquiry."
          },
          {
            step: "06. Wireframing",
            desc: "Sketched low-fidelity structural layouts to establish strong information hierarchy, thumb-friendly navigation, and clear calls-to-action."
          },
          {
            step: "07. UI Design",
            desc: "Created polished high-fidelity screens utilizing accessible typography, modern card designs, and vibrant ocean-blue accents for high visual trust."
          },
          {
            step: "08. Prototyping",
            desc: "Constructed an interconnected mobile prototype in Figma complete with device frames, micro-interactions, and simulated user flows."
          },
          {
            step: "09. Usability Testing",
            desc: "Evaluated interactive flows with prospective users to assess ease of navigation, search speed, and dashboard comprehension."
          },
          {
            step: "10. Design Iteration",
            desc: "Refined visual cues, badge contrast, and bottom navigation bar ergonomics based on user testing insights."
          }
        ],
        screensCaption: "<span>Left:</span> Landlord / Boarding House Owner Dashboard (Empty State & Room Inventory) • <span>Right:</span> Student / Tenant Surabaya District Search & Location Filter Portal"
      }
    },
    {
      id: "genware-safety",
      title: "GenWare – Personal Safety, Emergency SOS & Psychological Support App",
      type: "UI/UX Design",
      desc: "A personal safety mobile application featuring one-tap emergency SOS dispatch, real-time trusted circle tracking, automated police alerts, and integrated psychological counseling for trauma recovery.",
      image: "images/projects/safeguard-sos.png",
      skills: [
        "Requirement Analysis",
        "User Research",
        "Competitor Analysis",
        "User Persona",
        "User Flow",
        "Wireframing",
        "UI Design",
        "Prototyping",
        "Usability Testing",
        "Design Iteration"
      ],
      link: "https://www.figma.com/proto/XUqBaSLyRlsmf2tbt4lvbA/DAPUR?node-id=78-1076&viewport=-1256%2C-1067%2C0.29&t=suHV19E4gksay9lJ-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=78%3A1072&show-proto-sidebar=0&hide-ui=1&page-id=0%3A1",
      details: {
        role: "End-to-End UI/UX Designer & UX Researcher",
        scope: "Personal Safety & Rapid Emergency Response",
        platform: "Mobile Application (Figma Interactive Prototype)",
        targetUsers: "Women, High-Risk Commuters, General Public & Trauma Survivors",
        problem: "Rising incidents of street crime, harassment, robbery, and domestic violence have heightened anxiety in public and private spaces, especially for women navigating urban environments alone. During critical crises, victims cannot afford to make phone calls or type text messages. Moreover, victims who experience trauma frequently lack discrete, accessible avenues to receive professional psychological counseling and emotional support.",
        solution: "GenWare provides an all-in-one safety ecosystem engineered for rapid intervention and holistic post-incident recovery. With a single tap of an oversized emergency SOS button, the app immediately dispatches real-time GPS telemetry and distress alerts to connected trusted friends and nearby police stations. To ensure complete survivor care, the platform also integrates a direct, confidential portal for booking consultations with licensed psychologists.",
        screensCaption: "<span>Left:</span> User Safety Dashboard (Daily Status & One-Tap SOS Button) • <span>Center:</span> Real-Time GPS Tracking Map & Companion Safety Status • <span>Right:</span> Emergency Danger Alert & Step-by-Step Response Protocol",
        keyFeatures: [
          {
            title: "One-Tap Instant SOS Emergency Trigger",
            desc: "High-contrast panic button that instantly broadcasts real-time GPS coordinates and emergency distress signals to pre-connected friends and nearby authorities without requiring typing or phone calls."
          },
          {
            title: "Real-Time Companion Location & Danger Tracking",
            desc: "Interactive map interface that monitors user status ('AMAN' vs 'BAHAYA') and allows trusted companions to track live location telemetry during active threats."
          },
          {
            title: "Automated Police & Emergency Dispatch Link",
            desc: "Direct integration routing distress signals and live incident coordinates to the nearest police precinct for rapid on-site tactical assistance."
          },
          {
            title: "Confidential Psychological Counseling Portal",
            desc: "Private consultation channels connecting survivors directly with certified mental health professionals and psychologists for trauma recovery."
          }
        ],
        process: [
          {
            step: "01. Requirement Analysis",
            desc: "Identified core crisis safety requirements: zero-friction emergency triggers, low-bandwidth location dispatch, and confidential mental health accessibility."
          },
          {
            step: "02. User Research",
            desc: "Conducted user interviews with female commuters, students, and community members regarding street harassment fears and post-crisis psychological care needs."
          },
          {
            step: "03. Competitor Analysis",
            desc: "Benchmarked regional safety apps, identifying major gaps in integrated mental trauma support, companion clarity, and local emergency precinct routing."
          },
          {
            step: "04. User Persona",
            desc: "Formulated archetypes such as 'Melissa Peters' (a night commuter seeking swift protection) and designated emergency contacts acting as first responders."
          },
          {
            step: "05. User Flow",
            desc: "Architected rapid two-second emergency dispatch flows requiring minimal cognitive load and zero complex navigation during high-stress panic states."
          },
          {
            step: "06. Wireframing",
            desc: "Designed low-fidelity screen layouts emphasizing large tactile touch zones for the SOS button, high-visibility status indicators, and clear emergency steps."
          },
          {
            step: "07. UI Design",
            desc: "Crafted a reassuring high-fidelity visual system with clean status cards ('AMAN' in green, 'BAHAYA' in crimson) and accessible, thumb-friendly navigation."
          },
          {
            step: "08. Prototyping",
            desc: "Assembled a full interactive prototype in Figma simulating the SOS activation flow, companion danger notification, and live map navigation."
          },
          {
            step: "09. Usability Testing",
            desc: "Tested rapid-response usability under simulated emergency scenarios to evaluate trigger speed, companion comprehension, and navigation to nearest assistance."
          },
          {
            step: "10. Design Iteration",
            desc: "Added clear, numbered emergency action protocols to the companion alert screen to guide panic-stricken friends on how to coordinate with police."
          }
        ]
      }
    },
    {
      id: "sipaling-naspad",
      title: "SIPALING – Mobile Street Food Cart Tracking & On-Demand Order System",
      type: "UI/UX & Web Design",
      desc: "A mobile-first street food tracking and ordering platform for roving Padang food carts in Surabaya, enabling customers to locate moving riders live, verify remaining menu portions, and choose between self pickup or doorstep delivery.",
      image: "images/projects/sipaling-mobile.png",
      skills: [
        "Requirement Analysis",
        "User Research",
        "Competitor Analysis",
        "User Persona",
        "User Flow",
        "Wireframing",
        "UI Design",
        "Prototyping",
        "Usability Testing",
        "Design Iteration"
      ],
      link: "https://www.figma.com/proto/XUqBaSLyRlsmf2tbt4lvbA/DAPUR?node-id=848-5014&viewport=-1256%2C-1067%2C0.29&t=suHV19E4gksay9lJ-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=848%3A5014&show-proto-sidebar=0&hide-ui=1&page-id=0%3A1",
      details: {
        role: "End-to-End UI/UX Designer & Researcher",
        scope: "Surabaya Area – Food-Tech & Street Food Innovation",
        platform: "Mobile Application & Responsive Web Landing Page (Figma)",
        targetUsers: "Surabaya Office Workers, University Students, Street Food Lovers & Moving Cart Riders",
        problem: "In Surabaya, traditional roving street food vendors—specifically mobile Padang food cart riders—frequently miss out on willing customers due to unpredictable routes. When hungry customers walk to a known cart spot, the cart has often already moved away. In addition, customers face uncertainty regarding real-time menu availability and remaining portion counts (e.g., whether favorites like Rendang or Ayam Pop are still available), causing purchase hesitation and missed sales.",
        solution: "SIPALING (NasPad Keliling) bridges street food tradition with modern food-tech convenience through a dual-channel digital ecosystem. Customers can initiate their journey from a responsive marketing landing page or dive straight into the mobile web app to track nearby moving carts in real time, view live dish stock (remaining portion counts), and choose between two flexible order modes: Self Pick-Up (walking to the cart's live pin) or Call Riders (on-demand doorstep delivery within a 1.5 km radius).",
        gallery: [
          {
            src: "images/projects/sipaling-web.png",
            title: "Brand Marketing Landing Page",
            caption: "<span>Responsive Web Landing Page:</span> Brand marketing portal introducing the roving Padang concept, live tracking features, member loyalty rewards, and direct order onboarding."
          },
          {
            src: "images/projects/sipaling-mobile.png",
            title: "Mobile Customer Experience",
            caption: "<span>Mobile Interface Screens:</span> Left: Brand Splash Screen • Center: Real-Time Moving Cart GPS Tracking Map with Available Dish Portions • Right: Checkout Screen with Pick Up vs. Call Riders Mode."
          }
        ],
        keyFeatures: [
          {
            title: "Real-Time Moving Cart GPS Tracking",
            desc: "Live interactive map showing precise locations of moving Padang carts, estimated arrival times, and distance radii (e.g., 1.5 km)."
          },
          {
            title: "Live Dish Stock & Portion Counter",
            desc: "Real-time inventory indicators displaying exactly how many portions of signature dishes (Rendang, Ayam Pop, Telur) remain on each active cart."
          },
          {
            title: "Dual Fulfillment Modes (Pick Up vs. Call Riders)",
            desc: "Empowers customers to either walk over to the nearby cart for self pickup or summon the rider directly to their address for warm doorstep delivery."
          },
          {
            title: "Dual-Entry Customer Journey (Web & Mobile)",
            desc: "Supports dual start flows: an informative brand landing page for new visitors and an instant mobile app flow for immediate tracking and ordering."
          }
        ],
        process: [
          {
            step: "01. Requirement Analysis",
            desc: "Analyzed street vendor operational dynamics in Surabaya, defining requirements for low-friction cart tracking, dual checkout modes, and real-time portion counters."
          },
          {
            step: "02. User Research",
            desc: "Conducted interviews with Surabaya residents and office workers about their pain points with moving street carts, menu unpredictability, and lunch break time constraints."
          },
          {
            step: "03. Competitor Analysis",
            desc: "Benchmarked food delivery giants (GoFood, GrabFood) versus street vendor workflows to design a hyper-localized, ultra-lightweight ordering experience."
          },
          {
            step: "04. User Persona",
            desc: "Developed archetypes: 'Sasaw' (a Ketintang resident craving quick lunch) and roving food riders balancing moving carts with delivery requests."
          },
          {
            step: "05. User Flow",
            desc: "Created dual-entry flows: one starting from the web marketing landing page and one straight into the mobile customer app for instant GPS tracking."
          },
          {
            step: "06. Wireframing",
            desc: "Drafted low-fidelity screen layouts emphasizing cart map pins, radius call indicators, clear dish portion badges, and seamless checkout toggles."
          },
          {
            step: "07. UI Design",
            desc: "Designed a rich, warm visual identity inspired by traditional Padang cuisine (terracotta red, warm cream, clean cart typography) across web and mobile viewports."
          },
          {
            step: "08. Prototyping",
            desc: "Engineered an interconnected Figma prototype demonstrating cart discovery, real-time rider tracking, dish selection, and Pick Up vs. Call Riders checkout."
          },
          {
            step: "09. Usability Testing",
            desc: "Conducted user testing sessions to evaluate route tracking clarity, understanding of portion counters, and checkout completion speed."
          },
          {
            step: "10. Design Iteration",
            desc: "Refined checkout delivery toggles and rider ETA displays based on feedback to ensure customers feel confident their order will arrive promptly."
          }
        ]
      }
    }
  ],

  /* ---------- CERTIFICATES: gambar di images/certificates/ ---------- */
  certificates: [
    {
      title: "UI/UX Design Fundamentals",
      sub: "MySkill • Jan 2025",
      issuer: "MySkill (PT Linimuda Inspirasi Negeri)",
      date: "January 22, 2025",
      credential: "223683/UIX/LM/01/2025",
      image: "images/certificates/cert-uiux-fundamentals.jpg"
    },
    {
      title: "UX Research Fundamentals",
      sub: "MySkill • Feb 2025",
      issuer: "MySkill (PT Linimuda Inspirasi Negeri)",
      date: "February 18, 2025",
      credential: "233888/UIX/LM/02/2025",
      image: "images/certificates/cert-ux-research.jpg"
    },
    {
      title: "Figma Introduction",
      sub: "MySkill • Mar 2025",
      issuer: "MySkill (PT Linimuda Inspirasi Negeri)",
      date: "March 1, 2025",
      credential: "236376/UIX/LM/03/2025",
      image: "images/certificates/cert-figma-intro.jpg"
    },
    {
      title: "Power BI Dashboard Specialist",
      sub: "KarirNex by PT Ebiz Karisma Internasional • Sep 2026",
      issuer: "KarirNex by PT Ebiz Karisma Internasional",
      date: "September 24 & 26, 2026",
      credential: "012/B-1/31PBIDA/KRX/IX/2026",
      image: "images/certificates/cert-power-bi.jpg"
    },
    {
      title: "Alur Belajar Data Analyst",
      sub: "HaloTech Academy • Sep 2026",
      issuer: "HaloTech Academy (PT Nagamulia Teknologi Nusantara)",
      date: "September 11–13, 2026",
      credential: "HTA26-WD16-194",
      image: "images/certificates/cert-data-analyst.jpg"
    },
    {
      title: "Mastering Excel for Office Administration",
      sub: "AmanExcel • Sep 2026",
      issuer: "AmanExcel (Amanda Sri Nugroho, Microsoft Excel Trainer)",
      date: "September 22, 2026",
      credential: "001/MEAP/001/IX/2026",
      image: "images/certificates/cert-excel-office.jpg"
    },
    {
      title: "Exclusive Short Class Excel & Google Sheet",
      sub: "KarirNex by PT Ebiz Karisma Internasional • Oct 2026",
      issuer: "KarirNex by PT Ebiz Karisma Internasional",
      date: "October 30 & 31, 2026",
      credential: "444/B-2/36EGS2/KRX/XI/2026",
      image: "images/certificates/cert-excel-gsheet.jpg"
    }
  ],

  /* ---------- ACHIEVEMENTS & COMPETITIONS ---------- */
  achievements: [
    {
      title: "Finalist – Student Scientific Week (PIM)",
      sub: "Telkom University Surabaya • 2024",
      role: "Team Lead",
      project: "Mobile Web-Based Informative Assessment System for Rural Communities in Madura Island",
      desc: "Served as Team Lead in developing an informative mobile web-based assessment system tailored for rural areas across Madura Island. Directed system conceptualization, led proposal drafting, and delivered the final stage pitch in the championship round.",
      image: ""
    },
    {
      title: "TOP 10 Finalist – Gayatama International 3D Design Competition",
      sub: "State University of Surabaya (UNESA) • 2024",
      role: "Top 10 Finalist • Team Member",
      project: "Solaris Charge: Solar-Powered Electric Motorcycle Charging Station for Renewable Energy",
      desc: "Collaborated as a core team member designing 'Solaris Charge', an eco-friendly solar-powered electric motorcycle charging station promoting renewable energy adoption. Contributed to technical proposal drafting and final presentation defense in the international competition.",
      image: ""
    }
  ],

  /* ---------- TECH STACK ----------
     [nama, singkatan, logo] */
  stack: [
    ["Figma", "Fg", "images/logos/figma.svg"],
    ["Canva", "Cv", "images/logos/canva.svg"],
    ["CapCut", "Cc", "images/logos/capcut.svg"],
    ["Microsoft Word", "Wd", "images/logos/word.svg"],
    ["Microsoft Excel", "Xl", "images/logos/excel.svg"],
    ["JavaScript", "JS", "images/logos/javascript.svg"],
    ["HTML", "H5", "images/logos/html5.svg"],
    ["CSS", "C3", "images/logos/css3.svg"],
    ["Python", "Py", "images/logos/python.svg"],
    ["MySQL", "My", "images/logos/mysql.svg"],
    ["Git", "Gi", "images/logos/git.svg"],
    ["GitHub", "GH", "images/logos/github.svg"],
    ["XAMPP", "Xa", "images/logos/xampp.svg"]
  ]
};
