// Vercel Serverless Function: GET /api/participants
const PARTICIPANTS = [
  { seat: 1, code: "SMB-001", name: "I Gusti Ayu Ananda Putri", call: "Nanda", gender: "Perempuan", room: "421", disc: "D/I", mbti: "ENFP", pos: "Sisi Kiri Meja U (#1)" },
  { seat: 2, code: "SMB-002", name: "Sofyan Thohari", call: "Popan", gender: "Laki-laki", room: "425", disc: "S", mbti: "ISFP", pos: "Sisi Kiri Meja U (#2)" },
  { seat: 3, code: "SMB-003", name: "Sri Wijayati", call: "Jay", gender: "Perempuan", room: "413", disc: "D/I", mbti: "INFP", pos: "Sisi Kiri Meja U (#3)" },
  { seat: 4, code: "SMB-004", name: "Elfasa Khoirumansyah", call: "Elfasa", gender: "Laki-laki", room: "425", disc: "I/S", mbti: "ISFJ", pos: "Sisi Kiri Meja U (#4)" },
  { seat: 5, code: "SMB-005", name: "Maria Dita Fivtiari", call: "Dita", gender: "Perempuan", room: "412", disc: "D/C", mbti: "INFP", pos: "Sisi Kiri Meja U (#5)" },
  { seat: 6, code: "SMB-006", name: "Okki Putri Fadilah", call: "Okki", gender: "Perempuan", room: "422", disc: "I/S", mbti: "ESFJ", pos: "Sisi Kiri Meja U (#6)" },
  { seat: 7, code: "SMB-007", name: "Nindy Amalia", call: "Nindy", gender: "Perempuan", room: "422", disc: "D/I", mbti: "ESTP", pos: "Sisi Kiri Meja U (#7)" },
  { seat: 8, code: "SMB-008", name: "Paramitha Maharesmi Nugraheni Putri", call: "Mitha", gender: "Perempuan", room: "421", disc: "S/C", mbti: "INFP", pos: "Sisi Kiri Meja U (#8)" },
  { seat: 9, code: "SMB-009", name: "Fuad Jaka Pamungkas", call: "Jaka", gender: "Laki-laki", room: "415", disc: "I/D", mbti: "ENFP", pos: "Sisi Tengah Bawah (#9)" },
  { seat: 10, code: "SMB-010", name: "Dimas Wiyanarko", call: "Dimas", gender: "Laki-laki", room: "416", disc: "C/S", mbti: "ISTJ", pos: "Sisi Tengah Bawah (#10)" },
  { seat: 11, code: "SMB-011", name: "I Gusti Putu Yaktianuraga", call: "Bagus", gender: "Laki-laki", room: "416", disc: "D/I", mbti: "ENTJ", pos: "Sisi Tengah Bawah (#11)" },
  { seat: 12, code: "SMB-012", name: "Yulia Mekar Rini", call: "Yulia", gender: "Perempuan", room: "424", disc: "C/S", mbti: "ISTP", pos: "Sisi Tengah Bawah (#12)" },
  { seat: 13, code: "SMB-013", name: "Gilang Risnantyo", call: "Gilang", gender: "Laki-laki", room: "414", disc: "D/I", mbti: "ISTP", pos: "Sisi Kanan Meja U (#13)" },
  { seat: 14, code: "SMB-014", name: "Linda Susanto", call: "Linda", gender: "Perempuan", room: "423", disc: "S/C", mbti: "ISFJ", pos: "Sisi Kanan Meja U (#14)" },
  { seat: 15, code: "SMB-015", name: "Irvani Putri", call: "Irvani", gender: "Perempuan", room: "423", disc: "D/I", mbti: "ENFP", pos: "Sisi Kanan Meja U (#15)" },
  { seat: 16, code: "SMB-016", name: "Ainur Hasanah", call: "Ainur", gender: "Perempuan", room: "417", disc: "I/C", mbti: "INFP", pos: "Sisi Kanan Meja U (#16)" },
  { seat: 17, code: "SMB-017", name: "Mya Mar'atus Sholikhah", call: "Mya", gender: "Perempuan", room: "424", disc: "D/C", mbti: "ESFP", pos: "Sisi Kanan Meja U (#17)" },
  { seat: 18, code: "SMB-018", name: "Adiel Priyarama", call: "Adiel", gender: "Laki-laki", room: "414", disc: "S/C", mbti: "ISTP", pos: "Sisi Kanan Meja U (#18)" },
  { seat: 19, code: "SMB-019", name: "Etik Andriyanti", call: "Andri", gender: "Perempuan", room: "417", disc: "D/I", mbti: "ESTP", pos: "Sisi Kanan Meja U (#19)" },
  { seat: 20, code: "SMB-020", name: "Kensrie Diah Ayuningtyas", call: "Kensrie", gender: "Perempuan", room: "413", disc: "D/C", mbti: "ESTP", pos: "Sisi Kanan Meja U (#20)" }
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
    totalSeats: 20,
    participants: PARTICIPANTS
  });
};
