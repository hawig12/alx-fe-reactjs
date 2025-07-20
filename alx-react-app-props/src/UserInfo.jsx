// src/UserInfo.jsx
import UserDetails from './UserDetails';

/**
 * UserInfo component.
 * This component acts as another intermediary, rendering the UserDetails component.
 * It no longer receives or passes the 'userData' prop, as data will be
 * consumed directly from the Context API by the UserDetails component.
 */
function UserInfo() { // Removed { userData } from props
  return <UserDetails />; // Removed userData={userData} from UserDetails
}

export default UserInfo;
