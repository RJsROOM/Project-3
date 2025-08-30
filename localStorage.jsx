localStorage.clear()

const employees = [
  {
    "id": 1,
    "firstname": "Aarav",
    "email": "employee1@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "new_task": true,
        "completed": false,
        "failed": false,
        "title": "Prepare sales report",
        "description": "Compile the monthly sales figures into the report template.",
        "date": "2025-08-15",
        "category": "Sales"
      },
      {
        "active": false,
        "new_task": false,
        "completed": true,
        "failed": false,
        "title": "Update client database",
        "description": "Ensure client contact information is current.",
        "date": "2025-08-10",
        "category": "Database"
      },
      {
        "active": false,
        "new_task": false,
        "completed": false,
        "failed": true,
        "title": "Submit expense claims",
        "description": "File expense claims for last month's travel.",
        "date": "2025-08-05",
        "category": "Finance"
      }
    ],
    "taskCounts": {
      "active": 1,
      "new_task": 2,
      "completed": 1,
      "failed": 1
    }
  },
  {
    "id": 2,
    "firstname": "Ishita",
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "new_task": true,
        "completed": false,
        "failed": false,
        "title": "Design landing page",
        "description": "Create the mockup for the new marketing campaign landing page.",
        "date": "2025-08-14",
        "category": "Design"
      },
      {
        "active": true,
        "new_task": true,
        "completed": false,
        "failed": false,
        "title": "UI Prototype Update",
        "description": "Refine the new prototype based on stakeholder feedback.",
        "date": "2025-08-15",
        "category": "Design"
      },
      {
        "active": false,
        "new_task": false,
        "completed": true,
        "failed": false,
        "title": "Review UI components",
        "description": "Audit the existing component library for outdated elements.",
        "date": "2025-08-07",
        "category": "Design"
      },
      {
        "active": false,
        "new_task": false,
        "completed": false,
        "failed": true,
        "title": "Fix login bug",
        "description": "Resolve the issue preventing users from logging in.",
        "date": "2025-08-06",
        "category": "Development"
      },
      {
        "active": false,
        "new_task": false,
        "completed": true,
        "failed": false,
        "title": "Team feedback session",
        "description": "Collect feedback from team members on new project tools.",
        "date": "2025-08-08",
        "category": "HR"
      }
    ],
    "taskCounts": {
      "active": 2,
      "new_task": 2,
      "completed": 2,
      "failed": 1
    }
  },
  {
    "id": 3,
    "firstname": "Karan",
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "new_task": true,
        "completed": false,
        "failed": false,
        "title": "Draft policy update",
        "description": "Update the remote work policy document.",
        "date": "2025-08-12",
        "category": "Administration"
      },
      {
        "active": false,
        "new_task": false,
        "completed": true,
        "failed": false,
        "title": "Backup server data",
        "description": "Ensure weekly backups are completed successfully.",
        "date": "2025-08-09",
        "category": "IT"
      },
      {
        "active": false,
        "new_task": false,
        "completed": false,
        "failed": true,
        "title": "Inventory audit",
        "description": "Count and verify office supply inventory.",
        "date": "2025-08-04",
        "category": "Logistics"
      }
    ],
    "taskCounts": {
      "active": 2,
      "new_task": 0,
      "completed": 1,
      "failed": 1
    }
  },
  {
    "id": 4,
    "firstname": "Meera",
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "new_task": true,
        "completed": false,
        "failed": false,
        "title": "Write press release",
        "description": "Announce the company's new service offering.",
        "date": "2025-08-16",
        "category": "Marketing"
      },
      {
        "active": true,
        "new_task": true,
        "completed": false,
        "failed": false,
        "title": "Campaign brainstorming",
        "description": "Plan creative ideas for the festive campaign.",
        "date": "2025-08-15",
        "category": "Marketing"
      },
      {
        "active": false,
        "new_task": false,
        "completed": true,
        "failed": false,
        "title": "Social media posts",
        "description": "Schedule posts for the next week on all platforms.",
        "date": "2025-08-11",
        "category": "Marketing"
      },
      {
        "active": false,
        "new_task": false,
        "completed": false,
        "failed": true,
        "title": "Update brand guidelines",
        "description": "Incorporate the latest design changes.",
        "date": "2025-08-05",
        "category": "Design"
      }
    ],
    "taskCounts": {
      "active": 2,
      "new_task": 0,
      "completed": 1,
      "failed": 1
    }
  },
  {
    "id": 5,
    "firstname": "Rohit",
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "new_task": true,
        "completed": false,
        "failed": false,
        "title": "Plan quarterly meeting",
        "description": "Organize agenda and invite speakers.",
        "date": "2025-08-18",
        "category": "Management"
      },
      {
        "active": false,
        "new_task": false,
        "completed": true,
        "failed": false,
        "title": "Review budget proposals",
        "description": "Analyze and approve departmental budgets.",
        "date": "2025-08-07",
        "category": "Finance"
      },
      {
        "active": false,
        "new_task": false,
        "completed": false,
        "failed": true,
        "title": "Contract review",
        "description": "Go through legal contracts for compliance.",
        "date": "2025-08-06",
        "category": "Legal"
      }
    ],
    "taskCounts": {
      "active": 1,
      "new_task": 1,
      "completed": 2,
      "failed": 1
    }
  },
  {
    "id": 6,
    "firstname": "Sneha",
    "email": "employee6@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "new_task": true,
        "completed": false,
        "failed": false,
        "title": "Security audit",
        "description": "Check all systems for security vulnerabilities.",
        "date": "2025-08-15",
        "category": "IT"
      },
      {
        "active": true,
        "new_task": true,
        "completed": false,
        "failed": false,
        "title": "System monitoring",
        "description": "Set up real-time monitoring for servers.",
        "date": "2025-08-16",
        "category": "IT"
      },
      {
        "active": false,
        "new_task": false,
        "completed": true,
        "failed": false,
        "title": "Deploy new CRM",
        "description": "Install and configure the new CRM system.",
        "date": "2025-08-10",
        "category": "IT"
      },
      {
        "active": false,
        "new_task": false,
        "completed": false,
        "failed": true,
        "title": "Train new hires",
        "description": "Conduct training for the onboarding batch.",
        "date": "2025-08-04",
        "category": "HR"
      }
    ],
    "taskCounts": {
      "active": 2,
      "new_task": 2,
      "completed": 1,
      "failed": 1
    }
  },
  {
    "id": 7,
    "firstname": "Priya",
    "email": "employee7@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "new_task": true,
        "completed": false,
        "failed": false,
        "title": "Market research",
        "description": "Analyze competitor strategies in the new region.",
        "date": "2025-08-17",
        "category": "Research"
      },
      {
        "active": false,
        "new_task": false,
        "completed": true,
        "failed": false,
        "title": "Product testing",
        "description": "Evaluate beta version of new software.",
        "date": "2025-08-08",
        "category": "QA"
      },
      {
        "active": false,
        "new_task": false,
        "completed": false,
        "failed": true,
        "title": "Vendor negotiation",
        "description": "Negotiate contract terms with supplier.",
        "date": "2025-08-05",
        "category": "Procurement"
      }
    ],
    "taskCounts": {
      "active": 1,
      "new_task": 0,
      "completed": 1,
      "failed": 2
    }
  }
]



const admin=[{
  "id": 1,
  "email": "admin@example.com",
  "password": "123"
}];


export const setLocalStorage=()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}

export const getLocalStorage=()=>{
    const employees=JSON.parse(localStorage.getItem('employees'))
    const admin=JSON.parse(localStorage.getItem('admin'))
    
    return {employees,admin}
}