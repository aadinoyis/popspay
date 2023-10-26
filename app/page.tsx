import LoginPage from "./login/page";

export default function Home() {
  // function formatAmount(input:any) {
  //   // Remove non-numeric characters and leading zeroes
  //   let value = input.value.replace(/[^0-9]/g, '').replace(/^0+/, '');
    
  //   // Add commas to format as currency
  //   value = value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    
  //   input.value = value;
  // }


  return (
    <>
    <LoginPage/>
    </>
  )
}
