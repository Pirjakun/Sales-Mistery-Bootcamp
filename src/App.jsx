import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AppProvider } from './context/AppContext';

// Layouts
import { TopNavbar } from './components/layout/TopNavbar';
import { MobileBottomNav } from './components/layout/MobileBottomNav';
import { AdminLayout } from './pages/admin/AdminLayout';

// Participant Pages
import { HomePage } from './pages/HomePage';
import { SchedulePage } from './pages/SchedulePage';
import { HandbookPage } from './pages/HandbookPage';
import { ExplorePage } from './pages/ExplorePage';
import { SafetyPage } from './pages/SafetyPage';
import { SpeakersPage } from './pages/SpeakersPage';
import { MealsPage } from './pages/MealsPage';
import { ActivitiesPage } from './pages/ActivitiesPage';
import { ToolkitPage } from './pages/ToolkitPage';
import { InsightsPage } from './pages/InsightsPage';
import { FeedbackPage } from './pages/FeedbackPage';
import { TransportPage } from './pages/TransportPage';
import { ProfilePage } from './pages/ProfilePage';
import { AttendanceLanderPage } from './pages/AttendanceLanderPage';

// Admin Pages
import { AdminDashboard } from './pages/admin/AdminDashboard';
import { AdminParticipants } from './pages/admin/AdminParticipants';
import { AdminSchedule } from './pages/admin/AdminSchedule';
import { AdminAttendance } from './pages/admin/AdminAttendance';
import { AdminSeating } from './pages/admin/AdminSeating';
import { AdminInsights } from './pages/admin/AdminInsights';
import { AdminAnnouncements } from './pages/admin/AdminAnnouncements';

export function App() {
  return (
    <AppProvider>
      <Router>
        <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-amber-500 selection:text-slate-950 font-sans">
          {/* Main App Top Header */}
          <TopNavbar />

          {/* Page Routing Outlet */}
          <div className="flex-1 w-full max-w-6xl mx-auto px-4 py-4 sm:py-6">
            <Routes>
              {/* Participant Routes */}
              <Route path="/" element={<HomePage />} />
              <Route path="/schedule" element={<SchedulePage />} />
              <Route path="/schedule/:id" element={<SchedulePage />} />
              <Route path="/handbook" element={<HandbookPage />} />
              <Route path="/explore" element={<ExplorePage />} />
              <Route path="/safety" element={<SafetyPage />} />
              <Route path="/speakers" element={<SpeakersPage />} />
              <Route path="/meals" element={<MealsPage />} />
              <Route path="/activities" element={<ActivitiesPage />} />
              <Route path="/toolkit" element={<ToolkitPage />} />
              <Route path="/insights" element={<InsightsPage />} />
              <Route path="/feedback" element={<FeedbackPage />} />
              <Route path="/transportation" element={<TransportPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/attendance/:sessionId" element={<AttendanceLanderPage />} />

              {/* Admin Dashboard Routes */}
              <Route path="/admin" element={<AdminLayout />}>
                <Route index element={<AdminDashboard />} />
                <Route path="participants" element={<AdminParticipants />} />
                <Route path="schedule" element={<AdminSchedule />} />
                <Route path="attendance" element={<AdminAttendance />} />
                <Route path="seating" element={<AdminSeating />} />
                <Route path="insights" element={<AdminInsights />} />
                <Route path="announcements" element={<AdminAnnouncements />} />
                <Route path="feedback font-mono" element={<FeedbackPage />} />
              </Route>

              {/* Fallback redirect */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>

          {/* Mobile Bottom Navigation */}
          <MobileBottomNav />
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;
