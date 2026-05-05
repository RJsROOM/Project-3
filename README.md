Employee Management System (EMS)


Project Overview

The Employee Management System (EMS) is a full-stack web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js).
The goal of this project is to create a simple platform where:
•	Admins can create and manage tasks
•	Employees can view and track their assigned tasks
This project helped me understand real-world concepts like authentication, authorization, API handling, and frontend-backend integration.
________________________________________

 Tech Stack
 
Frontend:
•	React.js
•	Tailwind CSS
•	Axios
•	React Router
Backend:
•	Node.js
•	Express.js
•	MongoDB (Mongoose)
•	JWT Authentication
________________________________________

 Features
 
 Authentication System
•	User Registration & Login
•	Password handling
•	JWT-based authentication
•	Token stored in localStorage
 Role-Based Access Control (RBAC)
•	Two roles: Admin and Employee
•	Admin and Employee have separate dashboards
•	Protected routes based on user role
 Task Management
•	Admin can:
o	Create tasks
o	Assign tasks to employees
o	View all tasks
•	Employee can:
o	View assigned tasks
o	Track task status
 UI/UX
•	Clean dark-themed UI
•	Consistent Login & Register design
•	Responsive layout using Tailwind CSS
________________________________________

 Key Concepts Learned
 
•	REST API development
•	JWT authentication flow
•	Role-based authorization
•	React state management
•	API integration using Axios
•	Handling protected routes
•	Error debugging and fixing runtime issues
________________________________________

 Project Structure
 
EMS/
│
├── Backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── middleware/
│   └── server.js
│
├── Frontend/
│   ├── components/
│   │   ├── Auth/
│   │   ├── Dashboard/
│   │   ├── other/
│   │   └── TaskList/
│   ├── App.jsx
│   └── main.jsx
│
└── README.md
________________________________________

 Application Flow
 
1.	User registers (default role: employee or selected role)
2.	User logs in → receives JWT token
3.	Token is stored in localStorage
4.	Based on role:
o	Admin → Admin Dashboard
o	Employee → Employee Dashboard
5.	Admin creates tasks → assigns to employee
6.	Employee views assigned tasks
________________________________________

⚠️ Challenges Faced & How I Solved Them

1.  JWT Token Not Being Sent
Problem: API was returning 401 Unauthorized
Solution:
Learned to send token in headers:
Authorization: Bearer <token>
________________________________________

2.  Tasks Not Showing in UI
   
Problem: Tasks were created but not visible
Cause: Wrong API URL + missing re-fetch
Solution:
•	Fixed API endpoint
•	Reloaded or re-fetched tasks after creation
________________________________________
3.  AssignedTo Error (ObjectId issue)
   
Problem:
Cast to ObjectId failed
Cause: Passing name instead of user ID
Solution:
Used correct MongoDB _id of employee
________________________________________

4.  Admin vs Employee Not Differentiating
Problem: Both users saw same UI
Solution:
•	Added role field in User model
•	Stored role in JWT + localStorage
•	Redirected based on role
________________________________________

5.  React Errors (Common Issues)
•	useNavigate() outside Router
•	userData is not defined
•	Rendering object instead of array
Solution:
•	Wrapped app in Router
•	Fixed state handling
•	Used .map() correctly on arrays
________________________________________

6.  UI Breaking / Blank Screen
Problem: Nothing rendering
Solution:
Checked console errors → fixed imports & routing
________________________________________

 What I Improved During This Project
•	Debugging skills (very important)
•	Understanding of backend logic
•	Handling real-world errors
•	Writing cleaner and structured code
•	Connecting frontend with backend properly
________________________________________

 Future Improvements
•	Add task status update (Complete / Failed)
•	Add delete task functionality
•	Add employee dropdown instead of manual ID input
•	Improve UI with animations
•	Add pagination & filters
________________________________________

Conclusion
This project gave me hands-on experience in building a complete full-stack application.
I not only learned how systems work but also how to debug and fix real issues — which is a very important skill for any developer.
________________________________________
Made by:-
Rakshit Jha

