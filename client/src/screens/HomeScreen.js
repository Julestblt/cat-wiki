import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link, useHistory} from "react-router-dom";
import Footer from "../components/Footer";
import Logo from "../components/Logo";
import Header from "../components/Header";

const HomeScreen = () => {
    let history = useHistory();
    const [breeds, setBreeds] = useState([])
    const [search, setSearch] = useState('')

    const SubmitHandler = (e) => {
        if (e.key === 'Enter'){
            if (breeds.length === 1){
                history.push(`/breed/${breeds[0].name}`)
            } else {
                history.push(`/search/${search}`)
            }

        }
    }

    const searchHandler = (value) => {
        axios.get(`https://api.thecatapi.com/v1/breeds/search?q=${value}`).then((r) => {
            setBreeds(r.data)
        })
    }

    return (
        <div className={'xl:container lg:container md:mx-auto mx-auto'}>
            <Header/>
            <div className={''}>
                <div className={'background-cat rounded-top'}>
                    <div className={'w-5/12 h-full flex justify-center'}>
                        <div className={'w-3/4 h-full flex flex-col justify-center'}>
                            <Logo color={'white'}/>
                            <span
                                className={'text-white ml-3 mt-8 mb-3 montserrat-500'}>Get to know more about your <br/>cat breed</span>
                            <div>
                                <input onChange={(e) => {searchHandler(e.target.value); setSearch(e.target.value)}} type={'text'}
                                       className={'custom-search focus:outline-none montserrat-500'}
                                       placeholder={'Enter your breed'} list={'search'} onKeyPress={(e) => SubmitHandler(e)}
                                       autoComplete="off"/>
                                <datalist id={'search'}>
                                    {breeds.map((e, i) => {
                                        return (
                                                <option key={i} value={e.name}/>
                                            )
                                    })}
                                </datalist>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'background-home flex justify-center pb-20'}>
                    <div className={'w-11/12 h-full pt-8'}>
                        <div className={'flex flex-col'}>
                            <span className={'font-semibold'}>Most Searched Breed</span>
                            <div className={'separator'}/>
                        </div>
                        <div className={'pt-10'}>
                            <div className={'flex justify-between'}>
                                <span className={'montserrat-700'}>66+ Breeds For you<br/>to discover</span>
                                <div className={'flex items-end'}>
                                    <Link className={'see-more'} to={'/breeds'}>SEE MORE &#8594;</Link>
                                </div>
                            </div>
                            <div className={'w-full flex justify-between mt-10 select-none'}>
                                <Link to={`/breed/bengal`}>
                                    <img className={'rounded-3xl'} src={'/assets/bengal.png'} width={'270'}
                                         height={'270'} alt={''}/>
                                    <p className={'montserrat-600'}>Bengal</p>
                                </Link>
                                <Link to={`/breed/savannah`}>
                                    <img className={'rounded-3xl'} src={'/assets/savannah.png'} width={'270'}
                                         height={'270'} alt={''}/>
                                    <p className={'montserrat-600'}>Savannah</p>
                                </Link>
                                <Link to={'/breed/Norwegian Forest Cat'}>
                                    <img className={'rounded-3xl'} src={'/assets/norwegian.png'} width={'270'}
                                         height={'270'} alt={''}/>
                                    <p className={'montserrat-600'}>Norwegian Forest Cat</p>
                                </Link>
                                <Link to={'/breed/Selkirk Rex'}>
                                    <img className={'rounded-3xl'} src={'/assets/image.png'} width={'270'}
                                         height={'270'} alt={''}/>
                                    <p className={'montserrat-600'}>Selkirk Rex</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{height: '100vh'}} className={'flex w-full pt-20'}>
                <div className={'w-2/4 pl-32 pr-12 pt-20'}>
                    <div className={'separator'}/>
                    <h1 className={'title'}>Why should you <br/>have a cat ?</h1>
                    <p className={'paragraph mt-10'}>Having a cat around you can actually trigger the release of calming
                        chemicals in your body which
                        lower your stress and anxiety leves</p>
                    <p className={'read-more'}>READ MORE  &#8594;</p>
                </div>
                <div className={'w-2/4 h-full flex'}>
                    <div className={'mr-5'}>
                        <img src={'/assets/image 2.png'} alt={''}/>
                        <img className={'float-right mt-5'} src={'/assets/image 1.png'} alt={''}/>
                    </div>
                    <div>
                        <img src={'/assets/image 3.png'} alt={''}/>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )

}

export default HomeScreen;
