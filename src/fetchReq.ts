// same web request using fetch
interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

async function fetchData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status} `);
    }
    const data: Todo = await response.json();
    console.log(data);
  } catch (error: any) {}
}
