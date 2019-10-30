import React from 'react';

const AnimalDetail = (props) => {
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    if (!props.animal) {
        return (
            <p style={props.style}>
                Please select an animal to see the detail.
            </p>
        );
    }
    console.log(props.animal);
    var imageAddress = new Map([
        ["Brookesia lambertoni", "https://upload.wikimedia.org/wikipedia/commons/a/af/Brookesia_desperata_male.jpg"],
        ["Calumma fallax", "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Short-nosed_deceptive_chameleon_%28Calumma_fallax%29_Ranomafana.jpg/1200px-Short-nosed_deceptive_chameleon_%28Calumma_fallax%29_Ranomafana.jpg"],
        ["Calumma vatosoa", "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Blue-nosed_Chameleon_%28Calumma_linotum%29_at_night_..._%2830325453937%29.jpg/1200px-Blue-nosed_Chameleon_%28Calumma_linotum%29_at_night_..._%2830325453937%29.jpg"],
        ["Chamaeleo necasi", "https://upload.wikimedia.org/wikipedia/commons/1/1f/Chamaeleo_zeylanicus.jpg"],
        ["Furcifer tuzetae", "https://upload.wikimedia.org/wikipedia/commons/2/24/FurciferPardalisMale.JPG"],
        ["Kinyongia gyrolepis", "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Horned_Chameleon_in_Lushoto%2C_Usambara_Mountains.jpg/1280px-Horned_Chameleon_in_Lushoto%2C_Usambara_Mountains.jpg"],
        ["Trioceros kinetensis", "https://upload.wikimedia.org/wikipedia/commons/e/e7/Jackson%27s_Chameleon444.jpg"],
        ["Trioceros ntunte", "https://alchetron.com/cdn/trioceros-c14b7397-c6d7-475c-9664-07ee41de1b3-resize-750.jpeg"],
        ["Trioceros schoutedeni", "https://static.inaturalist.org/photos/185519/original.JPG?1349743914"],
        ["Trioceros wiedersheimi", "https://static.inaturalist.org/photos/2794459/medium.jpg?1450613704"]
    ]);
    return (
        //Handle the zero state of the component
        <div style={props.style}>
            <h2>{props.animal.name}</h2>
            <img src={imageAddress.get(props.animal.name)}
                alt="Chamaleon image"
                height="300"
            />
            <div>
                <h3>Description</h3>
                <span>{props.animal.result[0].taxonomicnotes}</span>
                <h3>Habitat</h3>
                <span>{props.animal.result[0].habitat}</span>
                <h3>Threats</h3>
                <span>{props.animal.result[0].threats}</span>
                <h3>Conservation measures</h3>
                <span>{props.animal.result[0].conservationmeasures}</span>
            </div>

        </div>
    );
}

export default AnimalDetail;