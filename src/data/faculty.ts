export type Gender = "male" | "female";

export interface FacultyProfile {
  id: string;
  name: string;
  designation: string;
  department: string;
  education: string;
  researchAreas: string[];
  gender: Gender;
  officialPhoto: string;
  model: string;
  office: string;
  floor: string;
  profileUrl: string;
}

export const facultyData: FacultyProfile[] = [
  {
    id: "faculty-umesh-dr",
    name: "Dr. Umesh D R",
    designation: "Professor (CAS)",
    department: "Artificial Intelligence & Machine Learning",
    education: "Ph.D",
    researchAreas: ["Data Analytics", "Artificial Intelligence", "Machine Learning"],
    gender: "male",
    officialPhoto: "/faculty/umesh-dr.jpg",
    model: "/models/faculty/male/umesh-dr.glb",
    office: "HOD Chamber",
    floor: "Ground Floor",
    profileUrl: "https://pesce.ac.in/department-artificial-intelligence-machine-learning.php"
  },
  {
    id: "faculty-mahesh-kaluti",
    name: "Dr. Mahesh Kaluti",
    designation: "Associate Professor",
    department: "Artificial Intelligence & Machine Learning",
    education: "Ph.D",
    researchAreas: ["Computer Vision", "Machine Learning"],
    gender: "male",
    officialPhoto: "/faculty/mahesh-kaluti.jpg",
    model: "/models/faculty/male/mahesh-kaluti.glb",
    office: "Staff Room",
    floor: "First Floor",
    profileUrl: "https://pesce.ac.in/department-artificial-intelligence-machine-learning.php"
  },
  {
    id: "faculty-chetan-kumar-v",
    name: "Chetan Kumar V",
    designation: "Assistant Professor",
    department: "Artificial Intelligence & Machine Learning",
    education: "M.Tech",
    researchAreas: ["Artificial Intelligence"],
    gender: "male",
    officialPhoto: "/faculty/chetan-kumar.jpg",
    model: "/models/faculty/male/chetan-kumar.glb",
    office: "Staff Room",
    floor: "First Floor",
    profileUrl: "https://pesce.ac.in/department-artificial-intelligence-machine-learning.php"
  },
  {
    id: "faculty-sindhu-p",
    name: "Sindhu P",
    designation: "Assistant Professor",
    department: "Artificial Intelligence & Machine Learning",
    education: "M.Tech",
    researchAreas: ["Machine Learning", "Data Science"],
    gender: "female",
    officialPhoto: "/faculty/sindhu-p.jpg",
    model: "/models/faculty/female/sindhu-p.glb",
    office: "Staff Room",
    floor: "First Floor",
    profileUrl: "https://pesce.ac.in/department-artificial-intelligence-machine-learning.php"
  },
  {
    id: "faculty-ashwini-mc",
    name: "Ashwini M C",
    designation: "Assistant Professor",
    department: "Artificial Intelligence & Machine Learning",
    education: "M.Tech",
    researchAreas: ["Machine Learning"],
    gender: "female",
    officialPhoto: "/faculty/ashwini-mc.jpg",
    model: "/models/faculty/female/ashwini-mc.glb",
    office: "Staff Room",
    floor: "First Floor",
    profileUrl: "https://pesce.ac.in/department-artificial-intelligence-machine-learning.php"
  },
  {
    id: "faculty-shanthi-swaroop",
    name: "M. S. Shanthi Swaroop",
    designation: "Assistant Professor",
    department: "Artificial Intelligence & Machine Learning",
    education: "M.Tech",
    researchAreas: ["Deep Learning", "AI Applications"],
    gender: "male",
    officialPhoto: "/faculty/shanthi-swaroop.jpg",
    model: "/models/faculty/male/shanthi-swaroop.glb",
    office: "Staff Room",
    floor: "First Floor",
    profileUrl: "https://pesce.ac.in/department-artificial-intelligence-machine-learning.php"
  },
  {
    id: "faculty-renuka-hr",
    name: "Renuka H R",
    designation: "Assistant Professor",
    department: "Artificial Intelligence & Machine Learning",
    education: "M.Tech",
    researchAreas: ["Artificial Intelligence"],
    gender: "female",
    officialPhoto: "/faculty/renuka-hr.jpg",
    model: "/models/faculty/female/renuka-hr.glb",
    office: "Staff Room",
    floor: "First Floor",
    profileUrl: "https://pesce.ac.in/department-artificial-intelligence-machine-learning.php"
  },
  {
    id: "faculty-ashwitha-bm",
    name: "Ashwitha B.M",
    designation: "Assistant Professor",
    department: "Artificial Intelligence & Machine Learning",
    education: "M.Tech",
    researchAreas: ["Machine Learning"],
    gender: "female",
    officialPhoto: "/faculty/ashwitha-bm.jpg",
    model: "/models/faculty/female/ashwitha-bm.glb",
    office: "Staff Room",
    floor: "First Floor",
    profileUrl: "https://pesce.ac.in/department-artificial-intelligence-machine-learning.php"
  },
  {
    id: "faculty-pavan-krishna-k",
    name: "Pavan Krishna K",
    designation: "Assistant Professor",
    department: "Artificial Intelligence & Machine Learning",
    education: "M.Tech",
    researchAreas: ["Artificial Intelligence", "IoT"],
    gender: "male",
    officialPhoto: "/faculty/pavan-krishna.jpg",
    model: "/models/faculty/male/pavan-krishna.glb",
    office: "Staff Room",
    floor: "First Floor",
    profileUrl: "https://pesce.ac.in/department-artificial-intelligence-machine-learning.php"
  }
];
