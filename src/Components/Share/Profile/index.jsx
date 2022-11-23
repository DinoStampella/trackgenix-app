import styles from './profile.module.css';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const Profile = () => {
  const history = useHistory();
  const { user } = useSelector((state) => state.global);
  const userToShow = { ...user };
  delete userToShow['_id'];
  delete userToShow['__v'];
  delete userToShow['createdAt'];
  delete userToShow['updatedAt'];
  delete userToShow['token'];

  return (
    <section className={styles.container}>
      {Object.keys(userToShow).map((prop, index) => {
        return (
          <div key={index} className={styles.item}>
            <h4 className={styles.itemTitle}>{prop.toUpperCase()}</h4>
            <p className={styles.itemProp}>{user[prop]}</p>
          </div>
        );
      })}
      <button
        onClick={(e) => {
          e.preventDefault();
          history.push(`/employees/form/${user._id}`);
        }}
      >
        Edit Profile
      </button>
    </section>
  );
};

export default Profile;
