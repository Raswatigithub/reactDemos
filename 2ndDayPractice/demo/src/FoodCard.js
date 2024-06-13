import React from 'react'
import {
  CardMeta,
  CardHeader,
  CardDescription,
  CardContent,
  Card,
  Icon,
  Image,
} from 'semantic-ui-react'

const FoodCard=({id,name,price,image,remove})=>
{


return(
   <>
   <Card>
    <Image src={image} wrapped ui={false} />
    <CardContent>
      <CardHeader>{name}</CardHeader>
      <CardMeta>
        <span className='date'>{price}</span>
      </CardMeta>
      {/* <CardDescription>
      {name}
      </CardDescription> */}
    </CardContent>
   
  </Card>
 
   </>
   
)




}
export default FoodCard