import { useMutation, queryClient } from "@tanstack/react-query";
import { useState } from "react";
import { axios } from "axios";

const User = () => {
  const [userValues, setUserValues] = useState({});
  const [submit, setSubmit] = useState(false);
  const [submitLogin, setSubmitLogin] = useState(false);
  // const store = useSelector((state)=>state)
  // const dispatch = useDispatch()
  // console.log(store)

  // api 함수 작성하지 않았을 경우
  // const { mutate, isLoading, isError, error, isSuccess } = useMutation(data => {return axios.post(url, data);});

  const joinAPI = async (data) => {
    const { userid, userpw } = data;
    console.log('joinAPI',userid,userpw)
    const response = fetch("http://localhost:4000/user/join", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userid,
        userpw,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        return response;
      });
  };

  const loginAPI = async (data) => {
    const { loginId, loginPw } = data;
    const response = fetch("http://localhost:4000/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        loginId,
        loginPw,
      }),
    })
      .then((response) => response.json())
      .then(response => {
        if(response.error === true){
          setSubmitLogin(false)
          alert('로그인을 실패했습니다')
        }else{
          setSubmitLogin(true)
          const {grade} = response.data
          if(grade === 0){
            alert('로그인을 성공했습니다')
          }else if(grade === 1){
            alert('관리자 로그인을 성공했습니다')
          }
        }
        return response;
      });
  }

  const joinMutataion = useMutation(joinAPI, {
    onSuccess: (data) => queryClient.invalidateQueries(joinAPI),
  });

  const loginMutataion = useMutation(loginAPI, {
    onSuccess: (data,variables) => {
      return queryClient.invalidateQueries(loginAPI)
    }
  });

  const handleSubmit = e => {
    e.preventDefault()
    joinMutataion.mutate(userValues);
    setSubmit(true);
  };

  const handleLoginSubmit = e => {
    e.preventDefault()
    loginMutataion.mutate(userValues)
    setSubmitLogin(true);
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setUserValues({ ...userValues, [name]: value });
    console.log(userValues)
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>회원가입</h2>
        <input type="text" name="userid" onChange={handleChange} />
        <input type="text" name="userpw" onChange={handleChange} />
        <input type="submit" value="회원가입" />
        <div>
          <p>id : {submit != false ? userValues.userid : "회원가입을 해주세요"}</p>
          <p>pw : {submit != false ? userValues.userpw : "회원가입을 해주세요"}</p>
        </div>
      </form>

      <form onSubmit={handleLoginSubmit}>
        <h2>로그인</h2>
        <input type="text" name="loginId" onChange={handleChange} />
        <input type="text" name="loginPw" onChange={handleChange} />
        <input type="submit" value="로그인"/>
        <div>
          <p>{submitLogin != false ? '' : "로그인을 해주세요"}</p>
        </div>
      </form>
    </>
  );
};

export default User;
