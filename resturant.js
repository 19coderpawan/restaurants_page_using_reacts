// this file is to create the resturant website using the react js.
import React, { useState } from 'react'
// and lastly is to import the external css in our File.
import "./style.css"
// import the custom created Api.
import Menu from "./menuApi"
import MenuCard from './menuCard' //this menu card holds the code of the cards.
// now i have to use the nested component concept and call our menuCard function in Resturant.

import Nav_bar from './nav_bar'

/*here i have used the unique fun to store the list of only unique category for that we have traverse
through the Menu api and find all the unique categroy.*/

const uniquecategory = [
  // here i have used the spread operator to convert the Set into the array.
  //  It allows you to create a new array with the elements from the Set without having to manually iterate over the set and add each element individually.
  ... new Set(Menu.map((currelement) => {
    return currelement.category; /* this is going to return all the categroy list in the Menu api.
                                  andd in order to get the unique category we are going to use the 
                                  one of the EC6 built in datastructure that is new set.
                                  but still it return the unique category but in object form
                                  so first we have to convert it into array for that wer are going to 
                                  wrap our funtion inside the [] brackets.
                                  but even then also it somewhere lies in the object so next this you need 
                                  to do is to use the "SPREAD OPERATOR(...)"*/
  })), "ALL"] // to add the All category in the nav we have include it in the end.after including all we have to apply one condition in the filter()
console.log(uniquecategory)

const Resturant = () => {

  // its time to initilize the hooks which i have imported above.
  const [menuData, setMenuData] = useState(Menu)
  // its time to intilize another hook to store the uniqe list state.
  const [unilist, setunilist] = useState(uniquecategory)
  console.log("this is unilist", unilist)
  // console.log(menuData)
  const filteritem = (category) => {
    if (category === "ALL") {
      setMenuData(Menu);
      return;
    }
    const updateitem = Menu.filter((curr) => {
      return curr.category === category;
    });
    setMenuData(updateitem);
  };
  return (
    <>
      {/* next thing you have to create is the nav bar above the cards. 
      now after creating the nav bar now its time to write the js code so that on clicking the specific
      btn you get the appropriate output.(i.e like when you click on lunch only lunch item should be 
        displayed. so to do that we are going to use the eventlistener first which is going to call
        an function filteritem() which is going to filter out the item list as per the category
        and update the state. so in order to filter out the items stored in our Menu api we
        are going to use the one of the arrray method i.e filter() which is going to return all the 
        items whose category matches the requested category and then pass the updated list in our
        setMenuData to update the currentstate .

        
         -----> note:- now's your work is fine but there is an problem lies in it that is if you add new
         category in the item section then this method will not work on that category because you nedd to 
         make the new nav btn for that category and then you have to call the filetr() each time you 
         add new category you have to do the same thing which is not good.

         ---->So in order to solve this issue we have to follow some steps these steps are-:
        1. we have multiple card components and each one has theri category due to which multiple category 
          are stored in the state repetedily what we need to do first is to store all the uniqe category 
          list somewhere so that its become easy to add new category dynamically.

          note--->> after doing everything you are now able to add new category by adding in our api.
        )
      */}

      <Nav_bar filteritem={filteritem} unilist={unilist} />


      {/* <nav className="navbar">
        <div className="btn-group"> */}
      {/* remember one of the main concept of the react is that do not repeat ourselve.but
          here we repeating the same code again and again so in order to avoid that we
          going to apply the same concept as we apply in  the card component case. */}

      {/* <button className="btn-group__item" onClick={()=>filteritem("breakfast")}>Breakfast</button>
          <button className="btn-group__item" onClick={()=>filteritem("lunch")}>Lunch</button>
          <button className="btn-group__item" onClick={()=>filteritem("dinner")}>Dinner</button>
          <button className="btn-group__item" onClick={()=>filteritem("evening")}>Evening</button>
          <button className="btn-group__item" onClick={()=>setMenuData(Menu)}>All</button> */}
      {/* </div>
       </nav> */}

      {/*now you have to pass the menuData as a prop in the MenuCard fun component then use the 
      Array.map method to run it multiple times with different content that is stored in menuData state.
      this(see below code) is how you pass props in react.*/}
      <MenuCard menuData={menuData} />
    </>
  )
}

export default Resturant
// now when you run this on your local server nothing will display .
// because you havent imported this into your app2.js file.
