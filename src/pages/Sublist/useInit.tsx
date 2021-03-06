import { useState, useEffect } from 'react';

export default (api, filterRule) => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const [filter, setFilter] = useState([]);
  const [search, setSearch] = useState('');
  const [time, setTime] = useState(Date.now());
  const [timeId, setTimeId] = useState(null);

  const handleInit = async () => {
    try {
      const { data, count } = await api();
      setData(data);
      setFilter(data);
      setCount(count);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFilter = () => {
    if (search.trim()) {
      setFilter(
        filterRule(data, search),
      );
    } else {
      setSearch('');
      setFilter(data);
    }
  };

  const delay = () => {
    const execTime = Date.now();
    if (execTime - time <= 500) {
      clearTimeout(timeId);
    }
    setTimeId(setTimeout(handleFilter, 500));
    setTime(execTime);
  };

  useEffect(() => {
    handleInit();
  }, []);

  useEffect(() => {
    delay();
  }, [data, search]);

  return {
    count,
    setSearch,
    search,
    filter,
  };
};
