// useQuery : 데이터 가져오기 GET -> 비동기
// useMutation : 데이터 create,delete,update

// mutation - 부가효과(side effect)함수
// const { data, isLoading, mutate, mutateAsync } = useMutation(mutationFn, options);
// mutate(variables, {onError,onSettled,onSuccess});
// mutate를 호출해서 mutation을 호출할 수 있음.
// varivables - mutationFn에 전달하는 객체

import Link from "next/link";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import { axios } from "axios";

// const createUser = async (data) => {
//   const response = await axios.post("http://localhost:4000/list/write", data);
//   console.log('test response : ',response)
//   // return response.data;
// };

const List = () => {
  const onClick = (e) => {
    console.log("등록");
  };

  const queryClient = useQueryClient(); //access the client
  const [values, setValues] = useState("");

  // const {mutate} = useMutation( createUser, {
  //   onSuccess: data => { console.lof(data)},
  //   onError: data => { console.lof(data)},
  //   onSettled: data => { console.lof(data)},
  // })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { userid, password } = values;
    mutate(values);
  };

  // const { data, error, status } = useQuery(["repoData"], () =>
  //   //get 요청
  //   fetch("http://localhost:4000/list/view").then((res) => res.json())
  // );
  // if (status === "loading") return "Loading...";
  // if (status === "error") {
  //   return <span>Error: {error.message}</span>;
  // }

  return (
    <>
      {/* <div>
        <form onSubmit={handleSubmit}>
          <input type="text" name="userid" onChange={handleChange} />
          <input type="text" name="password" onChange={handleChange} />
          <input type="submit" value="가입" />
        </form>
      </div> */}

      <div>
        <h2>어플 리스트</h2>
        <Link href="/list/write">
          <button onClick={onClick}>어플 등록</button>
        </Link>
        <ul
          css={css`
            display: flex;
          `}
        >
          <li>어플1</li>
          <li>어플2</li>
          <li>어플3</li>
        </ul>
      </div>
    </>
  );
};

export default List;
