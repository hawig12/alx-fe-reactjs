// src/ProfilePage.jsx
import UserInfo from './UserInfo';

/**
 * ProfilePage component.
 * This component acts as an intermediary, rendering the UserInfo component.
 * It no longer receives or passes the 'userData' prop, as data will be
 * consumed directly from the Context API by child components.
 */
function ProfilePage() { // Removed { userData } from props
  return <UserInfo />; // Removed userData={userData} from UserInfo
}

export default ProfilePage;

