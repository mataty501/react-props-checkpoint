import React from 'react' 
import PropTypes from 'prop-types';

/*
4. Profile component get data (fullName, bio, profession) as props, and get image as children props, and function handleName function as props that alert name of profile user.
5. Define default props for Profile component.
6. Use PropsType to check props.
7. Use inline style.

*/
const Profile = (props) => {

    return (
        <>
        <div>{props.fullName}</div>
        <div>{props.bio}</div>
        <div>{props.profession}</div>
        <div>
            <img src={props.children} style={{width: 250}} alt='profile image'/>
        </div>
        </>
        )

}

Profile.defaultProps = {
    fullName: 'Unknown',
    bio: 'Unknown',
    profession: 'Unknown',
    image: 'https://pbs.twimg.com/profile_images/716487122224439296/HWPluyjs.jpg'
  };

Profile.propTypes = {
    fullName: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string,
    image: PropTypes.string,
  }

export default Profile