import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreeting } from '../redux/greetings/greetingSlice';

const Greetings = () => {
  const { loading, greeting } = useSelector((state) => state.greeting);
  const dispatch = useDispatch();
  const shouldFetchGreeting = useRef(true);

  useEffect(() => {
    if (shouldFetchGreeting.current) {
      shouldFetchGreeting.current = false;
      dispatch(fetchGreeting());
    }
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }
  return <p>{greeting.message}</p>;
};

export default Greetings;
