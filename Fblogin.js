import React from 'react'
import styles from '../../styles/Home.module.css'
import FacebookLogin from 'react-facebook-login'


function Fblogin() {

    const responseFacebook = (response) => {
        console.log(response);
      }

    const componentClicked = data =>{
        console.log(data)
    }
    
    
  return (
    <div>
        <div className={styles.main}>
        <h1>Facebook Login</h1>

        <FacebookLogin
             appId="3458505214366031"
             autoLoad={true}
             fields="name,email,picture"
             onClick={componentClicked}
             callback={responseFacebook}
         />

        </div>
    </div>
  )
}

export default Fblogin
