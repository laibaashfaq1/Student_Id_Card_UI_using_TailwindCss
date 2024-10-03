import Image from "next/image";

import Id_card from "./card/app";



export default function Home() {
  return (
    <div>
      <Id_card name='Ahmed' age={15} rollno={16} studentClass={7}/><br/>
      <Id_card name='Ali' age={5} rollno={26} studentClass={2}/><br/>
      <Id_card name='Ajmal' age={35} rollno={35} studentClass="bsc"/><br/>
    </div>
  );
};
