**To run the project:**
 npm run dev;
 

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
Patient Registration App - 
Functional Specification Documen
1.Introduction

This document outlines the functional specification for the Patient Registration App, designed to streamline patient onboarding and appointment booking. The application comprises five core modules: 
1.Home
2.Doctors
3.Register
4.Admin
5.Book Appointment.
Modules Overview
Home Module
Purpose:
Serves as the landing page for users, providing navigation access to other modules and general information.
Features:
Welcome message and app introduction
Navigation menu to access Doctors, Register, Book Appointment
Announcements or news section
Contact or support information
UI Components:
Navigation bar
Banner or welcome image
Call-to-action buttons (e.g., “Register Now”, “Find a Doctor”

2 Doctors Module
Purpose:
Displays the list of available doctors along with their details to help patients choose the right practitioner. Patients can message the ward.

Features:
List view of doctors
Search and filter (by specialty, availability, location)
Doctor profile page
Name
Specialty
Experience
Contact info 
Messaging feature
UI Components:
Search bar
Filter dropdowns
Doctor cards or list
Profile modal or detail page
3 Register Module
Purpose:
Allows patients to register for the system.
Features:
Patient registration form
Name
Age
Gender
Contact details
Address
Medical history (optional)
Mobile number verification
UI Components:
Input fields
Validation messages
Submit button
Save in Database

4. Admin Module
Purpose:
Allows admin users to manage the platform, doctors, and patient data.
Features:
Registered Patient list can be viewed
Sql querry page
UI Components:
Cords used
Left panel and right panel separated
Animation effect included
5.Book Appointment Module
Purpose:
Facilitates appointment booking between patients and doctors.
Features:
Choose doctor from list or profile
View doctor’s availability
Select date and time
Confirm appointment
Appointment status
Confirmation message will be received to the client’s whats app
     	
UI Components:
Doctor availability calendar
Time slot selector
Appointment summary
Confirmation dialog or email notification

Technical Requirements (Optional)
You can include:
Frontend: React , HTML, CSS, Java Script
Database: Pglite/IndexedDB 

6. Future Enhancements
Online payment integration
Upload patient medical records
Video consultations
Backend Setup




II. Difficulties Faced:
1.Setting Indexed DataBase

 I have faced difficulty in creating and connecting the Indexed db in browser, 
It does not use any frameworks
The source need to be installed in the project and can be extend the support from library packages
"https://cdn.jsdelivr.net/npm/@electric-sql/pglite/dist/index.js"
2.Twilio Account 
I felt challenging in creating message conversation in app
For that, I have used third party message app, named Twilio
Here, twilio will generate a sid and auth token for us which is highly sensible.
Through that credentials the I had connected our patient’s mobile number and sended messages to them
This sensible credentials I cant push in git through commit, so I entered in git edit. Finally, all set and messaging tool works fine




