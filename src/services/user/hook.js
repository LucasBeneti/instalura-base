import { useEffect, useState } from 'react';
import { userService } from './userService';

export const useUserService = {
  getProfilePage() {
    const [response, setResponse] = useState({
      data: null,
      loading: false,
      error: null,
    });

    useEffect(() => {
      userService
        .getProfilePage()
        .then((responseFromServer) => {
          setResponse((currentValue) => ({
            ...currentValue,
            data: responseFromServer,
            loading: false,
            error: null,
          }));
        })
        .catch((err) => {
          setResponse((currentValue) => ({
            ...currentValue,
            data: null,
            loading: false,
            error: err.message,
          }));
        });
    }, []);

    return response;
  },
};
