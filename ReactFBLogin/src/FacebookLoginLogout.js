import React, { useState } from 'react';
import FacebookLogin from 'react-facebook-login';

export default function FacebookLoginLogout(){

  const [login, setLogin] = useState(false);
  const [data, setData] = useState({});
  const [picture, setProfilePic] = useState('');

    const responseFacebook = (response) => {
    console.log("responseFacebook :: "+JSON.stringify(response));
    setData(response);
    setProfilePic(response.picture.data.url);
    if (response.accessToken) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  }
  const logoutHandler = ()=>{
      setLogin(false);
      
  }

    return (

        <>
            <div className="container">
                <div clasaName="card">
             {!login &&
            <FacebookLogin
              appId="426855925841429"
              autoLoad={true}
              fields="name,email,picture"
              scope="public_profile,user_friends,email"
              callback={responseFacebook}
              icon="fa-facebook" />
          }
                </div>
                  {login && 
                  <>
                    <div className="card mt-3" style={{width:'18rem'}}>
  <img className="card-img-top " src={picture} alt="Card image cap"  />
  <div className="card-body">
    <h5 className="card-title">{data.name}</h5>
    <p className="card-text">Email: {data.email}</p>
    <button className="btn btn-primary" onClick={logoutHandler}>LogOut</button>
  </div>
</div></>}
                 
                 
 
            </div>
        </>
    );

}