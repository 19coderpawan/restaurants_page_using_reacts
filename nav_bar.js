import React from 'react'

const Nav_bar = ({filteritem,unilist}) => {
    console.log("first unilist",unilist)
    /* Now what we are going to do is we have apply the loop on a single component and let all the 
    other component to be loaded automatically for that we are going to set up the state in the resturant 
    file and store the unique category list and then pass it here and run the iteration. */
  return (
    <>
    <nav className="navbar">
        <div className="btn-group">
    {
    unilist.map((curr)=>{
     return(
         <button  className="btn-group__item" onClick={()=>filteritem(curr)}>{curr}</button>     
     )
    })
}
      </div>
       </nav>  
    </>
  )
}

export default Nav_bar
