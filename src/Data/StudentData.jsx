const studentData = [
  {
    "student_id": 594,
    "name": "Priya Mehta",
    "age": 16,
    "grade": "10th",
    "school": "ABC International School",
    "assessment_date": "2025-05-20",
    "report_type": "VIP Career Report",
    "guiding_star": [
      "sasasa",
      "fdfdfdf",
      "cxxcxcxvvc",
      "cxcxcxcxcx",
      "fdddsfdsfdsf"
    ],
    "top_career_paths": [
      {
        "title": "Clinical Psychologist",
        "why_it_matches_your_profile": "Your high interpersonal and verbal abilities suggest an aptitude for connecting deeply with others and guiding them through challenges.",
        "key_roles": [
          "Counseling and therapy",
          "Mental health assessment",
          "Behavioral intervention planning"
        ],
        "future_possibilities": "You can work in hospitals, private practice, or even specialize in youth counseling or trauma recovery."
      },
      {
        "title": "Architect",
        "why_it_matches_your_profile": "Your spatial awareness and logical reasoning make you ideal for creating functional yet artistic physical environments.",
        "key_roles": [
          "Designing buildings and spaces",
          "Site planning and feasibility studies",
          "Collaborating with engineers and clients"
        ],
        "future_possibilities": "Opportunities exist in sustainable architecture, urban planning, and even virtual design (e.g., metaverse)."
      },
      {
        "title": "Human-Centered Product Designer",
        "why_it_matches_your_profile": "Combining empathy, creativity, and problem-solving, you’re well-suited to create meaningful user experiences.",
        "key_roles": [
          "User research and testing",
          "Interface and interaction design",
          "Prototyping and usability analysis"
        ],
        "future_possibilities": "You can enter industries like tech, healthcare, or education where user-centric solutions are in high demand."
      },
      {
        "title": "Education Technologist",
        "why_it_matches_your_profile": "You love learning and helping others learn, and you're comfortable with using tech for social impact.",
        "key_roles": [
          "Designing e-learning platforms",
          "Analyzing learning data to improve outcomes",
          "Creating digital content and tools"
        ],
        "future_possibilities": "You could work with edtech startups, NGOs, or global learning platforms to change how people learn."
      },
      {
        "title": "Behavioral Economist",
        "why_it_matches_your_profile": "You’re great at combining numbers with human behavior — ideal for understanding how people make decisions.",
        "key_roles": [
          "Data analysis on decision-making trends",
          "Designing policy interventions",
          "Creating models that explain economic behaviors"
        ],
        "future_possibilities": "Potential career paths include public policy, finance, marketing strategy, and academic research."
      }
    ],
    "market_demand": [
      {
        "career_path": "Psychology & Research",
        "current_demand": 65,
        "future_demand": 85
      },
      {
        "career_path": "Creative Careers",
        "current_demand": 70,
        "future_demand": 90
      },
      {
        "career_path": "Social Entrepreneurship",
        "current_demand": 55,
        "future_demand": 75
      },
      {
        "career_path": "UX/UI Design",
        "current_demand": 70,
        "future_demand": 85
      },
      {
        "career_path": "Academic Research",
        "current_demand": 60,
        "future_demand": 80
      }
    ],
    "entrance_exam_guide": [
      {
        "career_pathway": "Psychology & Research",
        "relevant_exams": ["CUET (Psychology)", "JMI Entrance"],
        "exam_period": "June - August",
        "skills_tested": ["Analytical Thinking", "Research Aptitude", "Psychology Concepts"]
      },
      {
        "career_pathway": "Creative Careers",
        "relevant_exams": ["NID DAT", "FTII Entrance"],
        "exam_period": "January - March",
        "skills_tested": ["Creativity", "Visual Perception", "Storytelling"]
      },
      {
        "career_pathway": "Social Entrepreneurship",
        "relevant_exams": ["IIM IPM", "NMIMS NPAT"],
        "exam_period": "April - June",
        "skills_tested": ["Logical Reasoning", "Business Aptitude", "Communication"]
      },
      {
        "career_pathway": "UX/UI Design",
        "relevant_exams": ["UCEED", "NID DAT"],
        "exam_period": "January - April",
        "skills_tested": ["Design Thinking", "User Research", "Visual Communication"]
      },
      {
        "career_pathway": "Academic Research",
        "relevant_exams": ["UGC NET", "CUET PG"],
        "exam_period": "December - February",
        "skills_tested": ["Critical Thinking", "Subject Knowledge", "Academic Writing"]
      }
    ],
    "skill_map": [
      {
        "career_pathway": "Psychology & Research",
        "skills": ["Analytical Thinking", "Empathy", "Counseling", "Critical Thinking", "Research", "Writing"]
      },
      {
        "career_pathway": "Creative Careers",
        "skills": ["Storytelling", "Creativity", "Design Thinking", "Leadership", "Public Speaking", "Problem-solving"]
      },
      {
        "career_pathway": "Social Entrepreneurship",
        "skills": ["Leadership", "Public Speaking", "Teaching", "Networking", "Financial Planning", "Problem-solving"]
      },
      {
        "career_pathway": "UX/UI Design",
        "skills": ["User Research", "Prototyping", "Visual Design", "Empathy", "Design Thinking", "Creativity"]
      },
      {
        "career_pathway": "Academic Research",
        "skills": ["Data Analysis", "Research", "Critical Thinking", "Analytical Thinking", "Writing", "Teaching"]
      }
    ],
    "exploration_recommendations": [
      {
        "title": "Attend Workshops & Seminars",
        "description": "Learn from industry professionals in psychology, design, and entrepreneurship."
      },
      {
        "title": "Join School Clubs & Competitions",
        "description": "Participate in writing, art, coding, or debate clubs."
      },
      {
        "title": "Take Online Courses",
        "description": "Try platforms like Coursera, Udemy, and Khan Academy for introductory lessons."
      },
      {
        "title": "Do Internships or Volunteering",
        "description": "Get hands-on experience in relevant fields."
      },
      {
        "title": "Participate in Summer Camps",
        "description": "Explore specialized camps in design, psychology, or business."
      },
      {
        "title": "Build a Portfolio",
        "description": "Start compiling writing, art, or design projects."
      },
      {
        "title": "Seek Guidance from Mentors",
        "description": "Connect with professionals in your field of interest."
      }
    ],
    "class_11_subject_recommendations": [
      {
        "career_pathway": "Psychology & Research",
        "recommended_subjects": ["Psychology", "Sociology", "Biology", "Mathematics", "English"]
      },
      {
        "career_pathway": "Creative Careers",
        "recommended_subjects": ["Fine Arts", "Computer Science", "Psychology", "Business Studies"]
      },
      {
        "career_pathway": "Social Entrepreneurship",
        "recommended_subjects": ["Economics", "Business Studies", "Mathematics", "Political Science"]
      },
      {
        "career_pathway": "UX/UI Design",
        "recommended_subjects": ["Computer Science", "Design", "Psychology", "Mathematics"]
      }
    ]
  },
];

export default studentData;
