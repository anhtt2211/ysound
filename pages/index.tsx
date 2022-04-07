import { Audio } from '@components/audio-player';
import { useAppDispatch, useAppSelector } from '@redux/hooks';
import { fetchAllUsersRequest } from '@redux/slices/userSlice';
import type { NextPage } from 'next';
import { useEffect } from 'react';

const Home: NextPage = () => {
  const user = useAppSelector((state) => state.users);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllUsersRequest());
  }, [dispatch]);

  return (
    <div className="text-4xl font-thin text-center mt-20">Sound-client</div>
  );
};

export default Home;
