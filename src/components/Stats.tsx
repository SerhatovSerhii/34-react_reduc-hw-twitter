import { useContext } from 'react'
import Avatar from './Avatar'
import { TwitterContext } from '../utils/context'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store'




const Stats = () => {


    
    const counter = useSelector((state: RootState) => state.counter.value)
    // внутрь него передем дейсвия Action и будет изменять значение централизованного состояния
    const dispatch = useDispatch();
    function plusFollowersIng(): void {
        dispatch({ type: 'changeStats', payload: 1 })
    }

    function minusFollowersIng(): void {
        dispatch({ type: 'changeStats', payload: -1 })
        
    }


    const { user, stats } = useContext(TwitterContext);

    return (
        <div className='user-stats'>
            <div>
                <Avatar />
                {user.name}
            </div>
            <div className='stats'>
                <div
                    onClick={() => plusFollowersIng()}
                    onContextMenu={e => {
                        e.preventDefault();
                        minusFollowersIng();
                    }}
                >Followers: {stats.followers}</div>
                <div
                    onClick={() => plusFollowersIng()}
                    onContextMenu={e => {
                        e.preventDefault();
                        minusFollowersIng();
                    }}
                >Following: {stats.following}</div>
            </div>
        </div>
    )
}

export default Stats