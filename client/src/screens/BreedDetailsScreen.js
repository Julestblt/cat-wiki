import Logo from "../components/Logo";
import {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import Header from "../components/Header";
import Rate from "../components/Rate";


const BreedDetails = () => {
    const [breedDetails, setBreedDetails] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    let param = useParams();

    useEffect(() => {
        axios.get(`https://api.thecatapi.com/v1/breeds/search?q=${param.name}`).then((response) => {
            axios.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${response.data[0].id}`).then((r) => {
                setBreedDetails(r.data[0])
                setIsLoading(false)
            })
        })

    }, [])

    if (isLoading){
        return (
            <div><p>Loading</p></div>
        )
    }
    console.log(breedDetails)
    return (
        <div className={'xl:container lg:container md:mx-auto mx-auto'}>
            <Header/>
            <div className={'flex pt-10 pl-8'}>
                <div className={'xl:w-2/4'}>
                    <img src={breedDetails.url} width={'60%'} className={'rounded-3xl'}/>
                </div>
                <div className={'xl:w-2/4'}>
                    <h1 className={'font-medium text-4xl'}>{breedDetails.breeds[0].name}</h1>
                    <p className={'mt-8'}>{breedDetails.breeds[0].description}</p>
                    <p className={'mt-8'}><span className={'font-bold'}>Temperament: </span>{breedDetails.breeds[0].temperament}</p>
                    <p className={'mt-8'}><span className={'font-bold'}>Origin: </span>{breedDetails.breeds[0].origin}</p>
                    <p className={'mt-8'}><span className={'font-bold'}>Life Span: </span>{breedDetails.breeds[0].life_span} years</p>
                    <Rate title={'Adaptability'} rate={breedDetails.breeds[0].adaptability}/>
                    <Rate title={'Affection level'} rate={breedDetails.breeds[0].affection_level}/>
                    <Rate title={'Child Friendly'} rate={breedDetails.breeds[0].child_friendly}/>
                    <Rate title={'Grooming'} rate={breedDetails.breeds[0].grooming}/>
                    <Rate title={'Intelligence'} rate={breedDetails.breeds[0].intelligence}/>
                    <Rate title={'Health issues'} rate={breedDetails.breeds[0].health_issues}/>
                    <Rate title={'Social needs'} rate={breedDetails.breeds[0].social_needs}/>
                    <Rate title={'Stranger friendly'} rate={breedDetails.breeds[0].stranger_friendly}/>
                </div>
            </div>

        </div>
    )
}

export default BreedDetails;
