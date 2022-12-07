import React from 'react'
import { useParams } from 'react-router-dom';
import { Row, Col } from 'reactstrap';
import { useSiteContext } from '../context/DataContext';

const Details = () => {

    const { simpsons } = useSiteContext();

    const params = useParams();

    const simpsonDetail = simpsons?.find((simpson) => simpson.id === params.id);

    console.log(simpsonDetail && simpsonDetail)


    return (
        <Row className='details'>
            <Row className='details-inner' >
                <Col>
                    <img src={simpsonDetail && simpsonDetail.avatar?.split("revision")[0]} alt="" />
                </Col>
                <Col className='detail-name' >
                    {simpsonDetail && simpsonDetail.name}
                </Col>
                <Col className='detail-job'>
                    {simpsonDetail && simpsonDetail.job}
                </Col>
                <Col className='detail-desc'>
                    {simpsonDetail && simpsonDetail.description}
                </Col>
            </Row>
        </Row>

    )
}

export default Details