import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
import Search from './components/Search';
import apiRequest from './apiRequest';

function App() {
  const API_URL = 'http://localhost:3500/items';

  const [receive, setReceive] = useState(null);
  const [items, setItems] = useState([]);
  const [inputItem, setInputItem] = useState('');
  const [search, setSearch] = useState('');
  const [fetchError, setFetchError] = useState(null);
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchApi() {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error('Response is not okay');
        const data = await response.json();

        setItems(data);
        setFetchError(null);
      } catch (error) {
        setFetchError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    setTimeout(() => {
      (async () => await fetchApi())();
    }, 2000);
  }, []);

  async function addItems(item) {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const newItem = { id: id, checked: false, item: item };
    const listItems = [...items, newItem];
    setItems(listItems);

    const postOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newItem),
    };
    const result = await apiRequest(API_URL, postOptions);
    if (result) setFetchError(result);
  }

  async function handleCheck(id) {
    const listItems = items.map((item) =>
      id === item.id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);

    const myItem = listItems.filter((item) => item.id === id);
    const updateOptions = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ checked: myItem[0].checked }),
    };
    const reqUrl = `${API_URL}/${id}`;
    const result = await apiRequest(reqUrl, updateOptions);
    if (result) setFetchError(result);
  }

  async function handleDelete(id) {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);

    const deleteOptions = {
      method: 'DELETE',
    };
    const reqUrl = `${API_URL}/${id}`;
    const result = await apiRequest(reqUrl, deleteOptions);
    if (result) setFetchError(result);
  }

  function handleSubmit(e) {
    e.preventDefault();

    addItems(inputItem);
    setInputItem('');
  }
  return (
    <div className="max-w-[40rem] border-x-2 mx-auto  flex flex-col  justify-between">
      <Header
        setInputItem={setInputItem}
        inputItem={inputItem}
        handleSubmit={handleSubmit}
      />
      <Search setSearch={setSearch} fetchError={fetchError} items={items} />

      {fetchError && (
        <div className="max-h-auto  h-[82vh] flex items-center justify-center">
          <p className="text-red-500   font-semibold">{`Error : ${fetchError}`}</p>
        </div>
      )}
      {isloading && (
        <div className="max-h-auto  h-[82vh] flex items-center justify-center">
          <p className="  font-semibold">Loading.....</p>
        </div>
      )}

      {!fetchError && (
        <>
          <Content
            items={items.filter((item) =>
              item.item.toLowerCase().includes(search.toLowerCase())
            )}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
            setReceive={setReceive}
          />
        </>
      )}
      <Footer receive={receive} />
    </div>
  );
}

export default App;
