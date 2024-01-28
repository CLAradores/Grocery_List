import { MdAdd } from 'react-icons/md';
import { useRef } from 'react';

const AddItems = ({ handleSubmit, inputItem, setInputItem }) => {
  const ref = useRef(null);
  return (
    <>
      <form className="flex items-center" onSubmit={handleSubmit}>
        <input
          ref={ref}
          onChange={(e) => setInputItem(e.target.value)}
          value={inputItem}
          className="p-2 rounded-sm bg-blue-100"
          type="text"
          name="add"
          required
          placeholder="Add here..."
        />
        <button
          onClick={() => ref.current.focus()}
          type="submit"
          className=" font-bold rounded-sm text-white p-2 bg-green-500 text-2xl mr-4  "
        >
          <MdAdd size={25} style={{ strokeWidth: '2' }} />
        </button>
      </form>
    </>
  );
};

export default AddItems;
