import express from 'express';
import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';

function Routing(app) {
  const rout = express.Router();
  app.use('/', rout);

  rout.get('/', (req, res) => {
    AppController.getHomepage(req, res);
  });

  rout.get('/students', (req, res) => {
    StudentsController.getAllStudents(req, res, process.argv[2]);
  });

  rout.get('/students/:major', (req, res) => {
    StudentsController.getAllStudentsByMajor(req, res, process.argv[2]);
  });
}

export default Routing;
