import React, {useState} from 'react';

function LoginForm({Login, error}) {
    const [details, setDetails] = useState({name:"", password:""});

    const submitHandler = e =>{
        e.preventDefault();
        Login(details);
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="form-inner">
                <h2>Login</h2>
                {(error !="") ? (<div className="error">{error}</div>) : ""}
                <div className="form-group">
                    <label htmlFor="id">아이디:</label>
                    <input type="text" name="" id ="id" placeholder="아이디" onChange={e => setDetails({...details, name: e.target.value})} value={details.name}/>
                </div>
                <div className="form-group">
                    <label htmlFor="pw">비밀번호:</label>
                    <input type="password" name="" id ="pw" placeholder="비밀번호"onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
                </div>
                <input type = "submit" value = "LOGIN"/>
            </div>
        </form>
    )
}

export default LoginForm;
