import React from 'react'

const MenuCard = ({ menuData }) => { // now pass that prop as an parameter to the component.
    console.log(menuData);
    return (
        <>
            {/* firstly we are going to work on the cards of the itmes. 
              -> remember in react we can use css in multiply ways firstly external css , inline css and by
                 creating the css objects and storing the styling properties.
                 inline css=>style={{color:"red"}}
                 // another method to use css in our code is by creating the css object and then pass that object in our 
                 // style attributes in the element.
                // const Css={color:"red"} */
             /*
               now after you have pass the menuData in the funtional component
               it's time for you to apply the array.map method to run the same code multiple times(
                till your menuData is not fully used.
                ***imp** whenever you use .map() you must pass the unique key for all the child element.
               ) 

            ======>>> remember instead of using the (currelement.) again and again it will be better 
                     if we destructure the object and then use the terms directly.
             */}
             <section className='main-card--cointainer' >
            {
                menuData.map((currelement) => {
                   const {id,category,name,image}=currelement //here we have destructure the object.
                    return (
                        <>
                            <div className="card-container" key={currelement.id}>
                                <div className="card">
                                    <div className="card-body">
                                        <span className="card-number card-circle subtle">{id}</span>
                                        <span className="card-author subtle">{category}</span>
                                        <h2 className="card-title">{name}</h2>
                                        <span className="card-description subtle">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia, sint! Voluptates eaque, dolores reprehenderit placeat, excepturi quisquam facilis libero minima quo adipisci porro voluptatibus, voluptate in laboriosam eveniet quasi ipsam! Voluptas reprehenderit tempora debitis, praesentium, exercitationem modi repellat ipsum vitae dicta eaque molestias commodi hic!
                                        </span>
                                        <div className="card-read">Read</div>
                                        {/* Remember when working with the images in REACT you can either simply pass the source address
            of the images in the src section or you can create and api for it. that is what we are going to do here
            in this project we are going to create an api which has info about each card's and we are going to 
            import that api here and use it. */}
                                        <img src={currelement.image} alt="" className="card-media" />
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })
            }
           </section>
        </>
    )
}

export default MenuCard
/*
  Note:- the above code is for one card only but we have create multiple card of same 
       format just their body content will be different which we have stored in our api file
       so one of the features of the react is that you dont have to wirte the same dam code again and 
       again in this case also we are going to use for loop concept to run the same code multiple times
       Now -: for here we are going to use the concept of HOOKS in REACT.
*/

