import Company from "./Components/Companys/Company";

function App() {
  const DeptsLsist = ["HR", "Sale", "IT", "Tech"];
  return (
    <div className="App">
      <Company
        CompanyName="Google Tech"
        details="You can Search for anything"
        DeptsLsist={DeptsLsist}
      />
      <Company
        CompanyName="ABC Tech"
        details="You can Search for anything"
        DeptsLsist={DeptsLsist}
      />
    </div>
  );
}

export default App;
