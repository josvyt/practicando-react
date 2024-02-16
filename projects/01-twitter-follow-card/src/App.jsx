import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {
    // const format = (userName) => `@${userName}`
    // const formattedUserName = <span>@Midudev</span>

    const users = [{
            userName: 'midudev',
            name: 'Miguel Ángel Durán',
            isFollowing: true
        },
        {
            userName: 'josvyt',
            name: 'Josue David',
            isFollowing: true            
        },
        {
            userName: 'codigoconjuan',
            name: 'Juan Pablo de la Torre',
            isFollowing: false
        },
        {
            userName: 'nschurmann',
            name: 'Nicolas Schurmann',
            isFollowing: false
        }
    ]

    return (
        <section className='App'>
            {
                users.map(({userName, name, isFollowing}) =>(
                    <TwitterFollowCard
                        key={userName}
                        userName={userName}
                        initialIsFollowing={isFollowing}
                    >
                        {name}
                    </TwitterFollowCard>
                ))
            }
        </section>
    )
    
    
}
            // <TwitterFollowCard
            //     // formatUserName={format} 
            //     userName="midudev"
            //     //Valor inicializado
            //     initialIsFollowing={true}

            // //name="Miguel Ángel Durán"
            // >
            //     {/* children */}
            //     Miguel Ángel Durán
            // </TwitterFollowCard>
            // <TwitterFollowCard
            //     // formatUserName={format} 
            //     userName="josvyt"
            //     //name="Josue D"
            //     initialIsFollowing={true}
            // >
            //     Josue D
            // </TwitterFollowCard>
            // <TwitterFollowCard
            //     // formatUserName={format} 
            //     userName="codigoconjuan"
            // //name="Juan Pablo de la Torre"
            // >
            //     Juan Pablo de la Torre

            // </TwitterFollowCard>
            // <TwitterFollowCard
            //     // formatUserName={format}

            //     userName="nschurmann"
            // //name="Nicolas Schurmann"
            // >
            //     Nicolas Schurmann
            // </TwitterFollowCard>