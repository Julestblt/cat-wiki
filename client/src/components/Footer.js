import Logo from "./Logo";

const Footer = () => {

    return (
        <footer className={'h-28 bg-black rounded-top flex justify-center items-center'}>
            <div className={'w-4/5 flex justify-between'}>
                <Logo width={'180'} color={'white'}/>
                <p className={'text-white flex items-center'}>&#169; created by &nbsp;<a className={'underline font-bold'} href={'https://github.com/Julestblt'}
                                                                 target={'_blank'}>Jules THIBAULT</a>&nbsp;- devChallenge.io 2021</p>
            </div>
        </footer>
    )

}

export default Footer;
