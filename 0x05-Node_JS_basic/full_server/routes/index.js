import express from 'express';
import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';

function Routing(app) {
  const rout = express.Router();
  app.use('/', rout);

  rout.get('/', (request, response) => {
    AppController.getHomepage(request, response);
  });

  rout.get('/students', (request, response) => {
    StudentsController.getAllStudents(request, response, process.argv[2]);
  });
  
  rout.get('/students/:major', (request, response) => {
    StudentsController.getAllStudentsByMajor(request, response, process.argv[2]);
  }); 
}

export default Routing;
