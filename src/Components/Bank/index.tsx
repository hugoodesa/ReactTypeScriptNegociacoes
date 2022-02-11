import React, { useEffect } from "react";

export const Bank: React.FC = () => {
  useEffect(() => {
    const getMovies = async () => {
      const response = await fetch("api/movies");
      const data = await response.json();
      console.log(data);
    };

    getMovies();
  }, []);

  return <h1>Banco</h1>;
};
