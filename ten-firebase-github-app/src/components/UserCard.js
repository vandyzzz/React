import React from 'react';
import { Card, CardBody } from 'reactstrap';

const UserCard = ({user}) => {

     
    return(
        <Card className = "text-center mt-3 mb -4" >
            <img src = {user.avatar_url} className="img-thumbnail" />
            <CardBody>
  <div classname= "text-primary">{user.name}</div>
  <div classname= "text-primary">{user.location}</div>
  <div classname= "text-primary">{user.bio}</div>
  <div classname= "text-info">AVAILAIBILITY?{user.hirable ? 'YES ' : 'NoPE'}</div>
  <div classname= "text-info">{user.followers}</div>

            </CardBody>
        </Card>
    )
}


export default UserCard;