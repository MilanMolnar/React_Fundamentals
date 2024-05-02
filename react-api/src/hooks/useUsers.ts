import { useEffect, useState } from "react";
import  userService , {User}  from "../services/user-service";
import { CanceledError } from "../services/api-client";

const useUsers = () =>{
    const [users, setUsers] = useState<User[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      setIsLoading(true);
      const { request, cancel } = userService.getAll<User>();
      request
        .then((response) => {
          setUsers(response.data);
          setIsLoading(false); //Finally when not strict mode
        })
        .catch((error) => {
          if (error instanceof CanceledError) return;
          setIsLoading(false); //Finally when not strict mode
          setError(error.message);
        });
      //.finally(() => {setIsLoading(false)}); //When not strict mode
  
      return () => cancel();
    }, []);
    return {users, error, isLoading, setUsers, setError}
}

export default useUsers