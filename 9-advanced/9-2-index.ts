{
  const obj ={
    name:'ellie',
  }
  obj.name;   // ellie
  obj['name'] //ellie

  type Animal ={
    name: string;
    age: number;
    gender: 'male' | 'female';
  }
  type Name = Animal['name']; // string
  const text: Name = '124'; //234 //error

  type Gender = Animal['gender'] // 'male' | 'female'

  type Keys = keyof Animal; // 'name' | 'age' | 'gender'
  const key: Keys = 'name';

  type Person ={
    name: string;
    gender: Animal['gender'];
  }
  const person: Person ={
    name: 'ellie',
    gender: 'male',
  };
  
}