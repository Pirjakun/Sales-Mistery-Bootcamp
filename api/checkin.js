// Vercel Serverless Function: POST /api/checkin
const PARTICIPANTS = [
  { seat: 1, code: "SMB-001", name: "Budi Santoso", call: "Nanda", gender: "Perempuan", room: "421", disc: "D/I", mbti: "ENFP", pos: "Sisi Kiri Meja U (#1)" },
  { seat: 2, code: "SMB-015", name: "Siti Rahma", call: "Dimas", gender: "Laki-laki", room: "413", disc: "C/S", mbti: "ISTJ", pos: "Sisi Kiri Meja U (#2)" },
  { seat: 3, code: "SMB-010", name: "Andi Wijaya", call: "Jay", gender: "Perempuan", room: "416", disc: "D/I", mbti: "INFP", pos: "Sisi Kiri Meja U (#3)" },
  { seat: 4, code: "SMB-003", name: "Dewi Lestari", call: "Elfasa", gender: "Laki-laki", room: "425", disc: "I/S", mbti: "ISFJ", pos: "Sisi Kiri Meja U (#4)" },
  { seat: 5, code: "SMB-008", name: "Eka Pratama", call: "Dita", gender: "Perempuan", room: "415", disc: "D/C", mbti: "INFP", pos: "Sisi Kiri Meja U (#5)" },
  { seat: 6, code: "SMB-014", name: "Fajar Hidayat", call: "Jaka", gender: "Laki-laki", room: "412", disc: "I/D", mbti: "ENFP", pos: "Sisi Kiri Meja U (#6)" },
  { seat: 7, code: "SMB-004", name: "Gita Gutawa", call: "Nindy", gender: "Perempuan", room: "422", disc: "D/I", mbti: "ESTP", pos: "Sisi Kiri Meja U (#7)" },
  { seat: 8, code: "SMB-011", name: "Hendra Setiawan", call: "Mitha", gender: "Perempuan", room: "423", disc: "S/C", mbti: "INFP", pos: "Sisi Kiri Meja U (#8)" },
  { seat: 9, code: "SMB-013", name: "Indah Permata", call: "Ainur", gender: "Perempuan", room: "421", disc: "I/C", mbti: "INFP", pos: "Sudut Kiri Bawah (#9)" },
  { seat: 10, code: "SMB-FADLI", name: "Lead Trainer", call: "Fadli", gender: "Laki-laki", room: "-", disc: "S", mbti: "Trainer", pos: "Sisi Tengah Bawah (#10)" },
  { seat: 11, code: "SMB-006", name: "Kartika Sari", call: "Mya", gender: "Perempuan", room: "424", disc: "D/C", mbti: "ESFP", pos: "Sisi Tengah Bawah (#11)" },
  { seat: 12, code: "SMB-012", name: "Lukman Hakim", call: "Yulia", gender: "Perempuan", room: "424", disc: "C/S", mbti: "ISTP", pos: "Sisi Tengah Bawah (#12)" },
  { seat: 13, code: "SMB-020", name: "Maya Anggraini", call: "Gilang", gender: "Laki-laki", room: "414", disc: "D/I", mbti: "ISTP", pos: "Sisi Tengah Bawah (#13)" },
  { seat: 14, code: "SMB-BUF14", name: "Empty / Buffer Seat", call: "Buffer", gender: "-", room: "-", disc: "-", mbti: "-", pos: "Sisi Tengah Bawah (#14)" },
  { seat: 15, code: "SMB-005", name: "Novi Saputra", call: "Irvani", gender: "Perempuan", room: "417", disc: "D/I", mbti: "ENFP", pos: "Sisi Kanan Meja U (#15)" },
  { seat: 16, code: "SMB-007", name: "Oscar Perdana", call: "Okki", gender: "Perempuan", room: "422", disc: "I/S", mbti: "ESFJ", pos: "Sisi Kanan Meja U (#16)" },
  { seat: 17, code: "SMB-022", name: "Putra Ramadhan", call: "Bagus", gender: "Laki-laki", room: "413", disc: "D/I", mbti: "ENTJ", pos: "Sisi Kanan Meja U (#17)" },
  { seat: 18, code: "SMB-019", name: "Rina Melati", call: "Linda", gender: "Perempuan", room: "417", disc: "S/C", mbti: "ISFJ", pos: "Sisi Kanan Meja U (#18)" },
  { seat: 19, code: "SMB-009", name: "Setyo Wibowo", call: "Andri", gender: "Perempuan", room: "423", disc: "D/I", mbti: "ESTP", pos: "Sisi Kanan Meja U (#19)" },
  { seat: 20, code: "SMB-016", name: "Tania Putri", call: "Popan", gender: "Laki-laki", room: "425", disc: "S", mbti: "ISFP", pos: "Sisi Kanan Meja U (#20)" },
  { seat: 21, code: "SMB-018", name: "Utami Dewi", call: "Kensrie", gender: "Perempuan", room: "416", disc: "D/C", mbti: "ESTP", pos: "Sisi Kanan Meja U (#21)" },
  { seat: 22, code: "SMB-017", name: "Vicky Hermawan", call: "Adiel", gender: "Laki-laki", room: "414", disc: "S/C", mbti: "ISTP", pos: "Sisi Kanan Meja U (#22)" }
];

module.exports = (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  const { code, seat } = req.body || req.query || {};
  if (!code && !seat) {
    return res.status(400).json({ error: "Mohon sediakan kode tiket atau nomor kursi." });
  }

  const participant = PARTICIPANTS.find(p => 
    (code && p.code.toUpperCase() === code.toUpperCase()) || 
    (seat && p.seat === parseInt(seat))
  );

  if (!participant) {
    return res.status(404).json({ error: "Peserta tidak ditemukan." });
  }

  const timestamp = new Date().toLocaleTimeString("id-ID", { hour: '2-digit', minute: '2-digit', second: '2-digit' });

  return res.status(200).json({
    success: true,
    timestamp: timestamp,
    participant: participant
  });
};
