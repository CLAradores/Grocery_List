import ListItems from './ListItems';
import { useEffect } from 'react';

const Content = ({ items, handleCheck, handleDelete, setReceive }) => {
  useEffect(() => {
    setReceive(items.length);
    return () => null;
  }, [items]);

  return (
    <div className="max-h-auto  min-h-[71.5vh] flex justify-center items-center">
      {items.length ? (
        <ul>
          {items &&
            items.map((item) => (
              <ListItems
                key={item.id}
                item={item}
                handleCheck={handleCheck}
                handleDelete={handleDelete}
              />
            ))}
        </ul>
      ) : (
        <h1 className="text-xl font-bold">Your List is Empty</h1>
      )}
    </div>
  );
};

export default Content;
