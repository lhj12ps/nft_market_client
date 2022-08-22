import { useMutation, queryClient } from "@tanstack/react-query";
import { useState } from "react";
const url = "http://localhost:4000/list/write";
//npx create-next-app --example with-styled-components with-styled-components-app
//npx create-next-app --example with-styled-components-babel with-styled-components-babel-app

const createAppAPI = (data) => {
  const response = fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ data }),
  })
    .then((response) => response.json())
    .then((response) => {
      return response;
    });
};

const Write = () => {
  const [values, setValues] = useState({});
  const [imgBase64, setImgBase64] = useState({}); //file base64
  const [imgFile, setFile] = useState(null); //file

  const handleChange = (e) => {
    console.log(e.target.files);
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const createAppMutataion = useMutation(createAppAPI, {
    onSuccess: (data) => queryClient.invalidateQueries(createAppAPI),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    createAppMutataion.mutate(values);
  };

  return (
    <>
      <h2>어플 등록 페이지</h2>
      <form onSubmit={handleSubmit}>
        <ul>
          <li>
            <label htmlFor="appTitle">어플 이름 : </label>
            <input
              type="text"
              name="appTitle"
              id="appTitle"
              onChange={handleChange}
            />
          </li>
          <li>
            <label htmlFor="appDevName">개발자 이름 : </label>
            <input
              type="text"
              name="appDevName"
              id="appDevName"
              onChange={handleChange}
            />
            <p>* 개발자 이름은 로그인 아이디로 해야하나 *</p>
          </li>
          <li>
            <label htmlFor="appText">어플 설명글 : </label>
            <input
              type="textarea"
              cols="300"
              rows="10"
              name="appText"
              id="appText"
              onChange={handleChange}
            />
          </li>
          <li>
            <div>
              <label htmlFor="appImages">어플 이미지 : </label>
              <input
                type="file"
                name="appImages"
                id="appImages"
                onChange={handleChange}
                encType="multipart/form-data"
              />
            </div>
            {/* 이미지 미리보기 들어갈 자리 */}
          </li>
        </ul>
        <input type="submit" value="어플등록" />
      </form>
    </>
  );
};

export default Write;
