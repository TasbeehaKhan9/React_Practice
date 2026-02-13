function Yes({name = "guest",cast = "sherwani ho kya?",age = "22" ,hobbies}){
// return <h2>Hello , {props.name}</h2>

return (
  <div>     
  <h2>Hello , {name}</h2>
  <p> age , {age}</p>
  <p> cast , {cast}</p>
  <ul>
{
    hobbies.map((hobby ,index) => (
        <li key={index}>{hobby}</li>




    ))}

  </ul>
  </div>
);
}

export default Yes