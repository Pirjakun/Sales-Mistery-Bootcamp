import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  MOCK_EVENT, 
  MOCK_PARTICIPANTS, 
  MOCK_SPEAKERS, 
  MOCK_SCHEDULE, 
  MOCK_KALYANA_LOCATIONS, 
  MOCK_EXPLORE_DESTINATIONS, 
  MOCK_MEALS, 
  MOCK_MORNING_ENERGY, 
  MOCK_TOOLKIT_GUIDE, 
  MOCK_ANNOUNCEMENTS, 
  MOCK_INSIGHTS, 
  MOCK_FEEDBACK 
} from '../data/mockData';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // Load or initialize state from localStorage
  const [participants, setParticipants] = useState(() => {
    const saved = localStorage.getItem('smb_participants');
    return saved ? JSON.parse(saved) : MOCK_PARTICIPANTS;
  });

  const [currentParticipantCode, setCurrentParticipantCode] = useState(() => {
    return localStorage.getItem('smb_current_code') || 'ARIE01';
  });

  const [schedule, setSchedule] = useState(() => {
    const saved = localStorage.getItem('smb_schedule');
    return saved ? JSON.parse(saved) : MOCK_SCHEDULE;
  });

  const [attendanceSessions, setAttendanceSessions] = useState(() => {
    const saved = localStorage.getItem('smb_att_sessions');
    return saved ? JSON.parse(saved) : [
      { id: 'att-session-03', sessionId: 'session-03', title: 'Session 01: Enterprise Sales Architecture', date: 'Sep 10, 2026', time: '14:30' },
      { id: 'att-session-06', sessionId: 'session-06', title: 'Session 06: Morning Energy HYROX', date: 'Sep 11, 2026', time: '06:00' },
      { id: 'att-session-08', sessionId: 'session-08', title: 'Session 02: Trust Acceleration & Consultative', date: 'Sep 11, 2026', time: '08:30' }
    ];
  });

  const [attendanceRecords, setAttendanceRecords] = useState(() => {
    const saved = localStorage.getItem('smb_att_records');
    return saved ? JSON.parse(saved) : [
      { id: 'ar-1', attendanceSessionId: 'att-session-03', sessionId: 'session-03', participantId: 'p-01', participantCode: 'ARIE01', participantName: 'Arie Farchan', timestamp: '2026-09-10T14:32:00', status: 'Present' },
      { id: 'ar-2', attendanceSessionId: 'att-session-03', sessionId: 'session-03', participantId: 'p-02', participantCode: 'BUDI02', participantName: 'Budi Santoso', timestamp: '2026-09-10T14:35:00', status: 'Present' },
      { id: 'ar-3', attendanceSessionId: 'att-session-03', sessionId: 'session-03', participantId: 'p-03', participantCode: 'CITR03', participantName: 'Citra Dewi', timestamp: '2026-09-10T14:45:00', status: 'Late' }
    ];
  });

  const [insights, setInsights] = useState(() => {
    const saved = localStorage.getItem('smb_insights');
    return saved ? JSON.parse(saved) : MOCK_INSIGHTS;
  });

  const [feedback, setFeedback] = useState(() => {
    const saved = localStorage.getItem('smb_feedback');
    return saved ? JSON.parse(saved) : MOCK_FEEDBACK;
  });

  const [announcements, setAnnouncements] = useState(() => {
    const saved = localStorage.getItem('smb_announcements');
    return saved ? JSON.parse(saved) : MOCK_ANNOUNCEMENTS;
  });

  // Simulated Day & Session for realistic event testing
  // Options: Day 1 (Sep 10 14:00), Day 2 Morning (Sep 11 06:15), Day 2 Training (Sep 11 08:30), Day 2 Outdoor (Sep 11 14:30), Day 3 (Sep 12 09:00)
  const [simulatedDay, setSimulatedDay] = useState(2);
  const [simulatedTime, setSimulatedTime] = useState("06:15"); // Day 2 morning energy time as default active state

  // Persist state changes
  useEffect(() => {
    localStorage.setItem('smb_participants', JSON.stringify(participants));
  }, [participants]);

  useEffect(() => {
    localStorage.setItem('smb_current_code', currentParticipantCode);
  }, [currentParticipantCode]);

  useEffect(() => {
    localStorage.setItem('smb_schedule', JSON.stringify(schedule));
  }, [schedule]);

  useEffect(() => {
    localStorage.setItem('smb_att_sessions', JSON.stringify(attendanceSessions));
  }, [attendanceSessions]);

  useEffect(() => {
    localStorage.setItem('smb_att_records', JSON.stringify(attendanceRecords));
  }, [attendanceRecords]);

  useEffect(() => {
    localStorage.setItem('smb_insights', JSON.stringify(insights));
  }, [insights]);

  useEffect(() => {
    localStorage.setItem('smb_feedback', JSON.stringify(feedback));
  }, [feedback]);

  useEffect(() => {
    localStorage.setItem('smb_announcements', JSON.stringify(announcements));
  }, [announcements]);

  // Current active participant helper
  const currentParticipant = participants.find(p => p.code.toUpperCase() === currentParticipantCode.toUpperCase()) || participants[0];

  // Helper actions
  const switchParticipantCode = (code) => {
    const found = participants.find(p => p.code.toUpperCase() === code.toUpperCase());
    if (found) {
      setCurrentParticipantCode(found.code);
      return { success: true, participant: found };
    }
    return { success: false, message: "Participant code not found. Example: ARIE01" };
  };

  const markSafetyWatched = (participantId) => {
    setParticipants(prev => prev.map(p => p.id === participantId ? { ...p, safetyWatched: true } : p));
  };

  const addInsight = (newInsight) => {
    const item = {
      id: `ins-${Date.now()}`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      participantId: currentParticipant.id,
      participantName: newInsight.isAnonymous ? "Anonymous Participant" : currentParticipant.name,
      ...newInsight
    };
    setInsights(prev => [item, ...prev]);
    return item;
  };

  const addFeedback = (newFeedback) => {
    const item = {
      id: `fb-${Date.now()}`,
      participantId: currentParticipant.id,
      ...newFeedback
    };
    setFeedback(prev => [item, ...prev]);
    return item;
  };

  const recordCheckIn = (sessionId, participantCode, status = "Present") => {
    const p = participants.find(part => part.code.toUpperCase() === participantCode.toUpperCase());
    if (!p) return { success: false, message: "Invalid participant code." };

    // Check if already checked in
    const existing = attendanceRecords.find(r => r.sessionId === sessionId && r.participantId === p.id);
    if (existing) {
      return { success: true, alreadyCheckedIn: true, record: existing, participant: p };
    }

    // Find or create attendance session
    let attSession = attendanceSessions.find(a => a.sessionId === sessionId);
    let attSessionId = attSession ? attSession.id : `att-${sessionId}`;

    if (!attSession) {
      const sessionObj = schedule.find(s => s.id === sessionId);
      attSession = {
        id: attSessionId,
        sessionId: sessionId,
        title: sessionObj ? sessionObj.title : 'Event Session',
        date: sessionObj ? sessionObj.date : 'Today',
        time: sessionObj ? sessionObj.startTime : '09:00'
      };
      setAttendanceSessions(prev => [attSession, ...prev]);
    }

    const newRecord = {
      id: `ar-${Date.now()}`,
      attendanceSessionId: attSessionId,
      sessionId: sessionId,
      participantId: p.id,
      participantCode: p.code,
      participantName: p.name,
      timestamp: new Date().toISOString(),
      status: status
    };

    setAttendanceRecords(prev => [newRecord, ...prev]);
    return { success: true, alreadyCheckedIn: false, record: newRecord, participant: p };
  };

  const createAttendanceSession = (sessionId) => {
    const sessionObj = schedule.find(s => s.id === sessionId);
    if (!sessionObj) return null;
    const existing = attendanceSessions.find(a => a.sessionId === sessionId);
    if (existing) return existing;

    const newAttSession = {
      id: `att-${sessionId}-${Date.now()}`,
      sessionId: sessionId,
      title: sessionObj.title,
      date: sessionObj.date,
      time: sessionObj.startTime
    };
    setAttendanceSessions(prev => [newAttSession, ...prev]);
    return newAttSession;
  };

  const addAnnouncement = (newAnc) => {
    const item = {
      id: `anc-${Date.now()}`,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isRead: false,
      ...newAnc
    };
    setAnnouncements(prev => [item, ...prev]);
  };

  // Participant CRUD for Admin
  const saveParticipant = (participantData) => {
    if (participantData.id) {
      setParticipants(prev => prev.map(p => p.id === participantData.id ? participantData : p));
    } else {
      const newP = {
        id: `p-${Date.now()}`,
        code: participantData.code || `PCODE${Math.floor(100 + Math.random() * 900)}`,
        safetyWatched: false,
        ...participantData
      };
      setParticipants(prev => [...prev, newP]);
    }
  };

  const deleteParticipant = (id) => {
    setParticipants(prev => prev.filter(p => p.id !== id));
  };

  // Session CRUD for Admin
  const saveScheduleSession = (sessionData) => {
    if (sessionData.id) {
      setSchedule(prev => prev.map(s => s.id === sessionData.id ? sessionData : s));
    } else {
      const newS = {
        id: `session-${Date.now()}`,
        status: 'Upcoming',
        ...sessionData
      };
      setSchedule(prev => [...prev, newS]);
    }
  };

  const deleteScheduleSession = (id) => {
    setSchedule(prev => prev.filter(s => s.id !== id));
  };

  // Contextual Reminders Generator based on simulated time and active schedule
  const getContextualReminder = () => {
    const activeDaySessions = schedule.filter(s => s.day === simulatedDay);
    
    if (simulatedDay === 2 && simulatedTime.startsWith("06")) {
      return {
        title: "Outdoor Morning Energy Starts Soon 🏃‍♂️",
        text: "Don't forget your running shoes, water bottle, and hand towel for the Pine Lawn circuit.",
        type: "energy",
        actionText: "VIEW MORNING ACTIVITY",
        actionLink: "/activities"
      };
    }

    if (simulatedDay === 2 && (simulatedTime.startsWith("08") || simulatedTime.startsWith("10"))) {
      return {
        title: "Training Session Toolkit Reminder 🖊️",
        text: "Bring your clipboard and 4-Color Pen. Blue = Notes, Red = Challenge, Green = Idea, Black = Action.",
        type: "training",
        actionText: "VIEW TOOLKIT GUIDE",
        actionLink: "/toolkit"
      };
    }

    if (simulatedDay === 2 && (simulatedTime.startsWith("14") || simulatedTime.startsWith("15") || simulatedTime.startsWith("16"))) {
      return {
        title: "Outdoor Team Challenge Care Essentials ☀️",
        text: "We've prepared sunscreen, mosquito repellent, lotion & towels at the Pine Lawn entrance.",
        type: "outdoor",
        actionText: "VIEW OUTDOOR CARE",
        actionLink: "/activities"
      };
    }

    if (simulatedDay === 2 && (simulatedTime.startsWith("18") || simulatedTime.startsWith("19"))) {
      return {
        title: "House of Raminten Shuttle Departure 🚌",
        text: "Dinner transportation departs from Kalyana Main Lobby at 18:30 sharp.",
        type: "dinner",
        actionText: "VIEW MEALS & MENU",
        actionLink: "/meals"
      };
    }

    if (simulatedDay === 3 && (simulatedTime.startsWith("11") || simulatedTime.startsWith("12"))) {
      return {
        title: "Hotel Check-Out & Belongings Check 🧳",
        text: "Check-out deadline is 11:00 AM. Double check room drawers and charger adapters.",
        type: "checkout",
        actionText: "VIEW DEPARTURE DETAILS",
        actionLink: "/transportation"
      };
    }

    return {
      title: "Welcome to Sales Mastery Bootcamp 👋",
      text: "Explore your 3-day digital handbook, view room details, or scan attendance QR when requested.",
      type: "general",
      actionText: "EXPLORE HANDBOOK",
      actionLink: "/handbook"
    };
  };

  const value = {
    eventInfo: MOCK_EVENT,
    participants,
    currentParticipant,
    currentParticipantCode,
    switchParticipantCode,
    schedule,
    speakers: MOCK_SPEAKERS,
    locations: MOCK_KALYANA_LOCATIONS,
    destinations: MOCK_EXPLORE_DESTINATIONS,
    meals: MOCK_MEALS,
    morningEnergy: MOCK_MORNING_ENERGY,
    toolkitGuide: MOCK_TOOLKIT_GUIDE,
    attendanceSessions,
    attendanceRecords,
    insights,
    feedback,
    announcements,
    simulatedDay,
    setSimulatedDay,
    simulatedTime,
    setSimulatedTime,
    markSafetyWatched,
    addInsight,
    addFeedback,
    recordCheckIn,
    createAttendanceSession,
    addAnnouncement,
    saveParticipant,
    deleteParticipant,
    saveScheduleSession,
    deleteScheduleSession,
    getContextualReminder
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error("useApp must be used within an AppProvider");
  return context;
};
