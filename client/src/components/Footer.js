import Logo from "./Logo";
import {Link} from "react-router-dom";

const Footer = () => {

    return (
        <footer className={'h-28 bg-black rounded-top flex justify-center items-center'}>
            <div className={'w-4/5 flex justify-between flex-col xl:flex-row lg:flex-row'}>
                <Link to={'/'}><Logo width={'180'} color={'white'}/></Link>
                <p className={'text-white flex items-center text-xs lg:text-lg xl:text-lg'}>&#169; created by &nbsp;<a className={'underline font-bold'} href={'https://github.com/Julestblt'}
                                                                 target={'_blank'}>Jules THIBAULT</a>&nbsp;- devChallenge.io 2021</p>
            </div>
        </footer>
    )

}

export default Footer;
