import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Row, Col, Input, Label, Button } from 'reactstrap';
import { useSiteContext } from '../context/DataContext';

const Add = () => {

    const { simpsons, setSimpsons, newSimpsons, setNewSimpsons } = useSiteContext();

    const [nameSurname, setNameSurname] = useState();
    const [jobTitle, setJobTitle] = useState();
    const [description, setDescription] = useState();
    const [imgURL, setImgURL] = useState();
    const [imgURL_, setImgURL_] = useState(0);


    const navigate = useNavigate();

    const addHandler = () => {
        if (nameSurname?.trim() == "" || nameSurname === undefined) {
            alert("Please Fill the Name");
        } else if (jobTitle?.trim() == "" || jobTitle === undefined) {
            alert("Please Fill the Job Title");
        } else if (description?.trim() == "" || description === undefined) {
            alert("Please Fill the About");
        }

        else {
            setSimpsons(
                current => [...current, { id: (simpsons?.length + 1).toString(), name: nameSurname, avatar: imgURL, description: description, job: jobTitle }]
            )
            const addedSimpson = [{ id: (simpsons?.length + 1).toString(), name: nameSurname, avatar: imgURL, description: description, job: jobTitle }]
            const newListSimpson = simpsons.concat(addedSimpson)
            console.log(newListSimpson)
            localStorage.setItem("newSimpsons", JSON.stringify(newListSimpson))
            navigate('/');
        }
    }

    return (

        <Row className='add-main'>
            <Row className='add-inputs'>
                <Col className='input-inner'>
                    <Label>Name Surname:</Label>
                    <Input type='text' value={nameSurname} onChange={(e) => setNameSurname(e.target.value)} className="input" />
                </Col>
                <Col className='input-inner'>
                    <Label>Job Title:</Label>
                    <Input type='text' value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} className="input" />
                </Col>
                <Col className='input-inner'>
                    <Label>About Her/Him:</Label>
                    <Input type='textarea' value={description} onChange={(e) => setDescription(e.target.value)} className="input" />
                </Col>
                <Col className='input-inner'>
                    <Label>Image URL:</Label>
                    <Input type='text' value={imgURL} onChange={(e) => setImgURL(e.target.value)} className="input" />
                </Col>
                <Col className='add-button' >
                    <Button onClick={addHandler} className="add-button-inner"> Add</Button>
                </Col>
            </Row>


        </Row>
    )
}

export default Add