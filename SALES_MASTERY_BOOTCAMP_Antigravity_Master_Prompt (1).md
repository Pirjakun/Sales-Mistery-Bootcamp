# SALES MASTERY BOOTCAMP
## Antigravity Project Specification + Master Build Prompt

**Venue:** Kalyana Resort  
**Duration:** 2 Nights / 3 Days  
**Participants:** ±20  
**Product:** Digital Handbook + Participant Companion + Admin Dashboard

---

# PART A — PROJECT SPECIFICATION

## 1. PRODUCT VISION

Build a mobile-first web application for **Sales Mastery Bootcamp** at **Kalyana Resort**.

The primary purpose is to replace a traditional printed/PDF handbook with a useful, interactive digital handbook.

The website is NOT intended to become a complicated event-management platform.

The core product is:

> **Digital Handbook**

with supporting interactive features:

> **Attendance + Insights + Feedback + Activities + Announcements**

The website should answer:
- What is happening now?
- What happens next?
- Where do I need to go?
- What do I need to bring?
- Where is my room?
- What is today's meal?
- Who is the speaker?
- What should I know about Kalyana Resort?
- How do I check attendance?
- Where can I submit an insight?
- Where can I give feedback?

---

# 2. EXPERIENCE PRINCIPLES

### Thoughtful
Anticipate participant needs.

### Simple
Information must be easy to find.

### Purposeful
Every UI element must have a clear purpose.

### Engaging
Encourage participation without distracting from training.

### Modern
Use a premium, clean, Gen-Z-friendly visual language.

### Seamless
The participant should never need to ask basic logistical questions.

---

# 3. USER ROLES

## PARTICIPANT

Participants can:
- View digital handbook
- View schedule
- View session details
- View meals
- View Kalyana Resort guide
- View safety information
- View speakers
- View activities
- Check attendance
- Submit insights
- Submit feedback
- Read announcements
- View transportation information

Participants cannot modify event master data.

## ADMIN

Admin can:
- Manage participants
- Manage schedule
- Manage sessions
- Manage speakers
- Manage meals
- Manage activities
- Manage venue information
- Manage announcements
- Create attendance sessions
- Generate attendance QR
- Monitor attendance
- View insights
- View feedback
- Manage seating
- Export relevant data

---

# 4. INFORMATION ARCHITECTURE

## Participant Navigation

HOME  
SCHEDULE  
HANDBOOK  
EXPLORE  
MORE

Under MORE:
- My Information
- Speakers
- Meals
- Activities
- Safety
- Training Toolkit
- Insights
- Feedback
- Transportation
- House Rules

---

# 5. HOME DASHBOARD

The home page is the most important screen.

It should prioritize current and upcoming information.

Example:

**Good Morning 👋**

Welcome to Day 2 of  
**SALES MASTERY BOOTCAMP**

### NEXT UP
Morning Energy  
06:00 – 06:45  
Outdoor Area  
Starts in 25 minutes

**[VIEW ACTIVITY]**

Quick access:
- Schedule
- My Info
- Meals
- Kalyana Guide
- Attendance
- Insights

The dashboard should dynamically prioritize:
1. Current activity
2. Next activity
3. Important announcement
4. Contextual reminder
5. Quick actions

---

# 6. CONTEXTUAL REMINDERS

The system should show reminders based on schedule/activity type.

Examples:

**Before training:**  
"Your next session starts in 15 minutes."  
"Bring your clipboard and training toolkit."

**Before outdoor activity:**  
"Outdoor activity starts soon."  
"Don't forget sunscreen, mosquito repellent and water."

**Before dinner:**  
"Dinner starts at 19:00."  
"Transportation departs at 18:30."

**Before departure:**  
"Check-out is at 11:00."  
"Please make sure you have collected all belongings."

Do not spam reminders. Only display relevant reminders.

---

# 7. DIGITAL HANDBOOK

Create a structured handbook section.

## Event Information
- Event overview
- Dates
- Venue
- Participant information
- Important contacts

## Schedule
- Day 1
- Day 2
- Day 3

## Stay
- Room
- Roommate
- Check-in
- Check-out
- Wi-Fi

## Transportation
- Departure
- Return
- Meeting point
- PIC

## Meals
- Breakfast
- Lunch
- Coffee breaks
- Dinner

## Activities
- Morning Energy
- Outdoor activities
- Other activities

## Kalyana Guide
- Venue map
- Meeting room
- Restaurant
- Outdoor area
- Toilet
- Prayer room
- Emergency point

## Safety
- Safety induction
- Emergency exit
- Evacuation route
- Assembly point
- Emergency contact

## House Rules
## Important Links

---

# 8. SCHEDULE

Create a 3-day schedule using timeline/card UI.

Each schedule item contains:
- Day
- Start time
- End time
- Title
- Type
- Location
- Speaker
- Description
- Preparation
- Status

Activity types:
- Training
- Meal
- Coffee Break
- Outdoor
- Morning Energy
- Transportation
- Free Time
- Dinner

Users should be able to click a schedule item to see details.

---

# 9. SESSION DETAIL

Display:
- Session title
- Time
- Location
- Speaker
- Description
- Learning objective
- Preparation
- Related material
- Submit Insight button
- Feedback button

---

# 10. ATTENDANCE SYSTEM

Attendance is an interactive feature of the handbook.

It must NOT turn the website into a complicated HR system.

## Admin Flow

1. Open Attendance
2. Create Attendance Session
3. Enter session name
4. Enter date
5. Enter time
6. Generate QR
7. Display QR on projector/screen

Example:

**SALES MASTERY BOOTCAMP**  
**SESSION 01**  
Sales Strategy  
Scan to check in

## Participant Flow

1. Scan QR
2. Attendance page opens
3. Identify participant
4. Confirm attendance
5. Attendance recorded

For MVP, use participant code or simple participant selection.

Preferred participant code example:

`ARIE01`

Do not require complicated login.

---

# 11. ATTENDANCE DATA

Attendance record:
- ID
- Participant ID
- Session ID
- Check-in timestamp
- Status

Statuses:
- Present
- Late
- Absent

Admin can view an attendance matrix.

Example:

| Participant | Session 01 | Session 02 | Session 03 |
|-------------|------------|------------|------------|
| Arie        | Present    | Present    | Present    |
| Budi        | Present    | Late       | Present    |
| Citra       | Present    | Absent     | Present    |

Add export functionality if practical.

---

# 12. QR GENERATOR

Admin can create a dynamic QR for each attendance session.

Admin fields:
- Session
- Date
- Time

Button:

**GENERATE QR**

After generation:
- Show QR
- Fullscreen mode
- Copy attendance URL
- Download QR if supported

The QR should encode a session-specific URL.

Example:

`/attendance/session-01`

The participant does not need to manually enter the session.

---

# 13. PARTICIPANT INFORMATION

Participant fields:
- ID
- Name
- Participant code
- Group
- Room
- Roommate
- Seat
- Transportation
- Dietary notes

Display this on My Information.

---

# 14. SEATING

Create seating management for approximately 20 participants.

Seat statuses:
- GREEN = Available
- RED = Occupied

Admin can assign participants to seats.

Participant may optionally choose a seat during arrival/check-in.

Each table can display:
- Table number
- Seat number
- House rules
- Training toolkit information

---

# 15. SPEAKERS

Speaker profile:
- Name
- Photo
- Position
- Company
- Bio
- Expertise
- Session
- Quote
- Optional bumper video

---

# 16. SAFETY INDUCTION

Create a dedicated Safety page.

Main component:
**Safety Induction Video**

Additional content:
- Emergency exit
- Evacuation route
- Assembly point
- Emergency contact
- Important safety notes

Add:
"I've watched the safety induction"

Store completion status if practical.

---

# 17. KALYANA RESORT GUIDE

Create a venue guide.

Locations:
- Meeting rooms
- Restaurant
- Outdoor area
- Lobby
- Toilet
- Prayer room
- Assembly point
- Emergency exit

Include a map placeholder.

Each location can contain:
- Image
- Description
- Direction
- Important note

---

# 18. EXPLORE AROUND KALYANA

Create destination cards.

Each destination:
- Name
- Image
- Category
- Description
- Distance
- Estimated travel time
- Maps link

Categories:
- Food
- Coffee
- Nature
- Shopping
- Attraction

---

# 19. MEALS

Display meals by day.

Meal types:
- Breakfast
- Coffee Break 1
- Lunch
- Coffee Break 2
- Dinner

Each card:
- Time
- Location
- Menu
- Dietary information
- Notes

For last night:

**RAMINTEN EXPERIENCE**

Include:
- Dinner time
- Departure time
- Meeting point
- Transportation
- Order meal button
- External ordering link

---

# 20. MORNING ENERGY

Morning activity starts around 06:00.

Show:
- Activity name
- Time
- Location
- Duration
- Coach
- Workout stations
- What to wear
- What to bring

Possible activities:
- HYROX-style circuit
- Functional training
- Running
- Agility
- Strength
- Cardio
- Team challenge

Add:

**I'M JOINING**

Store participation if practical.

---

# 21. OUTDOOR CARE

Create an Outdoor Care section.

Items:
- Sunscreen
- Mosquito repellent
- Lotion
- Water
- Towel

Message:

> "We've prepared the essentials so you can focus on the experience."

---

# 22. TRAINING TOOLKIT

Explain physical training tools.

Items:
- Clipboard
- Blank paper
- Sticky notes
- 4-color pen
- Insight flag

4-color system:

BLUE = Notes  
RED = Problem / Challenge  
GREEN = Idea / Opportunity  
BLACK = Action / Decision

Include video placeholder:

"How to Use Your Training Toolkit"

---

# 23. INSIGHT SYSTEM

Physical insight flag:

Participants raise the flag when they have:
- Insight
- Idea
- Question
- Opportunity

Flow:

INSIGHT  
↓  
DISCUSS  
↓  
CHALLENGE  
↓  
ACTION

Digital alternative:

**SUBMIT AN INSIGHT**

Form fields:
- Session
- Type
- Insight
- Suggested action
- Participant
- Anonymous option

Types:
- Idea
- Problem
- Opportunity
- Question
- Action
- Learning

---

# 24. FEEDBACK

After each session:

"How was this session?"

Rating:
1–5

Questions:
- What did you learn?
- What should we improve?
- What action will you take?

Admin can view aggregated results.

---

# 25. ANNOUNCEMENTS

Admin can create announcements.

Priority:
- Normal
- Important
- Urgent

Examples:
- "Coffee Break is ready."
- "Meeting room has changed."
- "Dinner transportation departs at 18:30."

Urgent announcements appear prominently.

---

# 26. HOUSE RULES

Keep this simple.

Examples:

BE PRESENT  
PARTICIPATE  
ASK QUESTIONS  
SHARE YOUR INSIGHT  
RESPECT THE ROOM  
STAY CURIOUS  
HAVE FUN

---

# 27. TRANSPORTATION

Display:
- Departure location
- Departure time
- Vehicle
- Driver
- PIC
- Estimated arrival

Return transportation:
- Meeting point
- Departure time
- Destination

---

# 28. ADMIN DASHBOARD

Dashboard metrics:
- Total Participants
- Checked In
- Attendance Today
- Safety Completed
- Morning Activity Participation
- Insights Submitted
- Feedback Submitted

Navigation:
- Dashboard
- Participants
- Schedule
- Attendance
- Seating
- Speakers
- Meals
- Activities
- Announcements
- Insights
- Feedback
- Settings

---

# 29. ADMIN PARTICIPANTS

CRUD:
- Create
- Read
- Update
- Delete

Participant information:
- Name
- Participant code
- Group
- Room
- Roommate
- Seat
- Transportation
- Dietary note

---

# 30. ADMIN SCHEDULE

Admin can:
- Create session
- Edit session
- Delete session
- Change time
- Change location
- Assign speaker
- Add preparation notes

---

# 31. ADMIN CONTENT MANAGEMENT

Admin should be able to update:
- Handbook content
- Safety content
- Venue information
- Destination information
- Meal information
- Activities
- House rules
- Important links

Do not hardcode these values into UI components.

---

# 32. DATA MODEL

Use a simple relational or document-oriented model.

Core entities:

`participants`  
`rooms`  
`seats`  
`groups`  
`schedule`  
`sessions`  
`speakers`  
`meals`  
`activities`  
`destinations`  
`announcements`  
`attendance_sessions`  
`attendance_records`  
`insights`  
`feedback`  
`transportation`  
`venue_locations`  
`handbook_content`

---

# 33. RELATIONSHIPS

participants:
- belongs to group
- belongs to room
- belongs to seat
- belongs to transportation

sessions:
- optionally belongs to speaker

attendance_records:
- belongs to participant
- belongs to attendance_session

insights:
- belongs to participant
- belongs to session

feedback:
- belongs to participant
- belongs to session

---

# 34. DESIGN DIRECTION

Visual personality:
- Premium
- Minimal
- Warm
- Modern
- Gen-Z friendly
- Professional
- Experiential

Avoid:
- Excessive gradients
- Excessive animation
- Overly corporate dashboards
- Excessive icons
- Clutter
- Decorative UI with no purpose

The website should feel like an experience companion, not an enterprise HR system.

---

# 35. COLOR DIRECTION

Suggested palette:
- Off-white
- Warm gray
- Deep navy
- Natural green
- Soft beige

Use red only for:
- Urgent
- Occupied
- Problem

Use green for:
- Available
- Completed
- Positive state

---

# 36. TYPOGRAPHY

Recommended:
- Inter
- Manrope
- Plus Jakarta Sans
- DM Sans

Use strong hierarchy and generous whitespace.

---

# 37. MOBILE FIRST

Primary device:
Mobile phone

Design baseline:
390px width

Also support:
- Tablet
- Desktop
- Admin desktop

Participant bottom navigation:
- Home
- Schedule
- Explore
- More

---

# 38. MICROINTERACTIONS

Use subtle interactions:
- Button pressed state
- Card transition
- Attendance success
- Insight submitted confirmation
- Countdown
- Completion indicator

Avoid unnecessary animation.

---

# 39. EMPTY STATES

Examples:

No announcements:
"You're all caught up."

No insights:
"Your next insight could become our next action."

No schedule:
"Nothing scheduled right now. Enjoy the break."

---

# 40. PLAYBOOK DATA

Admin should have a summary page containing:
- Top insights
- Questions
- Ideas
- Problems
- Action items
- Participant learnings
- Session feedback

This data will later be transformed into:

**SALES MASTERY BOOTCAMP PLAYBOOK**

---

# 41. MOCK DATA

Create realistic mock data for:
- 20 participants
- 10 rooms
- 20 seats
- 3-day schedule
- 4 speakers
- Meals
- Morning activities
- Outdoor activities
- Announcements
- Sample insights
- Sample feedback

Use realistic but fictional names and data.

---

# 42. IMPLEMENTATION PHASES

## PHASE 1 — CORE HANDBOOK

Build:
- App shell
- Mobile navigation
- Home
- Schedule
- Session detail
- Handbook
- My Information
- Mock data

## PHASE 2 — EXPERIENCE CONTENT

Build:
- Kalyana Guide
- Safety
- Explore Around Kalyana
- Speakers
- Meals
- Activities
- Training Toolkit
- House Rules
- Transportation

## PHASE 3 — INTERACTIVE FEATURES

Build:
- Attendance
- QR generator
- Insights
- Feedback
- Announcements
- Seating

## PHASE 4 — ADMIN

Build:
- Admin dashboard
- Participant management
- Schedule management
- Attendance management
- QR generator
- Content management
- Insights dashboard
- Feedback dashboard

## PHASE 5 — POLISH

Audit:
- Responsive layout
- Empty states
- Loading states
- Error states
- Accessibility
- Navigation
- Data consistency
- Mobile usability
- Visual consistency

---

# 43. MVP ACCEPTANCE CRITERIA

The MVP is successful when:

1. Participant can open the digital handbook on mobile.
2. Participant can see today's agenda.
3. Participant can see the next activity.
4. Participant can view their information.
5. Participant can view Kalyana Resort information.
6. Participant can view safety information.
7. Participant can view meals.
8. Participant can view speakers.
9. Participant can submit an insight.
10. Participant can submit feedback.
11. Admin can manage participant data.
12. Admin can manage schedule.
13. Admin can create an attendance session.
14. Admin can generate an attendance QR.
15. Participant can scan the attendance QR.
16. Attendance is recorded.
17. Admin can see attendance results.
18. The app works smoothly on mobile.
19. No major navigation button leads to an unfinished page.
20. The experience feels like a digital handbook, not a complicated corporate application.

---

# PART B — MASTER PROMPT FOR ANTIGRAVITY

You are the lead product designer and full-stack engineer for this project.

Build a production-quality prototype of:

**SALES MASTERY BOOTCAMP**  
Digital Handbook & Participant Companion  
Kalyana Resort  
2 Nights / 3 Days  
Approximately 20 participants

Read and understand the complete project specification above before implementing anything.

IMPORTANT:

Do NOT build a complicated event-management system.

The primary product is a beautiful, useful, mobile-first **DIGITAL HANDBOOK**.

Interactive functions are supporting features:
- Attendance
- QR attendance
- Insights
- Feedback
- Activities
- Announcements

The experience should feel:
- Thoughtful
- Simple
- Premium
- Modern
- Warm
- Gen-Z friendly
- Purposeful

The participant should always know:
- What is happening now?
- What happens next?
- Where do I go?
- What do I need?
- What should I know?

---

# DEVELOPMENT APPROACH

Before writing the full application:

1. Inspect the existing project.
2. Identify the current framework and available dependencies.
3. Reuse the existing stack where possible.
4. Do not replace the entire project unnecessarily.
5. Create an implementation plan.
6. Define data models.
7. Define route structure.
8. Define reusable UI components.
9. Then implement in phases.

Do not ask unnecessary questions if reasonable assumptions can be made.

Use mock data where backend infrastructure is not yet available.

---

# FIRST TASK

Before implementation, create:
1. Sitemap
2. User flow
3. Data model
4. Component architecture
5. Route structure
6. Admin architecture
7. Implementation plan

Then start Phase 1.

---

# CORE ROUTES

Participant:

`/`  
`/schedule`  
`/schedule/:id`  
`/handbook`  
`/explore`  
`/safety`  
`/speakers`  
`/meals`  
`/activities`  
`/toolkit`  
`/insights`  
`/feedback`  
`/transportation`  
`/profile`

Attendance:

`/attendance/:sessionId`

Admin:

`/admin`  
`/admin/participants`  
`/admin/schedule`  
`/admin/attendance`  
`/admin/seating`  
`/admin/speakers`  
`/admin/meals`  
`/admin/activities`  
`/admin/announcements`  
`/admin/insights`  
`/admin/feedback`  
`/admin/settings`

---

# ATTENDANCE IMPLEMENTATION

Attendance is session-based.

Admin creates an Attendance Session with:
- Session
- Date
- Time

System generates a unique URL:

`/attendance/session-01`

Generate a QR code for that URL.

When participant scans:
1. Open attendance page.
2. Identify participant using participant code or simple participant selection.
3. Confirm attendance.
4. Save attendance record.
5. Show success state.

Success:

"You're checked in ✓"

"Sales Strategy Session"

"09:00"

Do not require complicated login.

---

# ADMIN QR EXPERIENCE

Admin page:

Attendance

[+ Create Attendance Session]

Fields:
Session Name
Date
Time

[Generate QR]

After generating:
- Display QR prominently.
- Fullscreen mode.
- Download QR.
- Copy attendance URL.

Make fullscreen mode suitable for projector display.

---

# DATA-FIRST ARCHITECTURE

Do not hardcode participant names, sessions, meals, speakers, or announcements directly into UI.

Use structured data.

The same data should power:
- Participant UI
- Admin UI
- Attendance
- Schedule
- Insights
- Feedback

---

# UX RULES

The participant homepage must prioritize:

1. Current activity
2. Next activity
3. Important announcement
4. Contextual reminder
5. Quick actions

Keep information scannable.

Use cards, sections, timeline, and clear hierarchy.

Do not make users dig through menus for critical information.

---

# DESIGN RULE

Do not overdesign.

Avoid making every section look like a marketing landing page.

This is an event companion.

Information hierarchy is more important than decoration.

Use animation only when it improves comprehension or feedback.

---

# CONTENT TONE

Use concise, friendly language.

Examples:
- "Good morning 👋"
- "You're all caught up."
- "Your next session starts in 15 minutes."
- "Don't forget your sunscreen."
- "Coffee Break is ready ☕"
- "Your insight could become our next action."

Avoid overly formal corporate wording.

---

# ACCESSIBILITY

Ensure:
- Good contrast
- Large enough touch targets
- Readable text
- Keyboard accessibility on admin
- Clear focus states
- Semantic HTML
- Alt text for images

---

# RESPONSIVENESS

Participant UI:
Mobile-first

Admin UI:
Desktop-first but responsive

Test at:
- 390px
- 768px
- 1024px
- 1440px

---

# ERROR HANDLING

Every interaction needs:
- Loading state
- Success state
- Error state
- Empty state

Examples:

Attendance failed:
"Something went wrong. Please try again."

No schedule:
"Nothing scheduled right now."

No announcements:
"You're all caught up."

---

# SECURITY / PRIVACY

Do not expose unnecessary participant data publicly.

Do not expose admin routes to normal participants.

Do not place sensitive data in public URLs unless acceptable for prototype.

Participant code should be treated as an access identifier, not a password.

Prepare the architecture so proper authentication can be introduced later.

---

# FINAL QA

Before declaring the build complete:

- Test every navigation link.
- Test attendance flow.
- Test QR URL.
- Test participant identification.
- Test admin QR generation.
- Test responsive layouts.
- Test empty states.
- Test loading states.
- Test error states.
- Test forms.
- Test data consistency.
- Check that no button leads to a dead page.
- Check that participant experience remains simple.
- Check that admin experience remains practical.

---

# FINAL PRODUCT STATEMENT

The final product should feel like:

> A beautiful digital handbook that quietly acts as a personal companion throughout Sales Mastery Bootcamp.

It should:
- Reduce questions.
- Anticipate needs.
- Encourage participation.
- Capture insights.
- Make the Kalyana Resort experience feel intentional.

The ultimate journey:

INFORM  
→ PREPARE  
→ ARRIVE  
→ DISCOVER  
→ LEARN  
→ PARTICIPATE  
→ MOVE  
→ REFLECT  
→ CAPTURE  
→ ACT

And ultimately:

**SALES MASTERY BOOTCAMP**  
→ **TRAINING**  
→ **INSIGHTS**  
→ **ACTION**  
→ **PLAYBOOK**
