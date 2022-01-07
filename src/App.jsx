import Profile from 'components/Profile/Profile';
import StatisticsList from 'components/StatisticsList/StatisticsList';
import FriendList from 'components/FriendList';
import TransactionHistory from 'components/TransactionHistory/TransactionHistory';
import user from './user.json';
import data from './data.json';
import friends from './friends.json';
import transactions from './transactions.json';
import 'App.css';

function App() {
  return (
    <div className="App">
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <StatisticsList stats={data} />
      <StatisticsList title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
