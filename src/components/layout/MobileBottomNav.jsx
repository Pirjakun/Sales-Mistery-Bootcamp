import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { 
  Home, 
  Calendar, 
  BookOpen, 
  Compass, 
  Lightbulb, 
  User 
} from 'lucide-react';

export const MobileBottomNav = () => {
  const location = useLocation();

  // Hide bottom nav on admin panel routes
  if (location.pathname.startsWith('/admin')) {
    return null;
  }

  const navItems = [
    { title: "Home", path: "/", icon: Home },
    { title: "Schedule", path: "/schedule", icon: Calendar },
    { title: "Handbook", path: "/handbook", icon: BookOpen },
    { title: "Explore", path: "/explore", icon: Compass },
    { title: "Insights", path: "/insights", icon: Lightbulb },
    { title: "Profile", path: "/profile", icon: User }
  ];

  return (
    <nav className="fixed bottom-3 left-1/2 -translate-x-1/2 z-40 w-[92%] max-w-md bg-zinc-950/85 backdrop-blur-xl border border-zinc-800/80 rounded-3xl p-1.5 shadow-2xl transition-all">
      <div className="flex items-center justify-around">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path || (item.path !== '/' && location.pathname.startsWith(item.path));
          
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={`relative flex flex-col items-center py-2 px-2.5 rounded-2xl transition-all ${
                isActive 
                  ? 'text-amber-400 font-bold scale-105' 
                  : 'text-zinc-500 hover:text-zinc-300'
              }`}
            >
              <Icon className={`w-4 h-4 ${isActive ? 'stroke-[2.5px]' : 'stroke-[1.75px]'}`} />
              <span className="text-[10px] mt-1 tracking-tight">{item.title}</span>
              
              {isActive && (
                <span className="absolute bottom-1 w-1 h-1 rounded-full bg-amber-400 shadow-sm shadow-amber-400" />
              )}
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
};
