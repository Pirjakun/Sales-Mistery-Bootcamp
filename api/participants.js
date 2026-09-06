// Vercel Serverless Function: GET /api/participants
const PARTICIPANTS = [
  { seat: 1, code: "SMB-001", name: "Fadli Fahmi Ali", email: "fadli.ali@werkudara.com", dept: "CEO · Werkudara Group", disc: "D (Dominant)", pos: "Sisi Kiri Meja U (Kursi #1)" },
  { seat: 2, code: "SMB-002", name: "Ahmad Rizki", email: "ahmad.rizki@ailesh.com", dept: "Business Development · Ailesh", disc: "I (Influencer)", pos: "Sisi Kiri Meja U (Kursi #2)" },
  { seat: 3, code: "SMB-003", name: "Eko Prasetyo", email: "eko.prasetyo@sandler.co.id", dept: "Senior Sales Specialist · Sandler", disc: "S (Steadiness)", pos: "Sisi Kiri Meja U (Kursi #3)" },
  { seat: 4, code: "SMB-004", name: "Budi Santoso", email: "budi.santoso@werkudara.com", dept: "Sales Executive · Werkudara", disc: "S (Steadiness)", pos: "Sisi Kiri Meja U (Kursi #4)" },
  { seat: 5, code: "SMB-005", name: "Dian Permata", email: "dian.permata@werkudara.com", dept: "Sales Lead · Werkudara Group", disc: "I (Influencer)", pos: "Sisi Kiri Meja U (Kursi #5)" },
  { seat: 6, code: "SMB-006", name: "Fitriani Putri", email: "fitri.putri@werkudara.com", dept: "Key Account Executive · Werkudara", disc: "C (Conscientious)", pos: "Sisi Kiri Meja U (Kursi #6)" },
  { seat: 7, code: "SMB-007", name: "Gilang Ramadhan", email: "gilang.r@ailesh.com", dept: "Sustainability Consultant · Ailesh", disc: "I (Influencer)", pos: "Sisi Kiri Meja U (Kursi #7)" },
  { seat: 8, code: "SMB-008", name: "Delon Sianipar", email: "delon.sianipar@sandler.co.id", dept: "Senior Consultant · Sandler Training", disc: "C (Conscientious)", pos: "Sisi Kiri Meja U (Kursi #8)" },
  { seat: 9, code: "SMB-009", name: "Hendra Wijaya", email: "hendra.w@werkudara.com", dept: "Regional Sales Manager · Werkudara", disc: "D (Dominant)", pos: "Sudut Kiri Bawah Meja U (Kursi #9)" },
  { seat: 10, code: "SMB-010", name: "Indah Lestari", email: "indah.lestari@werkudara.com", dept: "Corporate Sales · Werkudara", disc: "S (Steadiness)", pos: "Sisi Tengah Bawah (Kursi #10)" },
  { seat: 11, code: "SMB-011", name: "Joko Susilo", email: "joko.susilo@werkudara.com", dept: "Enterprise Sales Executive · Werkudara", disc: "D (Dominant)", pos: "Sisi Tengah Bawah (Kursi #11)" },
  { seat: 12, code: "SMB-012", name: "Fano Alfian Ardiansyah", email: "fano.alfian@ailesh.com", dept: "Founder & CEO · Ailesh", disc: "I (Influencer)", pos: "Sisi Tengah Bawah (Kursi #12)" },
  { seat: 13, code: "SMB-013", name: "Karin Novita", email: "karin.novita@sandler.co.id", dept: "Sales Trainer Associate · Sandler", disc: "C (Conscientious)", pos: "Sisi Tengah Bawah (Kursi #13)" },
  { seat: 14, code: "SMB-014", name: "Lukman Hakim", email: "lukman.hakim@werkudara.com", dept: "Strategic Account Manager · Werkudara", disc: "S (Steadiness)", pos: "Sudut Kanan Bawah Meja U (Kursi #14)" },
  { seat: 15, code: "SMB-015", name: "Maya Anggraini", email: "maya.a@ailesh.com", dept: "ESG & Sales Specialist · Ailesh", disc: "I (Influencer)", pos: "Sisi Kanan Meja U (Kursi #15)" },
  { seat: 16, code: "SMB-016", name: "Naufal Pratama", email: "naufal.p@werkudara.com", dept: "Commercial Executive · Werkudara", disc: "D (Dominant)", pos: "Sisi Kanan Meja U (Kursi #16)" },
  { seat: 17, code: "SMB-017", name: "Olivia Zahrani", email: "olivia.z@werkudara.com", dept: "Client Relations Lead · Werkudara", disc: "S (Steadiness)", pos: "Sisi Kanan Meja U (Kursi #17)" },
  { seat: 18, code: "SMB-018", name: "Panji Kusuma", email: "panji.k@werkudara.com", dept: "Business Development · Werkudara", disc: "I (Influencer)", pos: "Sisi Kanan Meja U (Kursi #18)" },
  { seat: 19, code: "SMB-019", name: "Rina Marlina", email: "rina.marlina@werkudara.com", dept: "Sales Consultant · Werkudara", disc: "C (Conscientious)", pos: "Sisi Kanan Meja U (Kursi #19)" },
  { seat: 20, code: "SMB-020", name: "Siti Rahmawati", email: "siti.rahma@werkudara.com", dept: "Account Manager · Werkudara", disc: "S (Steadiness)", pos: "Sisi Kanan Meja U (Kursi #20)" },
  { seat: 21, code: "SMB-021", name: "Surya Saputra", email: "surya.s@werkudara.com", dept: "Area Sales Executive · Werkudara", disc: "D (Dominant)", pos: "Sisi Kanan Meja U (Kursi #21)" },
  { seat: 22, code: "SMB-022", name: "Wahyu Hidayat", email: "wahyu.h@werkudara.com", dept: "Sales Performance Analyst · Werkudara", disc: "C (Conscientious)", pos: "Sisi Kanan Meja U (Kursi #22)" }
];

module.exports = (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  return res.status(200).json({
    event: "Sales Mastery Bootcamp 2026",
    location: "Kalyana Resort Kaliurang, Yogyakarta",
    totalSeats: 22,
    participants: PARTICIPANTS
  });
};
