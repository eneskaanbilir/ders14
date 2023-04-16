import { memo } from "react";

function Todos({todos}) {
   console.log("Todos yeniden render oldu")

   return (
       <>
       <h2>My Todos</h2>
     {todos.map((todo, index) => {
       return <p key={index}>{todo}</p>;
     })}
       </>
   )
}


export default memo(Todos);//memo hooku yazıldığı compnentin bir kere render olmasının sağlıyor.