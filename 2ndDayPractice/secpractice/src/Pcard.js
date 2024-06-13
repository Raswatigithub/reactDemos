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

const Pcard=({id,title,price,image,remove})=>
{


return(
   <>
   <Card>
    <Image src={image} wrapped ui={false} />
    <CardContent>
      <CardHeader>{title}</CardHeader>
      <CardMeta>
        <span className='date'>{price}</span>
        <span>   <button onClick={() => remove(id)}>Delete</button></span>
     
      </CardMeta>
      {/* <CardDescription>
      {title}
      </CardDescription> */}
    </CardContent>
   
  </Card>
 
   </>
   
)




}
export default Pcard