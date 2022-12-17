import user from '../userData/user.json';
import data from '../userData/data.json';
import friends from '../userData/friends.json';
import transactions from '../userData/transactions.json';

import Profile from './Profile/Profile';
import Container from './Container/Container';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <>
      <Container>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Container>
      <Container>
        <Statistics title="Upload stats" stats={data} />
      </Container>
      <Container>
        <FriendList friends={friends} />
      </Container>
      <Container>
        <TransactionHistory items={transactions} />
      </Container>
    </>
  );
};
