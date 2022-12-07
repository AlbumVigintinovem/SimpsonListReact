import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Row, Col, Button } from 'reactstrap';
import { useSiteContext } from '../context/DataContext';


const List = () => {

    const navigate = useNavigate();

    const { simpsons, setSimpsons } = useSiteContext();

    function array_move(arr, old_index, new_index) {
        if (new_index >= arr.length) {
            var k = new_index - arr.length + 1;
            while (k--) {
                arr.push(undefined);
            }
        }
        arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
    };

    const moveDownHandler = (id_) => {
        array_move(simpsons, simpsons.map(e => e.id).indexOf(id_), simpsons.map(e => e.id).indexOf(id_) + 1 === simpsons.length ? simpsons.map(e => e.id).indexOf(id_) : simpsons.map(e => e.id).indexOf(id_) + 1);
        setSimpsons(
            [...simpsons]
        )
        localStorage.setItem("newSimpsons", JSON.stringify(simpsons))
    }

    const moveUpHandler = (id_) => {
        array_move(simpsons, simpsons.map(e => e.id).indexOf(id_), simpsons.map(e => e.id).indexOf(id_) === 0 ? simpsons.map(e => e.id).indexOf(id_) : simpsons.map(e => e.id).indexOf(id_) - 1);
        setSimpsons(
            [...simpsons]
        )
        localStorage.setItem("newSimpsons", JSON.stringify(simpsons))

    }

    const deleteHandler = async (id) => {
        const filteredSimpsons = simpsons.filter(e => e.id != id);
        setSimpsons(filteredSimpsons)
        localStorage.setItem("newSimpsons", JSON.stringify(filteredSimpsons));
    }

    const detailHandler = (id) => {
        navigate(`details/${id}`)
    }

    console.log(simpsons && simpsons)

    return (
        <div>
            {simpsons?.map((simpson, index) =>
                <Row className='list-main' key={index}  >
                    <Col xl="6" className='list-inside list-left' onClick={() => detailHandler(simpson.id)}>
                        <Col className='list-item'> {index + 1} </Col>
                        <Col className='list-item'> <img src={simpson.avatar?.split("revision")[0]} width="50" /> </Col>
                        <Col className='list-item'> {simpson.name} </Col>
                    </Col>
                    <Col xl="6" className='list-inside list-right'>
                        <Col className='list-item icon' onClick={() => moveUpHandler(simpson.id)} >⬆️</Col>
                        <Col className='list-item icon' onClick={() => moveDownHandler(simpson.id)}>⬇️</Col>
                        <Col className='list-item icon' onClick={() => deleteHandler(simpson.id)}>🗑</Col>
                    </Col>

                </Row>
            )}
        </div>
    )
}

export default List