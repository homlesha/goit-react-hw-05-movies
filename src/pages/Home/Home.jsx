import { useEffect, useState } from 'react';
import { TrendList } from 'components/TrendList/Trendlist';
import { getMoviesTrending } from 'api/api';
const Home = () => {
  const [trends, setTrends] = useState([]);
  useEffect(() => {
    const fetchTrend = async () => {
      const result = await getMoviesTrending();
      setTrends(result.results);
    };
    fetchTrend();
  }, []);

  return (
    <main>
      <h2>Trending today</h2>
      <TrendList trends={trends} />
    </main>
  );
};
export default Home;
