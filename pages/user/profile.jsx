import { useState } from "react"

const Profile = () => {
  const [updateInfo,setUpdateInfo] = useState(false)
  const [deleteInfo,setDeleteInfo] = useState(false)
  const [values,setValues] = useState({userid:'김어플', username:'박박이름', nickname:'김닉네임',email:'김어플@gmail.com',gitAddress:'대충 깃헙주소'})

  const useInput = (data) => {
    return (!updateInfo)?data:<input defaultValue={data}/>
  }
  

  const handleUpdate = e => {
    if(!updateInfo){setUpdateInfo(true)}
    else{setUpdateInfo(false)}
  }

  const handleDelete = () => {
    setDeleteInfo(true)
  }

  const info = useInput('packman')

  return (
    <>
    <h2>회원정보</h2>
      <ul>
        <li>회원아이디 : 아이디는이메일로할까</li>
        <li>이름 :{useInput(values.username)}</li>
        <li>닉네임 : {useInput(values.nickname)}</li>
        <li>이메일 : {useInput(values.email)}</li>
        <li>깃헙주소 : {useInput(values.gitAddress)}</li>
        <li>
          <h4>출시한 어플</h4>
          <ul>
            <li>어플1</li>
            <li>어플2</li>
          </ul>
        </li>
        <button onClick={handleUpdate}>{!updateInfo?'정보수정':'수정완료'}</button>
        <button onClick={handleDelete}>회원탈퇴</button>
      </ul>
    </>
  )
}

export default Profile