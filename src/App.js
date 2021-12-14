import logo from './logo.svg';
import './App.css';
import Table from './table';
import "./table.css";
function App() {
  let list =[
    {
      basic:"BASIC",
      team:"For Team of 3-5 Members",
      sup:"$",
      price:"28",
      price1:"$20",
      feature: [
        {
          small:"Perfect of Small Team"
        },
       {
         small:"Unlimited Invoices"
       },
       {
       small:"Project Management"
       },
       {
         small:"Team Management"
       }

      ]                                                                                                      
    },
    {
      basic:"INTERMEDIATE",
      team:"For Team of 5-10 Members",
      pop:"popular",
      button:"Choose Plan",
      sup:"$",
      price:"39",
      price1:"$30",
      feature:[
        {
          small:"Perfect of Small Team"
        },
       {
         small:"Unlimited Invoices"
       },
      {
        samll:"Project Management"
      },
      {
        small:"Team Management"
      }

      ]
    },
    {
      basic:"HIGH CLASS",
      team:"For Team of 10-25 Members",
      sup:"$",
      price:"58",
      price1:"$50",
      feature:[
        {
          small:"Perfect of Small Team"
        },
       {
         small:"Unlimited Invoices"
       },
      {
        small:"Project Management"
      },
      {
        small:"Team Management"
      },
     { 
       small:"Time Tracking"
    }
      ]
      
    },
    {
      basic:"SUPREME",
      team:"For Team of 25-100 Members",
      sup:"$",
      price:"99",
      price1:"$80",
      feature:[
        {
          small:"Perfect of Small Team"
        },
       {
         samll:"Unlimited Invoices"
       },
      {
        small:"Project Management"
      },
      {
        small:"Team Management"
      },
     { 
       small:"Time Tracking"
    }
      ]
    }
  ];
  return (
    <div class="pricing1 py-5 bg-light">
    <div className="container">
    <div class="row mt-5">
     {
       list.map(obj => <Table data={obj}></Table>)
     }
    </div>
    </div>
    </div>
  );
}

export default App;
