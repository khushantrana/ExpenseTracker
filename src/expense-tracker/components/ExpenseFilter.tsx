import React from "react";
import categories from "../categories";

interface Props {
  onClick: (categories: String) => void;
}
const ExpenseFilter = ({ onClick }: Props) => {
  return (
    <select
      name=""
      id=""
      className="form-select"
      onClick={(event) => onClick((event.target as HTMLInputElement).value)}
    >
      <option value="">All Categories</option>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default ExpenseFilter;
