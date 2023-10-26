import Balance from "./components/Balance";
import Nav from "./components/Nav";
import PayDocker from "./components/PayDocker";
import Response from "./components/Response";
import Verify from "./components/Verify";
import ChoiceDocker from "./components/ChoiceDocker";

export default function Home() {
  // function formatAmount(input:any) {
  //   // Remove non-numeric characters and leading zeroes
  //   let value = input.value.replace(/[^0-9]/g, '').replace(/^0+/, '');
    
  //   // Add commas to format as currency
  //   value = value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    
  //   input.value = value;
  // }


  return (
    <main>
      {/* USER ACTION  */}
      <Nav/>

      {/* FUNDING AND WIDRAWAL */}
      <Balance/>

      {/* <ChoiceDocker/> */}
      
      <Response/>

      {/* <Verify/> */}

      {/* PAYMENT HANDLING */}
      <PayDocker/>
    </main>
  )
}
