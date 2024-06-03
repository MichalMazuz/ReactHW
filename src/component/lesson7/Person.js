const Person = ({ per }) => {
    return (
      <div>
        <figure>
          <figcaption>{per.id}</figcaption>
          <p>{per.name}</p>
          <p>{per.username}</p>
          <p>{per.email}</p>
          <p>{per.address.street}</p>
          <p>{per.address.city}</p>
          <p>{per.address.zipcode}</p>
          <p>{per.phone}</p>
          <p>{per.website}</p>
          <figcaption>{per.company.name}</figcaption>
        </figure>
      </div>
    );
  };
  
  export default Person;
 
        
  