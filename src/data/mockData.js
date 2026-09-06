// Realistic Mock Dataset for Sales Mastery Bootcamp (Kalyana Resort)

export const MOCK_EVENT = {
  title: "SALES MASTERY BOOTCAMP",
  subtitle: "High Performance Sales Leadership & Mastery",
  venue: "Kalyana Resort, Kaliurang",
  address: "Jl. Boyong No.99, Kaliurang, Hargobinangun, Pakem, Sleman, DIY",
  duration: "2 Nights / 3 Days",
  dates: "September 10 – 12, 2026",
  wifiName: "Kalyana_Guest_5G",
  wifiPass: "SalesMastery2026",
  picContact: "+62 812-3456-7890 (Event Director - Maya)",
  emergencyContact: "+62 811-9988-7766 (Security & First Aid)"
};

export const MOCK_PARTICIPANTS = [
  { id: "p-01", code: "ARIE01", name: "Arie Farchan", group: "Group 01", room: "Room 203", roommate: "Budi Santoso", seat: "Table 01 - Seat A01", bus: "Bus 01", dietary: "No Seafood", safetyWatched: true },
  { id: "p-02", code: "BUDI02", name: "Budi Santoso", group: "Group 01", room: "Room 203", roommate: "Arie Farchan", seat: "Table 01 - Seat A02", bus: "Bus 01", dietary: "Regular", safetyWatched: true },
  { id: "p-03", code: "CITR03", name: "Citra Dewi", group: "Group 01", room: "Room 204", roommate: "Dian Sastro", seat: "Table 01 - Seat A03", bus: "Bus 01", dietary: "Vegetarian", safetyWatched: false },
  { id: "p-04", code: "DIAN04", name: "Dian Sastro", group: "Group 01", room: "Room 204", roommate: "Citra Dewi", seat: "Table 01 - Seat A04", bus: "Bus 01", dietary: "Halal", safetyWatched: true },
  { id: "p-05", code: "EKA05", name: "Eka Prasetya", group: "Group 01", room: "Room 205", roommate: "Fajar Nugraha", seat: "Table 01 - Seat A05", bus: "Bus 01", dietary: "Regular", safetyWatched: true },
  { id: "p-06", code: "FAJA06", name: "Fajar Nugraha", group: "Group 02", room: "Room 205", roommate: "Eka Prasetya", seat: "Table 02 - Seat B01", bus: "Bus 01", dietary: "No Dairy", safetyWatched: false },
  { id: "p-07", code: "GITA07", name: "Gita Gutawa", group: "Group 02", room: "Room 206", roommate: "Hany Permata", seat: "Table 02 - Seat B02", bus: "Bus 01", dietary: "Regular", safetyWatched: true },
  { id: "p-08", code: "HANY08", name: "Hany Permata", group: "Group 02", room: "Room 206", roommate: "Gita Gutawa", seat: "Table 02 - Seat B03", bus: "Bus 01", dietary: "Regular", safetyWatched: true },
  { id: "p-09", code: "INDR09", name: "Indra Wijaya", group: "Group 02", room: "Room 207", roommate: "Joko Widodo", seat: "Table 02 - Seat B04", bus: "Bus 01", dietary: "Gluten Free", safetyWatched: true },
  { id: "p-10", code: "JOKO10", name: "Joko Widodo", group: "Group 02", room: "Room 207", roommate: "Indra Wijaya", seat: "Table 02 - Seat B05", bus: "Bus 01", dietary: "Regular", safetyWatched: true },
  { id: "p-11", code: "KIKI11", name: "Kiki Amalia", group: "Group 03", room: "Room 301", roommate: "Lina Marlina", seat: "Table 03 - Seat C01", bus: "Bus 02", dietary: "Regular", safetyWatched: false },
  { id: "p-12", code: "LINA12", name: "Lina Marlina", group: "Group 03", room: "Room 301", roommate: "Kiki Amalia", seat: "Table 03 - Seat C02", bus: "Bus 02", dietary: "Vegetarian", safetyWatched: true },
  { id: "p-13", code: "MAYA13", name: "Maya Putri", group: "Group 03", room: "Room 302", roommate: "Nadia Vega", seat: "Table 03 - Seat C03", bus: "Bus 02", dietary: "Regular", safetyWatched: true },
  { id: "p-14", code: "NADI14", name: "Nadia Vega", group: "Group 03", room: "Room 302", roommate: "Maya Putri", seat: "Table 03 - Seat C04", bus: "Bus 02", dietary: "No Beef", safetyWatched: true },
  { id: "p-15", code: "OSCA15", name: "Oscar Lawalata", group: "Group 03", room: "Room 303", roommate: "Panji Pragiwaksono", seat: "Table 03 - Seat C05", bus: "Bus 02", dietary: "Regular", safetyWatched: false },
  { id: "p-16", code: "PANJ16", name: "Panji Pragiwaksono", group: "Group 04", room: "Room 303", roommate: "Oscar Lawalata", seat: "Table 04 - Seat D01", bus: "Bus 02", dietary: "Regular", safetyWatched: true },
  { id: "p-17", code: "RANI17", name: "Rani Mukherjee", group: "Group 04", room: "Room 304", roommate: "Siti Badriah", seat: "Table 04 - Seat D02", bus: "Bus 02", dietary: "Halal", safetyWatched: true },
  { id: "p-18", code: "SITI18", name: "Siti Badriah", group: "Group 04", room: "Room 304", roommate: "Rani Mukherjee", seat: "Table 04 - Seat D03", bus: "Bus 02", dietary: "No Nuts", safetyWatched: true },
  { id: "p-19", code: "TORA19", name: "Tora Sudiro", group: "Group 04", room: "Room 305", roommate: "Uus Kartajaya", seat: "Table 04 - Seat D04", bus: "Bus 02", dietary: "Regular", safetyWatched: true },
  { id: "p-20", code: "UUSK20", name: "Uus Kartajaya", group: "Group 04", room: "Room 305", roommate: "Tora Sudiro", seat: "Table 04 - Seat D05", bus: "Bus 02", dietary: "Regular", safetyWatched: true }
];

export const MOCK_SPEAKERS = [
  {
    id: "spk-01",
    name: "Hendrik Tanuwidjaja",
    role: "VP of Enterprise Sales",
    company: "Apex Global Growth",
    photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400",
    bio: "Over 18 years of B2B sales leadership scaling enterprise revenues across Asia Pacific. Author of 'High-Stakes Selling Matrix'.",
    expertise: ["Enterprise Negotiation", "Deal Structuring", "Sales Psychology"],
    quote: "Sales mastery is not about convincing people; it's about helping leaders solve high-stakes challenges.",
    sessionTitle: "Session 01: High-Stakes Enterprise Sales Architecture",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-businessmen-shaking-hands-after-a-meeting-42797-large.mp4"
  },
  {
    id: "spk-02",
    name: "Dr. Amanda Suryo",
    role: "Behavioral Psychologist & Sales Coach",
    company: "Mindset Performance Institute",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
    bio: "Pioneer in applying neuroscience to client relationship building and trust acceleration in complex consultative sales.",
    expertise: ["Trust Acceleration", "Cognitive Pitching", "Emotional Intelligence"],
    quote: "People buy emotionally and justify logically. Connect with their vision first.",
    sessionTitle: "Session 02: Trust Acceleration & Consultative Mastery",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-woman-talking-on-a-video-call-42867-large.mp4"
  },
  {
    id: "spk-03",
    name: "Reza Rahardian",
    role: "Head of Revenue Operations",
    company: "ScaleX Technologies",
    photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400",
    bio: "Specialist in pipeline execution, AI-driven sales enablement tools, and closing velocity metrics.",
    expertise: ["Pipeline Velocity", "AI Sales Enablement", "Forecast Accuracy"],
    quote: "Consistency in process turns ordinary sales teams into top 1% performers.",
    sessionTitle: "Session 03: Pipeline Velocity & Closing Engineering",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-young-man-working-on-his-laptop-42869-large.mp4"
  },
  {
    id: "spk-04",
    name: "Clarissa Wijaya",
    role: "Chief Executive Officer",
    company: "Vanguard Sales Group",
    photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400",
    bio: "Former Managing Director for ASEAN Markets, built and coached sales teams across 12 countries.",
    expertise: ["Sales Leadership", "Team Motivation", "Global Key Accounts"],
    quote: "True sales leaders don't build followers; they build champions who close deals.",
    sessionTitle: "Session 04: Leadership & Key Account Domination",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-group-of-multiethnic-business-people-meeting-42795-large.mp4"
  }
];

export const MOCK_SCHEDULE = [
  // DAY 1
  {
    id: "session-01",
    day: 1,
    dayName: "Day 1 - Arrival & High Stakes Strategy",
    date: "Sep 10, 2026",
    startTime: "12:00",
    endTime: "14:00",
    title: "Arrival, Check-in & Lunch Buffer",
    location: "Lobby & Kalyana Restaurant",
    type: "Meal",
    speakerId: null,
    description: "Welcome to Kalyana Resort! Check into your designated rooms, grab your welcome kit, and enjoy lunch at the main restaurant.",
    objective: "Settle in comfortably, connect with roommates, and prepare for the opening keynote.",
    preparation: "Collect room key from committee and ensure phone has web app open.",
    status: "Completed",
    reminderNote: "Don't forget to check your room number and assigned roommate on the My Info tab."
  },
  {
    id: "session-02",
    day: 1,
    dayName: "Day 1 - Arrival & High Stakes Strategy",
    date: "Sep 10, 2026",
    startTime: "14:00",
    endTime: "14:30",
    title: "Opening Ceremony & House Rules",
    location: "Main Ballroom - Kalyana Hall",
    type: "Training",
    speakerId: "spk-04",
    description: "Official welcome keynote, safety briefing overview, and introduction to the 4-Color Pen Toolkit system.",
    objective: "Align on bootcamp rules, expectations, and active participation mindset.",
    preparation: "Bring your clipboard, paper sheets, and 4-color pen.",
    status: "Completed",
    reminderNote: "Review the safety induction video in the Safety tab if you haven't watched it yet!"
  },
  {
    id: "session-03",
    day: 1,
    dayName: "Day 1 - Arrival & High Stakes Strategy",
    date: "Sep 10, 2026",
    startTime: "14:30",
    endTime: "16:30",
    title: "High-Stakes Enterprise Sales Architecture",
    location: "Main Ballroom - Kalyana Hall",
    type: "Training",
    speakerId: "spk-01",
    description: "Deep dive into complex deal structuring, mapping buying committees, and positioning against key enterprise competitors.",
    objective: "Master the 5-layer deal qualifying framework.",
    preparation: "Use Red Pen for challenges and Green Pen for new deal opportunities during session.",
    status: "Completed",
    reminderNote: "Session insight submission is open. Raise your physical Insight Flag or submit online!"
  },
  {
    id: "session-04",
    day: 1,
    dayName: "Day 1 - Arrival & High Stakes Strategy",
    date: "Sep 10, 2026",
    startTime: "16:30",
    endTime: "17:00",
    title: "Afternoon Coffee Break & Networking",
    location: "Resort Poolside Terrace",
    type: "Coffee Break",
    speakerId: null,
    description: "Enjoy hot tea, artisanal coffee, and Javanese traditional snacks while discussing session 01 insights with peers.",
    objective: "Refuel and network across table groups.",
    preparation: "Bring your business card or QR code contact.",
    status: "Completed",
    reminderNote: "Coffee Break is ready ☕ Grab hot coffee and snacks at Poolside Terrace."
  },
  {
    id: "session-05",
    day: 1,
    dayName: "Day 1 - Arrival & High Stakes Strategy",
    date: "Sep 10, 2026",
    startTime: "19:00",
    endTime: "21:00",
    title: "Welcome Dinner & Icebreaker Challenge",
    location: "Kalyana Garden Amphitheater",
    type: "Dinner",
    speakerId: null,
    description: "Relaxed outdoor BBQ buffet dinner with live acoustic music and team table bonding games.",
    objective: "Build team cohesion and informal mentorship connections.",
    preparation: "Smart casual clothing. Outdoor seating available.",
    status: "Completed",
    reminderNote: "Welcome Dinner starts at 19:00. Dress comfortably for evening garden air."
  },

  // DAY 2
  {
    id: "session-06",
    day: 2,
    dayName: "Day 2 - Mastery & Outdoor Energy",
    date: "Sep 11, 2026",
    startTime: "06:00",
    endTime: "07:15",
    title: "Morning Energy: HYROX Circuit & Mobility",
    location: "Outdoor Pine Lawn",
    type: "Morning Energy",
    speakerId: null,
    description: "Energetic morning functional fitness session led by Coach Fajar. Includes agility ladder, kettlebell swings, and mobility stretch.",
    objective: "Boost physical energy, alertness, and resilience before intensive training.",
    preparation: "Wear sportswear, running shoes, and bring water bottle + towel.",
    status: "In Progress",
    reminderNote: "Morning Energy starts in 15 minutes! Don't forget running shoes & towel."
  },
  {
    id: "session-07",
    day: 2,
    dayName: "Day 2 - Mastery & Outdoor Energy",
    date: "Sep 11, 2026",
    startTime: "07:30",
    endTime: "08:30",
    title: "Buffet Breakfast",
    location: "Kalyana Main Restaurant",
    type: "Meal",
    speakerId: null,
    description: "Healthy breakfast spread including traditional Indonesian dishes, omelette station, fresh juices, and fruits.",
    objective: "Fuel up for the intensive day ahead.",
    preparation: "Fresh clothing for morning sessions.",
    status: "Upcoming",
    reminderNote: "Breakfast is served until 08:30 at Kalyana Restaurant."
  },
  {
    id: "session-08",
    day: 2,
    dayName: "Day 2 - Mastery & Outdoor Energy",
    date: "Sep 11, 2026",
    startTime: "08:30",
    endTime: "10:30",
    title: "Trust Acceleration & Consultative Mastery",
    location: "Main Ballroom - Kalyana Hall",
    type: "Training",
    speakerId: "spk-02",
    description: "Learn how to build instant trust with C-level executives, ask disruptive discovery questions, and handle non-verbal objection cues.",
    objective: "Master 3 discovery questioning scripts.",
    preparation: "Review Session 02 materials on clipboard.",
    status: "Upcoming",
    reminderNote: "Session starts in 15 minutes! Bring your clipboard & 4-color pen."
  },
  {
    id: "session-09",
    day: 2,
    dayName: "Day 2 - Mastery & Outdoor Energy",
    date: "Sep 11, 2026",
    startTime: "10:30",
    endTime: "11:00",
    title: "Coffee Break 1",
    location: "Ballroom Foyer",
    type: "Coffee Break",
    speakerId: null,
    description: "Espresso bar, herbal tea selection, and fresh bakery pastries.",
    objective: "Quick rest and informal Q&A with Dr. Amanda.",
    preparation: "None required.",
    status: "Upcoming",
    reminderNote: "Coffee break 1 is ready in the Foyer ☕"
  },
  {
    id: "session-10",
    day: 2,
    dayName: "Day 2 - Mastery & Outdoor Energy",
    date: "Sep 11, 2026",
    startTime: "11:00",
    endTime: "12:30",
    title: "Pipeline Velocity & Closing Engineering",
    location: "Main Ballroom - Kalyana Hall",
    type: "Training",
    speakerId: "spk-03",
    description: "Tactical session on accelerating sales cycle speed, preventing deal stagnation, and using modern AI enablement tools.",
    objective: "Shorten average sales cycle length by 20%.",
    preparation: "Bring laptop or tablet if available.",
    status: "Upcoming",
    reminderNote: "Prepare your active pipeline questions for Reza Rahardian."
  },
  {
    id: "session-11",
    day: 2,
    dayName: "Day 2 - Mastery & Outdoor Energy",
    date: "Sep 11, 2026",
    startTime: "12:30",
    endTime: "14:00",
    title: "Networking Lunch",
    location: "Kalyana Restaurant & Garden Terrace",
    type: "Meal",
    speakerId: null,
    description: "Gourmet Indonesian buffet with live grilled chicken and vegetarian options.",
    objective: "Rest and recharge for the afternoon outdoor team challenge.",
    preparation: "Change into outdoor challenge attire after lunch.",
    status: "Upcoming",
    reminderNote: "Lunch is served. Remember to rehydrate!"
  },
  {
    id: "session-12",
    day: 2,
    dayName: "Day 2 - Mastery & Outdoor Energy",
    date: "Sep 11, 2026",
    startTime: "14:30",
    endTime: "17:00",
    title: "Outdoor Sales Simulation & Team Challenge",
    location: "Kalyana Forest Park & Obstacle Area",
    type: "Outdoor",
    speakerId: "spk-04",
    description: "Interactive team competition testing negotiation under pressure, crisis resource allocation, and team deal execution.",
    objective: "Apply sales leadership principles in real-time fast-paced scenarios.",
    preparation: "Apply sunscreen, mosquito repellent, wear outdoor sneakers.",
    status: "Upcoming",
    reminderNote: "Outdoor session starts soon! Apply sunscreen & mosquito repellent provided in Outdoor Care kit."
  },
  {
    id: "session-13",
    day: 2,
    dayName: "Day 2 - Mastery & Outdoor Energy",
    date: "Sep 11, 2026",
    startTime: "18:30",
    endTime: "21:30",
    title: "House of Raminten Experience & Culinary Evening",
    location: "The House of Raminten (Off-site)",
    type: "Dinner",
    speakerId: null,
    description: "Special cultural evening featuring iconic Yogyakarta cuisine, unique traditional ambiance, and celebration dinner.",
    objective: "Immerse in local culinary culture and celebrate Day 2 achievements.",
    preparation: "Shuttle bus departs from Kalyana Main Lobby at 18:30 sharp.",
    status: "Upcoming",
    reminderNote: "Shuttle buses for Raminten depart from Lobby at 18:30 sharp. Be on time!"
  },

  // DAY 3
  {
    id: "session-14",
    day: 3,
    dayName: "Day 3 - Playbook & Commitment",
    date: "Sep 12, 2026",
    startTime: "06:30",
    endTime: "08:00",
    title: "Morning Stretch & Breakfast",
    location: "Garden Lawn & Restaurant",
    type: "Meal",
    speakerId: null,
    description: "Relaxed morning stretch followed by final morning buffet breakfast.",
    objective: "Refuel and pack personal belongings before morning final sessions.",
    preparation: "Complete room packing before 11:00 AM check-out.",
    status: "Upcoming",
    reminderNote: "Good morning! Final day of Sales Mastery Bootcamp."
  },
  {
    id: "session-15",
    day: 3,
    dayName: "Day 3 - Playbook & Commitment",
    date: "Sep 12, 2026",
    startTime: "08:30",
    endTime: "10:30",
    title: "Leadership & Key Account Domination",
    location: "Main Ballroom - Kalyana Hall",
    type: "Training",
    speakerId: "spk-04",
    description: "Executive strategy session on retaining Tier-1 enterprise accounts, land-and-expand revenue models, and sales team leadership.",
    objective: "Formulate 90-day account expansion plans.",
    preparation: "Bring completed insight notes from Day 1 and Day 2.",
    status: "Upcoming",
    reminderNote: "Final training session starting at 08:30."
  },
  {
    id: "session-16",
    day: 3,
    dayName: "Day 3 - Playbook & Commitment",
    date: "Sep 12, 2026",
    startTime: "10:30",
    endTime: "11:30",
    title: "Sales Mastery Playbook Synthesis & Action Commitments",
    location: "Main Ballroom - Kalyana Hall",
    type: "Training",
    speakerId: "spk-01",
    description: "Review top bootcamp insights, consolidate key learnings into the official Sales Mastery Playbook, and state individual action commitments.",
    objective: "Finalize personal 30-60-90 day sales action playbook.",
    preparation: "Open Insights tab to finalize your top action items.",
    status: "Upcoming",
    reminderNote: "Time to synthesize your 30-day personal Action Commitments!"
  },
  {
    id: "session-17",
    day: 3,
    dayName: "Day 3 - Playbook & Commitment",
    date: "Sep 12, 2026",
    startTime: "11:30",
    endTime: "12:30",
    title: "Closing Ceremony & Award Presentation",
    location: "Main Ballroom - Kalyana Hall",
    type: "Training",
    speakerId: "spk-04",
    description: "Bootcamp graduation ceremony, presentation of Top Insight Awards, Outdoor Challenge Champions, and group photo.",
    objective: "Celebrate individual and team milestones.",
    preparation: "Wear official bootcamp polo shirt for group photo.",
    status: "Upcoming",
    reminderNote: "Group photo at 12:00 PM on the main lawn!"
  },
  {
    id: "session-18",
    day: 3,
    dayName: "Day 3 - Playbook & Commitment",
    date: "Sep 12, 2026",
    startTime: "12:30",
    endTime: "13:30",
    title: "Farewell Lunch & Departure Shuttle",
    location: "Kalyana Restaurant & Lobby",
    type: "Transportation",
    speakerId: null,
    description: "Final lunch buffet, room check-out clearance, and departure shuttle buses to Adisucipto Airport & Tugu Station.",
    objective: "Safe departure and transition back.",
    preparation: "Ensure all personal belongings are collected.",
    status: "Upcoming",
    reminderNote: "Check-out reminder: double check room safe, drawer, and charger adapters before boarding buses."
  }
];

export const MOCK_KALYANA_LOCATIONS = [
  {
    id: "loc-01",
    name: "Main Ballroom (Kalyana Hall)",
    category: "Meeting Rooms",
    image: "https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&q=80&w=600",
    description: "Primary indoor training venue equipped with dual projectors, surround audio, and climate control.",
    direction: "Located on the Ground Floor directly accessible from the main lobby corridor.",
    note: "Main training sessions, opening ceremony, and playbook synthesis take place here."
  },
  {
    id: "loc-02",
    name: "Kalyana Main Restaurant",
    category: "Restaurant",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=600",
    description: "Open-air resort dining venue serving breakfast, buffet lunch, and gourmet dinner.",
    direction: "Adjacent to the swimming pool, 2 minutes walk from main rooms.",
    note: "Buffet lines open 15 minutes before scheduled meal times."
  },
  {
    id: "loc-03",
    name: "Outdoor Pine Lawn & Amphitheater",
    category: "Outdoor Area",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=600",
    description: "Lush green pine lawn for Morning Energy fitness circuits, outdoor icebreakers, and evening BBQ.",
    direction: "Behind Kalyana Hall toward Merapi view deck.",
    note: "Sunscreen and mosquito repellent stations are located near the lawn entrance."
  },
  {
    id: "loc-04",
    name: "Main Reception & Concierge Lobby",
    category: "Lobby",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=600",
    description: "Welcome area, room key collection, shuttle bus drop-off/pick-up, and information desk.",
    direction: "Resort main entrance entrance road.",
    note: "Shuttle bus departures for off-site dinner gather here."
  },
  {
    id: "loc-05",
    name: "Restrooms & Refreshment Hub",
    category: "Toilet",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=600",
    description: "Clean luxury restrooms with fresh hand towels and automated sanitizers.",
    direction: "Located on left wing of Ballroom foyer and right side of main restaurant.",
    note: "Accessible for all participants."
  },
  {
    id: "loc-06",
    name: "Musalla (Prayer Room)",
    category: "Prayer Room",
    image: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&q=80&w=600",
    description: "Air-conditioned quiet prayer room with wudu facilities, prayer mats, and sarong/mukena.",
    direction: "1st floor right wing near room 108.",
    note: "Separate prayer areas provided for brothers and sisters."
  },
  {
    id: "loc-07",
    name: "Emergency Assembly Point",
    category: "Assembly Point",
    image: "https://images.unsplash.com/photo-1508873696983-2df515122519?auto=format&fit=crop&q=80&w=600",
    description: "Open parking lawn marked with bright green safety signs for emergency gatherings.",
    direction: "Front courtyard near main resort gate.",
    note: "In case of alarm, move calmly via lit evacuation corridors."
  }
];

export const MOCK_EXPLORE_DESTINATIONS = [
  {
    id: "exp-01",
    name: "Warung Kopi Klotok",
    category: "Coffee & Local Eats",
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=600",
    description: "Famous authentic Javanese wood-fire coffee, banana fritters (pisang goreng), and traditional village buffet.",
    distance: "2.8 km",
    travelTime: "7 mins drive",
    mapUrl: "https://maps.google.com/?q=Kopi+Klotok+Kaliurang"
  },
  {
    id: "exp-02",
    name: "Merapi Lava Tour Viewpoint",
    category: "Nature & Adventure",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=600",
    description: "Breathtaking views of Mount Merapi peak, Jeep adventure tracks, and volcanic museum.",
    distance: "4.5 km",
    travelTime: "12 mins drive",
    mapUrl: "https://maps.google.com/?q=Merapi+Lava+Tour"
  },
  {
    id: "exp-03",
    name: "Tlogo Putri Kaliurang Park",
    category: "Attraction",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=600",
    description: "Serene mountain park surrounded by pine trees, monkey sanctuary, and pedal boats.",
    distance: "1.2 km",
    travelTime: "4 mins drive / 15 mins walk",
    mapUrl: "https://maps.google.com/?q=Tlogo+Putri+Kaliurang"
  },
  {
    id: "exp-04",
    name: "Jadadah Tempe Mbah Carik",
    category: "Food & Souvenirs",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=600",
    description: "Legendary Kaliurang culinary heritage snack made of savory sticky rice and marinated savory tempeh.",
    distance: "0.8 km",
    travelTime: "3 mins drive / 10 mins walk",
    mapUrl: "https://maps.google.com/?q=Jadah+Tempe+Mbah+Carik"
  }
];

export const MOCK_MEALS = [
  {
    day: 1,
    date: "Sep 10, 2026",
    meals: [
      { type: "Lunch", time: "12:30 - 14:00", location: "Kalyana Restaurant", menu: "Nasi Gurih, Ayam Goreng Lengkuas, Sambal Terasi, Sayur Asem, Fresh Fruit Slice, Iced Tea", notes: "Buffet style. Special vegetarian options available." },
      { type: "Coffee Break", time: "16:30 - 17:00", location: "Poolside Terrace", menu: "Espresso, Cappuccino, Traditional Wedang Ronde, Pisang Keju, Klepon", notes: "Rest and mingle." },
      { type: "Dinner", time: "19:00 - 21:00", location: "Garden Lawn", menu: "Outdoor BBQ Feast: Grilled Tenderloin, Honey Mustard Chicken, Roasted Corn, Fresh Garden Salad, Gelato Bar", notes: "Welcome BBQ Dinner & Live Music." }
    ]
  },
  {
    day: 2,
    date: "Sep 11, 2026",
    meals: [
      { type: "Breakfast", time: "07:30 - 08:30", location: "Kalyana Restaurant", menu: "Bubur Ayam Kampung, Omelette Station, Pancakes with Maple Syrup, Fresh Pastries, Fresh Juice, Coffee/Tea", notes: "Fuel up for Day 2 training." },
      { type: "Coffee Break 1", time: "10:30 - 11:00", location: "Ballroom Foyer", menu: "Artisanal Drip Coffee, Bajigur, Lumpia Semarang, Risoles Mayo", notes: "Mid-morning boost." },
      { type: "Lunch", time: "12:30 - 14:00", location: "Kalyana Restaurant", menu: "Nasi Daun Jeruk, Empal Gentong, Tahu Tempe Bacem, Kerupuk, Es Buah Fresh", notes: "Prepare for afternoon outdoor challenge." },
      { type: "Dinner", time: "18:30 - 21:30", location: "The House of Raminten (Off-site)", menu: "Iconic Raminten Special Menu: Ayam Kremes, Sego Kucing, Tahu Pong, Wedang Uwuh, Es Fermentasi", notes: "Shuttle bus departs from lobby at 18:30 sharp. Food ordering link provided.", isRaminten: true, orderUrl: "https://raminten.com/menu-order" }
    ]
  },
  {
    day: 3,
    date: "Sep 12, 2026",
    meals: [
      { type: "Breakfast", time: "07:30 - 08:30", location: "Kalyana Restaurant", menu: "Nasi Goreng Special, Sausage & Scrambled Eggs, Croissants, Tropical Fruit Bowl, Coffee Bar", notes: "Final bootcamp breakfast." },
      { type: "Lunch", time: "12:30 - 13:30", location: "Kalyana Restaurant", menu: "Farewell Buffet: Sop Buntut, Ayam Bakar Jimbaran, Mixed Vegetables, Pudding Vanilla, Fresh Juices", notes: "Farewell lunch before shuttle departures." }
    ]
  }
];

export const MOCK_MORNING_ENERGY = {
  time: "06:00 - 07:15 AM",
  location: "Outdoor Pine Lawn",
  coach: "Coach Fajar Nugraha (Certified Functional Trainer)",
  whatToWear: "Bootcamp Sports T-shirt, athletic shorts/tights, running sneakers",
  whatToBring: "Water bottle, small hand towel, phone for attendance check-in",
  stations: [
    { name: "Station 1: Agility & Ladder Drills", desc: "Fast footwork and reaction drills to wake up mental focus." },
    { name: "Station 2: Kettlebell & Functional Power", desc: "Goblet squats, kettlebell swings, and core stability." },
    { name: "Station 3: Team Tug-of-War Challenge", desc: "High energy team tug-of-war build team spirit and adrenaline." },
    { name: "Station 4: Mobility & Breathing Cool Down", desc: "Guided deep breathing and stretch under the pine trees." }
  ]
};

export const MOCK_TOOLKIT_GUIDE = {
  penSystem: [
    { color: "BLUE", code: "#3B82F6", label: "General Notes & Concepts", use: "Key principles, framework steps, speaker quotes, core terminology." },
    { color: "RED", code: "#EF4444", label: "Problems & Challenges", use: "Current sales roadblocks, lost deal analysis, pipeline bottlenecks, client objections." },
    { color: "GREEN", code: "#10B981", label: "Ideas & Opportunities", use: "New pitch ideas, cross-selling tactics, high-value client target ideas." },
    { color: "BLACK", code: "#171717", label: "Actions & Decisions", use: "Specific 30-day action items, follow-up commitments, owner deadlines." }
  ],
  physicalItems: [
    { name: "Heavy Duty Clipboard", desc: "Allows crisp note-taking anywhere—in ballroom, lawn, or outdoor seating." },
    { name: "Grid Paper Sheets", desc: "Flexible structured sheets for mapping enterprise buying committees and sales funnels." },
    { name: "4-Color Retractable Pen", desc: "Color-coded note categorization system for instant visual clarity." },
    { name: "Physical Insight Flag", desc: "Raise your table flag whenever you have a game-changing sales insight during training." }
  ],
  videoExplainerUrl: "https://assets.mixkit.co/videos/preview/mixkit-hand-writing-on-a-notebook-with-a-pen-41554-large.mp4"
};

export const MOCK_ANNOUNCEMENTS = [
  { id: "anc-01", priority: "Important", title: "Safety Induction Video Reminder", text: "Please complete watching the short Safety Induction video in your app's Safety tab before 14:00.", time: "10:15 AM", isRead: false },
  { id: "anc-02", priority: "Urgent", title: "Shuttle Departure for Raminten Experience", text: "Buses depart from Kalyana Main Lobby at 18:30 sharp tonight. Please gather by 18:20.", time: "02:45 PM", isRead: false },
  { id: "anc-03", priority: "Normal", title: "Coffee Break is Ready ☕", text: "Fresh artisanal coffee, herbal tea, and snacks are served at the Ballroom Foyer.", time: "10:30 AM", isRead: true }
];

export const MOCK_INSIGHTS = [
  { id: "ins-01", sessionId: "session-03", participantId: "p-01", participantName: "Arie Farchan", type: "Idea", content: "Implement a 3-question qualifying script during first discovery calls to quickly weed out tire kickers.", actionItem: "Draft qualifying template and share with Group 01 by Friday.", isAnonymous: false, timestamp: "Sep 10, 15:45" },
  { id: "ins-02", sessionId: "session-03", participantId: "p-04", participantName: "Dian Sastro", type: "Opportunity", content: "Our enterprise packages should bundle 3 months of post-sale implementation support to boost deal size by 25%.", actionItem: "Pitch bundled pricing structure to VP of Sales.", isAnonymous: false, timestamp: "Sep 10, 16:10" },
  { id: "ins-03", sessionId: "session-08", participantId: "p-07", participantName: "Gita Gutawa", type: "Problem", content: "We spend too much time pitching features instead of uncovering the buyer's hidden operational pain points.", actionItem: "Adopt Dr. Amanda's 80/20 listening rule in all client meetings.", isAnonymous: false, timestamp: "Sep 11, 09:30" }
];

export const MOCK_FEEDBACK = [
  { id: "fb-01", sessionId: "session-03", participantId: "p-01", rating: 5, learnings: "The 5-layer deal qualifying framework gave me a clear lens to evaluate our Q4 enterprise pipeline.", improvements: "More time for interactive negotiation roleplays.", actionTaking: "Audit my current 10 active pipeline deals against the 5-layer framework." },
  { id: "fb-02", sessionId: "session-03", participantId: "p-02", rating: 5, learnings: "Understanding buyer psychology when pitching to C-Level suite.", improvements: "Provide printed templates of the deal matrix.", actionTaking: "Schedule pipeline review session with my team." }
];
