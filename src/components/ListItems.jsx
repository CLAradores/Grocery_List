import LineItem from './LineItem';

const ListItems = ({ item, handleCheck, handleDelete }) => {
  return (
    <li
      key={item.id}
      className="flex items-center w-[30rem] bg-gray-200 mb-3 py-3 px-6"
    >
      <LineItem
        item={item}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
    </li>
  );
};

export default ListItems;
