import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link, useHistory} from "react-router-dom";
import Footer from "../components/Footer";
import Logo from "../components/Logo";
import Header from "../components/Header";

const HomeScreen = () => {
    let history = useHistory();
    const [breeds, setBreeds] = useState([])
    const [error, setError] = useState('')

    const SubmitHandler = (e) => {
        if (e.key === 'Enter'){
            if (breeds.length === 1){
                history.push(`/breed/${breeds[0].name}`)
            } else {
                setError('Please enter a valid breed')
                document.getElementById('search').classList.add('error')
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
            <div>
                <div className={'background-cat rounded-top'}>
                    <div className={'lg:w-5/12 xl:w-5/12 md:w-5/12 w-3/4 h-full flex xl:justify-center lg:justify-center md:justify-center pl-10'}>
                        <div className={'xl:w-3/4 lg:w-3/4 md:w-3/4 w-9/12 h-full flex flex-col justify-center'}>
                            <Logo color={'white'}/>
                            <span
                                className={'text-white lg:ml-3 md:ml-3 lg:mt-8 md:mt-8 lg:mb-3 md:mb-3 xl:ml-3 xl:mt-8 xl:mb-3 xl:text-2xl lg:text-2xl md:text-2xl text-sm montserrat-500'}>Get to know more about your <br className={'hidden xl:block lg:block'}/>cat breed</span>
                            <div>
                                <input onChange={(e) => {searchHandler(e.target.value)}} type={'search'}
                                       className={'custom-search focus:outline-none montserrat-500'}
                                       placeholder={'Enter your breed'} list={'search'} onKeyPress={(e) => SubmitHandler(e)}
                                       autoComplete="off"
                                        id={'input'}
                                />
                                {error ? (
                                    <p className={'text-red-500 text-center'}>Please enter a valid breed</p>
                                ) : (
                                    <span/>
                                )}
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
                <div className={'background-home flex justify-center md:pb-20 lg:pb-20 xl:pb-20 pb-6 mobile'}>
                    <div className={'w-11/12 h-full pt-8'}>
                        <div className={'flex flex-col ml-5 xl:ml-0 lg:ml-0 md:ml-0'}>
                            <span className={'font-semibold'}>Most Searched Breeds</span>
                            <div className={'separator'}/>
                        </div>
                        <div className={'pt-10 ml-5 xl:ml-0 lg:ml-0 md:ml-0'}>
                            <div className={'flex justify-between'}>
                                <span className={'montserrat-700'}>66+ Breeds For you<br/>to discover</span>
                                <div className={'flex items-end'}>
                                    <Link className={'see-more xl:block lg:block md:block hidden'} to={'/breeds'}>SEE MORE &#8594;</Link>
                                </div>
                            </div>
                            <div className={'w-full flex justify-between mt-10 select-none flex-wrap'}>
                                <Link to={`/breed/bengal`}>
                                    <img className={'rounded-3xl'} src={'/assets/bengal.png'} width={'270'}
                                         height={'270'} alt={''}/>
                                    <p className={'montserrat-600 text-center lg:text-left xl:text-left md:text-left mb-5 xl:mb-0 lg:mb-0'}>Bengal</p>
                                </Link>
                                <Link to={`/breed/savannah`}>
                                    <img className={'rounded-3xl'} src={'/assets/savannah.png'} width={'270'}
                                         height={'270'} alt={''}/>
                                    <p className={'montserrat-600 text-center lg:text-left xl:text-left mb-5 xl:mb-0 lg:mb-0 lg:mb-0 md:text-left'}>Savannah</p>
                                </Link>
                                <Link to={'/breed/Norwegian Forest Cat'}>
                                    <img className={'rounded-3xl'} src={'/assets/norwegian.png'} width={'270'}
                                         height={'270'} alt={''}/>
                                    <p className={'montserrat-600 text-center lg:text-left xl:text-left mb-5 xl:mb-0 lg:mb-0 lg:mb-0 md:text-left'}>Norwegian Forest Cat</p>
                                </Link>
                                <Link to={'/breed/Selkirk Rex'}>
                                    <img className={'rounded-3xl'} src={'/assets/image.png'} width={'270'}
                                         height={'270'} alt={''}/>
                                    <p className={'montserrat-600 text-center lg:text-left xl:text-left mb-5 xl:mb-0 lg:mb-0 lg:mb-0 md:text-left'}>Selkirk Rex</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={'flex w-full pt-20 flex-col xl:flex-row lg:flex-row md:flex-row p-5'}>
                <div className={'xl:w-2/4 lg:w-2/4 md:w-2/4 w-full xl:pl-32 lg:pl-32 md:pl-32 md:pr-12 xl:pr-12 lg:pr-12 xl:pt-20 lg:pt-20 md:pt-20'}>
                    <div className={'separator'}/>
                    <h1 className={'title w-full'}>Why should<br/> you <br className={'hidden lx:block xl:block'}/>have a cat ?</h1>
                    <p className={'paragraph mt-10'}>Having a cat around you can actually trigger the release of calming
                        chemicals in your body which
                        lower your stress and anxiety leves</p>
                    <p className={'read-more'}>READ MORE  &#8594;</p>
                </div>
                <div className={'lg:w-2/4 xl:w-2/4 md:w-2/4 w-full h-full flex mb-5'}>
                    <div className={'mr-5'}>
                        <img src={'/assets/image 2.png'} alt={''}/>
                        <img className={'float-right mt-5 w-9/12'} src={'/assets/image 1.png'} alt={''}/>
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
