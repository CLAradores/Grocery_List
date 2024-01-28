import { FaRegTrashAlt } from 'react-icons/fa';

const LineItem = ({ item, handleDelete, handleCheck }) => {
  return (
    <>
      <input
        className="text-center w-10 min-w-10 min-h-10 cursor-pointer flex-none"
        type="checkbox"
        checked={item.checked}
        onChange={() => handleCheck(item.id)}
      />
      <label className={`grow ml-3 ${item.checked ? 'line-through' : null}`}>
        {item.item}
      </label>
      <button className="flex-none" onClick={() => handleDelete(item.id)}>
        <FaRegTrashAlt size={30} role="button" tabIndex={0} />
      </button>
    </>
  );
};

export default LineItem;
