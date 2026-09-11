import PDFDocument from 'pdfkit';
import fs from 'fs';
import path from 'path';

const outDir = path.resolve('public');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// 1. Generate PDF
const pdfPath = path.join(outDir, 'Sowmiya_S_Resume.pdf');
const doc = new PDFDocument({
  size: 'A4',
  margins: { top: 36, bottom: 36, left: 40, right: 40 }
});

const writeStream = fs.createWriteStream(pdfPath);
doc.pipe(writeStream);

const teal = '#0d9488';
const dark = '#0f172a';
const muted = '#475569';
const body = '#1e293b';

doc.font('Helvetica-Bold').fontSize(22).fillColor(dark).text('Sowmiya S', { align: 'center' });
doc.moveDown(0.2);
doc.font('Helvetica').fontSize(10).fillColor(teal).text('Machine Learning Enthusiast | Data Science & Full-Stack Developer', { align: 'center' });
doc.moveDown(0.2);
doc.font('Helvetica').fontSize(8.5).fillColor(muted).text('Email: sowmiya523@wec.edu.in  |  Phone: +91 73050 40440  |  Pondicherry, Pondicherry, India', { align: 'center' });
doc.font('Helvetica').fontSize(8.5).fillColor(teal).text('LinkedIn: linkedin.com/in/sowmiya-saravanan  |  GitHub: github.com/Sowmiya2106', { align: 'center' });
doc.moveDown(0.5);

function heading(title) {
  doc.moveDown(0.35);
  const y = doc.y;
  doc.font('Helvetica-Bold').fontSize(10).fillColor(teal).text(title.toUpperCase(), 40, y);
  doc.strokeColor(teal).lineWidth(1).moveTo(40, y + 13).lineTo(555, y + 13).stroke();
  doc.moveDown(0.4);
}

// Education
heading('Education');
doc.font('Helvetica-Bold').fontSize(9).fillColor(dark).text('B.Tech – Information Science & Engineering', { continued: true });
doc.font('Helvetica-Bold').fontSize(8.5).fillColor(teal).text('  Sep 2023 – Jun 2027', { align: 'right' });
doc.font('Helvetica').fontSize(8.5).fillColor(body).text("Women's Engineering College (Govt), Puducherry", { continued: true });
doc.font('Helvetica-Bold').fontSize(8.5).fillColor(dark).text('  CGPA: 7.8 / 10', { align: 'right' });
doc.font('Helvetica-Oblique').fontSize(8).fillColor(muted).text('Relevant Coursework: Machine Learning, Data Structures & Algorithms, Database Management, Computer Networks');

// Skills
heading('Skills');
const skillList = [
  ['Languages', 'Python, Java, C, SQL, R'],
  ['ML / DL', 'TensorFlow, PyTorch, Scikit-learn, Pandas, NumPy, Matplotlib'],
  ['Web', 'HTML5, CSS3, JavaScript (ES6+), REST APIs'],
  ['Tools', 'MySQL, Git, GitHub, Jupyter Notebook, Google Colab, VS Code, MS Excel'],
  ['Soft Skills', 'People Management, Team Collaboration, Communication']
];
skillList.forEach(([k, v]) => {
  doc.font('Helvetica-Bold').fontSize(8.5).fillColor(dark).text(`•  ${k}: `, { continued: true });
  doc.font('Helvetica').fontSize(8.5).fillColor(body).text(v);
});

// Experience
heading('Work Experience');
doc.font('Helvetica-Bold').fontSize(9).fillColor(dark).text('Research Intern', { continued: true });
doc.font('Helvetica-Bold').fontSize(8.5).fillColor(teal).text('  Jun 2025 – Jul 2025', { align: 'right' });
doc.font('Helvetica-Oblique').fontSize(8.5).fillColor(muted).text('National Institute of Technology, Tiruchirappalli (NIT Trichy)');
[
  'Researched hyperspectral image classification using CNN and Vision Transformer (ViT) architectures on Indian Pines dataset.',
  'Achieved 98% classification accuracy, outperforming CNN baseline using spectral-spatial patch extraction with ViT.',
  'Optimised preprocessing (PCA dimensionality reduction, normalisation) and hyperparameter tuning to elevate training throughput.',
  'Proposed model achieved 98.73% training accuracy and 98.11% validation accuracy on complex multi-class image classification.'
].forEach(b => doc.font('Helvetica').fontSize(8.5).fillColor(body).text(`•  ${b}`, { indent: 8, lineGap: 1 }));

// Projects
heading('Projects');
doc.font('Helvetica-Bold').fontSize(9).fillColor(dark).text('Hyper Spectral Image Classification – CNN & Vision Transformer', { continued: true });
doc.font('Helvetica').fontSize(8.5).fillColor(teal).text('  Jun – Jul 2025', { align: 'right' });
doc.font('Helvetica').fontSize(8.5).fillColor(body).text('•  Deep learning pipeline using CNN and ViT on Indian Pines dataset (200+ bands, 10,249 samples). Reached 98% accuracy. Tech: Python, PyTorch, Scikit-learn.', { indent: 8 });

doc.moveDown(0.25);
doc.font('Helvetica-Bold').fontSize(9).fillColor(dark).text('Real-Time Weather Web Application', { continued: true });
doc.font('Helvetica').fontSize(8.5).fillColor(teal).text('  Feb 2026', { align: 'right' });
doc.font('Helvetica').fontSize(8.5).fillColor(body).text('•  Responsive single-page weather portal using OpenWeatherMap API with async/await, live forecasts, and dynamic DOM updates. Tech: HTML, CSS, JavaScript.', { indent: 8 });

doc.moveDown(0.25);
doc.font('Helvetica-Bold').fontSize(9).fillColor(dark).text('Frontend Web Development Portfolio', { continued: true });
doc.font('Helvetica').fontSize(8.5).fillColor(teal).text('  May 2025 – Mar 2026', { align: 'right' });
doc.font('Helvetica').fontSize(8.5).fillColor(body).text('•  Designed and developed multi-page interactive web portals including company profile, event registration, and e-commerce showcase. Tech: HTML5, CSS3, JavaScript.', { indent: 8 });

// Certifications
heading('Certifications');
[
  ['Diploma in Full Stack Web Development', 'Self-paced / Offline', 'Nov 2023 – Nov 2024'],
  ['Biological Data Analysis & Visualisation with R', 'NPTEL – IIT Kharagpur', 'Feb 2025 – Mar 2025'],
  ['Java Programming for Beginners', 'Online Course', 'Mar 2025 – Apr 2025'],
  ['Design, Technology & Innovation', 'NPTEL – IIT Bombay', 'Jun 2025 – Sep 2025'],
  ['Research Contribution Certificate', 'NIT Tiruchirappalli', 'Jun 2025 – Jul 2025'],
  ['Diploma in Computer-aided Teaching', 'Offline', 'Apr 2023 – Oct 2023']
].forEach(([n, o, d]) => {
  doc.font('Helvetica-Bold').fontSize(8.5).fillColor(dark).text(`•  ${n}`, { continued: true });
  doc.font('Helvetica').fontSize(8).fillColor(muted).text(` (${o})`, { continued: true });
  doc.font('Helvetica').fontSize(8).fillColor(teal).text(`  ${d}`, { align: 'right' });
});

// Leadership
heading('Leadership & Activities');
doc.font('Helvetica-Bold').fontSize(9).fillColor(dark).text("Student Organiser – Lunova '26 Technical Symposium", { continued: true });
doc.font('Helvetica').fontSize(8.5).fillColor(teal).text('  Feb 2026', { align: 'right' });
doc.font('Helvetica').fontSize(8.5).fillColor(body).text("•  Coordinated logistics and execution for Women's Engineering College 1st inter-departmental symposium, managing 20+ volunteers across 5 departments.", { indent: 8 });

doc.moveDown(0.2);
doc.font('Helvetica-Bold').fontSize(9).fillColor(dark).text('Class Representative – 3rd Year (2025–2026)', { continued: true });
doc.font('Helvetica').fontSize(8.5).fillColor(teal).text('  2025 – 2026', { align: 'right' });
doc.font('Helvetica').fontSize(8.5).fillColor(body).text('•  Primary liaison between 40+ students and faculty, resolving academic scheduling and organizing student events.', { indent: 8 });

doc.end();

writeStream.on('finish', () => {
  console.log('PDF generated at ' + pdfPath);
});

// 2. Generate Plain-Text ATS Resume
const plainText = `SOWMIYA S
Pondicherry, Pondicherry, India
Email: sowmiya523@wec.edu.in | Phone: +91 73050 40440
LinkedIn: https://linkedin.com/in/sowmiya-saravanan
GitHub: https://github.com/Sowmiya2106

EDUCATION
B.Tech – Information Science & Engineering (Sep 2023 – Jun 2027)
Women's Engineering College (Govt), Puducherry
CGPA: 7.8 / 10
Relevant Coursework: Machine Learning, Data Structures & Algorithms, Database Management, Computer Networks

SKILLS
- Languages: Python, Java, C, SQL, R
- ML / DL: TensorFlow, PyTorch, Scikit-learn, Pandas, NumPy, Matplotlib
- Web: HTML5, CSS3, JavaScript (ES6+), REST APIs
- Tools: MySQL, Git, GitHub, Jupyter Notebook, Google Colab, VS Code, MS Excel
- Soft Skills: People Management, Team Collaboration, Communication

WORK EXPERIENCE
Research Intern | National Institute of Technology, Tiruchirappalli (NIT Trichy) (Jun 2025 – Jul 2025)
- Researched hyperspectral image classification using CNN and Vision Transformer (ViT) on Indian Pines dataset.
- Achieved 98% accuracy, outperforming CNN baseline using spectral-spatial patch extraction with ViT.
- Optimised preprocessing (PCA dimensionality reduction, normalisation) and hyperparameter tuning.
- Proposed model achieved 98.73% training accuracy and 98.11% validation accuracy.

PROJECTS
1. Hyper Spectral Image Classification – CNN & Vision Transformer (Jun – Jul 2025)
Deep learning pipeline on Indian Pines dataset (200+ bands, 10,249 samples). Reached 98% accuracy.
Tech: Python, PyTorch, Scikit-learn | GitHub: https://github.com/Sowmiya2106

2. Real-Time Weather Web Application (Feb 2026)
Responsive weather portal using OpenWeatherMap API with async/await, live forecasts, dynamic DOM.
Tech: HTML, CSS, JavaScript | GitHub: https://github.com/Sowmiya2106

3. Frontend Web Development Portfolio (May 2025 – Mar 2026)
Multi-page interactive web portals including company profile, event registration, e-commerce showcase.
Tech: HTML5, CSS3, JavaScript | GitHub: https://github.com/Sowmiya2106

CERTIFICATIONS
- Diploma in Full Stack Web Development (Nov 2023 – Nov 2024)
- Biological Data Analysis & Visualisation with R (NPTEL – IIT Kharagpur, Feb 2025 – Mar 2025)
- Java Programming for Beginners (Mar 2025 – Apr 2025)
- Design, Technology & Innovation (NPTEL – IIT Bombay, Jun 2025 – Sep 2025)
- Research Contribution Certificate (NIT Tiruchirappalli, Jun 2025 – Jul 2025)
- Diploma in Computer-aided Teaching (Apr 2023 – Oct 2023)

LEADERSHIP & ACTIVITIES
- Student Organiser – Lunova '26 Technical Symposium (Feb 2026)
- Class Representative – Women's Engineering College, 3rd Year (2025–2026)
`;

fs.writeFileSync(path.join(outDir, 'Sowmiya_S_Resume.txt'), plainText, 'utf-8');
