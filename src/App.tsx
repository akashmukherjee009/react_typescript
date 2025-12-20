function App() {
  // let name: string;
  // let age: number | string; // Union Type
  // let isStudent: boolean;
  // let hobbies: string[];
  // let role: [string, number]; //tuple
  // // object
  // let person: Object;
  // type car = {
  //   name: string;
  //   isVoter?: number; //use ? for optional
  // };
  let name: any;
  let person: unknown;
  // // Array of objects
  // let parking: car[];
  // name = "Akash";

  //Type of function
  let func1: Function;
  let func2: (name: string) => void; //Perf
  let func3: (name: string) => never;
  return <>Hello World</>;
}

export default App;
