import {
    useQuery,
  
    gql
  
  } from "@apollo/client";
  
  const CITIES = ""; // create query
  export function Capstone() {
    const cityname = ""; //replace with prop
    const { loading, error, data } = useQuery(CITIES, {

      variables: { cityname }
  
    });
    
  
    if (loading) return <p>Loading...</p>;
  
    if (error) return
    <p>error.message</p>
  
  
    return data.findByCity.map(({ _id, city, census }) => (
  
      <div key={_id}>
  
        <p>
          {city}: {census}
  
        </p>
  
      </div>
  
    ));
  
  }
