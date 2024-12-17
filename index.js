let Name;
let Quantity;
let Price;
const Total = document.querySelector(".Total");
const Add = document.querySelector(".Add");
const Grand_Total = document.querySelector(".Grand_Total");
const Table = document.querySelector(".Table");
const Table_body = document.querySelector("tbody");

const Error_ = document.querySelector(".error");

const Form = document.querySelector("form");

let Final_Total;

let Table_Row;
let Table_DataName;
let Table_DataQuantity;
let Table_DataPrice;
let Table_Data_TotalPrice;

let Item = [];


function Shopping_cart(){
    Error_.textContent = "";

    Item.push({Name, Quantity, Price});
    console.log(Item);

    Table_body.innerHTML = "";
    let Items_GrandTotal = 0;

    Item.map(item => {
        
        Final_Total = Number(item.Price * item.Quantity);

        Table_Row = document.createElement("tr");
    
        Table_DataName = document.createElement("td");
        Table_DataName.textContent = `${item.Name}`;
        Table_Row.append(Table_DataName);
    
        Table_DataQuantity = document.createElement("td");
        Table_DataQuantity.textContent = `${item.Quantity}`;
        Table_Row.append(Table_DataQuantity);
        
        Table_DataPrice = document.createElement("td");
        Table_DataPrice.textContent = `${item.Price.toLocaleString()}`;
        Table_Row.append(Table_DataPrice);
    
        Table_Data_TotalPrice = document.createElement("td");
        Table_Data_TotalPrice.textContent = `${Final_Total.toLocaleString()}`;
        Table_Row.append(Table_Data_TotalPrice);

        console.log(Final_Total);
    
    
        Table_body.append(Table_Row);

        Items_GrandTotal += Final_Total;
    });

    Grand_Total.textContent = `${Items_GrandTotal.toLocaleString()} UGX`;
    console.log (Items_GrandTotal);
};



Add.addEventListener("click", (e)=>{
    e.preventDefault();

    Name = document.querySelector(".Name").value;
    Quantity = Number(document.querySelector(".Quantity").value);
    Price = Number(document.querySelector(".UnitPrice").value);
    if(Name == "" || Quantity == "" || Price == ""){
        Error_.textContent = "Please fill in All Fields";
    }else{
        Table.style.display = "block"
        Shopping_cart();
        Form.reset();
    }
    
})