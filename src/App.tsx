function App() {
  let name: string;
  let age: number;
  let isStudent: boolean;
  let hobbies: string[];
  let role: [string, number]; //tuple
  // object
  let person: Object;
  type car = {
    name: string;
    isVoter?: number; //use ? for optional
  };

  // Array of objects
  let parking: car[];
  name = "Akash";
  return <>Hello World</>;
}

export default App;
