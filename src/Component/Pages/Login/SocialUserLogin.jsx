
import { useContext } from 'react';
import { AuthContext } from '../../../AuthPovider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialUserLogin = () => {
    const {googleLogin, gitHubLogin, setUser} = useContext(AuthContext);
    const navigate = useNavigate()
   const location = useLocation()
  
    

    // googleLogin 
    const handleGoogleLogin = () =>{
        googleLogin()
        .then(result =>{
            setUser(result.user)
            navigate(location?.state ? location.state : "/")
        })
    }

    // gitHubLogin 
    
  const handleGitHubLogin = () =>{
    gitHubLogin()
    .then(result =>{
        setUser(result.user)
        navigate(location?.state ? location.state : "/")
    })
  }

    return (
        <div>
            <div className="divider">
                continue with
            </div>
            <div className="flex justify-around">
                <button
                onClick={handleGoogleLogin}
                 className="btn  btn-outline btn-success">Continue with Google</button>
                 <button
                onClick={handleGitHubLogin}
                 className="btn  btn-outline btn-success">Continue with GitHub</button>
            </div>
            
        </div>
    );
};

export default SocialUserLogin;