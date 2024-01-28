import AddItems from './AddItems';

const Header = ({ inputItem, setInputItem, handleSubmit }) => {
  return (
    <div className="flex justify-between items-center bg-blue-500">
      <h1 className="text-3xl font-bold text-white p-4 ">Grocery List</h1>
      <AddItems
        inputItem={inputItem}
        setInputItem={setInputItem}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default Header;
