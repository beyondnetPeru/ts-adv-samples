function sealed(construction: Function) {
  console.log('Class is getting executed');
}

@sealed
export class Student {
  constructor() {
    console.log('Object created');
  }
}

export const Main = () => {
  let student = new Student();
};
