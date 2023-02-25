export const Filter = ({ value, getFilteredFriend }) => {
  return (
    <>
      <label>
        Find contacts by name
        <input
          type="text"
          name="filter"
          value={value}
          onChange={getFilteredFriend}
        />
      </label>
    </>
  );
};
