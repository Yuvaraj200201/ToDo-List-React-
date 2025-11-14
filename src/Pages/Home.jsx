import Header from '../component/Home/Header'
import Cards from '../component/Home/Cards'
import Todo from '../component/Home/Todo'
import { useLocation } from 'react-router-dom';

const Home = () => {
  const location = useLocation();
  const userData = location.state.user
  return (
    <div className="bg-black px-1 py-2 sm:px-10 sm:py-7 md:px-16 md:py-10">
      <div className="bg-[#EFEFEF] border p-2 sm:p-10 rounded-md">
        <Header userData={userData}/>
        <Cards />
        <Todo />
      </div>
    </div>
  );
};

export default Home;
