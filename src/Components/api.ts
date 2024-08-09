import { Student } from "./types";

export async function getData(): Promise<Student[]> {
  try {
    const response = await fetch(
      "https://studentmgmtapi.vercel.app/api/allStudents"
    );

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data: Student[] = await response.json();
    console.log(data);
    return data; 
  } catch (error) {
    console.error("Error", error);
    return [];  
  }
}
