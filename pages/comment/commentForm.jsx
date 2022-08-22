import { useState,useEffect } from "react"

const CommentForm = (defaultValues) => {
  const useInput = () => {
    const [values, setValues] = useState(defaultValues)
    const onChange = e => {
      const {name,value} = e.target
      setValues({...values,[name]:value})
      console.log(values)
    }
    return{
      values,
      onChange
    }
  }
  
  const comment = useInput('')
  const userid = useInput('임시아이디')

  return(
    <div>
      <form>
        <input type="text" id="comment" name="comment" {...comment}/>
        <input type="submit" value="덧글 입력"/>
      </form>
    </div>
  )
}

export default CommentForm