import React from "react";
import {Card, CardBody, CardTitle, CardText} from "reactstrap"
import {FaEnvelope, FaMapMarkedAlt, FaPhone} from "react-icons/fa"

const MyCard = ({details}) => {


    return(
        <Card>
            <CardBody className="text-center">
                <img 
                height="200"
                 width="200"
                className="rounded-circle img-thumbnail border-danger"
                src= {details.picture?.large}
            />
            <CardTitle className="text-success">
                <h1>
                    <span> {details.name?.title  }  </span>
                    <span> {details.name?.first}  </span>
                    <span> {details.name?.last}  </span>
                </h1>
            </CardTitle>
            <CardText>
                <FaMapMarkedAlt />
                {details.location?.city}
              <p>  {details.phone}</p>
            </CardText>
            </CardBody>
        </Card>
    )
}

export default MyCard; 