import ListGroup from "./components/ListGroup/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";
import produce from "immer";
import Navbar from "./components/navbar";
import Cart from "./components/cart";
import ExpandableText from "./components/expandable_text";
import Form from "./components/Form";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";
import categories from "./expense-tracker/categories";
import "./index.css";
function App() {
  // let items = ["New York", "San Fransico", "Tokyo", "London", "Paris"];
  // const HandleSelectItem = (item: String) => {
  //   console.log(item);
  // };
  // const [selectAlert, setselectAlert] = useState(false);
  // const [cartItems, setcartItems] = useState(["Product 1", "Product 2"]);
  // const onhandleClick = (cartItems: String[]) => {
  //   cartItems = [];
  // };
  const [selectcategory, setselectcategory] = useState("");
  const [expenses, setexpenses] = useState([
    { id: 1, description: "Sample 1", amount: 10, category: "Utilities" },
    { id: 2, description: "Sample 2", amount: 10, category: "Groceries" },
    { id: 3, description: "Sample 3", amount: 10, category: "Entertainment" },
    { id: 4, description: "Sample 4", amount: 10, category: "Groceries" },
  ]);
  const visibleExpenses = selectcategory
    ? expenses.filter((e) => e.category === selectcategory)
    : expenses;
  return (
    <div>
      {/* <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={HandleSelectItem}
      /> */}
      {/* <ListGroup /> */}
      {/* <Alert>
        Hello <span>Khushant</span>
      </Alert> */}
      {/* {selectAlert && (
        <Alert
          onClick={() => {
            setselectAlert(false);
          }}
        >
          Button is Clicked
        </Alert>
      )}
      <Button
        onClick={() => {
          setselectAlert(!selectAlert);
        }}
      >
        My Button
      </Button> */}
      {/* <Navbar cartSize={cartItems.length} />
      <Cart cartItems={cartItems} />
      <Button
        onClick={() => {
          setcartItems([]);
        }}
      /> */}
      {/* <ExpandableText maxChars={50}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint
        reiciendis aliquam nulla, nisi impedit atque vitae nemo. Sequi mollitia
        possimus ipsa nihil quidem ratione, illo, accusamus quibusdam dolore,
        blanditiis nesciunt repellendus incidunt saepe aspernatur ducimus in
        veniam nam? Labore consectetur ex error dolore aliquam, minus libero
        numquam cumque quam perspiciatis nostrum optio qui saepe nam
        consequuntur illo culpa sed, blanditiis itaque quas? Praesentium,
        delectus minus! Rerum hic numquam enim sequi blanditiis, dolore itaque
        ducimus quia natus reiciendis eaque fuga minima iste! Distinctio velit
        culpa, quisquam explicabo odio cumque, natus quo tenetur quos quidem,
        ducimus nemo earum iste. Assumenda, accusantium totam.
      </ExpandableText> */}
      {/* <Form /> */}
      <div className="mb-5">
        <ExpenseForm
          onSubmit={(expense) =>
            setexpenses([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        />
      </div>
      <div className="mb-3 mt-3">
        <ExpenseFilter onClick={(category) => setselectcategory(category)} />
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) =>
          setexpenses(expenses.filter((expense) => expense.id != id))
        }
      />
    </div>
  );
}

export default App;
