// this following import is wrong because AxiosResponse must be imported as a type . only then we won't get errors
// import axios,{ AxiosResponse } from 'axios';

import type { AxiosResponse } from 'axios'; //correct import
import axios from 'axios';
// we define the data we want to receive as response
interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

async function fetchData() {
  try {
    const response: AxiosResponse<Todo> = await axios.get(
      'https://jsonplaceholder.typicode.com/todos/1'
    );
    console.log(response.data);
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      console.log('Axios Error', error);
      if (error.response) {
        //more destructuring can be done
        console.log(error.response.status);
      }
    }
    // console.log(error.message || "something went wrong !");
  }
}
