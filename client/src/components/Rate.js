

const Rate = (props) => {
    return (
        <div className={'flex items-end w-full justify-between'}>
            <p className={'font-bold mt-8'}>{props.title}: </p>
            {props.rate === 0 &&
                <div className={'flex items-end'}>
                    <div className={'rate-bar-false'}/>
                    <div className={'rate-bar-false'}/>
                    <div className={'rate-bar-false'}/>
                    <div className={'rate-bar-false'}/>
                    <div className={'rate-bar-false'}/>
                </div>
            }
            {props.rate === 1 &&
                <div className={'flex items-end'}>
                    <div className={'rate-bar-true'}/>
                    <div className={'rate-bar-false'}/>
                    <div className={'rate-bar-false'}/>
                    <div className={'rate-bar-false'}/>
                    <div className={'rate-bar-false'}/>
                </div>
            }
            {props.rate === 2 &&
            <div className={'flex items-end'}>
                <div className={'rate-bar-true'}/>
                <div className={'rate-bar-true'}/>
                <div className={'rate-bar-false'}/>
                <div className={'rate-bar-false'}/>
                <div className={'rate-bar-false'}/>
            </div>
            }
            {props.rate === 3 &&
            <div className={'flex items-end'}>
                <div className={'rate-bar-true'}/>
                <div className={'rate-bar-true'}/>
                <div className={'rate-bar-true'}/>
                <div className={'rate-bar-false'}/>
                <div className={'rate-bar-false'}/>
            </div>
            }
            {props.rate === 4 &&
            <div className={'flex items-end'}>
                <div className={'rate-bar-true'}/>
                <div className={'rate-bar-true'}/>
                <div className={'rate-bar-true'}/>
                <div className={'rate-bar-true'}/>
                <div className={'rate-bar-false'}/>
            </div>
            }
            {props.rate === 5 &&
            <div className={'flex items-end'}>
                <div className={'rate-bar-true'}/>
                <div className={'rate-bar-true'}/>
                <div className={'rate-bar-true'}/>
                <div className={'rate-bar-true'}/>
                <div className={'rate-bar-true'}/>
            </div>
            }
        </div>
    )
}

export default Rate;
