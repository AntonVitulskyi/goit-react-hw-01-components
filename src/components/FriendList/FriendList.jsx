import PropTypes from 'prop-types';

import FriendListItem from "./FriendListItem";
import styles from './FriendList.module.css'

export default function FriendList ({friends}){
    return(
        <ul className={styles.friendList}>
            {friends.map(({avatar, name, isOnline, id }) => (
                <FriendListItem 
                key={id}
                avatar={avatar}
                name={name}
                isOnline={isOnline}
                />
            ))} 
        </ul>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
      PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        isOnline: PropTypes.bool.isRequired,
      })
    ),
  };