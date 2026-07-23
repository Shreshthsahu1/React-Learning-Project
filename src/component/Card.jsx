// function Card(props){
//     return(
//         <>
//         <h2>Name : {props.name}</h2>
//         <p>Roll No. : {props.rollNo}</p>
//         <p>Department : {props.department}</p>
//         <p>CGPA : {props.cgpa}</p>
//         <p>Email : {props.email}</p>
//         </>
//     );
// }

function Card({name, rollNo, department, cgpa, email, skills=[]}){
    return(
        <>
        <h2>Name : {name}</h2>
        <p>Roll No. : {rollNo}</p>
        <p>Department : {department}</p>
        <p>CGPA : {cgpa}</p>
        <p>Email : {email}</p>

        <p>Skills : {skills.join(", ")}</p>
        </>
    );
}


export default Card;


//Propstsnad for property of react by which we can assign propery or value to our react compnent so taht we can make data as dynamc and in props we sennd data from parent to child only