import { FilterStyled } from "./FilterStyled";

export const Filter = ({ value, getFilteredFriend }) => {
  return (
      <FilterStyled>
    <label>
        Find contacts by name
        <input
          type="text"
          name="filter"
          value={value}
          onChange={getFilteredFriend}
        />
      </label>
    </FilterStyled>
  );
};
