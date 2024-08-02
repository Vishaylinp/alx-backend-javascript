namespace Subjects {
  export interface Teacher {
    experienceTeacherC?: number;
}

export class cpp extends Subjects.Subject {
  getRequirements(): string {
    return 'Here is the list of requirements for Cpp';
  }

  getAvailableTeacher(): string {
    if (!this.teacher ||  this.teacher.experienceTeacherC <= 0) {
      return ' No available teacher';
    }
    return `Available Teacher: ${this.teacher.firstName}`;
  }
 }
}
