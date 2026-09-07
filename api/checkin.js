// Vercel Serverless Function: POST /api/checkin
const PARTICIPANTS = [
  { seat: 1, code: "SMB-001", name: "I Gusti Ayu Ananda Putri", callName: "Nanda", room: "421", disc: "D/I (ENFP)", pos: "Sisi Kiri Meja U (Kursi #1)" },
  { seat: 2, code: "SMB-002", name: "Sofyan Thohari", callName: "Popan", room: "425", disc: "S (ISFP)", pos: "Sisi Kiri Meja U (Kursi #2)" },
  { seat: 3, code: "SMB-003", name: "Sri Wijayati", callName: "Jay", room: "413", disc: "D/I (INFP)", pos: "Sisi Kiri Meja U (Kursi #3)" },
  { seat: 4, code: "SMB-004", name: "Elfasa Khoirumansyah", callName: "Elfasa", room: "425", disc: "I/S (ISFJ)", pos: "Sisi Kiri Meja U (Kursi #4)" },
  { seat: 5, code: "SMB-005", name: "Maria Dita Fivtiari", callName: "Dita", room: "412", disc: "D/C (INFP)", pos: "Sisi Kiri Meja U (Kursi #5)" },
  { seat: 6, code: "SMB-006", name: "Okki Putri Fadilah", callName: "Okki", room: "422", disc: "I/S (ESFJ)", pos: "Sisi Kiri Meja U (Kursi #6)" },
  { seat: 7, code: "SMB-007", name: "Nindy Amalia", callName: "Nindy", room: "422", disc: "D/I (ESTP)", pos: "Sisi Kiri Meja U (Kursi #7)" },
  { seat: 8, code: "SMB-008", name: "Paramitha Maharesmi Nugraheni Putri", callName: "Mitha", room: "421", disc: "S/C (INFP)", pos: "Sisi Kiri Meja U (Kursi #8)" },
  { seat: 9, code: "SMB-009", name: "Fuad Jaka Pamungkas", callName: "Jaka", room: "415", disc: "I/D (ENFP)", pos: "Sisi Tengah Bawah (Kursi #9)" },
  { seat: 10, code: "SMB-010", name: "Dimas Wiyanarko", callName: "Dimas", room: "416", disc: "C/S (ISTJ)", pos: "Sisi Tengah Bawah (Kursi #10)" },
  { seat: 11, code: "SMB-011", name: "I Gusti Putu Yaktianuraga", callName: "Bagus", room: "416", disc: "D/I (ENTJ)", pos: "Sisi Tengah Bawah (Kursi #11)" },
  { seat: 12, code: "SMB-012", name: "Yulia Mekar Rini", callName: "Yulia", room: "424", disc: "C/S (ISTP)", pos: "Sisi Tengah Bawah (Kursi #12)" },
  { seat: 13, code: "SMB-013", name: "Gilang Risnantyo", callName: "Gilang", room: "414", disc: "D/I (ISTP)", pos: "Sisi Kanan Meja U (Kursi #13)" },
  { seat: 14, code: "SMB-014", name: "Linda Susanto", callName: "Linda", room: "423", disc: "S/C (ISFJ)", pos: "Sisi Kanan Meja U (Kursi #14)" },
  { seat: 15, code: "SMB-015", name: "Irvani Putri", callName: "Irvani", room: "423", disc: "D/I (ENFP)", pos: "Sisi Kanan Meja U (Kursi #15)" },
  { seat: 16, code: "SMB-016", name: "Ainur Hasanah", callName: "Ainur", room: "417", disc: "I/C (INFP)", pos: "Sisi Kanan Meja U (Kursi #16)" },
  { seat: 17, code: "SMB-017", name: "Mya Mar'atus Sholikhah", callName: "Mya", room: "424", disc: "D/C (ESFP)", pos: "Sisi Kanan Meja U (Kursi #17)" },
  { seat: 18, code: "SMB-018", name: "Adiel Priyarama", callName: "Adiel", room: "414", disc: "S/C (ISTP)", pos: "Sisi Kanan Meja U (Kursi #18)" },
  { seat: 19, code: "SMB-019", name: "Etik Andriyanti", callName: "Andri", room: "417", disc: "D/I (ESTP)", pos: "Sisi Kanan Meja U (Kursi #19)" },
  { seat: 20, code: "SMB-020", name: "Kensrie Diah Ayuningtyas", callName: "Kensrie", room: "413", disc: "D/C (ESTP)", pos: "Sisi Kanan Meja U (Kursi #20)" }
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
