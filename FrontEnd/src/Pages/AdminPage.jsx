import { get } from "../Services/ApiEndPoint";
import React from "react";
import { useEffect } from "react";

export default function AdminPage() {
  useEffect(() => {
    const GetPatient = async () => {
      try {
        
        const request = await get("api/admin/getuser");
        const response = request.data;
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }
    GetPatient()
  }, []);

  return <>
  <h1>admin</h1>
  </>;
}
