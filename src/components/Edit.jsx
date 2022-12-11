import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Row, Col, Input, Button } from 'reactstrap';
import { useSiteContext } from '../context/DataContext';

const Edit = () => {

    const { simpsons, setSimpsons } = useSiteContext();

    const [editedName, setEditedName] = useState();
    const [editedDescription, setEditedDescription] = useState();
    const [editedJob, setEditedJob] = useState();
    const [toggleHandle, setToggleHandle] = useState(false)

    const navigate = useNavigate();

    const params = useParams();

    const simpsonDetail = simpsons?.find((simpson) => simpson.id === params.id);

    const editNameHandler = () => {
        simpsonDetail.name = editedName;
        localStorage.setItem("newSimpsons", JSON.stringify(simpsons));
        navigate("/");

    }

    const editDescriptionHandler = () => {
        simpsonDetail.name = editedName;
        localStorage.setItem("newSimpsons", JSON.stringify(simpsons));
        navigate("/");

    }

    const editJobTitleHandler = () => {
        simpsonDetail.name = editedName;
        localStorage.setItem("newSimpsons", JSON.stringify(simpsons));
        navigate("/");

    }



    return (
        <Row className='details'>
            <Row className='details-inner' >
                <Col>
                    <img src={simpsonDetail && simpsonDetail.avatar?.split("revision")[0]} alt="" />
                </Col>
                <Col className='detail-name'>
                    {simpsonDetail && simpsonDetail.name}
                </Col>
                <Col className='detail-name'>
                    <Input placeholder={simpsonDetail?.name} value={editedName} onChange={(e) => setEditedName(e.target.value)} />
                    <Button onClick={editNameHandler} >edit</Button>
                </Col>
                <Col className='detail-job'>
                    {simpsonDetail && simpsonDetail.job}
                </Col>
                <Col>
                    <Input placeholder={simpsonDetail?.job} value={editedJob} onChange={(e) => setEditedJob(e.target.value)} />
                    <Button onClick={editJobTitleHandler} >edit</Button>
                </Col>
                <Col className='detail-desc'>
                    {simpsonDetail && simpsonDetail.description}
                </Col>
            </Row>
        </Row>

    )
}

export default Edit