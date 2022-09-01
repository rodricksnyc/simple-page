import React from "react";
import { faker } from '@faker-js/faker';

import {Col, Row} from 'react-bootstrap';


function AddressCard({ check }) {

  const {id, name, city, completed } = check;

  const h1 = <h1>{city}</h1>

  const text = completed ? <strike>{h1}</strike> : h1;



  const createUser = () => {
    return {

      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      streetAddress: faker.address.streetAddress(),
      city:  faker.address.city(),
      state: faker.address.state(),
      zipCode: faker.address.zipCode(),
      phone: faker.phone.phoneNumber(),
    }

  }

  const createUsers = (numUsers = 15) => {
    return new Array(numUsers)
    .fill(undefined)
    .map(createUser);
  }

  let fakeUsers = createUsers(15)


  console.log(JSON.stringify(fakeUsers));

  var people = [];


  fakeUsers.forEach(function(fakeUser, i){

    people.push(


   <div className="whiteBox" data-testid={`check-${id}`}>

   {/*<div>{text}</div>*/}

        <Row>
          <Col sm={12} md={12}>


            <p className="name">{fakeUsers[i].name}</p>

            <p>Street <span className="ml-3 light">{fakeUsers[i].streetAddress}</span></p>


            <p>City <span className="ml-3 light">{fakeUsers[i].city}</span></p>

            <p>State <span className="ml-3 light">{fakeUsers[i].state}</span></p>


            <p>Zip Code <span className="ml-3 light">{fakeUsers[i].zipCode}</span></p>

            <p>Phone <span className="ml-3 light">{fakeUsers[i].phone}</span></p>

          </Col>
        </Row>

      </div>


    )


  });




  return (
    <>
    {people}

    </>
  );




}

export default AddressCard;
