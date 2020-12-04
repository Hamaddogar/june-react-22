import React, { useState } from 'react'

function Testcomp() {

    const [state, setState] = useState({})
    const updateSate = (e) => {
        state[e.target.id] = e.target.value
        setState({ ...state })
    }

    const getData = (e) => {
        e.preventDefault()
        console.log(state)

        localStorage.setItem("Functional_Data",JSON.stringify(state))

    }


    //   const [number,setnumber]=useState("+923060647571");
    //   const[name,setname]=useState("Muhammad Hamad");
    //   const[fname,setfname]=useState("Muhammad shafiq");


    //   const updatename=(e)=>{
    //   e.preventDefault()





    //  setname(e.target.value)
    //   }

    //   const updateFname=(e)=>{
    //     e.preventDefault()
    //     setfname(e.target.value)

    //   }


    // const chnagename=(e)=>{
    //     e.preventDefault()
    //   setname("this is my new Name MR Muhammad")

    // }

    // const change_number=(e)=>{
    // e.preventDefault()
    // setnumber("i have only this number")

    // }
    return (
        <div>

            userNAME<input onChange={updateSate} id="username" />
    FatherNAME<input onChange={updateSate} id="fathername" />
    LocationNAME<input onChange={updateSate} id="locationname" />
    Age<input onChange={updateSate} id="Age" />

            <button onClick={getData}>GetData</button>





        </div>

    )

}
export default Testcomp;


// // else Method
//   export const Testcomp=()=>{

//     return(<div>this is other Method to use Fuctional component</div>)
//   }