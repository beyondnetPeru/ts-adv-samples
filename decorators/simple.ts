function sealed(target) {
  // do something with 'target' ...
}

@sealed
export class Student {
  constructor() {
    console.log('Object created');
  }
}

let student = new Student();
