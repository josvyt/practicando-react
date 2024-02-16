import { useState } from 'react'

export function TwitterFollowCard({ children, userName, initialIsFollowing }) {


    /* Array de dos pocisiones [Valor del estado] [Interruptor ] */
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    /**
     * initialIsFollowing: Ejemplo de al inicializar un estado con un Prop el cuál sólo lo hace una sóla vez
     */
    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing
        ? 'tw-followCard-button is-following'
        : 'tw-followCard-button'

    const handleClick= () => {
        setIsFollowing(!isFollowing)
    }

    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar' alt="Avatar de midudev" src={`https://unavatar.io/${userName}`} />
                <div className='tw-followCard-info'>
                    <span className='tw-followCard-textName'><strong>{children}</strong></span>
                    {/* <span className='tw-followCard-infoUserName'>{formatUserName(userName)}</span> */}
                    <span className='tw-followCard-infoUserName'>@{userName}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className='tw-followCard-text'>{text}</span>
                    <span className='tw-followCard-unfollow'>Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}
