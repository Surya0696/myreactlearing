import { useState } from "react";
import Company from "./Components/Companys/Company";
import { CompanyLsit } from "./DataSet";

function App() {
  const [SelectCompanyName, SetselectCompanyName] = useState("Enter the Name");

  const handleSelected = (CompanyName) => {
    SetselectCompanyName(CompanyName);
  };

  return (
    <div className="App">
      <h2>{SelectCompanyName}</h2>
      {CompanyLsit.map((companyIteam, i) => {
        return (
          <Company
            key={companyIteam.id}
            CompanyName={companyIteam.CompanyName}
            details={companyIteam.details}
            DeptsLsist={companyIteam.DeptsLsist}
            onSelectedBtn={handleSelected}
          />
        );
      })}
    </div>
  );
}

export default App;
