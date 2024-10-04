 /* index.js
 Xuan Tri Nguyen 
 3013888576
 Duedate: Sep 26, 2024 */
var express = require('express');
var router = express.Router();

/* Home page */
router.get('/', (req, res) => {
  res.render('home', { title: 'Home' });
});

/* About Me page */
router.get('/about', (req, res) => {
  res.render('about', { title: 'About Me' });
});

/* Projects page */
router.get('/projects', (req, res) => {
  res.render('projects', { title: 'Projects' });
});

/* Education page */
router.get('/education', (req, res) => {
  res.render('education', { title: 'Education' });
});

/* Contact page */
router.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact Me' });
});

/* Handle form submission */
router.post('/contact', (req, res) => {
  const { name, email, message } = req.body;

  // Log the submitted data to the console
  console.log('Form Submission:', {
    name,
    email,
    message
  });

  // Redirect to the home page
  res.redirect('/');
});

module.exports = router;
