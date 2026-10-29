interface Contact {
  email: string;
  github: string;
  linkedin: string;
}
interface Stat {
  value: number;
  decimals?: number;
  suffix?: string;
  label: string;
}
interface QuickFact {
  label: string;
  value: string;
}
interface EducationEntry {
  period: string;
  school: string;
  degree: string;
  detail: string;
  courses: string[];
}
interface Thesis {
  title: string;
  desc: string;
  tags: string[];
  advisor: string;
}
interface ExperienceEntry {
  period: string;
  company: string;
  title: string;
  type: string;
  points: string[];
  stack: string[];
}
interface TechnicalSkill {
  name: string;
  level: number; // 1 sampai 5
}
interface LanguageSkill {
  name: string;
  level: string;
}
interface Project {
  title: string;
  category: string;
  featured?: boolean;
  desc: string;
  metrics?: string[];
  tags: string[];
  image: string;
  demo: string;
  repo: string;
}
interface Achievement {
  title: string;
  meta: string;
  desc: string;
}
interface Credential {
  title: string;
  meta: string;
}
interface Testimonial {
  quote: string;
  name: string;
  role: string;
  avatar: string;
}

interface ProfileData {
  name: string;
  role: string;
  headline: string;
  rotatingRoles: string[];
  about: string;
  photo: string;
  photo2: string;
  cv: string;
  availability: string;
  location: string;
  contact: Contact;
  stats: Stat[];
  bio: string[];
  quickFacts: QuickFact[];
  interests: string[];
  now: string[];
  education: EducationEntry[];
  thesis: Thesis;
  experience: ExperienceEntry[];
  technical: TechnicalSkill[];
  soft: string[];
  languages: LanguageSkill[];
  tools: string[];
  categories: string[];
  projects: Project[];
  achievements: Achievement[];
  certifications: Credential[];
  organizations: Credential[];
  testimonials: Testimonial[];
}

/* ------------------------------ Data ------------------------------ */
const DATA: ProfileData = {
  name: "Adit",
  role: "Fresh Graduated S1 Teknik Informatika",
  headline: "Halo 👋, Saya Aditya Rizky Febryanto",
  rotatingRoles: ["Deep Learning", "Web Development", "Networking skills"],
  about: "",
  photo: "/assets/me-4.jfif", // foto utama di hero, rasio 4:5
  photo2: "", // foto kedua di bagian Tentang (kegiatan/hobi), rasio 4:3
  cv: "", // mis. "/cv-adit.pdf"
  availability: "Terbuka untuk Kesempatan Magang dan Pekerjaan",
  location: "Sampit, Kalimantan Tengah",
  contact: {
    email: "febryantoadityarizky@gmail.com",
    github: "https://github.com/FebryantoAdityaRizky020204",
    linkedin: "https://www.linkedin.com/in/aditya-rizky-febryanto/",
  },

  stats: [
    { value: 3.89, decimals: 2, label: "IPK" },
    { value: 6, suffix: "+", label: "Bulan pengalaman kerja/Magang" },
    // { value: 5, suffix: "+", label: "Proyek selesai" },
    // { value: 3, label: "Sertifikasi" },
  ],

  bio: [
    "Ketertarikan saya pada teknologi dimulai dari rasa penasaran: bagaimana sebuah komputer bisa mengenali sesuatu dari gambar? Rasa penasaran itu membawa saya ke dunia deep learning dan, belakangan, ke pengembangan aplikasi yang membuat hasil riset bisa dipakai orang lain.",
    "Saya terbiasa bekerja dengan data nyata yang berantakan, membandingkan beberapa pendekatan secara adil, lalu menyampaikan hasilnya dengan jelas. Di luar kelas, saya aktif di organisasi dan belajar lewat proyek pribadi.",
    "Saya mencari tim yang suka bereksperimen, terbuka pada umpan balik, dan mau berbagi ilmu.",
  ],
  quickFacts: [
    { label: "Lokasi", value: "Sampit, Kotawaringin Timur, Kalimantan Tengah" },
    { label: "Status", value: "Fresh Graduated" },
    { label: "Fokus", value: "Deep Learning, Web Development, Networking" },
    { label: "Bahasa", value: "Indonesia (Native), Inggris (Beginner)" },
    { label: "Ketersediaan", value: "Kesempatan Magang dan Pekerjaan" },
  ],
  interests: ["Membaca Novel", "Gim strategi"],
  now: ["Mencari magang di bidang data, web development, atau jaringan"],

  education: [
    {
      period: "2022 sampai 2026",
      school: "Universitas Palangka Raya",
      degree: "S1 Teknik Inofrmatika",
      detail: "Telah menyelesaikan perkuliahan dengan IPK 3.89/4.00.",
      courses: [
        "Machine Learning",
        "Visi Komputer",
        "Basis Data",
        "Struktur Data",
        "Statistika",
      ],
    },
    {
      period: "2019 sampai 2022",
      school: "SMK Negeri 1 Sampit",
      degree: "Jurusan Rekayasa Perangkat Lunak",
      detail: "Lulusan Terbaik ke-10 seangkatan",
      courses: [],
    },
  ],
  thesis: {
    // Sesuaikan judul dengan judul skripsi Anda yang sebenarnya
    title:
      "KLASIFIKASI PENYAKIT KULIT PADA CITRA DERMOSKOPI MENGGUNAKAN ARSITEKTUR HYBRID EFFICIENTNET-B0 DAN VISION MAMBA",
    desc: "Penelitian yang membandingkan tiga arsitektur deep learning pada dataset HAM10000, dengan sistem dua tahap: penyaring citra kulit atau bukan kulit, lalu klasifikasi tujuh kelas lesi.",
    tags: ["HAM10000", "EfficientNet-B0", "Vision Mamba", "Streamlit"],
    advisor: "",
  },

  experience: [
    {
      period: "Jun 2025 sampai Agu 2025",
      company: "Nama Perusahaan",
      title: "Magang [Posisi]",
      type: "Magang",
      points: [
        "Mengerjakan [fitur/tugas utama] yang dipakai oleh [jumlah/jenis pengguna].",
        "Berkolaborasi dengan tim [tim] untuk [hasil yang dicapai].",
        "Meningkatkan [metrik] sebesar [angka]% melalui [tindakan].",
      ],
      stack: ["React", "Node.js", "PostgreSQL"],
    },
    {
      period: "2023 sampai 2024",
      company: "Nama Organisasi / Lab / Klien",
      title: "[Posisi atau Peran]",
      type: "Freelance",
      points: [
        "Bertanggung jawab atas [lingkup pekerjaan].",
        "Menyelesaikan [proyek/hasil] tepat waktu.",
      ],
      stack: ["Python", "Pandas"],
    },
  ],

  technical: [
    { name: "Python", level: 4 },
    { name: "PyTorch dan deep learning", level: 4 },
    { name: "React dan Tailwind CSS", level: 3 },
    { name: "SQL dan analisis data", level: 3 },
    { name: "Git dan kolaborasi tim", level: 4 },
    { name: "Docker dan deployment", level: 2 },
  ],
  soft: [
    "Komunikasi",
    "Kerja tim",
    "Manajemen waktu",
    "Berpikir analitis",
    "Presentasi",
  ],
  languages: [
    { name: "Bahasa Indonesia", level: "Penutur asli" },
    { name: "Bahasa Inggris", level: "Profesional, TOEFL ITP 5xx" },
  ],
  tools: [
    "Python",
    "PyTorch",
    "TensorFlow",
    "Streamlit",
    "React",
    "Tailwind CSS",
    "Node.js",
    "Git",
    "Docker",
    "Kaggle",
    "Figma",
    "SQL",
    "Pandas",
    "scikit-learn",
    "Linux",
  ],

  categories: ["Semua", "AI/ML", "Web", "Data"],
  projects: [
    {
      title: "Sistem Klasifikasi Penyakit Kulit Dua Tahap",
      category: "AI/ML",
      featured: true,
      desc: "Membandingkan EfficientNet-B0, Vision Mamba, dan model hibrida keduanya pada dataset HAM10000. Sistem bekerja dua tahap: model penyaring memastikan gambar adalah kulit, lalu model klasifikasi menentukan satu dari tujuh jenis lesi. Hasilnya dipakai lewat aplikasi Streamlit.",
      metrics: [
        "3 arsitektur dibandingkan",
        "7 kelas lesi",
        "5 seed acak untuk validasi",
      ],
      tags: ["Python", "PyTorch", "Computer Vision", "Streamlit"],
      image: "",
      demo: "",
      repo: "https://github.com/username/proyek-1",
    },
    {
      title: "Nama Proyek Web",
      category: "Web",
      desc: "Satu atau dua kalimat tentang masalah yang diselesaikan, peran Anda, dan hasilnya.",
      tags: ["React", "Tailwind CSS", "Node.js"],
      image: "",
      demo: "https://contoh.com",
      repo: "https://github.com/username/proyek-2",
    },
    {
      title: "Dashboard Analisis Data",
      category: "Data",
      desc: "Satu atau dua kalimat tentang data yang dianalisis dan wawasan yang dihasilkan.",
      tags: ["Python", "SQL", "Dashboard"],
      image: "",
      demo: "",
      repo: "https://github.com/username/proyek-3",
    },
    {
      title: "Nama Proyek Web Kedua",
      category: "Web",
      desc: "Satu atau dua kalimat tentang masalah yang diselesaikan, peran Anda, dan hasilnya.",
      tags: ["React", "REST API"],
      image: "",
      demo: "https://contoh.com",
      repo: "https://github.com/username/proyek-4",
    },
  ],

  achievements: [
    {
      title: "Juara 2 Lomba [Nama Lomba]",
      meta: "Penyelenggara, 2024",
      desc: "Satu kalimat tentang karya atau pencapaian Anda.",
    },
    {
      title: "Penerima Beasiswa [Nama]",
      meta: "Pemberi beasiswa, 2022",
      desc: "Satu kalimat tentang kriteria atau jumlah penerima.",
    },
  ],
  certifications: [
    { title: "Machine Learning Specialization", meta: "Coursera, 2024" },
    { title: "Deep Learning with PyTorch", meta: "Nama Penyelenggara, 2024" },
    { title: "Responsive Web Design", meta: "freeCodeCamp, 2023" },
  ],
  organizations: [
    {
      title: "Anggota Divisi Riset",
      meta: "Himpunan Mahasiswa [Jurusan], 2022 sampai 2023",
    },
    {
      title: "Asisten Praktikum [Mata Kuliah]",
      meta: "Laboratorium [Nama], 2023",
    },
  ],
  testimonials: [
    {
      quote:
        "Cepat belajar, teliti, dan selalu menjelaskan hasil kerjanya dengan jelas.",
      name: "Nama Pembimbing",
      role: "Dosen pembimbing, Nama Universitas",
      avatar: "",
    },
    {
      quote:
        "Kontribusinya nyata di tim: tepat waktu dan mau membantu anggota lain.",
      name: "Nama Mentor",
      role: "Mentor magang, Nama Perusahaan",
      avatar: "",
    },
  ],
};

export default DATA;
