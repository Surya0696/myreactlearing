import { useState } from "react";
// import Company from "./Components/Companys/Company";
// import { CompanyLsit } from "./DataSet";
// import Carts from "./Components/Cart/Carts";
import NewCart from "./Components/NewCart/NewCart";
import SelectOptions from "./Components/SelectOptions/SelectOptions";
import InputProduct from "./Components/InputProduct/InputProduct";
import GithubUsers from "./Components/GithubUsers/GithubUsers";

function App() {
  // const [SelectCompanyName, SetselectCompanyName] = useState(
  //   "Select Company Name"
  // );

  // const handleSelected = (CompanyName) => {
  //   SetselectCompanyName(CompanyName);
  // };

  return (
    <div className="App">
      {/* <h2>{SelectCompanyName}</h2> */}
      {/* {CompanyLsit.map((companyIteam, i) => {
        return (
          <Company
            key={companyIteam.id}
            CompanyName={companyIteam.CompanyName}
            details={companyIteam.details}
            DeptsLsist={companyIteam.DeptsLsist}
            onSelectedBtn={handleSelected}
          />
        );
      })} */}
      {/* <Carts /> */}
      <div>
        <NewCart />
        <div style={{ marginTop: "30px" }}>
          <SelectOptions />
        </div>
         <div style={{ marginTop: "30px" }}>
          <InputProduct/>
          
         </div>
         <div style={{ marginTop: "30px" }}>
          <GithubUsers/>
          
         </div>
      </div>
    </div>
  );
}

export default App;
